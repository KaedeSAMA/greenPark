<template>
  <div class="controlCenterRoot">
    <div class="control_card">
      <img class="icon" src="../../assets/electric.png" alt v-if="(GENERATOR_SWITCH === 0)" />
      <img class="icon" src="../../assets/electric_active.png" alt v-if="(GENERATOR_SWITCH === 1)" />
      <div class="card_inner">
        <div class="card_inner_font">发电电压：{{GENERATOR_VOLTAGE}} V</div>
        <div class="card_inner_font">发电电流：{{GENERATOR_CURRENT}} A</div>
        <div class="card_inner_font">发电功率：{{GENERATOR_POWER}} W</div>
      </div>
      <div class="card_btn">
        <el-switch
          v-model="GENERATOR_SWITCH_btn"
          active-color="#13ce66"
          inactive-color="#ff4949"
          @change="changeStatus('GENERATOR_SWITCH',$event)
          "
        ></el-switch>
      </div>
    </div>
    <div class="control_card">
      <img class="icon" src="../../assets/light.png" alt v-if="(LIGHT_SWITCH === 0)" />
      <img class="icon" src="../../assets/light_active.png" alt v-if="(LIGHT_SWITCH === 1)" />
      <div class="card_inner">
        <div class="card_inner_font">光线状态：{{light}}</div>
      </div>
      <div class="card_btn">
        <el-switch
          v-model="LIGHT_SWITCH_btn"
          active-color="#13ce66"
          inactive-color="#ff4949"
          @change="changeStatus('LIGHT_SWITCH',$event)
          "
        ></el-switch>
      </div>
    </div>
    <div class="control_card">
      <img class="icon" src="../../assets/load.png" alt v-if="(LOAD_SWITCH === 0)" />
      <img class="icon" src="../../assets/load_active.png" alt v-if="(LOAD_SWITCH === 1)" />
      <div class="card_inner">
        <div class="card_inner_font">负载电压：{{LOAD_VOLTAGE}} V</div>
        <div class="card_inner_font">负载电流：{{LOAD_CURRENT}} A</div>
        <div class="card_inner_font">负载功率：{{LOAD_POWER}} W</div>
      </div>
      <div class="card_btn">
        <el-switch
          v-model="LOAD_SWITCH_btn"
          active-color="#13ce66"
          inactive-color="#ff4949"
          @change="changeStatus('LOAD_SWITCH',$event)
          "
        ></el-switch>
      </div>
    </div>
    <div class="control_card">
      <img class="icon" src="../../assets/fan.png" alt v-if="(fan_status === 0)" />
      <img class="icon" src="../../assets/fan_active.png" alt v-if="(fan_status === 1)" />
      <img class="icon" src="../../assets/fan_auto.png" alt v-if="(fan_status === 2)" />
      <div class="card_inner">
        <div class="card_inner_font">二氧化碳浓度：{{CO2}} ppb</div>
        <div class="card_inner_font">PM2.5浓度：{{PM2P5}} </div>
        <div class="card_inner_font">有机挥发物浓度：{{TVOC}} ppb</div>
      </div>
      <div class="card_btn">
        <div>风扇开关</div>
        <el-switch
          v-model="fan_btn"
          active-color="#13ce66"
          inactive-color="#ff4949"
          @change="changeStatus('FAN_SWITCH',$event)
          "
        ></el-switch>
        <div>风扇自动档开关</div>
        <el-switch
          v-model="fan_auto_btn"
          active-color="#13ce66"
          inactive-color="#ff4949"
          @change="changeStatus('FAN_AUTO_SWITCH',$event)
          "
        ></el-switch>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ControlCenter",
  data() {
    return {
      timer:0,

      GENERATOR_SWITCH_btn: false,
      LIGHT_SWITCH_btn: false,
      LOAD_SWITCH_btn: false,
      fan_btn: false,
      fan_auto_btn: false,

      fan_status: 0,
      GENERATOR_SWITCH: 0,
      LOAD_SWITCH: 0,
      LIGHT_SWITCH: 0,
      CO2: "Loading",
      PM2P5: "Loading",
      TVOC: "Loading",
      GENERATOR_VOLTAGE: "Loading",
      GENERATOR_CURRENT: "Loading",
      GENERATOR_POWER: "Loading",
      LOAD_VOLTAGE: "Loading",
      LOAD_CURRENT: "Loading",
      LOAD_POWER: "Loading",
      light: "Loading"
    };
  },
  methods: {
    getData(name) {
      this.$http
        .get("/data/one", {
          name: name
        })
        .then(res => {
          console.log(res.data.data.value);
          this[name] = res.data.data.value;
        });
    },
    getStatus(name) {
      let btn_name = name + "_btn";
      this.$http
        .get("/status/get", {
          name: name
        })
        .then(res => {
          // console.log(name,res.data.message);
          if (res.data.message === "ON") {
            this[name] = 1;
            this[btn_name] = true;
          } else {
            this[name] = 0;
            this[btn_name] = false;
          }
        });
    },
    changeStatus(name, $event) {
      let status = $event ? 1 : 0;
      this.$http
        .post("/status/update", {
          name: name,
          status: status
        })
        .then(res => {
          console.log(res.data);
        });
    }
  },
  mounted() {
    this.getData("CO2");
    this.getData("PM2P5");
    this.getData("TVOC");
    this.getData("GENERATOR_VOLTAGE");
    this.getData("GENERATOR_CURRENT");
    this.getData("GENERATOR_POWER");
    this.getData("LOAD_VOLTAGE");
    this.getData("LOAD_CURRENT");
    this.getData("LOAD_POWER");
    this.$http.get("/function/light").then(res => {
      // console.log(res.data.message);
      this.light = res.data.message;
    });
    this.getStatus("GENERATOR_SWITCH");
    this.getStatus("LOAD_SWITCH");
    this.getStatus("LIGHT_SWITCH");

    this.$http
      .get("/status/get", {
        name: "FAN_AUTO_SWITCH"
      })
      .then(res => {
        if (res.data.message === "ON") {
          // 自动挡打开的情况
          this.fan_status = 2;
          this.fan_auto_btn = true;
          console.log("自动挡打开了");
        } else {
          this.$http
            .get("/status/get", {
              name: "FAN_SWITCH"
            })
            .then(res => {
              if (res.data.message === "ON") {
                this.fan_status = 1;
                this.fan_btn = true;
              } else {
                this.fan_status = 0;
                this.fan_btn = false;
              }
            });
        }
      });

    this.timer = setInterval(() => {
      this.getData("CO2");
      this.getData("PM2P5");
      this.getData("TVOC");
      this.getData("GENERATOR_VOLTAGE");
      this.getData("GENERATOR_CURRENT");
      this.getData("GENERATOR_POWER");
      this.getData("LOAD_VOLTAGE");
      this.getData("LOAD_CURRENT");
      this.getData("LOAD_POWER");
      this.$http.get("/function/light").then(res => {
        // console.log(res.data.message);
        this.light = res.data.message;
      });
      this.getStatus("GENERATOR_SWITCH");
      this.getStatus("LOAD_SWITCH");
      this.getStatus("LIGHT_SWITCH");

      this.$http
        .get("/status/get", {
          name: "FAN_AUTO_SWITCH"
        })
        .then(res => {
          if (res.data.message === "ON") {
            // 自动挡打开的情况
            this.fan_status = 2;
            this.fan_auto_btn = true;
            console.log("自动挡打开了");
          } else {
            this.$http
              .get("/status/get", {
                name: "FAN_SWITCH"
              })
              .then(res => {
                if (res.data.message === "ON") {
                  this.fan_status = 1;
                  this.fan_btn = true;
                } else {
                  this.fan_status = 0;
                  this.fan_btn = false;
                }
              });
          }
        });
    },2000);
  },  
  beforeDestroy() {
    clearInterval(this.timer)
  },
};
</script>

<style scoped>
.controlCenterRoot {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.control_card {
  width: 21%;
  height: 80%;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 2px 8px 1px rgba(57, 140, 92, 42);
  transition: all 200ms ease-in-out;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.control_card:hover {
  transform: scale(1.1);
}
.icon {
  width: 45%;
  margin-bottom: -20%;
}
.card_inner {
  width: 100%;
  height: 30%;
  font-size: 19px;
  /* border: 1px solid; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.card_btn {
  width: 90%;
  height: 15%;
  margin-top: -30%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>
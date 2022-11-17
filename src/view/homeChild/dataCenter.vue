<template>
  <div class="dataCenterRoot">
    <div class="left">
      <div class="mid">
        <div id="pie"></div>
      </div>
      <div class="bottom">
        <div id="stack"></div>
      </div>
    </div>
    <div class="right">
      <div id="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pieOption: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        //legend是图例
        // legend: {
        //   data: [
        //     "Direct",
        //     "Marketing",
        //     "区域一",
        //   ]
        // },
        series: [
          {
            name: "Access From",
            type: "pie",
            selectedMode: "single",
            radius: [0, "85%"],
            color:["#dbc57a","#c27b5b"],
            label: {
              formatter: "{b|{b}：}{c}  {per|{d}%}  ",
              rich: {
                a: {
                  color: "#6E7079",
                  lineHeight: 22,
                  align: "center"
                },
                hr: {
                  borderColor: "#8C8D8E",
                  width: "100%",
                  borderWidth: 1,
                  height: 0
                },
                b: {
                  color: "#4C5058",
                  fontSize: 14,
                  fontWeight: "bold",
                  lineHeight: 33
                },
                per: {
                  padding: [3, 4],
                  borderRadius: 4
                }
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1548, name: "区域A能耗" },
              { value: 422, name: "区域B能耗", selected: true }
              // selected是选中
              // { value: 679, name: "Marketing", selected: true }
            ]
          }
        ]
      },
      
      stackOption: {
        yAxis: {
          type: "category",
          data: [
            "今日能耗",
            "今日发电",
            "实时功耗",
            "实时发电功率"
          ]
        },
        xAxis: {
          type: "value"
        },
        series: [
          {
            itemStyle: {
              color: "#c27b5b"
            },
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar"
          }
        ]
      },
      lineOption:  {
        title: {
          text: "碳排放预测"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["总负载功率", "总发电功率"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: []
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "当日碳排放预测值",
            type: "line",
            data: [
              0.197048619389534,
              0.35138827562332153,
              0.2621998190879822,
              0.34465256333351135,
              0.2863653898239136,
              0.3882097899913788,
              0.4236656427383423,
              0.23651069402694702,
              0.31913435459136963,
              0.3100332021713257
            ]
          },
          {
            name: "当日碳排放值",
            type: "line",
            data: [
              1.690804362297058,
              1.74447762966156,
              1.7643909454345703,
              1.6499395370483398,
              1.7769089937210083,
              1.7091389894485474,
              1.8269102573394775,
              1.8728326559066772,
              1.7765483856201172,
              1.8768138885498047
            ]
          }
          
        ]
      },
      timer1:0,
      timer2:0,
    };
  },
  methods: {
    drawCharts(name, container, option) {
      // 基于准备好的dom，初始化echarts实例
      name = this.$echarts.init(document.getElementById(container));
      // 使用刚指定的配置项和数据显示图表。
      name.setOption(option);
    },
    refreshData(container, newoption) {
      //刷新数据
      let chart = this.$echarts.getInstanceByDom(
        document.getElementById(container)
      );
      chart.setOption(newoption, true);
    }
  },
  mounted() {
    this.drawCharts("pie", "pie", this.pieOption);
    this.drawCharts("stack", "stack", this.stackOption);
    this.$http.get("function/predict",{
        name:"CO2"
      }).then((res)=>{
        this.lineOption.xAxis.data = res.data.data.dayTimeList;
        this.lineOption.series[0].data = res.data.data.lastSecondPvList;
        this.lineOption.series[1].data = res.data.data.realValueList;
        this.drawCharts("line","line",this.lineOption)
      })
    //设置定时器
    this.timer1 = setInterval(()=>{
      this.refreshData("stack",this.stackOption);
    },1500)

    this.timer2 = setInterval(()=>{
      this.$http.get("function/all").then((res)=>{
        this.stackOption.series[0].data = res.data.data.doubleList;

      });
    },2000)
  },
  beforeDestroy(){
    clearInterval(this.timer1);
    clearInterval(this.timer2);

  }
};
</script>

<style lang="less">
.dataCenterRoot {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.left {
  width: 35%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .header {
    width: 100%;
    height: 7%;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 2px 8px 1px rgba(57, 140, 92, 42);
    border-radius: 10px;
  }
  .mid {
    width: 100%;
    height: 47%;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 2px 8px 1px rgba(57, 140, 92, 42);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    #pie {
      width: 90%;
      height: 90%;
    }
  }
  .bottom {
    width: 100%;
    height: 46%;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 2px 8px 1px rgba(57, 140, 92, 42);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    #stack {
      width: 90%;
      height: 90%;
    }
  }
}
.right {
  width: 60%;
  height: 90%;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 2px 8px 1px rgba(57, 140, 92, 42);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  #line {
    width: 90%;
    height: 90%;
  }
}
</style>
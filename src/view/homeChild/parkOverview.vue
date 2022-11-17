<template>
  <div class="parkOverviewRoot">
    <div class="upperDiv">
      <div class="pie1Out">
        <div id="pie1"></div>
        <div calss="pie1font">耗电碳排情况</div>
      </div>
      <div class="pie2Out">
        <div id="pie2"></div>
        <div calss="pie2font">发电减排情况</div>
      </div>
      <div id="line1"></div>
    </div>
    <div class="bottomDiv">
      <div class="left">
        <div class="fontTitle">待处理的数据：</div>
        <div class="font">0条</div>
      </div>
      <div class="right">
        <div id="bottomPie1"></div>
        <div id="bottomPie2"></div>
        <div id="bottomPie3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { color } from "echarts";
export default {
  data() {
    return {
      pie1Option: {
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
            radius: [0, "60%"],
            color: ["#9ce29f", "#efefef"],

            label: {
              position: "inner",
              fontSize: 14
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1548, name: "已累积" },
              { value: 422, name: "剩余报警" }
              // selected是选中
              // { value: 679, name: "Marketing", selected: true }
            ]
          },
          {
            name: "Access From",
            type: "pie",
            radius: ["70%", "80%"],
            color: ["#dc992e", "#ecc98e", "#e0a94a"],
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2
            },
            labelLine: {
              length: 0
            },
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
            data: [
              { value: 104, name: "区域A" },
              { value: 335, name: "区域B" },
              { value: 235, name: "区域C" }
            ]
          }
        ]
      },
      pie2Option: {
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
            radius: [0, "60%"],
            color: ["#9ce29f", "#efefef"],
            label: {
              position: "inner",
              fontSize: 14
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 154, name: "已累积" },
              { value: 422, name: "剩余报警" }
              // selected是选中
              // { value: 679, name: "Marketing", selected: true }
            ]
          },
          {
            name: "Access From",
            type: "pie",
            radius: ["70%", "80%"],
            color: ["#dc992e", "#ecc98e", "#e0a94a"],
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2
            },
            labelLine: {
              length: 0
            },
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
            data: [
              { value: 148, name: "区域一" },
              { value: 335, name: "区域二" }
            ]
          }
        ]
      },
      bottomPie1Option: {
        tooltip: {
          trigger: "item" // 鼠标悬浮显示
        },
        // legend: { // 图例
        // top: '5%',
        // left: 'center'
        // },
        graphic: [
          {
            type: "image", // 插入圆环中间的图片
            style: {
              image: require("../../assets/PM2.png"), // 本地图片要用require引入
              width: 80, // 设置图片大小
              height: 80
            },
            // 设置图片位置
            left: "center",
            top: "33%"
          },
          {
            //环形图中间添加文字
            type: "text", //通过不同top值可以设置上下显示
            left: "center",
            top: "55%",
            style: {
              text: "PM2.5-区域A",
              textAlign: "center",
              fill: "#0D3F22", //文字的颜色
              width: 30,
              height: 30,
              fontSize: 16,
              fontFamily: "Microsoft YaHei"
            }
          },
          // 写了两个文字插入是因为业务要求两行不一样样式的字
          {
            //环形图中间添加文字
            type: "text", //通过不同top值可以设置上下显示
            left: "center",
            top: "62%",
            style: {
              text: "45ug/m3",
              textAlign: "center",
              fill: "#000000", //文字的颜色
              width: 30,
              height: 30,
              fontSize: 20,
              fontFamily: "" // 这个自己看着办
            }
          }
        ],
        color: ["#c27b5b", "#dbc57a"], // 圆环的颜色组
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["60%", "70%"],
            // avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2
            },
            label: {
              show: false,
              position: "center"
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 154, name: "已累积" },
              { value: 422, name: "剩余报警" }
            ]
          }
        ]
      },
      bottomPie2Option: {
        tooltip: {
          trigger: "item" // 鼠标悬浮显示
        },
        // legend: { // 图例
        // top: '5%',
        // left: 'center'
        // },
        graphic: [
          {
            type: "image", // 插入圆环中间的图片
            style: {
              image: require("../../assets/PM2.png"), // 本地图片要用require引入
              width: 80, // 设置图片大小
              height: 80
            },
            // 设置图片位置
            left: "center",
            top: "33%"
          },
          {
            //环形图中间添加文字
            type: "text", //通过不同top值可以设置上下显示
            left: "center",
            top: "55%",
            style: {
              text: "PM2.5-区域B",
              textAlign: "center",
              fill: "#0D3F22", //文字的颜色
              width: 30,
              height: 30,
              fontSize: 16,
              fontFamily: "Microsoft YaHei"
            }
          },
          // 写了两个文字插入是因为业务要求两行不一样样式的字
          {
            //环形图中间添加文字
            type: "text", //通过不同top值可以设置上下显示
            left: "center",
            top: "62%",
            style: {
              text: "45ug/m3",
              textAlign: "center",
              fill: "#000000", //文字的颜色
              width: 30,
              height: 30,
              fontSize: 20,
              fontFamily: "" // 这个自己看着办
            }
          }
        ],
        color: ["#c27b5b", "#dbc57a"], // 圆环的颜色组
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["60%", "70%"],
            // avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2
            },
            label: {
              show: false,
              position: "center"
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 154, name: "已累积" },
              { value: 422, name: "剩余报警" }
            ]
          }
        ]
      },
      bottomPie3Option: {
        tooltip: {
          trigger: "item" // 鼠标悬浮显示
        },
        // legend: { // 图例
        // top: '5%',
        // left: 'center'
        // },
        graphic: [
          {
            type: "image", // 插入圆环中间的图片
            style: {
              image: require("../../assets/pannel.png"), // 本地图片要用require引入
              width: 80, // 设置图片大小
              height: 80
            },
            // 设置图片位置
            left: "center",
            top: "33%"
          },
          {
            //环形图中间添加文字
            type: "text", //通过不同top值可以设置上下显示
            left: "center",
            top: "55%",
            style: {
              text: "TOVC-区域A",
              textAlign: "center",
              fill: "#0D3F22", //文字的颜色
              width: 30,
              height: 30,
              fontSize: 16,
              fontFamily: "Microsoft YaHei"
            }
          },
          // 写了两个文字插入是因为业务要求两行不一样样式的字
          {
            //环形图中间添加文字
            type: "text", //通过不同top值可以设置上下显示
            left: "center",
            top: "62%",
            style: {
              text: "45ug/m3",
              textAlign: "center",
              fill: "#000000", //文字的颜色
              width: 30,
              height: 30,
              fontSize: 20,
              fontFamily: "" // 这个自己看着办
            }
          }
        ],
        color: ["#c27b5b", "#dbc57a"], // 圆环的颜色组
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["60%", "70%"],
            // avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2
            },
            label: {
              show: false,
              position: "center"
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 154, name: "已累积" },
              { value: 422, name: "剩余报警" }
            ]
          }
        ]
      },
      line1Option: {
        title: {
          text: "实时功率图"
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
          data: [
            "11-02 13:00:21",
            "11-02 13:00:20",
            "11-02 13:00:19",
            "11-02 13:00:18",
            "11-02 13:00:17",
            "11-02 13:00:16",
            "11-02 13:00:15",
            "11-02 13:00:14",
            "11-02 13:00:13"
          ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "总负载功率",
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
            name: "总发电功率",
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
      timer1: 0,
      timer2: 0
    };
  },
  methods: {
    getData(url, name) {
      this.$http
        .get(url, {
          name: name
        })
        .then(res => {
          this.line1Option.xAxis.data = res.data.data.resultA.timeStampList;
          this.line1Option.series[0].data = res.data.data.resultA.valueList;
          this.line1Option.series[1].data = res.data.data.resultB.valueList;
        });
    },
    drawPie1() {
      // 基于准备好的dom，初始化echarts实例
      var myChartPie1 = this.$echarts.init(document.getElementById("pie1"));
      // 使用刚指定的配置项和数据显示图表。
      myChartPie1.setOption(this.pie1Option);
    },
    drawPie2() {
      // 基于准备好的dom，初始化echarts实例
      var myChartPie2 = this.$echarts.init(document.getElementById("pie2"));
      // 使用刚指定的配置项和数据显示图表。
      myChartPie2.setOption(this.pie2Option);
    },
    drawLine1() {
      // 基于准备好的dom，初始化echarts实例
      var myLine1 = this.$echarts.init(document.getElementById("line1"));
      // 使用刚指定的配置项和数据显示图表。
      myLine1.setOption(this.line1Option);
    },
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
      chart.setOption(newoption,true);
    }
  },
  mounted() {
    //画图表
    this.drawPie1();
    this.drawPie2();
    this.drawCharts("bottomPie1", "bottomPie1", this.bottomPie1Option);
    this.drawCharts("bottomPie2", "bottomPie2", this.bottomPie2Option);
    this.drawCharts("bottomPie3", "bottomPie3", this.bottomPie3Option);
    this.drawCharts("line1", "line1", this.line1Option);

    //获取数据
    this.getData("data/two");
    //PM2P5
    this.$http
      .get("data/one", {
        name: "PM2P5"
      })
      .then(res => {
      });
    //List
    //设置定时器
    this.timer1 = setInterval(() => {
      this.refreshData("pie1", this.pie1Option);
      this.refreshData("pie2", this.pie2Option);
      this.refreshData("bottomPie1", this.bottomPie1Option);
      this.refreshData("bottomPie2", this.bottomPie2Option);
      this.refreshData("bottomPie3", this.bottomPie3Option);
      this.refreshData("line1", this.line1Option);
    }, 3000);

    this.timer2 = setInterval(() => {
      this.$http
        .get("data/one", {
          name: "PM2P5"
        })
        .then(res => {
          this.getData("data/two");
        });
    }, 10000);
  },
  beforeDestroy() {
    clearInterval(this.timer1);
    clearInterval(this.timer2);

  }
};
</script>

<style lang="less">
.parkOverviewRoot {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.upperDiv {
  width: 95%;
  height: 45%;
  background-color: rgb(255, 255, 255);
  /* border: 1px black solid; */
  box-shadow: 0px 2px 8px 1px rgba(57, 140, 92, 42);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  .pie1Out {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    color: #398c5c;
    #pie1 {
      width: 90%;
      height: 80%;
    }
  }
  .pie2Out {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    color: #398c5c;
    #pie2 {
      width: 90%;
      height: 80%;
    }
  }
  #line1 {
    width: 42%;
    height: 100%;
  }
}
.bottomDiv {
  width: 95%;
  height: 43%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .left {
    width: 40%;
    height: 100%;
    background-color: #69e69e;
    background-image: url("../../assets/20221117-191008.png");
    background-size: 400px 400px;
    background-position: right;
    background-repeat: no-repeat;
    box-shadow: 0px 2px 8px 1px rgba(57, 140, 92, 42);
    border-radius: 10px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .fontTitle {
      margin-left: 40px;
      font-size: 48px;
      align-self: flex-start;
    }
    .font {
      margin-top: 80px;
      font-size: 96px;
    }
  }
  .right {
    width: 55%;
    height: 100%;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 2px 8px 1px rgba(57, 140, 92, 42);
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    #bottomPie1 {
      width: 30%;
      height: 90%;
    }
    #bottomPie2 {
      width: 30%;
      height: 90%;
    }
    #bottomPie3 {
      width: 30%;
      height: 90%;
    }
  }
}
</style>
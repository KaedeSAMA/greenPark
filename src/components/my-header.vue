<template>
  <div class="myHeaderRoot">
    <div class="myHeaderTitle">
      <div class="title">碳排放能耗管理系统</div>
      <div class="tabNames">
        <div
          class="tabName"
          v-for="item in tabNames"
          :key="item.id"
          @click="changeTab(item.path)"
        >{{item.name}}</div>
      </div>
      <div class="user">欢迎，Admin</div>
    </div>
    <slot class="slot"></slot>
  </div>
</template>

<script>
import router from "../router";
export default {
  data() {
    return {
      tabNames: [
        {
          id: 1,
          name: "园区概况",
          path: "/home/parkOverview"
        },
        {
          id: 2,
          name: "报警中心",
          path: "/home/warnCenter"
        },
        {
          id: 3,
          name: "数据中心",
          path: "/home/dataCenter"
        },
        {
          id: 4,
          name: "控制中心",
          path: "/home/controlCenter"
        }
      ]
    };
  },
  methods: {
    changeTab(path) {
      router.push(path);
    }
  }
};
</script>

<style>
.myHeaderRoot{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.myHeaderTitle {
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  padding: 0 60px 0 60px;
  background-color: #69e69e;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #e3ffef;
}
.tabNames {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.tabName {
  height: 100%;
  line-height: 60px;
  text-align: center;
}
.slot{
    width: 100%;
    height: 100%;
}
</style>
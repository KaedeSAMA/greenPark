import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


// 引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);



//引入Echarts
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts


//导入封装好的网络请求模块
import { get, post } from './utils/index'
Vue.prototype.$http = {
  get,
  post
}


//创建Vue实例对象挂载到APP上
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

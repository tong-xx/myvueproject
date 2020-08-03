// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import "./assets/css/mui.min.css"

import "./assets/font/iconfont.css"

//这里要改，不要引入js文件
import "@/assets/font/iconfont.js"

import "./assets/css/com.css"

import "./assets/css/swiper.min.css"
import "./mock/mocker"

import { Rate } from 'vant';
import 'vant/lib/rate/style';
import 'vant/lib/toast/style';
import{Toast}from 'vant';
Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(Rate);
Vue.use(Toast);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',

  // render: h => h(App)
})

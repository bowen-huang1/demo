import Vue from 'vue'
import App from './App.vue'
import router from './router'
import global_menuBar from './plugins/global_menuBar.js'
import 'lib-flexible/flexible.js'
import swiper from 'vue-awesome-swiper'
import store from './store/index.js'


import './style/iconfont.css'
import './style/common.css'



Vue.config.productionTip = false


Vue.use(global_menuBar)
new Vue({
  router,
  swiper,
  store,
  render: h => h(App)
}).$mount('#app')

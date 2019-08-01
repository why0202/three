import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import vant from './vant/index'
import axios from 'axios'
vant()
Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

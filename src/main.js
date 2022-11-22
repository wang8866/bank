import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset.css'
import autoComponent from '@/plugins/autoComponent'
import '@/utils/rem'

Vue.config.productionTip = false
Vue.use(autoComponent)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

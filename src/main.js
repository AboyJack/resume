import Vue from 'vue'
import router from './router'
import App from './App.vue'
import './assets/style/index.scss'
import htmlToPdf from './utils/html-top-pdf'

Vue.config.productionTip = false
Vue.use(htmlToPdf)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

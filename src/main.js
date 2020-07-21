import Vue from 'vue'
import router from './router'
import App from './App.vue'
import './assets/style/index.scss'
// import htmlToPdf from './utils/html-top-pdf'
import vueClipboard2 from 'vue-clipboard2'
import toast from './components/toast/index.js'

Vue.config.productionTip = false
// Vue.use(htmlToPdf)
Vue.use(vueClipboard2)
Vue.use(toast)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

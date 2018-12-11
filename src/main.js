import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import uploader from 'vue-simple-uploader'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import VueVideoPlayer from 'vue-video-player'
import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control
import 'video.js/dist/video-js.css'
Vue.use(ElementUI, { locale })
Vue.use(VueVideoPlayer)
Vue.use(uploader)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

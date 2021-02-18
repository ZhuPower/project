import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './common/font/font.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/swiper-bundle.css'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

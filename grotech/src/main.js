import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './common/font/font.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'

// require styles
import 'swiper/swiper-bundle.css'

Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/icon_2.png'),
});

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

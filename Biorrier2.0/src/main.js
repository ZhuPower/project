// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import mixin from '@/assets/js/common'
import mixinApi from '@/assets/js/commonApi'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/site.css';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

Vue.mixin(mixinApi)
Vue.mixin(mixin)

Vue.config.productionTip = false


//640是原始设计果图大小
var fontSizeAuto = function(oriWidth){
    return function(){
        var viewportWidth = document.documentElement.clientWidth;
        if(viewportWidth > oriWidth){ viewportWidth = oriWidth; }
        if(viewportWidth < 320){ viewportWidth = 320; }
        document.documentElement.style.fontSize = viewportWidth/(oriWidth/100) +'px';   
    }
}
fontSizeAuto(1242)();
window.onresize = fontSizeAuto(1242); 


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})



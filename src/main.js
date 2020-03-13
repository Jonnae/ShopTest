import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { NavBar,Icon,Tabbar,TabbarItem,Swipe, SwipeItem,Lazyload} from 'vant';

Vue.use(NavBar).use(Icon).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload)

Vue.config.productionTip = false

import '@/assets/css/reset.css'
import '@/assets/js/rem.js'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

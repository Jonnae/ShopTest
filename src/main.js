import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {PullRefresh,List,Row,Col,NavBar,Icon,Tabbar,TabbarItem,Swipe, SwipeItem,Lazyload,Tab,Tabs,Field,CellGroup,Button} from 'vant';

Vue.use(PullRefresh).use(List).use(Row).use(Col).use(Field).use(Button).use(CellGroup).use(Tab).use(Tabs).use(NavBar).use(Icon).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload)

Vue.config.productionTip = false

import '@/assets/css/reset.css'
import '@/assets/js/rem.js'
import '@/mock/mock.js'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

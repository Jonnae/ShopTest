import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {SubmitBar,Card,PullRefresh,Swipe, SwipeItem,Lazyload,List,Row,Col,NavBar,Icon,Tabbar,TabbarItem,Tab,Tabs,Field,CellGroup,Button,GoodsAction, GoodsActionIcon, GoodsActionButton} from 'vant';

Vue.use(SubmitBar).use(Card).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(PullRefresh).use(List).use(Row).use(Col).use(Field).use(Button).use(CellGroup).use(Tab).use(Tabs).use(NavBar).use(Icon).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload)

Vue.config.productionTip = false

import '@/assets/css/reset.css'
import '@/assets/js/rem.js'
import '@/mock/mock.js'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

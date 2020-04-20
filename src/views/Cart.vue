<template>
  <div>
    <van-nav-bar title="购物车" ></van-nav-bar>
    <div class="card">
      <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg"/>
      <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg"/>
      <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg"/>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios';
import URL from '@/service.config.js';
import {mapState} from 'vuex'

  export default {
    data() {
      return {
        productList: [],
      }
    },
    computed: {
        ...mapState(['userInfo'])
      },
    created() {
      if(JSON.stringify(this.userInfo) === '{}'){
            console.log('未登录,跳转登录界面')
            this.$router.push('/profile');
          }else{
            console.log('已登录，显示选购商品')
            axios({
              url: URL.getCart,
              method:'get',
              params:{
                userId: this.userInfo._id,
              }
            }).then(res=>{
                console.log(res)
            }).catch(err=>{

            })
          }
    },
     
      
  }
</script>

<style lang="scss" scoped>

</style>
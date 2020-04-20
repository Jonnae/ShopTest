<template>
  <div>
    <van-nav-bar title="购物车" ></van-nav-bar>
    <div class="card">
      <van-card v-for="(item,index) in productList" :key="index" :price="item.price"  :title="item.name" :thumb="item.img"/> 
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
                
                for(let item of res.data){
                  // productList[i].push(item[i])
                  this.productList.push(item.productId)
                }
                console.log(this.productList)
            }).catch(err=>{

            })
          }
    },
     
      
  }
</script>

<style lang="scss" scoped>

</style>
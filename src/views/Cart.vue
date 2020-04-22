<template>
  <div>
    <van-nav-bar title="购物车" ></van-nav-bar>
    <div class="card">
      <van-card v-for="(item,index) in productList" :key="index" :price="item.price"  :title="item.name" :thumb="item.img"> 
        
         <template #footer>
          <van-button size="mini" @click="delCart(item._id,index)">删除</van-button>
        </template>
        
      </van-card>
    </div>
    <van-submit-bar class="submit-bar" :price="totalPrice" button-text="提交订单" @submit="onSubmit" />
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
			total:0,
      }
    },
    computed: {
        ...mapState(['userInfo']),
        totalPrice(){
          return this.productList.reduce((sum,elem)=>{
              elem.price =  parseFloat(elem.price)
              sum += elem.price;
              return sum
          },0) *10*10;
        }
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
                for(let item of res.data){
                  // productList[i].push(item[i])
                  this.productList.push(item.productId)
                }
                console.log(this.productList)
            }).catch(err=>{

            })
          }
    },
    methods: {
      onSubmit(){
      

      },
      delCart(id,index){
        //删除数据库中的数据，如果删除成功，进入回调函数，在回调函数中：
        axios({
              url: URL.delCart,
              method:'get',
              params:{
                userId: this.userInfo._id,
                productId: id,
              }
        }).then(res=>{
          console.log(res)
          if(res.status == '200'){
          this.productList.splice(index,1);
          console.log('删除成功!')
          }
          
        }).catch(err=>{
          console.log(err)
        })
      },
    },
     
      
  }
</script>

<style lang="scss" scoped>
.submit-bar{
  margin-bottom: 1rem;
}
</style>
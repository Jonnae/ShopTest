<template>
  <div class="">
    <van-nav-bar title="商品类型"></van-nav-bar>
    <div class="categoty">
      <van-row>
        <van-col span="6" class="nav"></van-col>
        <van-col span="18" class="container"></van-col>
      </van-row>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import URL from '@/service.config.js';
export default{
  data() {
    return {
      types: [] //类型信息
    }
  },
created() {
  let url = URL.getTypes
  axios(
    url
  ).then(res=>{
    console.log(res)
    this.types = res.data;
  }).catch(err=>{
    console.log(err)
  });
},

}

</script>

<style lang="scss">
  
</style>

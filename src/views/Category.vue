<template>
  <div class="">
    <van-nav-bar title="商品类型"></van-nav-bar>
    <div class="categoty">
      <van-row>
        <van-col span="6" class="nav">
          <ul>
            <li @click="selectCategory(item.typeId,index)" v-for="(item,index) in types" :key="index" :class="{active:active == index}">{{item.typeName}}</li>
          </ul>
        </van-col>
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
      types: [], //类型信息
      active: 0,
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

methods: {
  selectCategory(typeId,index){
    this.active = index;
  }
},

}

</script>

<style lang="scss">
  .nav{
    background-color: #eee;
    li{
      height: 0.6rem;
      line-height: 0.6rem;
      border-bottom: 1px solid #fff;
      padding: 3px;
      text-align: center;
    }
  }
  .active{
    background-color: #fff;
  }
</style>

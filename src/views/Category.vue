<template>
  <div class="">
    <van-nav-bar title="商品类型"></van-nav-bar>
    <div class="categoty">
      <van-row>
        <van-col span="6" class="nav">
          <ul>
            <li @click="selectCategory(item.typeId,index)" 
            v-for="(item,index) in types" :key="index" 
            :class="{active:active == index}">
            {{item.typeName}}
            </li>
          </ul>
        </van-col>
        <van-col span="18" class="container">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <van-list class="content" @load="onLoad" v-model="isLoading" :finished="finished">
            <div class="content-item" v-for="(item,index) in productList" :key="index">
              <img :src="item.img" alt="">
              <p class="content-item-name">{{item.name}}</p>
              <p >¥{{item.price}}</p>
            </div>
          </van-list>
          </van-pull-refresh>
        </van-col>
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
      productList: [],
      typeId: 1,//当前选中类型的id
      start: 0,
      limit: 10,
      finished: false,//数据是否取完
      isLoading: false,
    }
  },
created() {
  let url = URL.getTypes
  axios(
    url
  ).then(res=>{
    console.log(res)
    this.types = res.data;
    this.selectCategory(this.typeId,this.active)
  }).catch(err=>{
    console.log(err)
  });
},

methods: {
  selectCategory(typeId,index){
    this.active = index;
    this.typeId = typeId;
    this.productList = [];//每次选择后清空列表重新加载
    this.finished = false;

    this.getProductList();
  },
  getProductList(){
    this.isLoading = true;
    axios({
      url:URL.getProductListByType,
      method: 'get',
      params:{
        typeId:this.typeId,
        start: this.productList.length,
        limit: this.limit,
      } 
    }).then((res)=>{
      // console.log(res)
      if(res.data.length != 0){
      this.productList = this.productList.concat(res.data);

      }else{
        this.finished = true;
      }
     this.isLoading = false;
      
    }).catch((err)=>{
      console.log(err)
      })
    },
  onLoad(){
    this.getProductList();
  },
  onRefresh(){
    this.productList = [];
    this.getProductList();
  },
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
    .active{
    background-color: #fff;
    }
  }

  .container{
    position: fixed;
    top: 46px;
    bottom: 1rem;
    right: 0;
    overflow-y: scroll;
  }
  .content{
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 1rem;
    &-item{
      width:40%;
      padding:0 10px;
      img{
        width: 2rem;
        height: 2rem;
      }
      &-name{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow:hidden;
        text-overflow: ellipsis;
      }
    }
  }
</style>

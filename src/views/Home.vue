<template>
  <div class="container">
  <van-nav-bar title="首页" class="nav-title">
    <van-icon name="search" slot="left"></van-icon>
    <van-icon  slot="right">{{userInfo.userName}}</van-icon>
  </van-nav-bar>

  <!-- 轮播图 -->
    <div class="carousel">
      <van-swipe :autoplay="3000" class="carousel-item">
        <van-swipe-item v-for="(item,index) in images" :key="index">
          <img v-lazy="item.imgSrc" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 热门商品 -->
  <div class="hot">
    <p class="hot-title">热门商品</p>
    <swiper class="hot-swiper" :options="swiperOption">
      <swiper-slide v-for="(item, index) in hotProducts" :key="index" >
        <div class="hot-swiper-content">
          <img :src="item.img"/>
          <div class="name">{{item.name}}</div>
          <div class="price">¥{{item.price}}</div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
  <!-- 猜你喜欢 -->
  <div class="variety">
    <p class="">猜你喜欢</p>
    <ul>
      <li class="variety-item" v-for="(item, index) in varietyItem" :key="index">
        <img :src="item.img"/>
        <p class="name">{{item.name}}</p>
        <p class="price">¥{{item.price}}</p>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {mapState} from 'vuex'
import axios from 'axios'//引号里的名字对应package.js里包的名字
import URL from '@/service.config.js'
export default {
 data() {
    return {
      //轮播图
      images: [
        {
          name:'1',
          imgSrc:'https://img.yzcdn.cn/vant/apple-1.jpg'
        },
        {
          name:'2',
          imgSrc:'https://img.yzcdn.cn/vant/apple-2.jpg'
        },
        {
          name:'3',
          imgSrc:'https://img.yzcdn.cn/vant/apple-3.jpg'
        },
      ],
      //精选商品
      hotProducts:[
         {
          name:"huawei",
          img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585658652121&di=54583f770c201ccd499bb2fa0c814bdf&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fsoft%2F5%2F493%2FceNcIqcSrEEgE.jpg',
          price:'6100',
          company:'huawei',
          city:'shenzhen'
        },
        {
          name:"oppo",
          img:'http://attach.bbs.miui.com/forum/201311/17/174124tp3sa6vvckc25oc8.jpg',
          price:'6100',
          company:'oppo有限公司',
          city:'beijing'
        },
        {
          name:"apple",
          img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584129102709&di=545230c140593b2cf23a3410b84f1e24&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201202%2F06%2F002616frowmyworz64hnyo.jpg',
          price:'5299',
          company:'apple有限公司',
          city:'America'
        },
        {
          name:"xiaomi",
          img:'http://00.minipic.eastday.com/20171012/20171012093130_c5d819710d4f442b3f6ee90a4a7e1d9e_1.jpeg',
          price:'1999',
          company:'xiaomi有限公司',
          city:'beijing'
        },
        
        {
          name:"samsung",
          img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584705610042&di=fa37c3148cd2138e869713666c8e3575&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201306%2F22%2F220657vdh551m611ddr0k0.jpg',
          price:'4999',
          company:'samsung有限公司',
          city:'Korea'
        },
        {
          name:"vivo",
          img:'http://01.minipic.eastday.com/20170330/20170330044723_a0c69f758cc90e87e8c8e620eb55308e_2.jpeg',
          price:'3100',
          company:'vivo有限公司',
          city:'beijing'
        },
      ],
      swiperOption:{
        slidesPerView:3
      },
      //猜你喜欢
      varietyItem:[
      ]
    }
  },
  components: {
    swiper,
    swiperSlide
  },
   created() {
     let url = URL.getVarietyItem
     axios.get(url).then((res)=>{
       this.varietyItem = res.data
     })
   },
   computed: {
      ...mapState(['userInfo']),
      
   },
};
</script>

<style lang="scss">
  .container{
    background-color: #eeeeee;
  }
  .name{
    display: -webkit-box;
    -webkit-line-clamp:2;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    font-size: 0.05rem;
  }
  .nav-title{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;//脱离文档流了，所以要加上这个100%,不然缩成一团
    z-index: 999!important;
  }
  .carousel{
    height: 3rem;
    margin-top: 1rem;
    
    &-item{
      img{
        width: 100%;
        height: 3rem;
      }
    }
  }
  .hot{
    background-color: #fff;
    margin-top: 0.1rem;
    
    &-title{
      width: 100%;
      height: 0.5rem;
      padding-left: 0.2rem;
      line-height: 0.5rem;
      box-sizing: border-box;
    }
    &-swiper{
     &-content{
       width: 2rem;
       text-align: center;
       &-img{
         width: 2rem;
         height: 2rem;
       }
     } 
    }
  }
  .price{
    color: red;
  }
  
  //猜你喜欢
  .variety{
    margin-top: 0.1rem;
    background-color: #fff;
    text-align: center;
    margin-bottom: 1rem;
   
    ul{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;//内容对齐（justify-content）属性应用在弹性容器上，把弹性项沿着弹性容器的主轴线（main axis）对齐。
    }
    &-item{
      flex-basis: 45%;
    }
    img{
      width: 2rem;
      height: 2rem;
    }
  }
</style>

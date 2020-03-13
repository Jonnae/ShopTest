<template>
  <div class="">
  <van-nav-bar title="首页">
    <van-icon name="search" slot="left" size="0.4rem"/>
    <van-icon name="cart-o" slot="right" size="0.4rem"/>
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
  <div class="hot-commodity">
    <p>精选商品</p>
    <swiper class="hot-commodity-swiper">
      <swiper-slide></swiper-slide>
    </swiper>
  </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
 data() {
    return {
      images: [
        {
          name:'1',
          imgSrc:'https://img.yzcdn.cn/vant/apple-1.jpg'
        },
        {
          name:'2',
          imgSrc:'https://img.yzcdn.cn/vant/apple-1.jpg'
        },
        {
          name:'3',
          imgSrc:'https://img.yzcdn.cn/vant/apple-1.jpg'
        },
      ]
    }
  },
  components: {
    swiper,
    swiperSlide
  }
   
}

</script>

<style lang="scss">
  .carousel{
    height: 3rem;
    &-item{
      img{
        width: 100%;
        height: 3rem;
      }
    }
  }
</style>

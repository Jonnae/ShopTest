<template>
  <div>
    <van-nav-bar title="商品详情" left-text="返回" @click-left="$router.go(-1)"></van-nav-bar>
    <img :src="detail.img" alt class="detail-img" />
    <div class="detail">
      <p class="detail-name">{{detail.name}}</p>
      <p class="detail-price">¥{{detail.price}}</p>
      <p class="detail-company">公司：{{detail.company}}</p>
      <p class="detail-city">生产地：{{detail.city}}</p>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-button color="#be99ff" type="warning" text="加入购物车" @click="addCart" />
      <van-goods-action-button color="#7232dd" type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import axios from "axios";
import URL from "@/service.config.js";
import { mapState } from "vuex";
export default {
  data() {
    return {
      detail: {}
    };
  },
  created() {
    axios({
      url: URL.getDetail,
      method: "get",
      params: {
        id: this.$route.params.id
      }
    })
      .then(res => {
        console.log(res.data);
        this.detail = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    addCart() {
      //检查用户是否登陆 前端vuex保存登录状态
      //如果后端保存登录状态。则可以使用 koa-session redis
      if (JSON.stringify(this.userInfo) === "{}") {
        console.log("未登录,跳转登录界面");
        this.$router.push("/profile");
      } else {
        //添加到购物车
        axios({
          url: URL.addCart,
          method: "post",
          data: {
            productId: this.detail._id,
            userId: this.userInfo._id
          }
        })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.detail {
  padding: 0.2rem;
  &-img {
    width: 100%;
    height: 5rem;
  }
  &-name {
    color: #333;
    font-weight: bolder;
  }
  &-price {
    color: #ff7300;
    font-size: 0.4rem;
  }
}
</style>
<template>
  <div class="">
    <van-tabs >
      <van-tab title="登录">
        <van-cell-group>
          <van-field label="用户名" placeholder="用户名" required clearable v-model="loginUsername"></van-field>
          <van-field label="密码" placeholder="密码" required clearable v-model="loginPassword" type="password"></van-field>
        </van-cell-group>
        <div>
          <van-button type="primary" size="large">登录</van-button>
        </div>
      </van-tab>
      <van-tab title="注册">
        <van-cell-group>
          <van-field label="用户名" placeholder="用户名" required clearable v-model="registUsername"></van-field>
          <van-field label="密码" placeholder="密码" required clearable v-model="registPassword" type="password"></van-field>
        </van-cell-group>
        <div>
          <van-button @click="registHandler" type="primary" size="large">注册</van-button>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
     loginUsername:'',
     loginPassword:'',
     registUsername:'',
     registPassword:'',
    };
  },
  methods: {
    //注册
    registHandler(){
      axios({
        url:'',
        method:'post',
        data:{
          userName: this.registUsername,
          passWord: this.registPassword,
        }
      }).then(res=>{

      })
    }
  },
}

</script>

<style lang="scss">
  
</style>

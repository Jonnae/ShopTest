<template>
  <div class="">
    <van-tabs >
      <van-tab title="登录">
        <van-cell-group>
          <van-field label="用户名" placeholder="用户名" required clearable v-model="loginUsername"></van-field>
          <van-field label="密码" placeholder="密码" required clearable v-model="loginPassword" type="password"></van-field>
        </van-cell-group>
        <div>
          <van-button @click="loginHandler" type="primary" size="large">登录</van-button>
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
import axios from 'axios'
import url from '@/service.config.js'
import {mapActions} from 'vuex'
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
    ...mapActions(['loginAction']),
    //注册
    registHandler(){
      axios({
        url:url.registUser,
        method:'post',
        data:{
          userName: this.registUsername,
          password: this.registPassword,
        }
      }).then(res=>{
        if(res.data.code == 200){
          console.log('注册成功')
          this.registUsername = this.registPassword = ''
        }else{
          console.log('注册失败')
        }
      }).catch(err=>{
          console.log('注册失败')
      })
    },
    //登录
  loginHandler(){
      axios({
        url:url.logintUser,
        method:'post',
        data:{
          userName: this.loginUsername,
          password: this.loginPassword,
        }
      }).then(res=>{
        console.log(res)
        if(res.data.code == 200){
          //模拟网络延迟
          new Promise((resolve,reject)=>{
            setTimeout(()=>{
              resolve()
            },1000);
          }).then(()=>{
            console.log('登录成功');
            //保存登录状态
            this.loginAction(res.data.userInfo)
            
            this.$router.push('/');//跳转首页，路径与路由对应
          }).catch(err=>{
            console.log('登录失败');
            console.log('err');

          })
        }
      }).catch(err=>{
        console.log(err)
        
      })
    }
    
  },
  
}

</script>

<style lang="scss">
  
</style>

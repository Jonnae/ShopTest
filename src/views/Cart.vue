<template>
  <div>

  </div>
</template>

<script>
import axios from 'axios';
import URL from '@/service.config.js';
import {mapState} from 'vuex'

  export default {
    computed: {
        ...mapState(['userInfo'])
      },
    created() {
      if(JSON.stringify(this.userInfo) === '{}'){
            console.log('未登录,跳转登录界面')
            this.$router.push('/profile');
          }else{
            console.log(111)

          }
    },
     
      
  }
</script>

<style lang="scss" scoped>

</style>
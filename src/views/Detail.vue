<template>
    <div>
/detail
    </div>
</template>

<script>
import axios from 'axios';
import URL from '@/service.config.js';
    export default {
      created() {
         
          axios({
              url: URL.getDetail,
              method:'get',
              params:{
                  id:this.$route.params.id,
              }
          }).then(res=>{
            console.log(res)
          }).catch(err=>{
            console.log(err)
          })
      },  
    }
</script>

<style lang="scss" scoped>

</style>
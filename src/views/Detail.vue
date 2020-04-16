<template>
    <div>
      {{detail.name}}
    </div>
</template>

<script>
import axios from 'axios';
import URL from '@/service.config.js';
    export default {
      data() {
        return {
          detail:{},
        }
      },
      created() {
         
          axios({
              url: URL.getDetail,
              method:'get',
              params:{
                  id:this.$route.params.id,
              }
          }).then(res=>{
            console.log(res.data);
            this.detail = res.data;
          }).catch(err=>{
            console.log(err)
          })
      },  
    }
</script>

<style lang="scss" scoped>

</style>
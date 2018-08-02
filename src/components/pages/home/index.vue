<template>
    <div class="home_index_page">
      <router-view class="main_container" ></router-view>
      <home-footer class="footer" ></home-footer>
    </div>
</template>
<script>
  import homeFooter from './compontents/homeFooter'
  export default {
    name: 'home_index_page',
    data () {
      return {

      }
    },
    components : {
      homeFooter
    }
  }
</script>
<style lang="scss" >
  .home_index_page{
    position: relative;

    .main_container{
      position: absolute;
      width: 100%;
      top: 0;
      bottom: pt(112);
      overflow-y: auto;
    }


  }
</style>

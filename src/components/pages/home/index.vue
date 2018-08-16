<template>
    <div class="home_index_page">
      <transition name="fade" mode="out-in">
        <router-view class="main_container" ></router-view>
      </transition>
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
    } ,
    computed:{
      direction(){
        return this.$store.getters.getDirection
      }
    } ,
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

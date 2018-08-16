<template>
    <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
      <!-- <keep-alive> -->
        <router-view class="router-view" ></router-view>
      <!-- </keep-alive> -->
    </transition>
</template>
<script>
  export default {
    name: 'baseView',
    data () {
      return {

      }
    },
    computed:{
      direction(){
        return this.$store.getters.getDirection
      }
    } ,
    components : {

    }
  }
</script>

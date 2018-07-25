<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App' ,
  methods: {
    // pwa JS 校验以及引入
    handlePwa(){
      if(process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator){
          navigator.serviceWorker.register('./service-worker.js')
      }
    }
  } ,
  mounted(){
    this.handlePwa()
  }
}
</script>

<style lang="scss" >
  @import "../static/css/body.scss";

</style>

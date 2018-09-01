<template>
  <div class="music_index_page">

  </div>
</template>
<script>
export default {
  name: "music_index_page",
  data() {
    return {}
  },
  methods: {
    reqData() {
      this.$Api
        .getMusicList({ topid: 26 })
        .then((res) => {
          console.log(res)
        })
    }
  },
  mounted() {
    this.reqData()
  }
}
</script>
<style lang="scss" >
.music_index_page {
  background: lightgreen;
}
</style>

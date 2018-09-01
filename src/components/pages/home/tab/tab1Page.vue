<template>
  <div class="home_tab1_section" ref="mainContent">
    <!-- 头部信息 -->
    <div class="head">
      <div class="logo" :style="logoStyle"></div>
      <div class="container" :style="formStyle">
        <img src="//gw.alicdn.com/tfs/TB1yqhOQpXXXXcwaXXXXXXXXXXX-60-64.png">
        <div class="text">搜索商品、品牌</div>
      </div>
      <div class="menu"></div>
      <div class="info" @click.stop.prevent="toMusic">登录</div>
    </div>
    <!-- 增加页面高度 -->
    <div class="block"></div>
    <div class="block"></div>
    <div class="block"></div>
    <div class="block"></div>
    <div class="block"></div>
  </div>
</template>
<script>
export default {
  name: 'home_tab1_section',
  data() {
    return {
      mainContent: null,
      formStyle: {},
      logoStyle: {}
    }
  },
  methods: {
    // 绑定事件
    bindEvent() {
      this.mainContent.addEventListener(
        'scroll',
        this.handleScrollEvent,
        false
      )
    },
    // 滚动事件处理
    handleScrollEvent() {
      let scrollTop = this.mainContent.scrollTop
      if (scrollTop > 200) {
        this.formStyle = { width: "6.133333333333334rem" }
        this.logoStyle = { height: "0" }
      } else {
        this.formStyle = { width: "9.4666666667rem" }
        this.logoStyle = { height: ".8533333333rem" }
      }
    },
    // 去音乐页面
    toMusic() {
      this.$router.push({ path: "/music/index" })
    }
  },
  beforeDestroy() {
    this.mainContent.removeEventListener("scroll", this.handleScrollEvent)
  },
  mounted() {
    this.mainContent = this.$refs.mainContent
    this.bindEvent()
  }
}
</script>
<style lang="scss" >
.home_tab1_section {
  .block {
    width: 100%;
    height: 300px;
  }
  .block:nth-child(1) {
    background: lightcyan;
  }
  .block:nth-child(2) {
    background: lavenderblush;
  }
  .block:nth-child(3) {
    background: lawngreen;
  }
  .block:nth-child(4) {
    background: lightyellow;
  }
  .block:nth-child(5) {
    background: lightcoral;
  }

  .head {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background: #ff0036;

    .menu {
      height: 0.8rem;
      width: 0.8rem;
      text-indent: -1000em;
      background: url("data:image/png;base64,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")
        no-repeat 0.0533333333rem 0.16rem;
      background-size: 7.52rem 0.8266666667rem;
      position: absolute;
      top: -0.0524933333rem;
      margin-top: 0.0533333333rem;
      left: 0.4rem;
    }

    .info {
      height: 0.8rem;
      line-height: 0.8rem;
      padding-top: 0.1866666667rem;
      color: #fff;
      font-size: 0.32rem;
      position: absolute;
      top: 0;
      right: 0.4rem;
    }

    .logo {
      width: 5.3333333333rem;
      height: 0.8533333333rem;
      background-image: url(https://gw.alicdn.com/tfs/TB1HWNORFXXXXciaXXXXXXXXXXX-800-140.png);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      margin: 0 auto;
      display: block;
      transition: height 0.2s;
    }

    .container {
      width: 9.4666666667rem;
      height: 0.9333333333rem;
      margin: 0.1333333333rem auto;
      line-height: 0.9333333333rem;
      transition: width 0.2s;
      background-color: #fff;

      img {
        width: 0.4rem;
        height: 0.4266666667rem;
        float: left;
        margin: 0.2666666667rem 0 0 0.2666666667rem;
        background-color: inherit;
      }

      .text {
        font-size: 0.3733333333rem;
        padding: 0 0 0 0.8rem;
        vertical-align: text-top;
        opacity: 0.3;
        letter-spacing: 0;
      }
    }
  }
}
</style>

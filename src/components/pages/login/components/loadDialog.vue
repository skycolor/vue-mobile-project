<template>
    <div class="login_load_dialog">
        <p class="loading">
            <icon-svg iconName="loading"></icon-svg>
        </p>
        <p class="tip">认证中...</p>
    </div>
</template>
<script>
export default {
  name: "login_load_dialog",
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" >
.login_load_dialog {
  width: pt(480);
  height: pt(220);
  border-radius: pt(4);
  background: linear-gradient(45deg, #35394a 0%, #1f222e 100%);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  font-size: pt(26);

  .loading {
    margin: pt(30) 0;

    svg {
      width: pt(88);
      height: pt(88);
    }
  }
}
</style>

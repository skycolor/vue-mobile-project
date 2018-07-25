<template>
    <div class="login_index_page">
        <!-- 登录表单容器 -->
        <div class="form_container" >
            <p class="tit" >账号登录</p>
            <div class="input_content" >

            </div>
        </div>
    </div>
</template>
<script>
// 参考样式 http://www.17sucai.com/preview/526486/2016-05-11/%E5%B8%A6CSS3%E5%8A%A8%E7%94%BB%E7%89%B9%E6%95%88%E7%9A%84%E6%97%B6%E5%B0%9A%E7%99%BB%E5%BD%95%E7%95%8C%E9%9D%A2UI%E8%AE%BE%E8%AE%A1/index.html#
  export default {
    name: 'login_index_page',
    data () {
      return {

      }
    },
    components : {

    }
  }
</script>
<style lang="scss" >
  .login_index_page{
     perspective: 800px;
     background: linear-gradient(135deg, #8ffa4e 0%, #abfa4e 30%, #fae84e 100%);
     position: relative;

     .form_container{
       width: pt(625);
       height: pt(795);
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50% , -50%);
       background: rgba(0, 0, 0, .4);
       border-radius: pt(8);
       color: #fff;
       padding: pt(120) pt(60) pt(114);

       .tit{
         color: #eee;
         font-size: pt(38);
       }

       .input_content{
         position: relative;
       }
     }
  }
</style>

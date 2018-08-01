<template>
    <div class="login_index_page">
        <!-- 登录表单容器 -->
        <div class="form_container folding" >
            <p class="tit" >账号登录</p>
            <div class="input_content" >
              <p>
                <input placeholder="用户名" />
                <img src="../../../../static/img/login/user_icon.png" />
              </p>
              <p>
                <input placeholder="密码" />
                <img src="../../../../static/img/login/lock_icon.png" />
              </p>
            </div>
            <div class="confirm_content" >
              <p class="login" @click.stop.prevent="login" >登录</p>
              <p class="forget" >忘记密码？</p>
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
    methods:{
      // 登录
      login(){
        this.$vux.toast.text('login' , 'bottom')
      }
    } ,
    components : {

    }
  }
</script>
<style lang="scss" >
  .login_index_page{
     perspective: 800px;
     background: linear-gradient(135deg, #EA5C54 0%, #bb6dec 100%);
     position: relative;

     .form_container{
       width: pt(625);
       height: pt(795);
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50% , -50%);
       background: linear-gradient(45deg, #35394a 0%, #1f222e 100%);
       border-radius: pt(8);
       color: #fff;
       padding: pt(150) 0 pt(114);
       transition: all .3s;

       &.folding{
        box-shadow: 0px pt(20) pt(30) pt(2) rgba(0, 0, 0, 0.55);
        pointer-events: none;
        top: 40%;
        transform: rotateX(70deg) scale(0.9) translate(-55% , 0);
        opacity: .7;
        filter: blur(1px);
       }

       .tit{
         color: #afb1be;
         font-size: pt(32);
         padding: 0 pt(60);
       }

       .input_content{
        margin-top: pt(80);
        
        p{
          background: #32364a;
          display: flex;
          align-items: center;
          flex-direction: row-reverse;
          height: pt(90);
          position: relative;
          padding:0 pt(60);

          img{
            width: pt(28);
            margin-right: pt(30);
            opacity: .5;
          }

          input{
            background: transparent;
            height: 100%;
            flex: 1;
            color: #afb1be;
            font-size: pt(28);

            &:focus + img { 
              opacity: 1;  
            }
          }
        }
       }

       .confirm_content{
         margin-top: pt(90);
         display: flex;
         align-items: center;
         justify-content: space-between;
         padding: 0 pt(60);
         font-size: pt(24);

         .login{
           width: pt(240);
           height: pt(80);
           border-radius: pt(40);
           display: flex;
           align-items: center;
           justify-content: center;
           color: #DC6180;
           border: solid pt(3) #DC6180;
         }
         
         .forget{
          color: #606479;
          text-decoration: underline;
         }  
       }
     }
  }
</style>

<template>
    <tabbar class="home_footer_section" >
      <tabbar-item v-for="(item , index) in tabData" :key="index" 
            :link="item.link" :selected='index == 0' >
        <icon-svg  class="svg_content" slot="icon" :iconName="item.icon" ></icon-svg>
        <span slot="label">{{ item.label }}</span>
      </tabbar-item>
    </tabbar>
</template>
<script>
  import { Tabbar, TabbarItem } from 'vux'
  export default {
    name: 'home_footer_section',
    data () {
      return {
        tabData : [
          {
            icon : 'tab1' ,
            link : '/home/tab1' ,
            label : '首页'
          } ,
          {
            icon : 'tab2' ,
            link : '/home/tab2' ,
            label : '分类'
          } ,
          {
            icon : 'tab3' ,
            link : '/home/tab3' ,
            label : '发现'
          } ,
          {
            icon : 'tab4' ,
            link : '/home/tab4' ,
            label : '购物车'
          } ,
          {
            icon : 'tab5' ,
            link : '/home/tab5' ,
            label : '会员'
          } 
        ]
      }
    } ,
    components:{
      Tabbar , TabbarItem
    }
  }
</script>
<style lang="scss" >
  .home_footer_section{
    
    .svg_content{
      fill: #999;
      width: 100%;
      height: pt(50);
      margin: pt(5) 0;
    }

    .weui-bar__item_on{
      
      .svg_content{
        fill: #ff0036;
      }

      .weui-tabbar__label span{
        color: #ff0036;
      }
    }

  }
</style>

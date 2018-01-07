<template>
  <div class="navheaderWrap  paddingConWrap">
    <div class="navheaderInner maxConWCenter">
    <logo></logo>
    <div class="navheader clear">
      <router-link tag="div" class="navItem" to="/index">
        <span class="navText">{{navHeaderData.index}}</span>
      </router-link>
      <router-link tag="div" class="navItem" to="/about">
        <span class="navText">{{navHeaderData.about}}</span>
      </router-link>
      <router-link tag="div" class="navItem" to="/product">
        <span class="navText">{{navHeaderData.product}}</span>
      </router-link>
      <router-link tag="div" class="navItem" to="/merchantsJoin">
        <span class="navText">{{navHeaderData.merchantsJoin}}</span>
      </router-link>
      <!--<router-link tag="div" class="navItem" to="/news">
        <span class="navText">新闻中心</span>
      </router-link>-->
      <router-link tag="div" class="navItem" to="/hr">
        <span class="navText">{{navHeaderData.hr}}</span>
      </router-link>
      <router-link tag="div" class="navItem" to="/connectUs">
        <span class="navText">{{navHeaderData.connectUs}}</span>
      </router-link>
    </div>
    </div>
  </div>

</template>

<script>
  import Logo from './logo'
  import {navHeaderData} from 'common/js/responseLayoutData'
export default {
  name:'NavHeader',
  components:{
    Logo
  },
  data () {
    return {
      navHeaderData:''
    }
  },
  created(){

  },
  mounted(){
    this.resize();
    window.onresize=this.resize.bind(this);
    console.log('resize')

    //为什么这个九不行
    //window.addEventListener('resize',this.resize.bind(this)())
    console.log(this.navHeaderData)
  },
  methods:{
    resize(){
      //里面的this变了
      console.log('resize')
      const ele=document.documentElement;
      const width=ele.clientWidth;
      if(width>765){
        this.navHeaderData=navHeaderData.pc;
      }else{
        this.navHeaderData=navHeaderData.mobile;
      }
    }
  }
}
</script>

<style lang="stylus">
  @import "../common/style/navHeader.styl";
</style>

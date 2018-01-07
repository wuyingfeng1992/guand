<template>
  <div class="rootContainer">
   <nav-header></nav-header>
    <div class="rootContent">
      <div class="rootContentInner">

        <!--<logo></logo>-->
        <div class="placeholerEle ratio567_415">
          <p></p>
        </div>
        <v-touch v-on:swipeleft="onSwipeLeft"  v-on:swiperight="onSwipeRight">
          <keep-alive >
              <router-view class="routerView"></router-view>
            <!--加载动态模板-->
            <!--<component :is="item.component"></component>-->
          </keep-alive>
        </v-touch>

      </div>
    </div>

    <footerBanner></footerBanner>
  </div>
</template>

<script>
  import NavHeader from 'src/components/navHeader'
  import Logo from 'src/components/logo'
  import FooterBanner from 'src/components/footerBanner'

  export default {
    components:{
      NavHeader,
      Logo,
      FooterBanner,
    },
    data(){
      return {

      }
    },
    methods:{
      onSwipeLeft() {
        // router转场后会自动触发vueg的转场特效
        switch (this.$route.path) {

          case 'default':
          case '/index':
            this.$router.push({
              path: '/about'
            })
            break
          case '/about':
            this.$router.push({
              path: '/product'
            })
            break
          case '/product':
            this.$router.push({
              path: '/merchantsJoin'
            })
            break
          case '/merchantsJoin':
            this.$router.push({
              path: '/hr'
            })
            break
          case '/hr':
            this.$router.push({
              path: '/connectUs'
            })
            break
          case '/connectUs':
           /* this.$router.push({
              path: '/index'
            })*/
            break
        }
      },
      onSwipeRight() {
        switch (this.$route.path) {
          case 'default':
          case '/index':
            /*this.$router.push({
              path: '/connectUs'
            })*/
            break
          case '/about':
            this.$router.push({
              path: '/index'
            })
            break
          case '/product':
            this.$router.push({
              path: '/about'
            })
            break
          case '/merchantsJoin':
            this.$router.push({
              path: '/product'
            })
            break
          case '/hr':
            this.$router.push({
              path: '/merchantsJoin'
            })
            break
          case '/connectUs':
            this.$router.push({
              path: '/hr'
            })
            break
        }
      }
    },
    //解决不能上下滚动的bug
    mounted(){
        const navConP=document.querySelector('.navCon').parentNode;
        console.log(navConP)
        navConP.style.touchAction='pan-y';
    }

  }
</script>

<style lang="stylus">
  .routerView
    opacity: 1;
    min-height: calc(100vh - 9.1rem);
</style>

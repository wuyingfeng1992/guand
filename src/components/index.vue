<template>
  <div class="navCon index">
    <div class="sliderWraper">
      <slider>
        <div class="slider-item">
          <a class="imgWrap">
            <img src="../common/image/banner1.jpg">
          </a>
        </div>
        <div class="slider-item">
          <a class="imgWrap">
            <img src="../common/image/banner2.jpg">
          </a>
        </div>
        <div class="slider-item">
          <a class="imgWrap">
            <img src="../common/image/banner3.jpg">
          </a>
        </div>
      </slider>
    </div>
    <div class="bzHository maxConWCenter paddingConWrap">
      <div class="item">
        <h4 class="title">包子历史</h4>
        <div class="bzHositoryContent">
          <div class="imgWrap">
            <img src="../common/image/md1.png" alt="" class="">
          </div>
          <div class="desc">
            包子是一种古老的面食，它起源于三国。相传三国时期，蜀国诸葛亮率
            各式各样的包子
            各式各样的包子(35张)
            兵攻打南蛮，七擒七纵蛮将孟获，使孟获终于臣服。诸葛亮班师回朝，途中必须经过泸水，军队车马准备渡江时，
            突然狂风大作，浪击千尺,鬼哭狼嚎，大军无法渡江。此时诸葛亮召来孟获问明原因， 原来，两军交战，
            阵亡将士无法返回故里与家人团聚，故在此江上兴风作浪，阻挠众将士回程。大军若要渡江，必须用49颗蛮军的人头祭江，方可风平浪静。
          </div>
        </div>
      </div>
      <div class="item">
        <h4 class="title">冠稻汤包</h4>
        <div class="bzHositoryContent">
          <div class="imgWrap">
            <img src="../common/image/logo3.jpg" alt="" class="">
          </div>
          <div class="desc">
            创始人拥有多年包子行业，且是大型包子加盟总公司的行业经验。现结合自己的经验和成熟的技术，
            开创广西冠稻餐饮有限公司，旨在有让缺乏技术又有人情的人，通过培训获得包子手艺，并通过手艺开店经营。冠稻汤包特色是
            味道独特，顾客喜欢，让食客吃的放心，安心。
          </div>
        </div>
      </div>
      <div class="item">
        <h4 class="title">加盟门店</h4>
        <div class="resourceDesc">
        </div>
        <ul class="coperationerList">
          <li class="coperationerItem md">
            <div class="imgWrapH"><img src="../common/image/d1.jpg" alt=""></div>
            <span class="descHz"></span>
          </li>
          <li class="coperationerItem md">
            <div class="imgWrapH"><img src="../common/image/d2.jpg" alt=""></div>
            <span class="descHz"></span>
          </li>
          <li class="coperationerItem md">
            <div class="imgWrapH"><img src="../common/image/d3.jpg" alt=""></div>
            <span class="descHz"></span>
          </li>
        </ul>
      </div>
      <div class="item">
        <h4 class="title">制作过程</h4>
        <div class="resourceDesc">
        </div>
        <ul class="coperationerList">
          <li class="coperationerItem md">
            <div class="imgWrapH"><img src="../common/image/hc1.jpg" alt=""></div>
            <span class="descHz"></span>
          </li>
          <li class="coperationerItem md">
            <div class="imgWrapH"><img src="../common/image/zz2.jpg" alt=""></div>
            <span class="descHz"></span>
          </li>
          <li class="coperationerItem md">
            <div class="imgWrapH"><img src="../common/image/zz6.jpg" alt=""></div>
            <span class="descHz"></span>
          </li><!--
          <li class="coperationerItem md">
            <div class="imgWrapH"><img src="../common/image/zz5.jpg" alt=""></div>
            <span class="descHz"></span>
          </li>-->
        </ul>
      </div>
      <div class="item">
        <h4 class="title">合作伙伴</h4>
        <div class="resourceDesc">
            冠稻汤包所有的原料都经过严格把控而来，新鲜、安全、绿色、健康。
            合作商都是业界知名、可信赖、可靠、安全的厂商<br>
        </div>
        <ul class="coperationerList">
          <li class="coperationerItem">
            <div class="imgWrapH"><img src="../common/image/hz1.jpg" alt=""></div>
            <span class="descHz">李锦记</span>
          </li>
          <li class="coperationerItem">
            <div class="imgWrapH"><img src="../common/image/hz2.jpg" alt=""></div>
            <span class="descHz">厨邦</span>
          </li>
          <li class="coperationerItem">
            <div class="imgWrapH"><img src="../common/image/hz3.jpg" alt=""></div>
            <span class="descHz">盛天集团</span>
          </li>
          <li class="coperationerItem">
            <div class="imgWrapH"><img src="../common/image/hz4.jpg" alt=""></div>
            <span class="descHz">太太乐</span>
          </li>
          <li class="coperationerItem">
            <div class="imgWrapH"><img src="../common/image/hz5.jpg" alt=""></div>
            <span class="descHz">永和豆浆</span>
          </li>
          <li class="coperationerItem">
            <div class="imgWrapH"><img src="../common/image/hz6.jpg" alt=""></div>
            <span class="descHz">中粮</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Slider from './slider';
export default {
  name: 'index',
  components:{
    Slider
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">
  @import "../common/style/mixin";
  .slider-item
    .imgWrap
      overflow hidden
    img
.bzHository

  .bzHositoryContent
    align-items center
    display flex
  .imgWrap
    width 6rem
    height auto
    flex none
    margin-right 0.6rem
    @media screen and ( min-width 750px){
     margin-left 1.0rem
    }
    img
      width 100%
      heith auto
  .title
    font-weight normal
    margin 1.2rem 0
    padding 0 1rem
    background #fff
    line-height 2.5rem
    border-left 3px solid $main-color
  .resourceDesc
      font-size: 0.65rem;
      line-height: 1rem;
      margin -0.3rem 0 rem 0;
      @media screen and ( min-width 750px){
        line-height 1.3rem
        font-size 0.65rem
      }
  .desc
    font-size 0.65rem
    line-height 1rem
    margin-left auto
    @media screen and ( min-width 750px){
      line-height 1.3rem
      font-size 0.65rem
    }
  .coperationerList
    display flex
    flex-wrap wrap
    text-align center;
    .imgWrapH
      box-sizing border-box
      padding:0 0.5rem 89%;
      background #fff
      position relative
      width 100%
      overflow hidden
      img
        width 100%
        height auto
        position absolute
        left 50%
        top 50%
        transform translate(-50%,-50%)
        @media screen and ( min-width 750px){
          padding: 0.2rem 0
        }
    .descHz
      margin 0.3rem 0 0.6rem;
      display inline-block
      line-height: 1.3rem;
      font-size: 0.65rem;
    .coperationerItem
      margin:0 0.5rem
      width calc(25% - 1rem)
      @media screen and ( min-width 750px){
        width calc(100%/6 - 1rem)
      }
      @media screen and ( max-width 500px){
        width calc(100%/2 - 1rem)
      }
      &.md
        width calc(100%/3 - 1rem)
        @media screen and ( min-width 750px){
          width calc(100%/4 - 1rem)
        }
        @media screen and ( max-width 500px){
          width calc(100%/2 - 1rem)
        }
        .imgWrapH
          background none
      &.last
        flex 1
</style>

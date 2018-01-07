<template>
  <div class="navCon product" >
    <div class="pageSubBanner">
      <img src="../common/image/proB.jpg" alt="">
    </div>
    <div class="productContent maxConWCenter">
      <div class="productInner">

        <div class="item">
          <div class="imgWrap">
            <img src="../common/image/prod1.jpg" alt="包子" class="img">
          </div>
          <p class="desc">招牌鲜肉包4KG <span class="price">￥68</span></p>
        </div>
        <div class="item">
          <div class="imgWrap">
            <img src="../common/image/prod2.jpg" alt="包子" class="img">
          </div>
          <p class="desc">玉米肉馅4KG <span class="price">￥60</span></p>
        </div>

        <div class="item">
          <div class="imgWrap">
            <img src="../common/image/prod3.jpg" alt="包子" class="img">
          </div>
          <p class="desc">香菇青菜4KG <span class="price">￥56</span></p>
        </div>
        <div class="item">
          <div class="imgWrap">
            <img src="../common/image/prod4.jpg" alt="包子" class="img">
          </div>
          <p class="desc">老坛酸菜4KG <span class="price">￥56</span></p>
        </div>
        <div class="item">
          <div class="imgWrap">
            <img src="../common/image/prod5.jpg" alt="包子" class="img">
          </div>
          <p class="desc">鱼香肉丝3KG<span class="price">￥51</span></p>
        </div>
        <div class="item">
          <div class="imgWrap">
            <img src="../common/image/prod6.jpg" alt="包子" class="img">
          </div>
          <p class="desc">梅干菜4KG<span class="price">￥64</span></p>
        </div>
        <div class="item">
          <div class="imgWrap">
            <img src="../common/image/prod7.jpg" alt="包子" class="img">
          </div>
          <p class="desc">萝卜粉丝4KG <span class="price">￥56</span></p>
        </div>
        <div class="item">
          <div class="imgWrap">
            <img src="../common/image/prod8.jpg" alt="包子" class="img">
          </div>
          <p class="desc">红豆沙5KG <span class="price">￥65</span></p>
        </div>
        <div class="item">
          <div class="imgWrap">
            <img src="../common/image/prod9.jpg" alt="包子" class="img">
          </div>
          <p class="desc">奶黄5KG <span class="price">￥55</span></p>
        </div>
        <div class="item">
          <div class="imgWrap">
            <img src="../common/image/prod10.jpg" alt="包子" class="img">
          </div>
          <p class="desc">芝麻5KG <span class="price">￥55</span></p>
        </div>
        <div class="item">
          <div class="imgWrap">
            <img src="../common/image/prod11.jpg" alt="包子" class="img">
          </div>
          <p class="desc">港式叉烧包 <span class="price">￥15.6</span></p>
        </div>
        <div class="item">
          <div class="imgWrap">
            <img src="../common/image/prod12.jpg" alt="包子" class="img">
          </div>
          <p class="desc">流沙包 <span class="price">￥15.6</span></p>
        </div>
        <div class="item">
          <div class="imgWrap">
            <img src="../common/image/prod13.jpg" alt="包子" class="img">
          </div>
          <p class="desc">荷香糯米鸡 <span class="price">￥12</span></p>
        </div>
        <div class="item">
          <div class="imgWrap">
            <img src="../common/image/prod14.jpg" alt="包子" class="img">
          </div>
          <p class="desc">烧卖 <span class="price">￥22.5</span></p>
        </div>
        <div class="item">
          <div class="imgWrap">
            <img src="../common/image/prod15.jpg" alt="包子" class="img">
          </div>
          <p class="desc">东北黄玉米 <span class="price">￥61</span></p>
        </div>
        <div class="item">
          <div class="imgWrap">
            <img src="../common/image/prod16.jpg" alt="包子" class="img">
          </div>
          <p class="desc">东北糯玉米 <span class="price">￥61</span></p>
        </div>
      </div>
    </div>
    <div class="more">
      <span>更多产品敬请期待！</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product',
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus">
  @import "../common/style/mixin";
  .productInner
    display flex
    margin 2rem auto 0
    max-width 1000px
    flex-wrap wrap
    justify-content center
    .item
      width 50%
      padding 0 2.2rem
      min-width 320px
      flex none
      box-sizing border-box
      text-align center
      margin-bottom 0.5rem
      .desc
        height 2.2rem
        line-height 2.2rem
        .price
          margin-left 0.5rem
          color:$main-color
      .imgWrap
        padding 1.0rem
        background #2eac1c
        border-radius 1.5rem
        .img
           border-radius 1rem
           width 100%
           height auto
  .more
    text-align:center
    font-size:0.9rem
    margin 20px 0

</style>

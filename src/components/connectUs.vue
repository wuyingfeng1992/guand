<template>
  <div class="navCon connectUs">
    <div class="pageSubBanner">
      <img src="../common/image/connectB.jpg" alt="">
    </div>
    <div class="connectUsContent maxConWCenter paddingConWrap">
      <div class="item">
        <h3 class="title"></h3>
        <div class="componyAddress">
          <h5 class="title">联系电话</h5>
          <div class="connetNumber desc">
            电话：4006182838
          </div>
        </div>
      </div>
      <div class="item">
        <h5 class="title">公司地址</h5>
        <div class="componyAddress">
          <div class="desc">
            地址：广西南宁市兴宁区
            邮编：530012
          </div>
          <div class="addressWrap">

          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'connectUs',
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus">
  @import "../common/style/mixin";
  .connectUsContent
     padding-top 1.5rem
    .desc
      font-size: .65rem;
      line-height: 1.2rem;
    .title
      font-weight normal
       margin 0.9rem 0 0.5rem
       line-height 1.3rem
       padding-left 1.2rem
       border-left 3px solid $main-color
       background #fff



</style>

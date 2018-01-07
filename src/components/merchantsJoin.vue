<template>
  <div class="navCon merchantsJoin">
    <div class="pageSubBanner">
      <img src="../common/image/jmB.jpg" alt="">
    </div>
    <div class="merchantsJoinContent maxConWCenter paddingConWrap">
      <div class="item">
        <h5 class="title">加盟优势</h5>
        <div class="desc">
          1、选址支持：总部协助加盟店店面选址。<br>
          2、装修支持：总部根据店面尺寸图免费为店面提供形象设计。<br>
          3、产品支持：总部利用品牌优势不断开发新产品。将最新产品推向市场。<br>
          4、开业支持：免费提供营运培训教程，包括营销技巧，产品陈列等。<br>
          5、运营支持：专业培训师亲临真心包子加盟门店现场指导，免费提供业务指导。<br>
          <!--6、广告支持：总部安排投放巨额广告，促进项目品牌在全国市场快速发展。<br>-->
        </div>
      </div>
      <h3 class="desc mt20">
        如果您是一位期待了解包子,或是早餐行业的朋友，希望你能连线我们，仅仅只是作为了解，我们也愿意给您详尽的讲解，并期待您的加盟！
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'merchantsJoin',
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus">
  @import "../common/style/mixin";
  .merchantsJoinContent
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
    .mt20
      margin 1.2rem 0

</style>

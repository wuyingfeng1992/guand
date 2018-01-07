<template>

  <div class="navCon about ">
    <div class="pageSubBanner">
      <img src="../common/image/aboutB.jpg" alt="">
    </div>
    <div class="aboutContent maxConWCenter paddingConWrap">
      <div class="item">
        <div class="componyAddress">
          <h5 class="title">成立时间</h5>
          <div class=" desc">
            广西冠稻饮管理有限公司，成立于2017年10月。是一个新兴的品牌，期待更多人加盟，一起在冠稻的舞台上打拼，赢得未来。
          </div>
        </div>
      </div>
      <div class="item">
        <div class="componyAddress">
          <h5 class="title">冠稻宗旨</h5>
          <div class=" desc">
            冠稻秉承：“传承手艺，用手艺致富，让食客享受”的精神理念<br>
            致力于建立优质品牌，并发扬传承包子，伴随了五千年的中华文明......<br>
            而我们，是要给这门手艺赋予更多价值<br>
            用管理，用规模，用科学，用心。<br>
            让我们的顾客吃到健康，营养，美味的包子。<br>
            让我们的包子手艺人，开出自己的店。<br>
            成为老板，受人尊敬。<br>
            这就是我们，冠稻汤包要做的 <br>
            任重道远，砥砺前行 <br>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="componyAddress">
          <h5 class="title">冠稻期待</h5>
          <div class=" desc">
            希望更多人，能加入冠稻手艺的行列，我们一起动手，一起开心把包子做到极致，不断的锤炼自己小手艺，同时完善经营策略，收获一份成果！
          </div>
        </div>
      </div>

    </div>
    <div class="introductionImg">
      <img src="../common/image/introduction.jpg" alt="介绍">
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {

    }
  }
}
</script>
<style lang="stylus">
  @import "../common/style/mixin";
  .aboutContent
      padding-top 1.5rem
     .desc
       font-size: 0.65rem;
       line-height: 1.2rem;
    .title
       font-weight normal
       margin 0.9rem 0 0.5rem
       line-height 1.3rem
       padding-left 1.2rem
       border-left 3px solid $main-color
       background #fff
  .introductionImg
    text-align center;
    margin-top 1rem
    img
      width 50%
      @media screen and ( min-width 750px){
        width 80%
      }
      @media screen and ( max-width 500px){
        width 80%
      }
</style>


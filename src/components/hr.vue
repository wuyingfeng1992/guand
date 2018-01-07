<template>
  <div class="navCon hr">

    <div class="pageSubBanner">
      <img src="../common/image/zpB.jpg" alt="">
    </div>
    <div class="hrContent maxConWCenter paddingConWrap">
      <h3 class="title"></h3>
      <!--<div class="imgWrap">
        <img src="common/images/banner1.jpg" alt="" class="img">
      </div>-->
      <p class="desc titleDesc">
        诚邀技术扎实，对包子有热情,做事认真负责，欢迎你就加入冠稻！如下为急缺人才：
      </p>
      <div class="rcList">
        <div class="item">
          <h5 class="title">包子手艺师傅</h5>
          <div class="desc">
            工作内容：有一年以上的工作经验，工作主要是包包子。<br>
            职位要求：包子褶皱分明，力挺，熟悉发面。<br>
            工作时间：10小时，也可视能力而定<br>
            做事认真负责，欢迎你来挑战高薪。
          </div>
        </div>
        <div class="item">
          <h5 class="title">杂工</h5>
          <div class="desc">
            工作内容：洗菜 切菜 做一些杂货 具体听公司。<br>
            安排职位要求：工作认真负责肯吃苦。<br>
            工作时间：9小时 早八点 到下午六点
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hr',
  data () {
    return {

    }
  }
}
</script>
<style lang="stylus">
  @import "../common/style/mixin";
  .hrContent
      padding-top 1.5rem
     .titleDesc
        margin 1.1rem 0
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

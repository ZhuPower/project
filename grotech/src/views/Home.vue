<template>
  <div class="home">
    <topNav />
    <div class="Introduction" ref="Introduction">
      <div class="left">
        <p class="p2">Keep Growing</p>
      </div>
      <div class="right">
        <div class="h3">When the <br />finest arrives</div>
        <div class="h2">让美好如期而至</div>
        <p class="p1">美至倡导的幸福力即更好地满足消费者需求，资源可持续利用，并坚守商业道德。</p>
      </div>
    </div>
    <div class="content">
      <div class="homeVideo">
        <img src="../assets/img1.png"
          style="width:1440px;position: relative;left: 50%; margin-left: -720px; height: 816px;">
        <div class="videoTxt">
          <p class="p1">科技推动消费品创新与增长</p>
          <p class="p2">Leveraging Technology for Innovation and Growth</p>
        </div>
      </div>
      <div class="proMain">
        <div class="pro-box pro-box-1" :class="{'cur':title[0].show}" ref="pro-box-1">
          <div class="left">
            <div class="left-box">
              <div v-for="(item,index) in title[0].txt" class="title" :class="['title_'+index]"
                :style="{transitionDelay:index*0.4+'s'}" v-text="item">
              </div>
            </div>
          </div>
          <div class="right">
            <div>
              <div class="list list-1">
                <h6>01</h6>
                <p>利用大数据规划<br />企业竞争战略</p>
              </div>
              <div class="list list-2">
                <h6>02</h6>
                <p>以消费者为中心，<br />以产品创新驱动增长</p>
              </div>
              <div class="list list-3">
                <h6>03</h6>
                <p>整合全渠道竞争策略，<br />广告投放品效合一</p>
              </div>
              <div class="list list-4">
                <h6>04</h6>
                <p>精细化管理消费者资产，<br />提高客户生命价值</p>
              </div>
            </div>
          </div>
        </div>
        <div class="pro-box pro-box-2" :class="{'cur':title[1].show}" ref="pro-box-2">
          <div class="left">
            <div class="left-box">
              <div v-for="(item,index) in title[1].txt" class="title" :class="['title_'+index]"
                :style="{transitionDelay:index*0.4+'s'}" v-text="item">
              </div>
            </div>
          </div>
          <div class="right">
            <p class="right-p1">
              我们始终坚信，结合专业主义的长期主义能带来巨大商业价值。真正的增长动力来自于创新力（提供让消费者感到幸福的产品）与营销力（销售给尽可能多的消费者）的完美结合。美至科技基于领先的Grotech®大数据及AI技术，深入洞察行业与消费者，帮助消费品上下游企业制定竞争战略，推动产品创新，落实增长。
            </p>
            <p class="right-p2">
              美至科技也为一流的消费品基金提供基于大数据的行业研究，投资标的搜寻，以及尽职调查服务。美至科技致力与消费品产业上下游合作伙伴一起，创造出更多有“幸福力”的产品，并让尽可能多的消费者拥有它们。</p>
          </div>
        </div>
        <div class="pro-box pro-box-3" :class="{'cur':title[2].show}" ref="pro-box-3">
          <div class="left">
            <div class="left-box">
              <div v-for="(item,index) in title[2].txt" class="title" :class="['title_'+index]"
                :style="{transitionDelay:index*0.4+'s'}" v-text="item">
              </div>
            </div>
          </div>
          <div class="right">
            <p class="right-p3">
              自研的增长科技Grotech®系统，拥有亿级消费者及商品交易数据，应用前沿AI算法，制定企业发展策略。
            </p>
            <p class="right-p4">
              来自消费零售+投资银行+互联网科技的跨行业精英团队，从战略到落地，使命必达。</p>

            <p class="right-p5">
              拥有全链路品牌成长孵化的实战经验，以生意伙伴的身份真正为商业成功负责。</p>
          </div>
        </div>
      </div>
      <div class="servicePhilosophy">
        <div class="h1">服务理念</div>
        <div class="h2">We begin with the end in mind put consumers first and value sustainability</div>
        <div class="h3">以终为始，以消费者为中心，以可持续为价值基石。</div>
      </div>
      <div class="serviceBox">
        <div class="item-box">
          <div class="item-left"></div>
          <div class="item-right">
            <div class="h1">服务</div>
            <div class="h2">大数据驱动，为投资机构量身<br />定制专属服务</div>
            <div class="con">
              <div class="c1">投后管理服务</div>
              <div class="c2">对被投企业的市场表现进行数据监测，自动化分析并生成每月报告，在节省投后管理大量时间的同时，让投资机构迅速发现被投企业的问题或发展机遇。</div>
            </div>


          </div>
        </div>
        <div class="rightBox">
          <span class="cur"></span>
          <span></span>
          <span></span>
        </div>
        <div class="bottomBox">
          <span class="cur">1 <i></i></span>
          <span>2 <i></i></span>
        </div>
      </div>
      <div class="productBox">
        <div class="h1">产品</div>
        <div class="h2">Grotech<br />增长科技系统是什么?</div>
        <div class="productList">
          <div class="list-box list-box-1">
            <div class="imgBox">
              <img src="../assets/img2.png">
            </div>
            <div class="listBox">
              <div class="title">
                <div class="title-1">GDB</div>
                <div class="title-2">Growth Data Bank<br />独树一帜的美至科技数据银行</div>
              </div>
              <div class="productInfo">集合海量的社交网络、智能手机、电商平台<br />、线下购物等数据, 结合行业特征, <br />利用AI算法搭建多种商业策略模型。</div>
            </div>
          </div>
          <div class="list-box list-box-2">
            <div class="imgBox">
              <img src="../assets/img3.png">
            </div>
            <div class="listBox">
              <div class="title">
                <div class="title-1">GroPilot</div>
                <div class="title-2">晶球创新的商业智能<br />决策系统</div>
              </div>
              <div class="productInfo">美至利用大数据+AI技术, <br />自研开发的商业增长智能系统。无论是<br />行业分析, 品类策略, 还是渠道战术, <br />竞争分析,
                <br />GroPilot水晶球让决策者利用先进技术洞察先机。
              </div>
            </div>
          </div>
          <div class="list-box list-box-3">
            <div class="imgBox">
              <img src="../assets/img4.png">
            </div>
            <div class="listBox">
              <div class="title">
                <div class="title-1">AdBot</div>
                <div class="title-2">精益化消费者资<br />产管理系统</div>
              </div>
              <div class="productInfo">精益化消费者资产管理系统:使用前沿分<br />析技术, 将消费者聚类分组, <br />实现“千人千面”的消费者价值维护。提升<br />消费者忠诚度,
                从老客驱动业绩增长。<br />量化广告投放系统:美至将海量消费者行<br />为数据, <br />利用数据科学建立量化策略模型, <br />大幅度提高广告回报效果。</div>
            </div>
          </div>
        </div>
      </div>
      <div class="innovativeService">
        <div class="h1">创新服务与领域<br />专家的结合</div>
        <div class="p1">
          美至科技会考虑行业、消费者、企业资源等诸多因素，量体裁衣，提供个性化解决方案。美至的服务流程分为6个步骤：深入调研-数据洞察-制定方案-实施执行-方案复盘-持续改进。美至服务团队会由客户经理、商业分析师、数据科学家、领域专家组成，利用科学的a/b测试方法，为企业创新与增长持续服务。
        </div>
        <div class="bottomBox">
          <span class="cur">1 <i></i></span>
          <span>2 <i></i></span>
        </div>
      </div>
      <div class="brand">
        <div class="title">我们服务的品牌</div>
        <div class="tabH">
          <div class="list-h list-h-1 cur">消费零售</div>
          <div class="list-h list-h-2">TMT科技/媒体/通信</div>
          <div class="list-h list-h-3">投资机构</div>
        </div>
        <div class="tabC">
          <div class="list-c" @mouseover="mouseOver" @mouseleave="mouseLeave">
            <swiper ref="mySwiper" :options="swiperOptions">
              <swiper-slide>
                <img src="../assets/l1.png">
              </swiper-slide>
              <swiper-slide>
                <img src="../assets/l2.png">
              </swiper-slide>
              <swiper-slide>
                <img src="../assets/l3.png">
              </swiper-slide>
              <swiper-slide>
                <img src="../assets/l4.png">
              </swiper-slide>
              <swiper-slide>
                <img src="../assets/l5.png">
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
      <div class="contact">
        <div class="h1">免费获取我们与众不同的<br />商业洞察报告</div>
        <div class="p1">随时联系我们的咨询团队，我们会根据您所在行业，提供一份见解独到的洞察报告。<br />请微信搜索gro-tech（代用名）关注我们的微信公众号，或者发送电邮至</div>
        <a href="javascript:;" class="mailbox">hello@gro-tech.com</a>
      </div>
    </div>
  </div>
</template>

<script>
  import { isElementNotInViewport } from "@/utils/index.js";
  import topNav from "../components/topNav";
  export default {
    name: 'Home',
    components: {
      topNav
    },
    created() { },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    methods: {
      mouseOver() {
        this.swiper.stopAutoplay();
      },
      mouseLeave() {
        this.swiper.startAutoplay();
      },
      handleScroll() {
        let that = this
        doSome('pro-box-1', 0)
        doSome('pro-box-2', 1)
        doSome('pro-box-3', 2)

        function doSome(str, n) {
          let _h = document.documentElement.clientHeight
          let _h2 = that.$refs[str].offsetHeight
          let _h3 = that.$refs.Introduction.offsetHeight
          //获取滚动距顶部的距离，显示
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          let _top = that.$refs[str].offsetTop + _h3
          let _top2 = that.$refs[str].offsetTop + _h3 + _h2

          if (scrollTop >= _top && scrollTop < _top2) {
            that.title[n].show = true;
          }

          if (isElementNotInViewport(that.$refs[str])) {
            that.title[n].show = false;
          }
        }
      }
    },
    data() {
      return {
        title: [
          {
            txt: ['如何创造有“幸福力”', '的消费品获得持续增长'],
            show: false
          },
          {
            txt: ['创新的GaaS', '增长即服务', 'Growth-as-a-Service'],
            show: false
          },
          {
            txt: ['美至的', '核心能力'],
            show: false
          }
        ],
        swiperOptions: {
          slidesPerView: 5,
          autoplay: 1500,//可选选项，自动滑动
          loop: true,//可选选项，开启循环
        }
      }
    },
    watch: {},
    mounted() {
      window.addEventListener('scroll', this.handleScroll, true); // 监听（绑定）滚轮滚动事件
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll); //离开页面需要移除这个监听的事件
    }
  }
</script>
<style scoped>
  .Introduction {
    height: 737px;
    position: fixed;
    overflow: hidden;
    box-sizing: border-box;
    top: 64px;
    left: 0px;
    width: 100%;
    padding: 0px 64px;
    box-sizing: border-box;
  }

  .Introduction .left {
    width: 34.375%;
    height: 737px;
    float: left;
    overflow: hidden;
  }

  .Introduction .right {
    float: left;
    overflow: hidden;
  }

  .Introduction .h3 {
    color: #8765ed;
    font-family: "Faktum-Regular";
    font-size: 105px;
    font-weight: 400;
    line-height: 88px;
    margin-top: 70px;
  }

  .Introduction .h2 {
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: 40px;
    font-weight: 400;
    line-height: 80px;
    letter-spacing: 2.5px;
    margin-top: 8px;
  }

  .Introduction .p1 {
    opacity: 0.6;
    height: 64px;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
    width: 376px;
    margin-top: 130px;
  }

  .Introduction .p2 {
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: 21px;
    font-weight: 400;
    margin-top: 75px;
  }

  .content {
    margin-top: 737px;
  }

  .homeVideo {
    height: 816px;
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .homeVideo .videoTxt {
    position: absolute;
    left: 80px;
    bottom: 178px;
  }

  .homeVideo .videoTxt .p1 {
    width: 384px;
    height: 64px;
    color: #ffffff;
    font-family: "PingFangSC-Regular";
    font-size: 32px;
    font-weight: 400;
    line-height: 64px;
  }

  .homeVideo .videoTxt .p2 {
    width: 1074px;
    height: 145px;
    color: #ffffff;
    font-family: "Faktum-Regular";
    font-size: 72px;
    font-weight: 400;
    line-height: 75px;
    margin-top: 21px;
  }

  .proMain {
    margin: 0px 80px;
  }

  .proMain .pro-box {
    border-top: 1px solid #979797;
    display: flex;
    overflow: hidden;
    position: relative;
  }

  .proMain .pro-box-1 {
    border: 0;
    min-height: 630px;
  }

  .proMain .pro-box-2 {
    min-height: 656px;
  }

  .proMain .pro-box-3 {
    min-height: 584px;
  }

  .proMain .pro-box-2 .right,
  .proMain .pro-box-3 .right {
    position: absolute;
    top: 100%;
    opacity: 0;
    right: 0;
  }

  .proMain .pro-box-2.cur .right,
  .proMain .pro-box-3.cur .right {
    top: 0%;
    opacity: 1;
    transition: all .6s .4s;
    -moz-transition: all .6s .4s;
    -webkit-transition: all .6s .4s;
    -o-transition: all .6s .4s;
  }

  .proMain .pro-box .left {
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: 36px;
    font-weight: 400;
    line-height: 57px;
    letter-spacing: 2.5px;
    width: 42.96875%;
  }

  .proMain .pro-box .left .title_2 {
    opacity: 0.25;
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: 21px;
    font-weight: 400;
    line-height: 28px;
  }

  .proMain .pro-box .right {
    opacity: 0.6;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: 21px;
    font-weight: 400;
    line-height: 42px;
    width: 57.03125%;
  }

  .proMain .pro-box .right h6 {
    color: #d6d6f4;
    font-family: "Faktum-Regular";
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
  }

  .proMain .pro-box-1 .right {
    padding-top: 94px;
  }

  .proMain .pro-box-1 .right>div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .proMain .pro-box .right .list {
    width: 40%;
    margin-bottom: 71px;
  }

  .proMain .pro-box .right .list p {
    margin-top: 20px;
  }

  .proMain .pro-box-1 .left {
    margin-top: 94px;
  }

  .proMain .pro-box-2>div {
    margin-top: 70px;
  }

  .proMain .pro-box .right>p {
    margin-bottom: 40px;
  }

  .proMain .pro-box-3 .left {
    margin-top: 86px;
  }

  .proMain .pro-box-3 .right {
    margin-top: 79px;
  }

  .proMain .left .left-box .title {
    width: 0%;
    overflow: hidden;
    height: 56.67px;
  }

  .proMain .pro-box.cur .left .left-box .title {
    transition-property: width;
    -moz-transition-property: width;
    /* Firefox 4 */
    -webkit-transition-property: width;
    /* Safari 和 Chrome */
    -o-transition-property: width;
    /* Opera */

    transition-duration: .6s;
    -moz-transition-duration: .6s;
    /* Firefox 4 */
    -webkit-transition-duration: .6s;
    /* Safari 和 Chrome */
    -o-transition-duration: .6s;
    /* Opera */
    width: 100%;
  }

  .proMain .pro-box-1 .list {
    height: 126.67px;
    position: relative;
    overflow: hidden;
  }

  .proMain .pro-box-1 .list h6 {
    opacity: 0;
  }

  .proMain .pro-box-1.cur .list h6 {
    transition-property: opacity;
    -moz-transition-property: opacity;
    /* Firefox 4 */
    -webkit-transition-property: opacity;
    /* Safari 和 Chrome */
    -o-transition-property: opacity;
    /* Opera */

    transition-duration: .2s;
    -moz-transition-duration: .2s;
    /* Firefox 4 */
    -webkit-transition-duration: .2s;
    /* Safari 和 Chrome */
    -o-transition-duration: .2s;
    /* Opera */

    opacity: 1;
  }

  .proMain .pro-box-1 .list p {
    position: absolute;
    bottom: -100%;
    opacity: 0;
  }

  .proMain .pro-box-1.cur .list p {
    transition-property: all;
    -moz-transition-property: all;
    /* Firefox 4 */
    -webkit-transition-property: all;
    /* Safari 和 Chrome */
    -o-transition-property: all;
    /* Opera */

    transition-duration: .6s;
    -moz-transition-duration: .6s;
    /* Firefox 4 */
    -webkit-transition-duration: .6s;
    /* Safari 和 Chrome */
    -o-transition-duration: .6s;
    /* Opera */
    bottom: 0%;
    opacity: 1;
  }

  .proMain .pro-box-1.cur .list-1 h6,
  .proMain .pro-box-1.cur .list-1 p {
    transition-delay: .2s;
    -moz-transition-delay: .2s;
    /* Firefox 4 */
    -webkit-transition-delay: .2s;
    /* Safari 和 Chrome */
    -o-transition-delay: .2s;
    /* Opera */
  }

  .proMain .pro-box-1.cur .list-2 h6,
  .proMain .pro-box-1.cur .list-2 p {
    transition-delay: .4s;
    -moz-transition-delay: .4s;
    /* Firefox 4 */
    -webkit-transition-delay: .4s;
    /* Safari 和 Chrome */
    -o-transition-delay: .4;
    /* Opera */
  }


  .proMain .pro-box-1.cur .list-3 h6,
  .proMain .pro-box-1.cur .list-3 p {
    transition-delay: .6s;
    -moz-transition-delay: .6s;
    /* Firefox 4 */
    -webkit-transition-delay: .6s;
    /* Safari 和 Chrome */
    -o-transition-delay: .6s;
    /* Opera */
  }


  .proMain .pro-box-1.cur .list-4 h6,
  .proMain .pro-box-1.cur .list-4 p {
    transition-delay: .8s;
    -moz-transition-delay: .8s;
    /* Firefox 4 */
    -webkit-transition-delay: .8s;
    /* Safari 和 Chrome */
    -o-transition-delay: .8s;
    /* Opera */
  }

  .servicePhilosophy {
    padding: 0px 80px;
    height: 753px;
    background: #bdf0ee;
    overflow: hidden;
  }

  .servicePhilosophy .h1 {
    color: #214743;
    font-family: "PingFangSC-Medium";
    font-size: 21px;
    font-weight: 400;
    line-height: 27px;
    margin-top: 40px;
  }

  .servicePhilosophy .h2 {
    color: #214743;
    font-family: "Faktum-Regular";
    font-size: 84px;
    font-weight: 400;
    line-height: 81.6px;
    letter-spacing: 0.5px;
    margin-top: 110px;
    height: 445px;
    overflow: hidden;
  }

  .servicePhilosophy .h3 {
    color: #214743;
    font-family: "PingFangSC-Regular";
    font-size: 36px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 2.5px;
    margin-top: 0px;
  }

  .serviceBox {
    margin: 215px 80px 0px 80px;
    height: 698px;
    position: relative;
  }

  .serviceBox .item-box {
    display: flex;
    height: 698px;
    align-items: center;
  }

  .serviceBox .item-left {
    width: 440px;
    height: 419px;
    background: #d8d8d8;
    margin-right: 110px;
  }

  .serviceBox .item-right {
    height: 698px;
  }

  .serviceBox .item-right .h1 {
    color: #65ecaa;
    font-family: "PingFangSC-Regular";
    font-size: 21px;
    font-weight: 400;
    line-height: 27px;
  }

  .serviceBox .item-right .h2 {
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: 36px;
    font-weight: 400;
    line-height: 46px;
    margin-top: 28px;
  }

  .serviceBox .item-right .con {
    margin-top: 58px;
  }

  .serviceBox .item-right .c1 {
    opacity: 0.8;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: 24px;
    font-weight: 400;
    line-height: 30px;
  }

  .serviceBox .item-right .c2 {
    opacity: 0.6;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0.0099px;
    margin-top: 24px;
    width: 542px;
  }

  .serviceBox .rightBox {
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -37px;
    height: 74px;
    width: 10px;
    z-index: 1;
  }

  .serviceBox .rightBox span {
    opacity: 0.25;
    width: 10px;
    height: 10px;
    background: #383a50;
    margin-bottom: 22px;
    display: block;
    border-radius: 50%;
  }

  .serviceBox .rightBox span:last-child {
    margin-bottom: 0px;
  }

  .serviceBox .rightBox span.cur {
    opacity: 0.7;
  }

  .serviceBox .bottomBox {
    position: absolute;
    bottom: 0;
    text-align: center;
    display: flex;
    left: 50%;
    margin-left: -25px;
  }

  .serviceBox .bottomBox span {
    opacity: 0.35;
    width: 11px;
    height: 22px;
    color: #383a50;
    font-family: "PingFangSC-Medium";
    font-size: 18px;
    font-weight: 400;
    line-height: 21.6px;
    display: block;
    margin-right: 28px;
    position: relative;
  }

  .serviceBox .bottomBox span i {
    opacity: 0.8;
    width: 11px;
    height: 2px;
    background: #383a50;
  }

  .serviceBox .bottomBox span.cur i {
    display: block;
  }

  .serviceBox .bottomBox span:last-child {
    margin-right: 0px;
  }

  .serviceBox .bottomBox span.cur {
    opacity: 0.8;
  }

  .productBox {
    margin: 165px 80px 0px 80px;
    min-height: 994px;
  }

  .productBox>.h1 {
    color: #65ecaa;
    font-family: "PingFangSC-Regular";
    font-size: 21px;
    font-weight: 400;
    line-height: 27px;
  }

  .productBox>.h2 {
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: 36px;
    font-weight: 400;
    line-height: 45px;
    margin-top: 29px;
  }

  .productBox .productList {
    display: flex;
    align-items: flex-start;
    margin-top: 144px;
  }

  .productBox .productList .listBox:hover .productInfo,
  .productBox .productList .imgBox:hover+.listBox>.productInfo {
    display: block;
  }

  .productBox .productList .list-box-1 {
    width: 396px;
  }

  .productBox .productList .list-box-2 {
    width: 375px;
  }

  .productBox .productList .list-box-3 {
    width: 373px;
  }

  .productBox .productList .list-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .productBox .productList .imgBox {
    /* width: 100%; */
    /* text-align: center; */
    margin: 0px auto;
    height: 223px;
  }

  .productBox .productList .listBox {
    margin-top: 92px;
  }

  .productBox .productList .list-box-1 .listBox {
    width: 286px;
  }

  .productBox .productList .list-box-2 .listBox {
    width: 265px;
  }

  .productBox .productList .list-box-3 .listBox {
    width: 272px;
  }

  .productBox .productList .title-1 {
    opacity: 0.8;
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: 24px;
    font-weight: 400;
    line-height: 30px;
  }

  .productBox .productList .title-2 {
    opacity: 0.6;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: 21px;
    font-weight: 400;
    line-height: 27px;
    margin-top: 8px;
  }

  .productBox .productList .productInfo {
    opacity: 0.6;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: 15px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0.00825px;
    margin-top: 22px;
    display: none;
  }

  .innovativeService {
    margin: 35px 80px 0px 80px;
    height: 672px;
    overflow: hidden;
    position: relative;
  }

  .innovativeService .h1 {
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: 36px;
    font-weight: 400;
    line-height: 46px;
    margin-top: 140px;
  }

  .innovativeService .p1 {
    opacity: 0.6;
    width: 1051px;
    height: 126px;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: 21px;
    font-weight: 400;
    line-height: 42px;
    margin-top: 58px;
  }

  .innovativeService .bottomBox {
    position: absolute;
    bottom: 79px;
    text-align: center;
    display: flex;
    left: 50%;
    margin-left: -25px;
  }

  .innovativeService .bottomBox span {
    opacity: 0.35;
    width: 11px;
    height: 22px;
    color: #383a50;
    font-family: "PingFangSC-Medium";
    font-size: 18px;
    font-weight: 400;
    line-height: 21.6px;
    display: block;
    margin-right: 28px;
    position: relative;
  }

  .innovativeService .bottomBox span i {
    opacity: 0.8;
    width: 11px;
    height: 2px;
    background: #383a50;
  }

  .innovativeService .bottomBox span.cur i {
    display: block;
  }

  .innovativeService .bottomBox span:last-child {
    margin-right: 0px;
  }

  .innovativeService .bottomBox span.cur {
    opacity: 0.8;
  }

  .brand {
    margin: 132px 80px 0px 80px;
    height: 335px;
  }

  .brand .title {
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: 36px;
    font-weight: 400;
    line-height: 46px;
  }

  .brand .tabH {
    font-family: "PingFangSC-Regular";
    display: flex;
    height: 25px;
    align-items: center;
    margin-top: 43px;
  }

  .brand .tabH .list-h {
    opacity: 0.4;
    color: #383a50;
    font-size: 17px;
    font-weight: 400;
    height: 25px;
  }

  .brand .tabH .list-h-1 {
    margin-right: 41px;
  }

  .brand .tabH .list-h-2 {
    margin-right: 68px;
  }

  .brand .tabH .list-h.cur {
    opacity: 0.8;
    border-bottom: 1px solid #65ecaa;
  }

  .contact {
    margin: 216px 80px 0px 80px;
    height: 312px;
    margin-bottom: 216px;
  }

  .contact .h1 {
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: 36px;
    font-weight: 400;
    line-height: 46px;
  }

  .contact .p1 {
    opacity: 0.6;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: 21px;
    font-weight: 400;
    line-height: 42px;
    margin-top: 42px;
  }

  .contact .mailbox {
    color: #7ccca5;
    font-family: "Faktum-Regular";
    font-size: 42px;
    font-weight: 400;
    height: 44px;
    line-height: 44px;
    display: inline-block;
    border-bottom: 2px solid #7ccca5;
    text-decoration: none;
    margin-top: 41px;
  }
</style>
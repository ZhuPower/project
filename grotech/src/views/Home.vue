<template>
  <div class="home">
    <topNav />
    <div class="Introduction">
      <div class="left">
        <p class="p2">Keep Growing</p>
      </div>
      <div class="right">
        <div class="h3">When the <br />finest arrives</div>
        <div class="h2">让美好如期而至</div>
        <p class="p1">美至倡导的幸福力即更好地满足消费者需求，资源可持续利用，并坚守商业道德。</p>
      </div>
    </div>
    <div class="homeVideo">
      <img src="../assets/img1.png"
        style="width:1440px;position: relative;left: 50%; margin-left: -720px; height: 816px;">
      <div class="videoTxt">
        <p class="p1">科技推动消费品创新与增长</p>
        <p class="p2">Leveraging Technology for Innovation and Growth</p>
      </div>
    </div>
    <div class="proMain">
      <div class="pro-box pro-box-1">
        <div class="left">
          <div class="left-box">如何创造有“幸福力”<br />的消费品获得持续增长</div>
        </div>
        <div class="right">
          <div>
            <div class="list list-1">
              <h6>01</h6>
              <p>利用大数据规划<br />企业竞争战略</p>
            </div>
            <div class="list list-1">
              <h6>02</h6>
              <p>以消费者为中心，<br />以产品创新驱动增长</p>
            </div>
            <div class="list list-1">
              <h6>03</h6>
              <p>整合全渠道竞争策略，<br />广告投放品效合一</p>
            </div>
            <div class="list list-1">
              <h6>04</h6>
              <p>精细化管理消费者资产，<br />提高客户生命价值</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pro-box pro-box-2">
        <div class="left">
          <div class="left-box">创新的GaaS<br />增长即服务</div>
          <p>Growth-as-a-Service</p>
        </div>
        <div class="right">
          <p class="right-p1">
            我们始终坚信，结合专业主义的长期主义能带来巨大商业价值。真正的增长动力来自于创新力（提供让消费者感到幸福的产品）与营销力（销售给尽可能多的消费者）的完美结合。美至科技基于领先的Grotech®大数据及AI技术，深入洞察行业与消费者，帮助消费品上下游企业制定竞争战略，推动产品创新，落实增长。
          </p>
          <p class="right-p2">
            美至科技也为一流的消费品基金提供基于大数据的行业研究，投资标的搜寻，以及尽职调查服务。美至科技致力与消费品产业上下游合作伙伴一起，创造出更多有“幸福力”的产品，并让尽可能多的消费者拥有它们。</p>
        </div>
      </div>
      <div class="pro-box pro-box-3">
        <div class="left">
          <div class="left-box">美至的<br />核心能力</div>
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
    <div class="productBox"></div>
  </div>
</template>

<script>

  import topNav from "../components/topNav";
  export default {
    name: 'Home',
    components: {
      topNav
    },
    created() { },
    computed: {},
    methods: {},
    data() {
      return {

      }
    },
    watch: {}
  }
</script>
<style scoped>
  .Introduction {
    height: 737px;
    margin: 0px 80px;
    position: relative;
    overflow: hidden;
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

  .proMain .pro-box .left {
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: 36px;
    font-weight: 400;
    line-height: 57px;
    letter-spacing: 2.5px;
    width: 42.96875%;
  }

  .proMain .pro-box .left p {
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
    margin:165px 80px 0px 80px
  }
</style>
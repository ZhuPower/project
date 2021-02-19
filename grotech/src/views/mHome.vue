<template>
  <div class="home">
    <topNav />
    <!-- 简介 -->
    <div class="Introduction" ref="Introduction">
      <div class="h3" v-html="oData.Introduction.h3"></div>
      <div class="h2" v-html="oData.Introduction.h2"></div>
      <p class="p2" v-html="oData.Introduction.p2"></p>
      <p class="p1" v-html="oData.Introduction.p1"></p>
    </div>
    <div class="content">
      <!-- 视频 -->
      <div class="homeVideo">
        <video :src="oData.bannerVideo.src" autoplay loop muted>您的浏览器不支持 video 标签。</video>
        <div class="videoTxt">
          <p class="p1" v-if="oData.bannerVideo.p1" v-html="oData.bannerVideo.p1"></p>
          <p class="p2" v-html="oData.bannerVideo.p2"></p>
        </div>
      </div>
      <!-- 介绍 -->
      <div class="proMain">
        <div class="pro-box">
          <div class="title">
            如何创造有“幸福力”的消费品，获得持续增长
          </div>
          <div class="list">
            <div class="listCon">
              <div class="left">利用大数据规划企业竞争战略</div>
              <div class="right">01</div>
            </div>
            <div class="listCon">
              <div class="left">以消费者为中心，以产品创新驱动增长</div>
              <div class="right">02</div>
            </div>
            <div class="listCon">
              <div class="left">整合全渠道竞争策略，广告投放品效合一</div>
              <div class="right">03</div>
            </div>
            <div class="listCon">
              <div class="left">精细化管理消费者资产，提高客户生命价值</div>
              <div class="right">04</div>
            </div>
          </div>
        </div>
        <div class="pro-box">
          <div class="title">
            创新的GaaS增长即服务
            <p class="p1">Growth-as-a-Service</p>
          </div>
          <div class="bottom">
            <p>我们始终坚信，结合专业主义的长期主义能带来巨大商业价值。真正的增长动力来自于创新力（提供让消费者感到幸福的产品）与营销力（销售给尽可能多的消费者）的完美结合。美至科技基于领先的Grotech®
              大数据及AI技术，深入洞察行业与消费者，帮助消费品上下游企业制定竞争战略，推动产品创新，落实增长。</p>
            <p style="margin-top: .24rem;">
              美至科技也为一流的消费品基金提供基于大数据的行业研究，投资标的搜寻，以及尽职调查服务。美至科技致力与消费品产业上下游合作伙伴一起，创造出更多有“幸福力”的产品，并让尽可能多的消费者拥有它们。
            </p>
          </div>
        </div>
        <div class="pro-box">
          <div class="title">
            美至的核心能力
          </div>
          <div class="bottom">
            <p>自研的增长科技Grotech®系统，拥有亿级消费者及商品交易数据，应用前沿AI算法，制定企业发展策略。</p>
            <p style="margin-top: .12rem;">来自消费零售+投资银行+互联网科技的跨行业精英团队，从战略到落地，使命必达。</p>
            <p style="margin-top: .12rem;">拥有全链路品牌成长孵化的实战经验，以生意伙伴的身份真正为商业成功负责。</p>
          </div>
        </div>
      </div>
      <!-- 服务理念 -->
      <div class="servicePhilosophy">
        <div class="h1" v-html="oData.servicePhilosophy.h1"></div>
        <div class="h2" v-html="oData.servicePhilosophy.h2"></div>
        <div class="h3" v-html="oData.servicePhilosophy.h3"></div>
      </div>
      <!-- 服务 -->
      <div class="serviceBox">
        
      </div>
    </div>
  </div>

</template>

<script>
  import { oData } from "@/data/index-data.js";
  import { oData2 } from "@/data/index-data2.js";
  import topNav from "../components/topNav2";
  export default {
    components: {
      topNav
    },
    created() {
      let arr1 = [
        require('../assets/l1.png'),
        require('../assets/l2.png'),
        require('../assets/l3.png'),
        require('../assets/l4.png'),
        require('../assets/l5.png')
      ]
      let arr2 = [
        require('../assets/l2.png'),
        require('../assets/l3.png'),
        require('../assets/l2.png'),
        require('../assets/l3.png'),
        require('../assets/l2.png'),
        require('../assets/l3.png')
      ]
      let arr3 = [
        require('../assets/l4.png'),
        require('../assets/l5.png'),
        require('../assets/l4.png'),
        require('../assets/l5.png'),
        require('../assets/l4.png'),
        require('../assets/l5.png')
      ]

      if (this.$route.name.indexOf('en') == 0) {
        this.oData = oData2
      } else {
        this.oData = oData
      }

      this.oData.bannerVideo.src = require('../assets/header11.mp4')
      this.oData.product.list[0].src = require('../assets/GDB.gif')
      this.oData.product.list[1].src = require('../assets/Gropilot-gray.gif')
      this.oData.product.list[2].src = require('../assets/Adbot.gif')
      this.oData.brand.list[0].img = arr1
      this.oData.brand.list[1].img = arr2
      this.oData.brand.list[2].img = arr3
      console.log(oData)

    },
    computed: {},
    methods: {


    },
    data() {
      let vm = this;
      return {

      }
    },
    watch: {
      '$route.name'(val, val2) {
        let _s1 = val.substring(0, 2)
        let _s2 = val2.substring(0, 2)
        if (_s1 != _s2) {
          if (val.indexOf('en') == 0) {
            this.oData = oData2
          } else {
            this.oData = oData
          }
        }
      }
    },
    mounted() {

    },
    destroyed() {

    }
  }
</script>
<style scoped>
  .Introduction {
    height: 4.44rem;
    position: fixed;
    top: .72rem;
    left: 0px;
    width: 100%;
    padding-left: .23rem;
    box-sizing: border-box;
  }

  .Introduction .h3 {
    width: 2.87rem;
    height: .72rem;
    color: #9999e4;
    font-family: "Faktum-Regular";
    font-size: .42rem;
    font-weight: 400;
    line-height: .36rem;
    margin-top: 1.47rem;
  }

  .Introduction .h2 {
    width: 1.36rem;
    height: .3175rem;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: .16rem;
    font-weight: 400;
    line-height: .3175331rem;
    letter-spacing: 1px;
    margin-top: .1rem;
  }

  .Introduction .p2 {
    width: .79rem;
    height: .34rem;
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: .12rem;
    font-weight: 400;
    line-height: .34rem;
    margin-top: -.12rem;
  }

  .Introduction .p1 {
    opacity: 0.6;
    width: 2.62rem;
    height: .41rem;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: .096rem;
    font-weight: 400;
    line-height: .17rem;
    margin-top: .39rem;
  }



  .content {
    margin-top: 4.44rem;
  }

  .home .homeVideo {
    position: relative;
  }

  .home .homeVideo video {
    height: auto;
  }

  .homeVideo .videoTxt {
    padding-left: .23rem;
    position: absolute;
    left: 0;
    bottom: .57rem;
  }

  .homeVideo .videoTxt .p1 {
    width: 1.96rem;
    height: .24rem;
    color: #ffffff;
    font-family: "PingFangSC-Regular";
    font-size: .14rem;
    font-weight: 400;
    line-height: .1344rem;
  }

  .homeVideo .videoTxt .p2 {
    width: 2.67rem;
    height: 1.19rem;
    color: #ffffff;
    font-family: "Faktum-Regular";
    font-size: .24rem;
    font-weight: 400;
    line-height: .24rem;
  }

  .proMain .pro-box {
    padding-left: .23rem;
  }

  .proMain .pro-box .title {
    width: 3.39rem;
    height: .67rem;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: .24rem;
    font-weight: 400;
    line-height: .36rem;
    margin-top: .43rem;
  }

  .proMain .pro-box .title .p1 {
    opacity: 0.3;
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: .14rem;
    font-weight: 500;
    line-height: .18rem;
  }

  .proMain .pro-box .list {
    margin-top: .34rem;
  }

  .proMain .pro-box .listCon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: .35rem;
    border-bottom: 1px solid #999aa7;
    margin-right: .24rem;
  }


  .proMain .pro-box .listCon:first-child {
    border-top: 1px solid #999aa7;
  }

  .proMain .pro-box .left {
    opacity: 0.6;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: .14rem;
    font-weight: 400;
    line-height: .21rem;
  }

  .proMain .pro-box .right {
    color: #d6d6f4;
    font-family: "PingFangSC-Semibold";
    font-size: .12rem;
    font-weight: 400;
    line-height: .15rem;
  }

  .proMain .pro-box .bottom {
    opacity: 0.6;
    color: #33343e;
    font-family: "PingFangSC-Regular";
    font-size: .13rem;
    font-weight: 400;
    line-height: .24rem;
    padding-right: .24rem;
  }

  .servicePhilosophy {
    width: 100%;
    height: 3rem;
    background: #bdf0ee;
    padding: 0px .24rem 0px .23rem;
    overflow: hidden;
  }

  .servicePhilosophy .h1 {
    color: #214743;
    font-family: "PingFangSC-Regular";
    font-size: .13rem;
    font-weight: 400;
    line-height: .17rem;
    margin-top: .21rem;
    height: .22rem;
  }

  .servicePhilosophy .h2 {
    width: 3.13rem;
    height: .95rem;
    color: #214743;
    font-family: "Faktum-Regular";
    font-size: .24rem;
    font-weight: 400;
    line-height: .30rem;
    margin-top: .3rem;
  }

  .servicePhilosophy .h3 {
    width: 1.72rem;
    height: .49rem;
    color: #214743;
    font-family: "PingFangSC-Regular";
    font-size: .12rem;
    font-weight: 400;
    line-height: .15rem;
    margin-top: .72rem;
  }
</style>
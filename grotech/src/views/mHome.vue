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
        <div class="name">服务</div>
        <div class="list">
          <div class="list-box">
            <div class="title">
              聚焦大消费行业的一站式增长服务
              <p class="p1">
                Gaas（Growth as a Service）
              </p>
            </div>
            <div class="li-box">
              <div class="li-title">基于大数据与AI的策略服务</div>
              <div class="li-tab">
                <div class="li-h">
                  <div class="li-h-box">企业竞争战略</div>
                  <div class="li-h-box">产品创新</div>
                  <div class="li-h-box">全渠道增长策略</div>
                </div>
                <div class="li-c">
                  <div class="li-c-box">
                    <p>由经验丰富的行业专家，利用美至科技大数据库与AI算法模型，从消费者趋势、产品创新、流量获取等多方面深入洞察分析，帮助企业制定精准有效的竞争战略。</p>
                  </div>
                  <div class="li-c-box">
                    <p>我们利用大数据与算法洞察消费者行为，综合考虑商业竞争策略以及供应链技术变革，提供从产品概念研究到包装设计的全链路落地服务。</p>
                  </div>
                  <div class="li-c-box">
                    <p>从线上到线下，从一线城市到下沉市场，从直营到分销，结合人-货-场，我们帮助企业制定科学精准的全渠道增长策略。</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="li-box">
              <div class="li-title">精益化营销服务</div>
              <div class="li-tab">
                <div class="li-h">
                  <div class="li-h-box">整合营销服务</div>
                  <div class="li-h-box">数据科学投放</div>
                </div>
                <div class="li-c">
                  <div class="li-c-box">
                    <p>利用美至科技Grotech技术，精确计算品牌推广与效果广告的整合模型，并结合个性化创意与文案提高广告投资回报比（ROI）。</p>
                  </div>
                  <div class="li-c-box">
                    <p>通过数据科学量化模型，结合千人千面创意文案，大幅提高企业在信息流广告平台上的投放效果（包括但不限于阿里妈妈、抖音头条、百度等等）。</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="li-box">
              <div class="li-title">ADAPT™品牌孵化服务</div>
              <div class="li-tab">
                <div class="li-c">
                  <div class="li-c-box">
                    <p>A-InnovAtion，D-Deep insight，A-All
                      dimensions，P-Partnership，T-Technology。ADAPT在英文中代表着进化，与时俱进，美至科技集合先进的策略+技术+营销能力，和合作伙伴一起，孵化属于中国的新消费品牌。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="list-box">
            <div class="title">
              大数据驱动，为投资机构量身定制专属服务
            </div>
            <div class="li-box">
              <div class="li-title">行业研究
                <p class="p2">
                  和传统行研相比，美至科技聚焦于使用大数据与AI技术，从消费者、产品、渠道出发研究行业发展历史，并对未来做出定性预测。
                </p>
              </div>
              <div class="li-tab">
                <div class="li-h">
                  <div class="li-h-box">美至科技投资雷达</div>
                </div>
                <div class="li-c">
                  <div class="li-c-box">
                    <p>和传统行研相比，美至科技聚焦于使用大数据与AI技术，从消费者、产品、渠道出发研究行业发展历史，并对未来做出定性预测。</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="li-box">
              <div class="li-title">大数据尽职调查</div>
              <div class="li-tab">
                <div class="li-c">
                  <div class="li-c-box">
                    <p>传统的投资尽职调查偏向于小样本访谈与研究，缺乏大数据支撑。美至科技利用技术能力结合经验丰富的行业专家，提供科学全面的尽职调查服务。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="li-box">
              <div class="li-title">投资管理服务</div>
              <div class="li-tab">
                <div class="li-c">
                  <div class="li-c-box">
                    <p>对被投企业的市场表现进行数据监测，自动化分析并生成每月报告，在节省投后管理大量时间的同时，让投资机构迅速发现被投企业的问题或发展机遇。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 产品 -->
      <div class="productBox">
        <div class="name" v-html="oData.product.h1"></div>
        <div class="h2" v-html="oData.product.h2"></div>
      </div>
      <!-- 创新服务 -->
      <div class="innovativeService">
        <swiper ref="mySwiper2" :options="swiperOptions2">
          <swiper-slide v-for="item in oData.innovativeService.list">
            <div class="h1" v-html="item.h1"></div>
            <div class="p1" v-html="item.p1"></div>
          </swiper-slide>
        </swiper>
        <div class="bottomBox">
          <span v-for="(item,index) in oData.innovativeService.list"
            :class="{'cur':swiper2.activeIndex ==index}">{{index+1}}<i></i></span>
        </div>
      </div>
      <!-- 品牌 -->
      <div class="brand">
        <div class="title" v-html="oData.brand.title"></div>
        <div class="tabH">
          <div class="list-h" v-for="(item,index) in oData.brand.list" v-html="item.name"
            :class="{'cur':oData.brand.nTab == index,['list-h-'+(index+1)]:true}" @click="pickBrand(index)"></div>
        </div>
        <div class="tabC">
          <div class="list-c" v-for="(item,index) in oData.brand.list" v-show="oData.brand.nTab == index">
            <div v-for="item2 in item.img">
              <img :src="item2">
            </div>
          </div>
        </div>
      </div>
      <!-- 联系 -->
      <div class="contact">
        <div class="h1" v-html="oData.contact.h1"></div>
        <div class="p1" v-html="oData.contact.p1"></div>
        <a href="javascript:;" class="mailbox" v-html="oData.contact.mail"></a>
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
        swiperOptions2: {
          // loop: true,
          onSlideChangeStart: function (swiper) {
            console.log(vm)
          }
        },
        swiper2: {
          activeIndex: 0
        }
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
    height: calc(444vw/3.75);
    position: fixed;
    top: calc(72vw/3.75);
    left: 0px;
    width: 100%;
    padding-left: calc(23vw/3.75);
    box-sizing: border-box;
  }

  .Introduction .h3 {
    width: calc(287vw/3.75);
    height: calc(72vw/3.75);
    color: #9999e4;
    font-family: "Faktum-Regular";
    font-size: calc(42vw/3.75);
    font-weight: 400;
    line-height: calc(36vw/3.75);
    margin-top: calc(147vw/3.75);
  }

  .Introduction .h2 {
    width: calc(136vw/3.75);
    height: calc(31.75vw/3.75);
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(16vw/3.75);
    font-weight: 400;
    line-height: calc(31.75331vw/3.75);
    letter-spacing: calc(1vw/3.75);
    margin-top: calc(10vw/3.75);
  }

  .Introduction .p2 {
    width: calc(79vw/3.75);
    height: calc(34vw/3.75);
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: calc(12vw/3.75);
    font-weight: 400;
    line-height: calc(34vw/3.75);
    margin-top: calc(-12vw/3.75);
  }

  .Introduction .p1 {
    opacity: 0.6;
    width: calc(262vw/3.75);
    height: calc(41vw/3.75);
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(9.6vw/3.75);
    font-weight: 400;
    line-height: calc(17vw/3.75);
    margin-top: calc(39vw/3.75);
  }



  .content {
    margin-top: calc(444vw/3.75);
  }

  .home .homeVideo {
    position: relative;
  }

  .home .homeVideo video {
    height: auto;
  }

  .homeVideo .videoTxt {
    padding-left: calc(23vw/3.75);
    position: absolute;
    left: 0;
    bottom: calc(57vw/3.75);
  }

  .homeVideo .videoTxt .p1 {
    width: calc(196vw/3.75);
    height: calc(24vw/3.75);
    color: #ffffff;
    font-family: "PingFangSC-Regular";
    font-size: calc(14vw/3.75);
    font-weight: 400;
    line-height: calc(13.44vw/3.75);
  }

  .homeVideo .videoTxt .p2 {
    width: calc(267vw/3.75);
    height: calc(119vw/3.75);
    color: #ffffff;
    font-family: "Faktum-Regular";
    font-size: calc(24vw/3.75);
    font-weight: 400;
    line-height: calc(24vw/3.75);
  }

  .proMain .pro-box {
    padding-left: calc(23vw/3.75);
  }

  .proMain .pro-box .title {
    width: calc(339vw/3.75);
    height: calc(67vw/3.75);
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(24vw/3.75);
    font-weight: 400;
    line-height: calc(36vw/3.75);
    margin-top: calc(43vw/3.75);
  }

  .proMain .pro-box .title .p1 {
    opacity: 0.3;
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: calc(14vw/3.75);
    font-weight: 500;
    line-height: calc(18vw/3.75);
  }

  .proMain .pro-box .list {
    margin-top: calc(34vw/3.75);
  }

  .proMain .pro-box .listCon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: calc(35vw/3.75);
    ;
    border-bottom: 1px solid #999aa7;
    margin-right: calc(24vw/3.75);
  }


  .proMain .pro-box .listCon:first-child {
    border-top: calc(1vw/3.75) solid #999aa7;
  }

  .proMain .pro-box .left {
    opacity: 0.6;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(14vw/3.75);
    font-weight: 400;
    line-height: calc(21vw/3.75);
  }

  .proMain .pro-box .right {
    color: #d6d6f4;
    font-family: "PingFangSC-Semibold";
    font-size: calc(12vw/3.75);
    font-weight: 400;
    line-height: calc(15vw/3.75);
  }

  .proMain .pro-box .bottom {
    opacity: 0.6;
    color: #33343e;
    font-family: "PingFangSC-Regular";
    font-size: calc(13vw/3.75);
    font-weight: 400;
    line-height: calc(24vw/3.75);
    padding-right: calc(24vw/3.75);
  }

  .servicePhilosophy {
    width: 100%;
    height: calc(300vw/3.75);
    background: #bdf0ee;
    padding: 0px calc(24vw/3.75) 0px calc(23vw/3.75);
    overflow: hidden;
  }

  .servicePhilosophy .h1 {
    color: #214743;
    font-family: "PingFangSC-Regular";
    font-size: calc(13vw/3.75);
    font-weight: 400;
    line-height: calc(17vw/3.75);
    margin-top: calc(21vw/3.75);
    height: calc(22vw/3.75);
  }

  .servicePhilosophy .h2 {
    width: calc(313vw/3.75);
    height: calc(95vw/3.75);
    color: #214743;
    font-family: "Faktum-Regular";
    font-size: calc(24vw/3.75);
    font-weight: 400;
    line-height: calc(30vw/3.75);
    margin-top: calc(30vw/3.75);
  }

  .servicePhilosophy .h3 {
    width: calc(172vw/3.75);
    height: calc(49vw/3.75);
    color: #214743;
    font-family: "PingFangSC-Regular";
    font-size: calc(12vw/3.75);
    font-weight: 400;
    line-height: calc(15vw/3.75);
    margin-top: calc(72vw/3.75);
  }
</style>
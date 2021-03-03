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
        <keep-alive>
          <video :src="oData.bannerVideo.src" autoplay loop muted id="bannerVideo">您的浏览器不支持 video 标签。</video>
        </keep-alive>
        <div class="videoTxt">
          <p class="p1" v-if="oData.bannerVideo.p1" v-html="oData.bannerVideo.p1"></p>
          <p class="p2" v-html="oData.bannerVideo.p2"></p>
        </div>
      </div>
      <!-- 介绍 -->
      <div class="proMain">
        <div class="pro-box pro-box-0">
          <div class="title">
            How to create consumer goods that bring “Happiness” and achieve continued growth?
          </div>
          <div class="list">
            <div class="listCon listCon_0">
              <div class="left">Applying big data to competitive strategy<br /> formulation</div>
              <div class="right">01</div>
            </div>
            <div class="listCon listCon_1">
              <div class="left">Driving growth by customer-centric<br /> product innovation</div>
              <div class="right">02</div>
            </div>
            <div class="listCon listCon_2">
              <div class="left">Formulating an integrated and<br /> omni-channel strategy</div>
              <div class="right">03</div>
            </div>
            <div class="listCon listCon_3">
              <div class="left">Applying customer equity management model<br /> towards specific segments of customers,
                and<br /> therefore improve the customer lifetime values (CLV)</div>
              <div class="right">04</div>
            </div>
          </div>
        </div>
        <div class="pro-box pro-box-1" :class="{'cur':proShow[0]}">
          <div class="title">
            Innovative GaaS
            <p class="p1">Growth-as-a-Service</p>
            <img src="../assets/proMain-icon.png" class="proMain-icon" @click="showPro(0)" />
          </div>
          <div class="bottom">
            <p>It is our belief that long-term professionalism can create significant business values; and what really
              drives growth is a combination of innovation (making products that bring people happiness) and marketing
              expertise (reaching as many people as possible). Utilizing cutting-edge Grotech big data and AI
              technology, Grotech provides in-depth analysis focusing on specific industry and consumer, helps both
              upstream and downstream companies to initiate competitive strategies, promote product innovation, and
              implement growth solutions. Moreover, Grotech® provides big-data-driven industry research reports, deal
              sourcing, and due diligence services for leading consumer goods investors. Grotech is committed to working
              with both upstream and downstream partners in the consumer goods industry in order to create more, and let
              more people have the products that deliver “Happiness”.</p>
          </div>
        </div>
        <div class="pro-box pro-box-2" :class="{'cur':proShow[1]}">
          <div class="title">
            Our Core Capabilities
            <img src="../assets/proMain-icon.png" class="proMain-icon" @click="showPro(1)" />
          </div>
          <div class="bottom">
            <p>Our self-developed Grotech® system;<br />Hundreds of millions of marketing and sales data;<br />Applying
              cutting-edge AI algorithms to development <br /> strategy.</p>
            <p style="margin-top:calc(17vw/3.75);">Our team members are cross-sector elites with <br />experiences
              covering retailing, investment banking, and <br /> Internet technology industry. From strategy formulation
              to <br /> execution, we get shit done.</p>
            <p style="margin-top:calc(17vw/3.75);">Having solid branding experiences based on practices<br /> upstream
              and downstream, Grotech is a reliable business<br /> partner who truly takes responsibilities for
              achieving <br /> success.</p>
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
      <div class="serviceBox" id="serviceBox">
        <div class="name">Services</div>
        <div class="list">
          <div class="list-box list-box-0">
            <div class="title">
              A Turnkey Growth Service for<br /> the Consumer Goods Industry
              <p class="p1">
                Gaas（Growth as a Service）
              </p>
            </div>
            <div class="li-box li-box-0" :class="{'cur':aShow[0]}">
              <div class="li-title">
                Strategy Planning Service Based on<br /> Big Data and AI
                <img src="../assets/service-icon.png" class="service-icon" @click="showService(0)" />
              </div>
              <div class="li-tab">
                <div class="li-h">
                  <div class="li-h-box" @click="pickService('tab1', 0)" :class="{'cur':tab1==0}"><span>Competitive
                      Strategy</span></div>
                  <div class="li-h-box" @click="pickService('tab1', 1)" :class="{'cur':tab1==1}"><span>Product
                      Innovation</span></div>
                  <div class="li-h-box" @click="pickService('tab1', 2)" :class="{'cur':tab1==2}">Growth
                    Strategy<br /><span>for All Channels</span></div>
                </div>
                <div class="li-c">
                  <div class="li-c-box" v-if="tab1==0">
                    <p>Utilizing Grotech database as well as AI technology, our experienced sector experts can conduct
                      in-depth analysis that covers various aspects such as consumer trends, product innovation and
                      traffic gaining, and guide enterprises to make accurate and effective competitive strategy.</p>
                  </div>
                  <div class="li-c-box" v-if="tab1==1">
                    <p>Firstly, we interpret consumer behaviors by utilizing big data as well as algorithms;
                      subsequently, we offer solutions that not only cover all processes from concept creation to
                      package design, but also can work in the real world with intense competition and supply-chain
                      revolution.</p>
                  </div>
                  <div class="li-c-box" v-if="tab1==2">
                    <p>Integrating consumers, products, and places, we offer accurate and full-scale growth strategies
                      that can satisfy a large variety of needs from online to offline, from top-tier cities to
                      lower-tier markets, and from direct-to-consumer to distribution.</p>
                  </div>
                </div>
                <img src="../assets/service-1-001.gif" />
              </div>
            </div>
            <div class="li-box" :class="{'cur':aShow[1]}">
              <div class="li-title">Precise marketing<img src="../assets/service-icon.png" class="service-icon"
                  @click="showService(1)" /></div>
              <div class="li-tab">
                <div class="li-h">
                  <div class="li-h-box" @click="pickService('tab2', 0)" :class="{'cur':tab2==0}">integratebranding-
                    and<br /><span>sales-oriented marketing</span></div>
                  <div class="li-h-box" @click="pickService('tab2', 1)" :class="{'cur':tab2==1}"><span>Data-Driven
                      Ads-Delivery</span></div>
                </div>
                <div class="li-c">
                  <div class="li-c-box" v-if="tab2==0">
                    <p>With Grotech, we can integratebranding- and sales-oriented marketing , and formulate an accurate
                      model that can effectively improve the return of investment (ROI) when working along with
                      customized contents and copies.</p>
                  </div>
                  <div class="li-c-box" v-if="tab2==1">
                    <p>Data-Driven Ads-Delivery：Combining quantitative models and persona-lized copywriting content,
                      Grotech is able to effectively improve the advertising return on newsfeed platforms (including but
                      not limited to Alibaba, TikTok, Toutiao, Baidu, etc.).</p>
                  </div>
                </div>
                <img src="../assets/service-1-002.gif" />
              </div>

            </div>
            <div class="li-box" :class="{'cur':aShow[2]}">
              <div class="li-title">ADAPT™ Consumer Goods<br />Incubation Service <img src="../assets/service-icon.png"
                  class="service-icon" @click="showService(2)" /></div>
              <div class="li-tab">
                <div class="li-c">
                  <div class="li-c-box">
                    <p>A-InnovAtion, D-Deep insight, A-All dimensions, P-Partnership, T-Technology. To adapt is to
                      evolve over time. Working with many partners, Grotech integrates its advanced strategies,
                      expertise and marketing practices to incubate consumer goods brands tailor-made to Chinese
                      consumers.</p>
                  </div>
                </div>
                <img src="../assets/service-1-003.gif" />
              </div>

            </div>
          </div>
          <div class="list-box list-box-1">
            <div class="title">
              <p style="width: 100%;  font-family:Faktum-Medium">Big-Data-Driven </p>
              <p style="width: 100%;">Customized Service for Investors</p>
            </div>
            <div class="li-box li-box-0" :class="{'cur':aShow[3]}">
              <div class="li-title">Industry Research<img src="../assets/service-icon.png" class="service-icon"
                  @click="showService(3)" /></div>

              <div class="li-tab">
                <p class="p2">
                  Compared to traditional industry research, Grotech’s approach has a more specific focus on applying
                  big data and AI technology to analyzing the history of markets, products, and channels of a certain
                  industry, thereby making qualitative predictions.
                </p>
                <div class="li-h">
                  <div class="li-h-box" @click="pickService('tab3', 0)" :class="{'cur':tab3==0}"><span>Grotech
                      Investment Radar</span></div>
                </div>
                <div class="li-c">
                  <div class="li-c-box">
                    <p>Establishing a niche-market model for consu-mer goods, Grotech offers a customized deal sourcing
                      service that not only helps investors zoom in on targets in a timely and accurate manner.</p>
                  </div>
                </div>
                <img src="../assets/service-2-001.gif" />
              </div>

            </div>
            <div class="li-box" :class="{'cur':aShow[4]}">
              <div class="li-title">Big-Data-Driven Due Diligence<img src="../assets/service-icon.png"
                  class="service-icon" @click="showService(4)" /></div>
              <div class="li-tab">
                <div class="li-c">
                  <div class="li-c-box">
                    <p>Traditionally due diligence tends to be conducted through small-sample interviews and research
                      that lack the support of big data. Utilizing both technology and experiences of sector experts,
                      Grotech provides a more systematic and data-driven access to due diligence.
                    </p>
                  </div>
                </div>
                <img src="../assets/service-2-002.gif" />
              </div>

            </div>
            <div class="li-box" :class="{'cur':aShow[5]}">
              <div class="li-title">Post-Investment Management Service<img src="../assets/service-icon.png"
                  class="service-icon" @click="showService(5)" /></div>
              <div class="li-tab">
                <div class="li-c">
                  <div class="li-c-box">
                    <p>We provide data monitoring and automatic analysis service towards the marketing performance of
                      companies that investors have already invested in. This service is in the format of monthly
                      reports, and suitable for investors looking to quickly identify opportunities and risks of their
                      target companies.
                    </p>
                  </div>
                </div>
                <img src="../assets/service-2-003.gif" />
              </div>

            </div>
          </div>
        </div>
      </div>
      <!-- 产品 -->
      <div class="productBox" id="productBox">
        <div class="name" v-html="oData.product.h1"></div>
        <div class="h2" v-html="oData.product.h2"></div>
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="(item,index) in oData.product.list">
            <div class="productImg">
              <div class="title1" v-html="item.title1"></div>
              <div class="title11" v-html="item.title11"></div>
              <img :src="item.src" />
              <div class="imgBj"></div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="bottomBox">
          <span v-for="(item,index) in oData.product.list"
            :class="{'cur':swiper.activeIndex ==index}">{{index+1}}<i></i></span>
        </div>
        <div class="productCon" :class="{'cur':swiper.activeIndex ==0}">
          <div class="title">A Unique Data Bank by Grotech</div>
          <div class="p1">Integrating massive data silos with external data from social networks, smartphones, online
            retail platforms and brick-and-mortar stores, also utilizing our industry research results and AI
            algo-rithm, we build structured models for various business strategies to drive growth.</div>
        </div>
        <div class="productCon" :class="{'cur':swiper.activeIndex ==1}">
          <div class="title">Crystal Ball: An Innovative and Smart
            Business Decision-Making System</div>
          <div class="p1">Our proprietary system enables users to gain early and data-based insights that help them make
            timely decisions on the strategies for industries, categories, channels, and competition.</div>
        </div>
        <div class="productCon" :class="{'cur':swiper.activeIndex ==2}">
          <div class="title">A Data- Driven Growth Tool</div>
          <div class="p1">Lean Consumer Equity Management System Integrating massive external marketing and sales data
            with business’s internal transaction data, Grotech is able to analyze and transform these data into accurate
            customer persona for adverti-sements. Subsequently, we are able to build quantitative AdBot models that
            provide instant feedback as well as continued improvements.

            Quantitative Ads-Delivery System:Grotech integrates tons of consumer behavior data to build quantitative
            models that can effectively improve the return of ads.</div>
        </div>
        <div class="fgx"></div>
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
            :class="{'cur':swiper2.activeIndex ==(oData.innovativeService.list.length - index-1)}">{{index+1}}<i></i></span>
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
        <div class="p1">Feel free to contact us and we will provide you with an insightful report on your industry.
          Please either scan the QR code to follow our WeChat official account, or email us at </div>
        <a href="javascript:;" class="mailbox" v-html="oData.contact.mail"></a>
      </div>
    </div>
    <foot />
  </div>

</template>

<script>
  import { oData2 } from "@/data/index-data3.js";
  import topNav from "../components/topNav3";
  import foot from "../components/efoot2";
  export default {
    components: {
      topNav,
      foot
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

      this.oData = oData2

      this.oData.innovativeService.list.reverse()

      this.oData.bannerVideo.src = require('../assets/header11.mp4')
      this.oData.product.list[0].src = require('../assets/GDB.gif')
      this.oData.product.list[1].src = require('../assets/Gropilot-gray.gif')
      this.oData.product.list[2].src = require('../assets/Adbot.gif')
      this.oData.brand.list[0].img = arr1
      this.oData.brand.list[1].img = arr2
      this.oData.brand.list[2].img = arr3

    },
    computed: {},
    methods: {
      pickBrand(n) {
        this.oData.brand.nTab = n
      },
      pickService(str, n) {
        this[str] = n
      },
      showPro(n) {
        let arr = JSON.parse(JSON.stringify(this.proShow))
        if (n == this.nProShow) {
          console.log(arr[n])
          arr[n] = !arr[n]

        } else {
          for (let i = 0; i < arr.length; i++) {
            arr[i] = false
          }
          arr[n] = true
        }

        this.$nextTick(() => {
          this.proShow = []
          this.proShow = JSON.parse(JSON.stringify(arr))
          this.nProShow = n
        })
      },
      showService(n) {
        let arr = JSON.parse(JSON.stringify(this.aShow))
        if (n == this.nShow) {
          console.log(arr[n])
          arr[n] = !arr[n]

        } else {
          for (let i = 0; i < arr.length; i++) {
            arr[i] = false
          }
          arr[n] = true
        }

        this.$nextTick(() => {
          this.aShow = []
          this.aShow = JSON.parse(JSON.stringify(arr))
          this.nShow = n
        })
      }
    },
    data() {
      let vm = this;
      return {
        oData: null,
        tab1: 0,
        tab2: 0,
        tab3: 0,
        tab4: 0,
        aShow: [true, false, false, false, false, false],
        proShow: [true, false],
        nShow: 0,
        nProShow: 0,
        swiperOptions: {
          slidesPerView: 2,
          centeredSlides: true,
        },
        swiperOptions2: {
          initialSlide: 2,
          // loop: true,
          onSlideChangeStart: function (swiper) {
            // console.log(vm)
          }
        },
        swiper: {
          activeIndex: 0,
        },
        swiper2: {
          activeIndex: 0,
        }
      }
    },
    watch: {},
    mounted() {
      this.swiper = this.$refs.mySwiper.swiper
      this.swiper2 = this.$refs.mySwiper2.swiper
      document.getElementById('bannerVideo').play()
      if (this.$route.query.id) {
        document.getElementById(this.$route.query.id).scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        });
      }
    },
    destroyed() {

    }
  }
</script>
<style scoped>
  .Introduction {
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
    width: auto;
    height: calc(41vw/3.75);
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: calc(10vw/3.75);
    font-weight: 400;
    line-height: calc(14vw/3.75);
    margin-top: calc(39vw/3.75);
  }

  .content {
    margin-top: calc(444vw/3.75);
    position: relative;
    z-index: 1;
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



  .proMain .pro-box-1 {
    padding-top: calc(10vw/3.75);
  }

  .proMain .pro-box-1 .title {
    margin-bottom: calc(32vw/3.75);
  }

  .proMain .pro-box-2 {
    padding-bottom: calc(45vw/3.75);
  }

  .proMain .pro-box-1 .bottom {
    border-bottom: 1px solid #999aa7;
  }

  .proMain .pro-box-1 .bottom,
  .proMain .pro-box-2 .bottom {
    height: 0px;
    overflow: hidden;
  }

  .proMain .pro-box-2.cur .bottom {
    height: auto;
    padding-top: calc(12vw/3.75);
    padding-bottom: calc(3vw/3.75);
  }

  .proMain .pro-box-1.cur .title {
    margin-bottom: 0px;
  }

  .proMain .pro-box-1.cur .bottom {
    height: auto;
    padding-bottom: calc(19vw/3.75);
    padding-top: calc(19vw/3.75);
  }

  .proMain .pro-box .title {
    width: calc(339vw/3.75);
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: calc(21vw/3.75);
    font-weight: 400;
    line-height: calc(39vw/3.75);
    margin-top: calc(20vw/3.75);
    position: relative;
  }

  .proMain .pro-box-0 .title {
    line-height: calc(24vw/3.75);
    margin-top: calc(41vw/3.75);
  }

  .proMain .pro-box .title .proMain-icon {
    position: absolute;
    right: 0;
    top: calc(7vw/3.75);
    width: calc(21.21vw/3.75);
    height: calc(21.21vw/3.75);
    transition: all .2s;
    -webkit-transition: all .2s;
    transform: rotate(0deg);
  }

  .proMain .pro-box.cur .title .proMain-icon {
    transform: rotate(-45deg);
    transition: all .2s;
    -webkit-transition: all .2s;
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
    margin-top: calc(17vw/3.75);
  }

  .proMain .pro-box .listCon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: calc(35vw/3.75);
    border-bottom: 1px solid #999aa7;
    margin-right: calc(24vw/3.75);
  }



  .proMain .pro-box .listCon_0 {
    border-top: 1px solid #999aa7;
    height: calc(47vw/3.75);
  }

  .proMain .pro-box .listCon_1 {
    height: calc(47vw/3.75);
  }

  .proMain .pro-box .listCon_2 {
    height: calc(47vw/3.75);
  }

  .proMain .pro-box .listCon_3 {
    height: calc(71vw/3.75);
  }

  .proMain .pro-box .left {
    opacity: 0.6;
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: calc(12vw/3.75);
    font-weight: 400;
    line-height: calc(12vw/3.75);
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
    font-family: "Faktum-Regular";
    font-size: calc(12vw/3.75);
    font-weight: 400;
    line-height: calc(17vw/3.75);
    margin-right: calc(24vw/3.75);
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
    font-family: "Faktum-Regular";
    font-size: calc(13vw/3.75);
    font-weight: 400;
    line-height: calc(16vw/3.75);
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

  .serviceBox {
    margin: 0px calc(24vw/3.75) 0px calc(23vw/3.75);
  }

  .serviceBox>.name {
    color: #65ecaa;
    font-family: "PingFangSC-Regular";
    font-size: calc(13vw/3.75);
    font-weight: 400;
    line-height: calc(17vw/3.75);
    margin-top: calc(34vw/3.75);
    margin-bottom: calc(16vw/3.75);
  }

  .serviceBox .list {}

  .serviceBox .list .list-box .title {
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: calc(21vw/3.75);
    font-weight: 400;
    line-height: calc(24vw/3.75);
    margin-bottom: calc(19vw/3.75);
  }

  .serviceBox .list .list-box-1 .title {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: calc(28vw/3.75);
    margin-bottom: calc(12vw/3.75);
  }

  .serviceBox .list .list-box .title .p1 {
    opacity: 0.25;
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: calc(13vw/3.75);
    font-weight: 500;
    line-height: calc(14.4vw/3.75);
    margin-top: calc(8vw/3.75);
  }

  .serviceBox .list .list-box .li-title {
    opacity: 0.7956557;
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: calc(15vw/3.75);
    font-weight: 400;
    line-height: calc(13vw/3.75);
    padding: calc(10vw/3.75) 0px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .serviceBox .list .list-box .li-title .service-icon {
    width: calc(16vw/3.75);
    height: calc(15vw/3.75);
    transition: all .2s;
    -webkit-transition: all .2s;
    transform: rotate(0deg);
  }

  .serviceBox .list .list-box .li-box.cur .service-icon {
    transform: rotate(-45deg);
    transition: all .2s;
    -webkit-transition: all .2s;
  }

  .serviceBox .list .list-box .li-box .li-tab>.p2 {
    opacity: 0.4;
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: calc(12vw/3.75);
    font-weight: 400;
    line-height: calc(18vw/3.75);
    margin-top: calc(14vw/3.75);
    margin-bottom: calc(22vw/3.75);
  }

  .serviceBox .list .list-box .li-tab {
    height: 0px;
    overflow: hidden;
  }

  .serviceBox .list .list-box .li-box.cur .li-tab {
    height: auto;
  }

  .serviceBox .list .list-box .li-tab .li-h {
    display: flex;
    justify-content: space-between;
    margin-top: calc(14vw/3.75);
  }

  .serviceBox .list .list-box .li-tab .li-h .li-h-box {
    opacity: 0.25;
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: calc(10vw/3.75);
    font-weight: 400;
    line-height: calc(12vw/3.75);
    /* margin-right: calc(42vw/3.75); */
  }

  .serviceBox .list .list-box .li-tab .li-h .li-h-box:last-child {
    margin-right: 0px;
  }

  .serviceBox .list .list-box .li-tab .li-c .li-c-box {
    opacity: 0.4;
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: calc(12vw/3.75);
    font-weight: 400;
    line-height: calc(18vw/3.75);
    margin-top: calc(9vw/3.75);
  }


  .serviceBox .list .list-box .li-box .li-tab>img {
    width: calc(214vw/3.75);
    height: auto;
    display: block;
    margin: 0px auto;
    margin-top: calc(30vw/3.75);
    margin-bottom: calc(48vw/3.75);
  }

  .serviceBox .list .list-box .li-tab .li-h .li-h-box.cur {
    opacity: 0.6;
  }

  .serviceBox .list .list-box .li-tab .li-h .li-h-box.cur span {
    border-bottom: 1px solid #65ecaa;
  }

  .serviceBox .list .list-box .li-box {
    border-bottom: 1px solid #999aa7;
  }

  .serviceBox .list .list-box .li-box-0 {
    border-top: 1px solid #999aa7;
  }

  .serviceBox .list .list-box-1 .li-box-0 .li-tab .li-c .li-c-box{
    margin-top: calc(17vw/3.75);
  }

  .productBox {
    margin-top: calc(35vw/3.75);
  }

  .productBox>.name {
    color: #65ecaa;
    font-family: "PingFangSC-Regular";
    font-size: calc(13vw/3.75);
    font-weight: 400;
    line-height: calc(14.4vw/3.75);
    padding-left: calc(23vw/3.75);
  }

  .productBox>.h2 {
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(24vw/3.75);
    font-weight: 400;
    line-height: calc(35vw/3.75);
    padding-left: calc(23vw/3.75);
    margin-top: calc(7vw/3.75);
    margin-bottom: calc(64vw/3.75);
  }



  .productBox .productImg {
    width: calc(185vw/3.75);
    height: calc(238vw/3.75);
    border-radius: calc(10vw/3.75);
    border: solid 1px #e7e8f2;
    overflow: hidden;
    position: relative;
  }

  .productBox .productImg img {
    width: 100%;
    height: auto;
    display: block;
  }

  .productBox .productImg .title1 {
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: calc(13vw/3.75);
    font-weight: 400;
    line-height: calc(16vw/3.75);
    margin-top: calc(10vw/3.75);
    padding-left: calc(10vw/3.75);
  }

  .productBox .productImg .title11 {
    opacity: 0.6;
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: calc(10vw/3.75);
    font-weight: 400;
    line-height: calc(13vw/3.75);
    padding-left: calc(10vw/3.75);
  }

  .productBox .productImg .imgBj {
    height: calc(11vw/3.75);
    background: #65ecaa;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }

  .productBox .swiper-slide {
    width: auto !important;
    margin-right: calc(20vw/3.75);
  }


  .productBox .bottomBox {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: calc(84vw/3.75);
    margin-bottom: calc(69vw/3.75);
  }

  .productBox .bottomBox span {
    position: relative;
    opacity: 0.3;
    width: calc(7vw/3.75);
    height: calc(16vw/3.75);
    color: #383a50;
    font-family: "PingFang SC Medium";
    font-size: calc(12vw/3.75);
    font-weight: 400;
    line-height: calc(14.4vw/3.75);
    margin-right: calc(17vw/3.75);
  }

  .productBox .bottomBox span.cur {
    opacity: 0.8;
  }

  .productBox .bottomBox span i {
    opacity: 0.8;
    width: calc(7vw/3.75);
    height: 1px;
    background: #383a50;
  }

  .productBox .bottomBox span.cur i {
    display: block;
  }

  .productBox .productCon {
    margin: 0px calc(24vw/3.75) 0px calc(23vw/3.75);
    height: 0px;
    overflow: hidden;
    opacity: 0;
    transition: opacity .6s;
    -webkit-transition: opacity .6s;
  }

  .productBox .productCon.cur {
    opacity: 1;
    height: auto;
    min-height: calc(161vw/3.75);
    transition: opacity .6s;
    -webkit-transition: opacity .6s;
  }

  .productBox .productCon .title {
    opacity: 0.8;
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: calc(15vw/3.75);
    font-weight: 400;
  }

  .productBox .productCon .p1 {
    opacity: 0.4;
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: calc(12vw/3.75);
    font-weight: 400;
    line-height: calc(18vw/3.75);
    margin-top: calc(14vw/3.75);
  }


  .productBox .fgx {
    width: calc(328vw/3.75);
    border-bottom: 1px solid #999aa7;
    margin-left: calc(23vw/3.75);
  }

  .innovativeService {
    margin: 0px calc(24vw/3.75) 0px calc(23vw/3.75);
    border-bottom: 1px solid #999aa7;
  }

  .innovativeService .h1 {
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: calc(15vw/3.75);
    font-weight: 400;
    line-height: calc(18vw/3.75);
    margin-top: calc(28vw/3.75);
  }

  .innovativeService .p1 {
    opacity: 0.6;
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: calc(12vw/3.75);
    font-weight: 400;
    line-height: calc(18vw/3.75);
    margin-top: calc(14vw/3.75);
  }


  .innovativeService .bottomBox {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: calc(112vw/3.75);
    margin-bottom: calc(54vw/3.75);
  }

  .innovativeService .bottomBox span {
    position: relative;
    opacity: 0.3;
    width: calc(7vw/3.75);
    height: calc(16vw/3.75);
    color: #383a50;
    font-family: "PingFang SC Medium";
    font-size: calc(12vw/3.75);
    font-weight: 400;
    line-height: calc(14.4vw/3.75);
    margin-right: calc(17vw/3.75);
  }

  .innovativeService .bottomBox span.cur {
    opacity: 0.8;
  }

  .innovativeService .bottomBox span i {
    opacity: 0.8;
    width: calc(7vw/3.75);
    height: 1px;
    background: #383a50;
  }

  .innovativeService .bottomBox span.cur i {
    display: block;
  }

  .brand {
    margin: 0px calc(24vw/3.75) 0px calc(23vw/3.75);
    border-bottom: 1px solid #999aa7;
    margin-top: calc(20vw/3.75);
  }

  .brand .title {
    color: #2c2d3f;
    font-family: "Faktum-Regular";
    font-size: calc(15vw/3.75);
    font-weight: 400;
    line-height: calc(39vw/3.75);
  }

  .brand .tabH {
    display: flex;
    margin-top: calc(8vw/3.75);
    align-items: center;
    justify-content: space-between;
  }

  .brand .tabH .list-h {
    opacity: 0.3;
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: calc(10vw/3.75);
    font-weight: 400;
    line-height: calc(18vw/3.75);
    /* margin-right: calc(40vw/3.75); */
  }

  .brand .tabH .list-h.cur {
    opacity: 0.8;
    border-bottom: 1px solid #65ecaa;
  }

  .brand .tabH .list-h:last-child {
    margin-right: 0px;
  }

  .brand .list-c {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-top: calc(44vw/3.75);
  }

  .brand .list-c>div {
    height: calc(40vw/3.75);
    width: 33.33%;
    text-align: center;
    overflow: hidden;
    margin-bottom: calc(30vw/3.75);
  }

  .brand .list-c>div img {
    width: calc(74vw/3.75);
    display: block;
    height: calc(40vw/3.75);
  }

  .contact {
    padding: 0px calc(24vw/3.75) 0px calc(23vw/3.75);
    margin-bottom: calc(56vw/3.75);
    margin-top: calc(32vw/3.75);

  }

  .contact .h1 {
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: calc(15vw/3.75);
    font-weight: 400;
    line-height: calc(14vw/3.75);
  }

  .contact .p1 {
    opacity: 0.8;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(12vw/3.75);
    font-weight: 400;
    line-height: calc(18vw/3.75);
    margin-top: calc(37vw/3.75);
  }

  .contact .mailbox {
    color: #65ecaa;
    font-family: "Faktum-Regular";
    font-size: calc(24vw/3.75);
    font-weight: 400;
    line-height: calc(23vw/3.75);
    display: inline-block;
    border-bottom: 2px solid #7ccca5;
    text-decoration: none;
    margin-top: calc(43vw/3.75);
  }
</style>
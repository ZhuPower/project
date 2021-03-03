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
        <div class="pro-box" :class="{['pro-box-'+index]:true,'cur':item.show}" v-for="(item,index) in oData.proMain">
          <div class="title">
            <p v-html="item.title"></p>
            <p class="p1" v-if="item.p1" v-html="item.p1"></p>
            <img src="../assets/proMain-icon.png" class="proMain-icon" @click="showPro(index)" v-if="index>0" />
          </div>
          <div class="list" v-if="(item.content instanceof Array)">
            <div class="listCon" v-for="(item2,index2) in item.content">
              <div class="left" v-html="item2"></div>
              <div class="right">0{{index}}</div>
            </div>
          </div>
          <div class="bottom" :style="{height: item.show ? (item.height ? item.height + 'px' : 'auto' )  : '0px' }"
            v-else>
            <div v-html="item.content"></div>
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
        <div class="name">服务</div>
        <div class="list">
          <div class="list-box" :class="{['list-box-'+index]:true}" v-for="(item,index) in oData.serviceList.list">
            <div class="title">
              <p v-html="item.p1"></p>
              <p class="p1" v-if="item.p2" v-html="item.p2"></p>
            </div>
            <div class="li-box" :class="{['li-box-'+index2]:true,'cur':item.nTab == index2}"
              v-for="(item2,index2) in item.serviceTxt">
              <div class="li-title">
                <p v-html="item2.title"></p>
                <img src="../assets/service-icon.png" class="service-icon" @click="showService(index,index2)" />
              </div>
              <div class="li-tab"
                :style="{height: (item.nTab == index2) ? (item2.height ? item2.height + 'px' : 'auto' )  : '0px' }">
                <div>
                  <div class="li-h" v-if="item2.tabH.length>0">
                    <div class="li-h-box" v-for="(item3,index3) in item2.tabH" :class="{'cur':item2.nTab==index3}"
                      @click="pickService(index,index2,index3)" v-html="item3"></div>
                  </div>
                  <div class="li-c">
                    <div class="li-c-box" v-for="(item3,index3) in item2.tabC" v-if="item2.nTab==index3" v-html="item3">
                    </div>
                  </div>
                </div>
                <img :src="item2.src" />
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
          <div class="title">独树一帜的美至数据银行</div>
          <div class="p1">美至科技通过建立消费品细分行业模型，结合投资机构的个性化需求，更早更准确地挖掘投资标的。</div>
        </div>
        <div class="productCon" :class="{'cur':swiper.activeIndex ==1}">
          <div class="title">创新的商业智能决策系统</div>
          <div class="p1">美至科技利用大数据+AI技术，自研开发的商业智能决策系统。无论是行业分析，品类策略，还是渠道战术，竞争分析，GroPilot水晶球让决策者利用先进技术洞察先机。</div>
        </div>
        <div class="productCon" :class="{'cur':swiper.activeIndex ==2}">
          <div class="title">数据科学驱动的增长工具</div>
          <div class="p1">精益化消费者资产管理系统：利用算法模型将消费者聚类分组，实现“千人千面”的消费者价值维护，从而提升消费者生命价值（CLV），驱动业绩增长。</div>
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
        <div class="p1">随时联系我们的咨询团队，我们会根据您所在行业，提供一份见解独到的洞察报告。请关注我们的微信公众号“美至科技”，或者发送电邮至：</div>
        <a href="javascript:;" class="mailbox" v-html="oData.contact.mail"></a>
      </div>
    </div>
    <foot />
  </div>

</template>

<script>
  import { oData } from "@/data/index-data4.js";
  import topNav from "../components/topNav2";
  import foot from "../components/foot2";
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

      this.oData = oData

      this.oData.innovativeService.list.reverse()

      this.oData.bannerVideo.src = require('../assets/header11.mp4')

      this.oData.serviceList.list[0].serviceTxt[0].src = require('../assets/service-1-001.gif')
      this.oData.serviceList.list[0].serviceTxt[1].src = require('../assets/service-1-002.gif')
      this.oData.serviceList.list[0].serviceTxt[2].src = require('../assets/service-1-003.gif')
      this.oData.serviceList.list[1].serviceTxt[0].src = require('../assets/service-2-001.gif')
      this.oData.serviceList.list[1].serviceTxt[1].src = require('../assets/service-2-002.gif')
      this.oData.serviceList.list[1].serviceTxt[2].src = require('../assets/service-2-003.gif')

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
      pickBrand(n) {
        this.oData.brand.nTab = n
      },
      pickService(n1, n2, n3) {
        this.oData.serviceList.list[n1].serviceTxt[n2].nTab = n3
      },
      showPro(n) {

        let arr = this.oData.proMain
        if (n == this.nProShow) {
          arr[n].show = !arr[n].show

        } else {
          for (let i = 0; i < arr.length; i++) {
            arr[i].show = false
          }
          arr[n].show = true
        }

        this.nProShow = n

      },
      showService(n1, n2) {

        let arr = this.oData.serviceList.list
        for (let i = 0; i < arr.length; i++) {
          if (i == n1) {
            if (arr[i].nTab == n2) {
              arr[i].nTab = -1
            } else {
              arr[i].nTab = n2
            }

          } else {
            arr[i].nTab = -1
          }
        }
      }
    },
    data() {
      let vm = this;
      return {
        oData: null,
        nProShow: 1,
        swiperOptions: {
          // effect: 'coverflow',
          slidesPerView: 2,
          centeredSlides: true,
          // coverflowEffect: {
          //   rotate: 10,
          //   stretch: 20,
          //   depth: 10,
          //   // modifier: 2,
          //   slideShadows: false
          // },
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

      setTimeout(() => {
        let proBox = document.getElementsByClassName('pro-box')
        proBox.forEach((item, index) => {
          if (index > 0) {

            let h = item.children[1].offsetHeight + (document.body.clientWidth * 30 / 375)
            this.oData.proMain[index].height = h

            if (this.nProShow != index) {
              this.oData.proMain[index].show = false
            }
          }
        })

        let listBox = document.getElementsByClassName('list-box')

        listBox.forEach((item, index) => {

          let liBox = item.getElementsByClassName('li-box')

          liBox.forEach((item2, index2) => {

            let h = item2.children[1].children[0].offsetHeight + (document.body.clientWidth * 319 / 375)

            this.oData.serviceList.list[index].serviceTxt[index2].height = h

            if (this.oData.serviceList.list[index].nTab != index2) {
              this.oData.serviceList.list[index].serviceTxt[index2].show = false
            }
          })
        })

      }, 100);

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

  .proMain .pro-box-1 .bottom {
    border-bottom: 1px solid #999aa7;
  }

  .proMain .pro-box-1 .bottom,
  .proMain .pro-box-2 .bottom {
    overflow: hidden;
    transition: height .2s;
    -webkit-transition: height .2s;
  }

  .proMain .pro-box-1.cur .bottom,
  .proMain .pro-box-2.cur .bottom {
    transition: height .2s;
    -webkit-transition: height .2s;
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
    position: relative;
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
    margin-top: calc(34vw/3.75);
  }

  .proMain .pro-box .listCon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: calc(35vw/3.75);
    border-bottom: 1px solid #999aa7;
    margin-right: calc(24vw/3.75);
  }


  .proMain .pro-box .listCon:first-child {
    border-top: 1px solid #999aa7;
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
    font-family: "PingFangSC-Regular";
    font-size: calc(24vw/3.75);
    font-weight: 400;
    line-height: calc(36vw/3.75);
    min-height: calc(118vw/3.75);
  }

  .serviceBox .list .list-box-1 .title {
    display: flex;
    align-items: center;
  }

  .serviceBox .list .list-box .title .p1 {
    opacity: 0.25;
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: calc(13vw/3.75);
    font-weight: 500;
    line-height: calc(14.4vw/3.75);
  }

  .serviceBox .list .list-box .li-title {
    opacity: 0.8;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(18vw/3.75);
    font-weight: 400;
    line-height: calc(39vw/3.75);
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
    font-family: "PingFangSC-Regular";
    font-size: calc(13vw/3.75);
    font-weight: 400;
    line-height: calc(24vw/3.75);
    margin-top: calc(-4vw/3.75);
    margin-bottom: calc(16vw/3.75);
  }

  .serviceBox .list .list-box .li-tab {
    height: 0px;
    overflow: hidden;
    transition: height .2s;
    -webkit-transition: height .2s;
  }

  .serviceBox .list .list-box .li-box.cur .li-tab {
    transition: height .2s;
    -webkit-transition: height .2s;
  }

  .serviceBox .list .list-box .li-tab .li-h {
    display: flex;
  }

  .serviceBox .list .list-box .li-tab .li-h .li-h-box {
    opacity: 0.25;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(13vw/3.75);
    font-weight: 400;
    line-height: calc(18vw/3.75);
    margin-right: calc(42vw/3.75);
  }

  .serviceBox .list .list-box .li-tab .li-h .li-h-box:last-child {
    margin-right: 0px;
  }

  .serviceBox .list .list-box .li-tab .li-c .li-c-box {
    opacity: 0.4;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(13vw/3.75);
    font-weight: 400;
    line-height: calc(24vw/3.75);
    margin-top: calc(15vw/3.75);
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
    border-bottom: 1px solid #65ecaa;
  }

  .serviceBox .list .list-box .li-box {
    border-bottom: 1px solid #999aa7;
  }

  .serviceBox .list .list-box .li-box-0 {
    border-top: 1px solid #999aa7;
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
    font-family: "PingFangSC-Regular";
    font-size: calc(18vw/3.75);
    font-weight: 400;
    line-height: calc(27vw/3.75);
  }

  .productBox .productCon .p1 {
    opacity: 0.4;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(12vw/3.75);
    font-weight: 400;
    line-height: calc(24vw/3.75);
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
    font-family: "PingFangSC-Regular";
    font-size: calc(18vw/3.75);
    font-weight: 400;
    line-height: calc(24vw/3.75);
    margin-top: calc(28vw/3.75);
  }

  .innovativeService .p1 {
    opacity: 0.6;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(13vw/3.75);
    font-weight: 400;
    line-height: calc(24vw/3.75);
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
    font-family: "PingFangSC-Regular";
    font-size: calc(18vw/3.75);
    font-weight: 400;
    line-height: calc(39vw/3.75);
  }

  .brand .tabH {
    display: flex;
    margin-top: calc(8vw/3.75);
  }

  .brand .tabH .list-h {
    opacity: 0.3;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(13vw/3.75);
    font-weight: 400;
    line-height: calc(18vw/3.75);
    margin-right: calc(40vw/3.75);
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
    margin-top: calc(28vw/3.75);

  }

  .contact .h1 {
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(18vw/3.75);
    font-weight: 400;
    line-height: calc(24vw/3.75);
  }

  .contact .p1 {
    opacity: 0.8;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(13vw/3.75);
    font-weight: 400;
    line-height: calc(24vw/3.75);
    margin-top: calc(24vw/3.75);
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
    margin-top: calc(50vw/3.75);
  }
</style>
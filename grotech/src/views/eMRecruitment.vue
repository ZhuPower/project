<template>
  <div class="Recruitment">
    <topNav />
    <!-- 视频 -->
    <div class="bannerVideo">
      <keep-alive>
        <video :src="oData.bannerVideo.src" autoplay loop muted id="bannerVideo">您的浏览器不支持 video 标签。</video>
      </keep-alive>
      <div class="videoTxt">
        <p class="p1">Careers</p>
      </div>
    </div>
    <!-- 介绍 -->
    <div class="proMain">
      <div class="pro-box" v-for="(item,index) in oData.proMain" :class="{'cur':item.show,['pro-box-'+(index+1)]:true}"
        :ref="('pro-box-'+(index+1))">
        <div class="left">
          <div class="left-box">
            <div v-for="(item2,index2) in item.title" class="title" :class="['title_'+index2]"
              :style="{transitionDelay:index2*0.4+'s'}" v-html="item2">
            </div>
          </div>
        </div>
        <div class="right">
          We only hire, reward and appreciate partners who strive for success to ensure a decent performance for
          everyone on our team. We see our relationship as a partnership where we improve and achieve with each other;
          and the knowledge and wisdom of everyone will further shape and develop our culture. If you want to improve
          people’s happiness and achieve great career success by repeating “simple” and correct things, you are more
          than welcome<br/> to join us.
        </div>
      </div>
    </div>
    <div class="atGrotech" ref="atGrotech" :class="{'cur':oData.atGrotech.show}">
      <swiper ref="mySwiper2">
        <swiper-slide v-for="(item,index) in oData.atGrotech.list">
          <div class="p1" v-if="item.p1" v-html="item.p1"></div>
        </swiper-slide>
      </swiper>
      <div class="topBox">
        <div class="x1">KEEP GROWING!</div>
        <div class="c1">We particularly cherish hire and <br /> promote employees with following qualities:</div>
      </div>
      <div class="bottomBox">
        <span v-for="(item,index) in oData.atGrotech.list"
          :class="{'cur':swiper2.activeIndex ==index}">{{index+1}}<i></i></span>
      </div>
    </div>
    <div class="zpBox">
      <div class="h1">Our Positions</div>
    </div>
    <foot />
  </div>
</template>

<script>
  import { oData } from "@/data/recruitment-data3.js";
  import topNav from "../components/topNav3";
  import foot from "../components/efoot2";
  export default {
    components: {
      topNav,
      foot
    },
    created() {
      this.oData = oData

      this.oData.atGrotech.list.splice(0, 1)
      this.oData.bannerVideo.src = require('../assets/header33.mp4')
      this.oData.bannerVideo.iconSrc = require('../assets/icon_2.png')
    },
    computed: {},
    methods: {
    },
    data() {
      return {
        oData: null,
        swiper2: {
          activeIndex: 0
        }
      }
    },
    watch: {},
    mounted() {
      this.swiper2 = this.$refs.mySwiper2.swiper
      document.getElementById('bannerVideo').play()
    },
  }
</script>
<style scoped>
  .bannerVideo {
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  /* .bannerVideo video {
    height: calc(428vw/3.75);
  } */

  .bannerVideo .videoTxt {
    position: absolute;
    left: calc(24vw/3.75);
    bottom: calc(50vw/3.75);
  }

  .bannerVideo .videoTxt .p1 {
    color: #ffffff;
    font-family: "Faktum-Regular";
    font-size: calc(20.3vw/3.75);
    font-weight: 400;
    line-height: calc(29vw/3.75);
  }

  .proMain {
    width: calc(328vw/3.75);
    margin: 0px auto;
    /* padding-top: calc(25vw/3.75); */
  }

  .proMain .pro-box {
    padding-bottom: calc(45vw/3.75);
  }

  .proMain .left {
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: calc(21vw/3.75);
    font-weight: 400;
    line-height: calc(24vw/3.75);
    margin-bottom: calc(30vw/3.75);
    margin-top: calc(57vw/3.75);
  }

  .proMain .right {
    opacity: 0.6;
    color: #33343e;
    font-family: "Faktum-Regular";
    font-size: calc(12vw/3.75);
    font-weight: 400;
    line-height: calc(18vw/3.75);
  }

  .atGrotech {
    position: relative;
  }

  .topBox {
    position: absolute;
    left: 0;
    top: calc(16vw/3.75);
    z-index: 1;
    width: 100%;
    padding-left: calc(24vw/3.75);
    box-sizing: border-box;
  }

  .topBox .x1 {
    color: #ffffff;
    font-family: 'Faktum-Bold';
    font-size: calc(6vw/3.75);
    font-weight: 700;
    line-height: calc(6.658333vw/3.75);
    letter-spacing: calc(0.1875vw/3.75);
    height: calc(15vw/3.75);
  }

  .topBox .c1 {
    color: rgba(255, 255, 255, 0.91);
    font-family: "Faktum-Regular";
    font-size: calc(15vw/3.75);
    font-weight: 400;
    line-height: calc(18vw/3.75);
    margin-top: calc(6vw/3.75);
  }

  .swiper-slide {
    width: 100%;
    height: calc(208vw/3.75);
    overflow: hidden;
  }

  .swiper-container {
    background: url('../assets/atGrotechBox.png') no-repeat;
    background-size: 100% 100%;
  }

  .atGrotech .p1 {
    color: #ffffff;
    font-family: "Faktum-Regular";
    font-size: calc(12vw/3.75);
    font-weight: 400;
    line-height: calc(15vw/3.75);
    padding-left: calc(24vw/3.75);
    margin-top: calc(155vw/3.75);
  }

  .atGrotech .bottomBox {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: calc(15vw/3.75);
  }

  .atGrotech .bottomBox span {
    position: relative;
    opacity: 0.3;
    width: calc(7vw/3.75);
    height: calc(16vw/3.75);
    color: #383a50;
    font-family: "PingFangSC-Medium";
    font-size: calc(12vw/3.75);
    font-weight: 400;
    line-height: calc(14.4vw/3.75);
    margin-right: calc(17vw/3.75);
  }

  .atGrotech .bottomBox span.cur {
    opacity: 0.8;
  }

  .atGrotech .bottomBox span i {
    opacity: 0.8;
    width: calc(7vw/3.75);
    height: calc(1vw/3.75);
    background: #383a50;
  }

  .atGrotech .bottomBox span.cur i {
    display: block;
  }

  .zpBox {
    margin-top: calc(90vw/3.75);
    min-height: calc(334vw/3.75);
  }

  .zpBox .h1 {
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: calc(21vw/3.75);
    font-weight: 400;
    line-height: calc(24vw/3.75);
    padding-left: calc(24vw/3.75);
  }
</style>
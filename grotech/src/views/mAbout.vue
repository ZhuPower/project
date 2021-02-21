<template>
  <div class="About">
    <topNav />
    <!-- 视频 -->
    <div class="bannerVideo">
      <video :src="oData.bannerVideo.src" autoplay loop muted>您的浏览器不支持 video 标签。</video>
      <div class="videoTxt">
        <p class="p1">关于美至</p>
      </div>
    </div>
    <!-- 介绍 -->
    <div class="proMain">
      <div class="pro-box" v-for="(item,index) in oData.proMain" :class="{'cur':item.show,['pro-box-'+(index+1)]:true}"
        :ref="('pro-box-'+(index+1))">
        <div class="left">
          <div class="left-box">
            <div v-for="(item2,index2) in item.title" class="title" :class="['title_'+index2]" v-html="item2">
            </div>
          </div>
        </div>
        <div class="right" v-html="item.content"></div>
      </div>
    </div>
    <!-- 认识团队 -->
    <div class="team">
      <img src="../assets/photo.png">
    </div>
    <!-- 愿景 -->
    <div class="VisionValue">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item,index) in oData.visionValue.list">
          <div class="visionBox">
            <div class="h1" v-html="item.h1"></div>
            <div class="h2" v-html="item.h2"></div>
            <div class="p2" v-html="item.p2"></div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
  import { oData } from "@/data/about-data.js";
  import { oData2 } from "@/data/about-data2.js";
  import { isElementNotInViewport } from "@/utils/index.js";
  import topNav from "../components/topNav2";
  export default {
    components: {
      topNav
    },
    created() {
      if (this.$route.name.indexOf('en') == 0) {
        this.oData = oData2
      } else {
        this.oData = oData
      }
      this.oData.bannerVideo.src = require('../assets/header22.mp4')
      this.oData.team.src = require('../assets/team.png')
      this.oData.visionValue.src = require('../assets/banner.mp4')
      console.log(oData)
    },
    computed: {},
    methods: {
      getTemCur(n) {
        this.temCur = n
      }
    },
    data() {
      return {
        oData: null,
        w: 0,
        isTem: false,
        swiperOptions: {
          slidesPerView: 'auto'
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
    }
  }
</script>
<style scoped>
  .bannerVideo {
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .bannerVideo .videoTxt {
    position: absolute;
    left: calc(24vw/3.75);
    bottom: calc(54vw/3.75);
  }

  .bannerVideo .videoTxt .p1 {
    color: #ffffff;
    font-family: "PingFangSC-Regular";
    font-size: calc(20.3vw/3.75);
    font-weight: 400;
    line-height: calc(29vw/3.75);
  }

  .proMain {
    width: calc(328vw/3.75);
    margin: 0px auto;
    padding-top: calc(25vw/3.75);
  }

  .proMain .pro-box-1 {
    border-bottom: 1px solid #999aa7;
  }

  .proMain .pro-box {
    padding-bottom: calc(23vw/3.75);
  }

  .proMain .left {
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(24vw/3.75);
    font-weight: 400;
    line-height: calc(36vw/3.75);
    margin-bottom: calc(46vw/3.75);
    margin-top: calc(18vw/3.75);
  }

  .proMain .right {
    opacity: 0.6;
    color: #33343e;
    font-family: "PingFangSC-Regular";
    font-size: calc(13vw/3.75);
    font-weight: 400;
    line-height: calc(24vw/3.75);
  }

  .team {
    margin-top: calc(30vw/3.75);
  }

  .team img {
    width: 100%;
    height: auto;
    display: block;
  }

  .VisionValue {
    margin-top: calc(144vw/3.75);
    margin-bottom: calc(164vw/3.75);
    padding-left: calc(23vw/3.75);
    overflow: hidden;
  }

  .VisionValue .visionBox {
    width: calc(286vw/3.75);
    height: calc(156vw/3.75);
    background: url('../assets/visionBox.png') no-repeat;
    background-size: 100% 100%;
    box-sizing: border-box;
    padding-left: calc(14vw/3.75);
    overflow: hidden;
  }

  .VisionValue .visionBox .h1 {
    color: rgba(249, 245, 245, 0.91);
    font-family: "Faktum-Regular";
    font-size: calc(10vw/3.75);
    font-weight: 400;
    line-height: calc(19.31224vw/3.75);
    margin-top: calc(9vw/3.75);
  }

  .VisionValue .visionBox .h2 {
    color: rgba(249, 245, 245, 0.91);
    font-family: "PingFangSC-Regular";
    font-size: calc(13vw/3.75);
    font-weight: 400;
    line-height: calc(19.31224vw/3.75);
    margin-top: calc(2vw/3.75);
  }

  .VisionValue .visionBox .p2 {
    color: rgba(249, 245, 245, 0.91);
    font-family: "PingFangSC-Regular";
    font-size: calc(10vw/3.75);
    font-weight: 400;
    line-height: calc(14vw/3.75);
    margin-top: calc(51vw/3.75);
  }

  .VisionValue .swiper-slide {
    width: auto !important;
    margin-right: calc(19vw/3.75);
  }

  .VisionValue .swiper-slide:last-child {
    margin-right: calc(24vw/3.75);
  }
</style>
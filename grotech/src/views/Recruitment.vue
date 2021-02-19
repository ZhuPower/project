<template>
  <div class="Recruitment">
    <topNav />
    <!-- 视频 -->
    <div class="bannerVideo">
      <video :src="oData.bannerVideo.src" autoplay loop muted>您的浏览器不支持 video 标签。</video>
      <div class="videoTxt">
        <p class="p1" v-html="oData.bannerVideo.p1"></p>
        <div class="h1">
          <div class="icon"><img :src="oData.bannerVideo.iconSrc"></div>
          <div class="txt" v-html="oData.bannerVideo.h1"></div>
        </div>
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
        <div class="right" v-html="item.content"></div>
      </div>
    </div>
    <div class="atGrotech" ref="atGrotech" :class="{'cur':oData.atGrotech.show}">
      <div class="atList" v-for="(item,index) in oData.atGrotech.list" :class="['atList_'+index]">
        <img src="../assets/img9.png">
        <div class="atInfo">
          <div class="x1" v-if="index > 0">0{{index}}</div>
          <div class="p1" v-if="item.p1" v-html="item.p1"></div>
          <div class="c1" v-if="item.c1" v-html="item.c1"></div>
          <div class="b1" v-html="item.b1"></div>
        </div>
      </div>
    </div>
    <div class="zp"></div>
  </div>
</template>

<script>
  import { oData } from "@/data/recruitment-data.js";
  import { oData2 } from "@/data/recruitment-data2.js";
  import topNav from "../components/topNav";
  import { isElementNotInViewport } from "@/utils/index.js";
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
      this.oData.bannerVideo.src = require('../assets/header3.mp4')
      this.oData.bannerVideo.iconSrc = require('../assets/icon_2.png')
    },
    computed: {},
    methods: {
      handleScroll() {
        let that = this
        this.oData.proMain.forEach((item, index) => {
          doSome('pro-box-' + (index + 1), function () {
            that.oData.proMain[index].show = true;
          }, function () {
            that.oData.proMain[index].show = false;
          })
        })


        doSome('atGrotech', function () {
          that.oData.atGrotech.show = true;
        }, function () {
          that.oData.atGrotech.show = false;
        })


        function doSome(str, endFn, endFn2) {
          let _h = document.documentElement.clientHeight
          let _dom = that.$refs[str] || null
          if (_dom && _dom instanceof Array) {
            _dom = _dom[0]
          }
          let _h2 = _dom && _dom.offsetHeight || 0
          //获取滚动距顶部的距离，显示
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

          let _top = _dom && _dom.offsetTop || 0
          let _top2 = _top + _h2

          if (scrollTop >= _top && scrollTop < _top2) {
            endFn && endFn()

          }

          if (_dom && isElementNotInViewport(_dom)) {
            endFn2 && endFn2()
          }
        }

      }
    },
    data() {
      return {
        oData: null,
        isActive: false
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
      window.addEventListener('scroll', this.handleScroll, true); // 监听（绑定）滚轮滚动事件
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll); //离开页面需要移除这个监听的事件
    }
  }
</script>
<style scoped>
  .bannerVideo {
    height: calc(737vw/14.4);
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .bannerVideo .videoTxt {
    position: absolute;
    left: calc(80vw/14.4);
    bottom: calc(55vw/14.4);
  }

  .bannerVideo .videoTxt .p1 {
    color: #ffffff;
    font-family: "PingFangSC-Light";
    font-size: calc(36vw/14.4);
    font-weight: 400;
    line-height: calc(63vw/14.4);
  }

  .bannerVideo .videoTxt .h1 {
    display: flex;
    align-items: center;
    height: calc(32vw/14.4);
    margin-top: calc(77vw/14.4);
  }

  .bannerVideo .videoTxt .h1 .icon {
    width: calc(30vw/14.4);
    height: calc(30vw/14.4);
    border: solid 1px #fff;
    border-radius: 50%;
    margin-right: calc(38vw/14.4);
    text-align: center;
    overflow: hidden;
  }

  .bannerVideo .videoTxt .h1 .icon img {
    animation: myfirst .3s ease 0s infinite alternate;
    -moz-animation: myfirst .3s ease 0s infinite alternate;
    /* Firefox */
    -webkit-animation: myfirst .3s ease 0s infinite alternate;
    /* Safari and Chrome */
    -o-animation: myfirst .3s ease 0s infinite alternate;
    /* Opera */
  }

  .bannerVideo .videoTxt .h1 .txt {
    color: #ffffff;
    font-family: "PingFangSC-Regular";
    font-size: calc(18vw/14.4);
    font-weight: 400;
    line-height: calc(24vw/14.4);
  }

  .proMain {
    margin: 0px calc(80vw/14.4);
    height: calc(520vw/14.4);
  }

  .proMain .pro-box {
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    padding-top: calc(96vw/14.4);
  }


  .proMain .pro-box .left {
    width: 34.375%;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(36vw/14.4);
    font-weight: 400;
    line-height: calc(57vw/14.4);
    letter-spacing: calc(2.5vw/14.4);
  }

  .proMain .left .left-box .title {
    width: 0%;
    overflow: hidden;
    height: calc(57vw/14.4);
  }

  .proMain .pro-box.cur .left .left-box .title {
    transition-property: width;
    -moz-transition-property: width;
    -webkit-transition-property: width;
    -o-transition-property: width;

    transition-duration: .6s;
    -moz-transition-duration: .6s;
    -webkit-transition-duration: .6s;
    -o-transition-duration: .6s;
    width: 100%;
  }

  .proMain .pro-box-1 {
    position: relative;
  }

  .proMain .pro-box-1,
  .proMain .pro-box-1 .right {
    height: calc(520vw/14.4);
    padding-top: calc(96vw/14.4);
    box-sizing: border-box;
  }

  .proMain .pro-box .right {
    width: 65.625%;
    opacity: 0.6;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(21vw/14.4);
    font-weight: 400;
    line-height: calc(42vw/14.4);
    letter-spacing: calc(0.65625vw/14.4);
  }

  .proMain .pro-box-1 .right {
    position: absolute;
    top: 100%;
    opacity: 0;
    right: 0;
  }

  .proMain .pro-box-1.cur .right {
    top: 0%;
    opacity: 1;
    transition: all .6s .4s;
    -moz-transition: all .6s .4s;
    -webkit-transition: all .6s .4s;
    -o-transition: all .6s .4s;
  }

  .atGrotech {
    height: calc(689vw/14.4);
    overflow: hidden;
    display: flex;
  }

  .atGrotech .atList {
    position: relative;
    overflow: hidden;
    height: calc(689vw/14.4);
  }

  .atGrotech .atList_0 {
    width: calc(550vw/14.4);
    z-index: 4;
  }

  .atGrotech .atList_1 {
    width: calc(232vw/14.4);
    margin-left: calc(-232vw/14.4);
    z-index: 3;
  }

  .atGrotech .atList_2 {
    width: calc(234vw/14.4);
    margin-left: calc(-234vw/14.4);
    z-index: 2;
  }

  .atGrotech .atList_3 {
    width: calc(234vw/14.4);
    margin-left: calc(-234vw/14.4);
    z-index: 1;
  }

  .atGrotech .atList_4 {
    width: calc(190vw/14.4);
    margin-left: calc(-190vw/14.4);
  }

  .atGrotech .atList img {
    width: calc(550vw/14.4);
    height: calc(689vw/14.4);
    position: absolute;
    top: 0;
    right: 0;
  }


  .atGrotech.cur .atList {
    transition: all 1s;
    -webkit-transition: all 1s;
    margin-left: 0px;
  }


  /* .atGrotech.cur .atList_1 {}

  .atGrotech.cur .atList_2 {
    transition-delay: 0.1s;
    -moz-transition-delay: 0.1s;
    -webkit-transition-delay: 0.1s;
    -o-transition-delay: 0.1s;
  }

  .atGrotech.cur .atList_3 {
    transition-delay: 0.2s;
    -moz-transition-delay: 0.2s;
    -webkit-transition-delay: 0.2s;
    -o-transition-delay: 0.2s;
  }

  .atGrotech.cur .atList_4 {
    transition-delay: 0.3s;
    -moz-transition-delay: 0.3s;
    -webkit-transition-delay: 0.3s;
    -o-transition-delay: 0.3s;
  } */

  .atGrotech .atList .atInfo {
    position: relative;
    height: calc(689vw/14.4);
    padding-left: calc(12vw/14.4);
    overflow: hidden;
    display: none;
  }

  .atGrotech.cur .atList .atInfo {
    display: block;
  }

  .atGrotech .atList_0 .atInfo {
    display: block;
  }

  .atGrotech .atList_1 .atInfo {
    animation: atList_1 .6s ease .8s both;
    -moz-animation: atList_1 .6s ease .8s both;
    /* Firefox */
    -webkit-animation: atList_1 .6s ease .8s both;
    /* Safari and Chrome */
    -o-animation: atList_1 .6s ease .8s both;
    /* Opera */
  }

  .atGrotech .atList_2 .atInfo {
    animation: atList_1 .6s ease 1s both;
    -moz-animation: atList_1 .6s ease 1s both;
    /* Firefox */
    -webkit-animation: atList_1 .6s ease 1s both;
    /* Safari and Chrome */
    -o-animation: atList_1 .6s ease 1s both;
    /* Opera */
  }

  .atGrotech .atList_3 .atInfo {
    animation: atList_1 .6s ease 1.2s both;
    -moz-animation: atList_1 .6s ease 1.2s both;
    /* Firefox */
    -webkit-animation: atList_1 .6s ease 1.2s both;
    /* Safari and Chrome */
    -o-animation: atList_1 .6s ease 1.2s both;
    /* Opera */
  }

  .atGrotech .atList_4 .atInfo {
    animation: atList_1 .6s ease 1.4s both;
    -moz-animation: atList_1 .6s ease 1.4s both;
    /* Firefox */
    -webkit-animation: atList_1 .6s ease 1.4s both;
    /* Safari and Chrome */
    -o-animation: atList_1 .6s ease 1.4s both;
    /* Opera */
  }

  .atGrotech .atList:first-child .atInfo {
    padding-left: calc(43vw/14.4);
  }

  .atGrotech .atList .atInfo .h1 {
    color: #ffffff;
    font-family: "Faktum-Regular";
    font-size: calc(17vw/14.4);
    font-weight: 500;
    line-height: calc(25.5vw/14.4);
    letter-spacing: calc(0.53125vw/14.4);
    margin-top: calc(48vw/14.4);
  }

  .atGrotech .atList .atInfo .c1 {
    color: rgba(255, 255, 255, 0.91);
    font-family: "PingFangSC-Bold";
    font-size: calc(36vw/14.4);
    font-weight: 400;
    line-height: calc(62vw/14.4);
    margin-top: calc(102vw/14.4);
  }

  .atGrotech .atList .atInfo .b1 {
    color: #ffffff;
    font-family: "Faktum-Regular";
    font-size: calc(17vw/14.4);
    font-weight: 500;
    line-height: calc(25.5vw/14.4);
    letter-spacing: calc(0.53125vw/14.4);
    position: absolute;
    bottom: calc(35vw/14.4);
  }

  .atGrotech .atList .atInfo .x1 {
    color: #ffffff;
    font-family: "PingFangSC-Semibold";
    font-size: calc(18vw/14.4);
    font-weight: 400;
    line-height: calc(43vw/14.4);
    margin-top: calc(108vw/14.4);
  }

  .atGrotech .atList .atInfo .p1 {
    color: #ffffff;
    font-family: "PingFangSC-Semibold";
    font-size: calc(18vw/14.4);
    font-weight: 400;
    line-height: calc(26vw/14.4);
    letter-spacing: calc(0.5625vw/14.4);
    margin-top: calc(31vw/14.4);
  }

  .zp {
    height: calc(1606vw/14.4);
  }
</style>
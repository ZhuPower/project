<template>
  <div class="About">
    <topNav />
    <!-- 视频 -->
    <div class="bannerVideo">
      <keep-alive>
        <video :src="oData.bannerVideo.src" autoplay loop muted id="bannerVideo">您的浏览器不支持 video 标签。</video>
      </keep-alive>

      <div class="videoTxt">
        <p class="p1" v-html="oData.bannerVideo.p1"></p>
      </div>
    </div>
    <!-- 介绍 -->
    <div class="proMain">
      <div class="pro-box" v-for="(item,index) in oData.proMain" :class="{'cur':item.show,['pro-box-'+(index+1)]:true}"
        :ref="('pro-box-'+(index+1))">
        <div class="left">
          <div class="left-box">
            <div v-for="(item2,index2) in item.title" class="title" :class="['title_'+index2]">
              <div v-for="(item3,index3) in item2"><span
                  :style="{transitionDelay: index2>0 ? ((item.title[index2-1].length + index3)*0.03+'s') : index3*0.03+'s',fontFamily:/^[(A-Za-z)|-]*$/.test(item3) ? 'Faktum-Regular':'inherit'}">{{item3}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="right" v-html="item.content"></div>
      </div>
    </div>
    <!-- 认识团队 -->
    <div class="team">
      <div class="teamMain" ref="teamMain" :class="{'cur':isTem}">
        <div class="temBox2">
          <div class="temImg" v-for="(item,index) in 4 " :class="['temImg_'+(index+1)]">
            <img v-lazy="oData.team.src" />
          </div>
        </div>
        <div class="temBox">
          <div class="temImg" v-for="(item,index) in 5 " :class="['temImg_'+index]">
            <img v-lazy="oData.team.src" />
          </div>
        </div>
      </div>
    </div>
    <!-- 愿景 -->
    <div class="VisionValue">
      <keep-alive>
        <video :src="oData.visionValue.src" autoplay loop muted id="visionVideo">您的浏览器不支持 video 标签。</video>
      </keep-alive>
      <div :class="{'left':index==0,'right':index==1}" v-for="(item,index) in oData.visionValue.list">
        <div class="h1" v-html="item.h1"></div>
        <div class="bottom">
          <div class="h2" v-html="item.h2"></div>
          <div class="p2" v-html="item.p2"></div>
        </div>
      </div>
    </div>
    <foot />
  </div>
</template>

<script>
  import { oData } from "@/data/about-data.js";
  import { oData2 } from "@/data/about-data2.js";
  import { isElementNotInViewport } from "@/utils/index.js";
  import topNav from "../components/topNav";
  import foot from "../components/foot";

  export default {
    components: {
      topNav,
      foot
    },
    created() {
      if (this.$route.name.indexOf('en') == 0) {
        this.oData = oData2
      } else {
        this.oData = oData
      }
      this.oData.bannerVideo.src = require('../assets/header2.mp4')
      this.oData.team.src = require('../assets/team.png')
      this.oData.visionValue.src = require('../assets/banner.mp4')
      console.log(oData)
    },
    computed: {},
    methods: {
      getTemCur(n) {
        this.temCur = n
      },
      handleScroll() {
        let that = this
        this.oData.proMain.forEach((item, index) => {
          doSome('pro-box-' + (index + 1), function () {
            that.oData.proMain[index].show = true;
          }, function () {
            that.oData.proMain[index].show = false;
          })
        })

        doSome('teamMain', function () {
          that.isTem = true;
        }, function () {
          that.isTem = false;
        })


        function doSome(str, endFn, endFn2) {
          let _h0 = document.getElementById('navMain').offsetHeight
          let _h = document.documentElement.clientHeight
          let _dom = that.$refs[str] || null
          if (_dom && _dom instanceof Array) {
            _dom = _dom[0]
          }
          let _h2 = _dom && _dom.offsetHeight || 0
          //获取滚动距顶部的距离，显示
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          let _top = (_dom && _dom.offsetTop - _h / 3 - _h0) || 0
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
        w: 0,
        isTem: false
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
      this.w = this.$refs.teamMain.offsetWidth
      document.getElementById('bannerVideo').play()
      document.getElementById('visionVideo').play()
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

  .bannerVideo video{
    height: calc(737vw/14.4);
  }

  .bannerVideo .videoTxt {
    position: absolute;
    left: calc(80vw/14.4);
    bottom: calc(168vw/14.4);
  }

  .bannerVideo .videoTxt .p1 {
    color: #ffffff;
    font-family: "PingFangSC-Regular";
    font-size: calc(36vw/14.4);
    font-weight: 400;
    line-height: calc(54vw/14.4);
  }

  .proMain {
    margin-left: calc(80vw/14.4);
    overflow: hidden;
  }

  .proMain .pro-box {
    display: flex;
    overflow: hidden;
    position: relative;
  }

  .proMain .pro-box-1,
  .proMain .pro-box-1 .right {
    height: calc(559vw/14.4);
    padding-top: calc(95vw/14.4);
    box-sizing: border-box;
  }

  .proMain .pro-box-1 .right {
    border-bottom: 1px solid #979797;
  }

  .proMain .pro-box-2,
  .proMain .pro-box-2 .right {
    height: calc(424vw/14.4);
    padding-top: calc(88vw/14.4);
    box-sizing: border-box;
  }

  .proMain .pro-box .left {
    width: calc(440vw/14.4);
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(36vw/14.4);
    font-weight: 400;
    line-height: calc(57vw/14.4);
    letter-spacing: calc(2.5vw/14.4);
  }

  .proMain .left .left-box .title {
    overflow: hidden;
    height: calc(57vw/14.4);
    display: flex;
  }

  .proMain .left .left-box .title>div {
    overflow: hidden;
  }

  .proMain .left .left-box .title>div>span {
    position: relative;
    left: -100%;
  }

  .proMain .pro-box.cur .left .left-box .title>div>span {
    left: 0px;
    transition-property: all;
    -moz-transition-property: all;
    /* Firefox 4 */
    -webkit-transition-property: all;
    /* Safari 和 Chrome */
    -o-transition-property: all;
    /* Opera */

    transition-duration: .11s;
    -moz-transition-duration: .11s;
    /* Firefox 4 */
    -webkit-transition-duration: .11s;
    /* Safari 和 Chrome */
    -o-transition-duration: .11s;
    /* Opera */
    /* width: 100%; */
  }
  .proMain .pro-box .right {
    opacity: 0.6;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(21vw/14.4);
    font-weight: 400;
    line-height: calc(42vw/14.4);
    letter-spacing: calc(0.65625vw/14.4);
  }

  .proMain .pro-box-1 .right {
    width: calc(842vw/14.4);
  }


  .proMain .pro-box-1 .right,
  .proMain .pro-box-2 .right {
    left: calc(440vw/14.4);
    position: absolute;
    top: calc(45vw/14.4);
    opacity: 0;
  }

  .proMain .pro-box-1.cur .right,
  .proMain .pro-box-2.cur .right {
    top: 0%;
    opacity: 0.6;
    transition: all .6s .3s;
    -moz-transition: all .6s .3s;
    -webkit-transition: all .6s .3s;
    -o-transition: all .6s .3s;
  }

  .VisionValue {
    margin: 0px auto;
    width: calc(1275vw/14.4);
    height: calc(608vw/14.4);
    border-radius: calc(28vw/14.4);
    overflow: hidden;
    position: relative;
    display: flex;
    margin-top: calc(284vw/14.4);
    margin-bottom: calc(531vw/14.4);
  }

  .VisionValue video {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
  }

  .VisionValue>div {
    position: relative;
    width: 50%;
    box-sizing: border-box;
    height: calc(608vw/14.4);
  }

  .VisionValue .left {
    border-right: 1px solid #fff;
    padding-left: calc(42vw/14.4);
  }

  .VisionValue .right {
    padding-left: calc(39vw/14.4);
  }

  .VisionValue>div .bottom {
    width: calc(334vw/14.4);
    height: calc(262vw/14.4);
    position: absolute;
    left: calc(42vw/14.4);
    bottom: calc(-171vw/14.4);
    transition: all .6s;
    -webkit-transition: all .6s;
  }

  .VisionValue>div .h1 {
    color: rgba(249, 245, 245, 0.91);
    font-family: "Faktum-Regular";
    font-size: calc(24vw/14.4);
    font-weight: 400;
    line-height: calc(72vw/14.4);
  }

  .VisionValue>div .bottom:hover {
    bottom: 0;
    transition: all .6s;
    -webkit-transition: all .6s;
  }

  .VisionValue>div .h2 {
    color: rgba(249, 245, 245, 0.91);
    font-family: "PingFangSC-Regular";
    font-size: calc(36vw/14.4);
    font-weight: 400;
    line-height: calc(72vw/14.4);
  }

  .VisionValue>div .p2 {
    color: rgba(255, 255, 255, 0.91);
    font-family: "PingFangSC-Regular";
    font-size: calc(21vw/14.4);
    font-weight: 400;
    line-height: calc(36vw/14.4);
    margin-top: calc(27vw/14.4);
  }

  .team {
    height: calc(830vw/14.4);
    overflow: hidden;
  }

  .team .h1 {
    margin-left: calc(80vw/14.4);
    display: flex;
    align-items: center;
    height: calc(32vw/14.4);
  }

  .team .h1 .icon {
    width: calc(30vw/14.4);
    height: calc(30vw/14.4);
    border: solid 1px #8765ed;
    border-radius: 50%;
    margin-right: calc(38vw/14.4);
    text-align: center;
    overflow: hidden;
  }

  .team .h1 .icon img {
    animation: myfirst .3s ease 0s infinite alternate;
    -moz-animation: myfirst .3s ease 0s infinite alternate;
    /* Firefox */
    -webkit-animation: myfirst .3s ease 0s infinite alternate;
    /* Safari and Chrome */
    -o-animation: myfirst .3s ease 0s infinite alternate;
    /* Opera */
  }

  .team .h1 .txt {
    color: #8765ed;
    font-family: "PingFangSC-Regular";
    font-size: calc(25vw/14.4);
    font-weight: 400;
  }

  .team .teamMain {
    position: relative;
    overflow: hidden;
    width: 100%;
  }

  .team .temBox2 {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    display: flex;
    justify-content: flex-end;
  }

  .temBox2 .temImg {
    overflow: hidden;
  }

  .team .temBox {
    overflow: hidden;
    position: relative;
    width: calc(1440vw/14.4);
  }

  .team .temBox .temImg {
    float: left;
  }

  .team .temBox2,
  .team .temBox {
    height: calc(830vw/14.4);
  }

  .temImg_0 {
    width: calc(683vw/14.4);
  }

  .temImg_1,
  .temImg_2,
  .temImg_3 {
    width: calc(200vw/14.4);
  }

  .temImg_4 {
    width: calc(157vw/14.4);
  }

  .temImg img {
    width: calc(1440vw/14.4);
  }


  .temBox2 .temImg_1 img {
    margin-left: calc(-552vw/14.4);
  }

  .temBox2 .temImg_2 img {
    margin-left: calc(-556vw/14.4);
  }

  .temBox2 .temImg_3 img {
    margin-left: calc(-576vw/14.4);
  }

  .temBox2 .temImg_4 img {
    margin-left: calc(-597vw/14.4);
  }

  .temBox .temImg_1 img {
    margin-left: calc(-683vw/14.4);
  }

  .temBox .temImg_2 img {
    margin-left: calc(-883vw/14.4);
  }

  .temBox .temImg_3 img {
    margin-left: calc(-1083vw/14.4);
  }

  .temBox .temImg_4 img {
    margin-left: calc(-1283vw/14.4);
  }

  .temBox .temImg {
    position: relative;
    overflow: hidden;
    transition-property: all;
    -moz-transition-property: all;
    -webkit-transition-property: all;
    -o-transition-property: all;
    transition-duration: .4s;
    -moz-transition-duration: .4s;
    -webkit-transition-duration: .4s;
    -o-transition-duration: .4s;
    transition-delay: 0s;
    margin-left: calc(-200vw/14.4);
  }

  .temBox .temImg_0 {
    margin-left: 0px;
    z-index: 4;
  }

  .temBox .temImg_4 {
    margin-left: calc(-157vw/14.4);
  }

  .teamMain.cur .temBox .temImg_1 {
    transition-delay: 0s;
    z-index: 3;
  }


  .teamMain.cur .temBox .temImg_2 {
    transition-delay: .6s;
    z-index: 2;
  }


  .teamMain.cur .temBox .temImg_3 {
    transition-delay: 1.2s;
    z-index: 1;
  }


  .teamMain.cur .temBox .temImg_4 {
    transition-delay: 1.8s;
  }

  .teamMain.cur .temBox .temImg {
    transition-property: all;
    -moz-transition-property: all;
    -webkit-transition-property: all;
    -o-transition-property: all;
    transition-duration: .6s;
    -moz-transition-duration: .6s;
    -webkit-transition-duration: .6s;
    -o-transition-duration: .6s;
    margin-left: 0px;
  }
</style>
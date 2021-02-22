<template>
  <div class="home">
    <topNav />
    <!-- 简介 -->
    <div class="Introduction" ref="Introduction">
      <div class="left">
        <p class="p2" v-html="oData.Introduction.p2"></p>
      </div>
      <div class="right">
        <div class="h3" v-html="oData.Introduction.h3"></div>
        <div class="h2" v-html="oData.Introduction.h2"></div>
        <p class="p1" v-html="oData.Introduction.p1"></p>
      </div>
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
      <div class="proMain">
        <!-- 介绍 -->
        <div class="pro-box" v-for="(item,index) in oData.proMain"
          :class="{'cur':item.show,['pro-box-'+(index+1)]:true}" :ref="('pro-box-'+(index+1))">
          <div class="left">
            <div class="left-box">
              <div v-for="(item2,index2) in item.title" class="title" :class="['title_'+index2]"
                :style="{transitionDelay:index2*0.4+'s'}" v-html="item2">
              </div>
            </div>
          </div>
          <div class="right" v-if="(item.content instanceof Array)">
            <div>
              <div class="list" :class="['list-'+(index3+1)]" v-for="(item3,index3) in item.content">
                <h6>0{{index3+1}}</h6>
                <p v-html="item3"></p>
              </div>
            </div>
          </div>
          <div class="right" v-html="item.content" v-else>
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
      <div class="serviceBox" v-for="(item,index) in oData.serviceList"
        :class="{'cur':item.show,['serviceBox'+(index+1)]:true}" :ref="('serviceBox'+(index+1))">
        <div :id="'serviceBox'+(index+1)"></div>
        <div class="item-box" v-if="index%2==0">
          <div class="item-right">
            <div class="h1" v-if="item.name" v-html="item.name"></div>
            <div class="h2">
              <p v-html="item.p1"></p>
              <p class="p2" v-if="item.p2" v-html="item.p2"></p>
            </div>
            <div class="con">
              <div :class="{'c1':index2 ==0,'c2':index2>0}" v-for="(item2,index2) in item.serviceTxt[item.nTab]"
                v-html="item2"></div>
            </div>
          </div>
          <div class="item-left">
            <div :class="['sphere'+(index+1)]">
              <div class="circle" v-for="item2 in 10"></div>
            </div>
          </div>
        </div>
        <div class="item-box" v-else>
          <div class="item-left">
            <div :class="['sphere'+(index+1)]">
              <div class="circle" v-for="item2 in 10"></div>
            </div>
          </div>
          <div class="item-right">
            <div class="h1" v-if="item.name" v-html="item.name"></div>
            <div class="h2">
              <p v-html="item.p1"></p>
              <p class="p2" v-if="item.p2" v-html="item.p2"></p>
            </div>
            <div class="con">
              <div :class="{'c1':index2 ==0,'c2':index2>0}" v-for="(item2,index2) in item.serviceTxt[item.nTab]"
                v-html="item2"></div>
            </div>
          </div>
        </div>
        <div class="rightBox">
          <span :class="{'cur':item.nTab==index2}" v-for="(item2,index2) in item.serviceTxt"
            @click="pickThing(index,index2)"></span>
        </div>
      </div>
      <!-- 产品 -->
      <div class="productBox">
        <div id="productBox"></div>
        <div class="h1" v-html="oData.product.h1"></div>
        <div class="h2" v-html="oData.product.h2"></div>
        <div class="productList">
          <div class="list-box" v-for="(item,index) in oData.product.list" :class="['list-box-'+(index+1)]">
            <div class="imgBox">
              <img v-lazy="item.src">
            </div>
            <div class="listBox">
              <div class="title">
                <div class="title-1" v-html="item.title1"></div>
                <div class="title-2" v-html="item.title2"></div>
              </div>
              <div class="productInfo" v-html="item.productInfo"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- 创新服务 -->
      <div class="innovativeService" :class="{'cur':oData.innovativeService.show}" ref="innovativeService">
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
          <div class="list-c" @mouseover="mouseOver(index)" @mouseleave="mouseLeave(index)"
            v-for="(item,index) in oData.brand.list" v-show="oData.brand.nTab == index">
            <swiper :ref="'brandSwiper_'+index" :options="swiperOptions">
              <swiper-slide v-for="item2 in item.img">
                <img v-lazy="item2">
              </swiper-slide>
            </swiper>
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
  import { isElementNotInViewport } from "@/utils/index.js";
  import topNav from "../components/topNav";

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

      this.oData.bannerVideo.src = require('../assets/header1.mp4')
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
      mouseOver(n) {
        let swiper = this.$refs['brandSwiper_' + n][0].swiper
        swiper.autoplay.stop();
      },
      mouseLeave(n) {
        let swiper = this.$refs['brandSwiper_' + n][0].swiper
        swiper.autoplay.start();
      },
      pickThing(n, n2) {
        this.oData.serviceList[n].nTab = n2
      },
      pickBrand(n) {
        this.oData.brand.nTab = n
        let swiper = this.$refs['brandSwiper_' + n][0].swiper
        swiper.autoplay.stop();
        setTimeout(() => {
          swiper.autoplay.start();
        }, 200)
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


        this.oData.serviceList.forEach((item, index) => {
          doSome('serviceBox' + (index + 1), function () {
            that.oData.serviceList[index].show = true;
          }, function () {
            that.oData.serviceList[index].show = false;
          })
        })

        doSome('innovativeService', function () {
          that.oData.innovativeService.show = true;
        }, function () {
          that.oData.innovativeService.show = false;
        })

        function doSome(str, endFn, endFn2) {
          let _h0 = document.getElementById('navMain').offsetHeight
          let _h = document.documentElement.clientHeight
          let _dom = that.$refs[str] || null
          if (_dom && _dom instanceof Array) {
            _dom = _dom[0]
          }
          let _h2 = _dom && _dom.offsetHeight || 0
          let _h3 = that.$refs.Introduction && that.$refs.Introduction.offsetHeight || 0
          //获取滚动距顶部的距离，显示
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          let _top0 = (_dom && _dom.offsetTop - _h / 3 - _h0) || 0
          let _top = _top0 + _h3
          let _top2 = _top0 + _h3 + _h2

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
      let vm = this;
      return {
        oData: null,
        swiperOptions: {
          slidesPerView: 5,
          autoplay: {
            delay: 1500,
          },//可选选项，自动滑动
          loop: true,//可选选项，开启循环
        },
        swiperOptions2: {
          mousewheel: {
            releaseOnEdges: true
          },
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
      this.swiper2 = this.$refs.mySwiper2.swiper
      if (this.$route.query.id) {
        document.getElementById(this.$route.query.id).scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        });
      }
      window.addEventListener('scroll', this.handleScroll, true); // 监听（绑定）滚轮滚动事件
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll); //离开页面需要移除这个监听的事件
    }
  }
</script>
<style scoped>
  .Introduction {
    height: calc(735vw/14.4);
    position: fixed;
    overflow: hidden;
    box-sizing: border-box;
    top: calc(64vw/14.4);
    left: 0px;
    width: calc(1140/1440*100%);
    box-sizing: border-box;
    margin-left: calc(161/1440*100%);
    display: flex;
  }

  .Introduction .left {
    width: calc(440/1140*100%);
    height: calc(735vw/14.4);
    overflow: hidden;
  }

  .Introduction .right {
    overflow: hidden;
  }

  .Introduction .h3 {
    color: #8765ed;
    font-family: "Faktum-Regular";
    font-size: calc(105vw/14.4);
    font-weight: 400;
    line-height: calc(88vw/14.4);
    margin-top: calc(70vw/14.4);
  }

  .Introduction .h2 {
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(40vw/14.4);
    font-weight: 400;
    line-height: calc(80vw/14.4);
    letter-spacing: calc(2.5vw/14.4);
    margin-top: calc(8vw/14.4);
  }

  .Introduction .p1 {
    opacity: 0.6;
    height: calc(64vw/14.4);
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(18vw/14.4);
    font-weight: 400;
    line-height: calc(32vw/14.4);
    width: calc(376vw/14.4);
    margin-top: calc(130vw/14.4);
  }

  .Introduction .p2 {
    color: #383a50;
    font-family: "Faktum-Regular";
    font-weight: 400;
    margin-top: calc(75vw/14.4);
    font-size: calc(21vw/14.4);
  }

  .content {
    margin-top: calc(735vw/14.4);
  }

  .homeVideo {
    height: calc(817vw/14.4);
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .homeVideo .videoTxt {
    position: absolute;
    left: calc(80vw/14.4);
    bottom: calc(178vw/14.4);
  }

  .homeVideo .videoTxt .p1 {
    width: calc(384vw/14.4);
    height: calc(64vw/14.4);
    color: #ffffff;
    font-family: "PingFangSC-Regular";
    font-size: calc(32vw/14.4);
    font-weight: 400;
    line-height: calc(64vw/14.4);
  }

  .homeVideo .videoTxt .p2 {
    width: calc(1074vw/14.4);
    height: calc(145vw/14.4);
    color: #ffffff;
    font-family: "Faktum-Regular";
    font-size: calc(72vw/14.4);
    font-weight: 400;
    line-height: calc(75vw/14.4);
    margin-top: calc(21vw/14.4);
  }

  .proMain {
    margin-left: calc(80vw/14.4);
    width: calc(1283vw/14.4);
  }

  .proMain .pro-box {
    border-bottom: 1px solid #979797;
    display: flex;
    overflow: hidden;
    position: relative;
  }

  .proMain .pro-box-1 {
    min-height: calc(630vw/14.4);
  }

  .proMain .pro-box-2 {
    min-height: calc(656vw/14.4);
  }

  .proMain .pro-box-3 {
    min-height: calc(584vw/14.4);
    border: 0;
  }

  .proMain .pro-box-2 .right,
  .proMain .pro-box-3 .right {
    position: absolute;
    top: 100%;
    opacity: 0;
    left: calc(550/1283*100%);
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
    font-size: calc(36vw/14.4);
    font-weight: 400;
    line-height: calc(57vw/14.4);
    letter-spacing: calc(2.5vw/14.4);
    width: calc(550/1283*100%);
  }

  .proMain .pro-box .left .title_2 {
    opacity: 0.25;
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: calc(21vw/14.4);
    font-weight: 400;
    line-height: calc(28vw/14.4);
  }

  .proMain .pro-box .right {
    opacity: 0.6;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(21vw/14.4);
    font-weight: 400;
    line-height: calc(42vw/14.4);
    width: calc(730/1283*100%);
  }

  .proMain .pro-box-2 .right {
    width: calc(690/1283*100%);
  }

  .proMain .pro-box-3 .right {
    width: calc(736/1283*100%);
  }

  .proMain .pro-box .right h6 {
    color: #d6d6f4;
    font-family: "Faktum-Regular";
    font-size: calc(18vw/14.4);
    font-weight: 400;
    line-height: calc(23vw/14.4);
  }

  .proMain .pro-box-1 .right {
    padding-top: calc(94vw/14.4);
  }

  .proMain .pro-box-1 .right>div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .proMain .pro-box .right .list {
    width: 40%;
    margin-bottom: calc(71vw/14.4);
  }

  .proMain .pro-box .right .list p {
    margin-top: calc(20vw/14.4);
  }

  .proMain .pro-box-1 .left {
    margin-top: calc(94vw/14.4);
  }

  .proMain .pro-box-2>div {
    margin-top: calc(70vw/14.4);
  }

  .proMain .pro-box .right>p {
    margin-bottom: calc(40vw/14.4);
  }

  .proMain .pro-box-3 .left {
    margin-top: calc(86vw/14.4);
  }

  .proMain .pro-box-3 .right {
    margin-top: calc(79vw/14.4);
  }

  .proMain .left .left-box .title {
    width: 0%;
    overflow: hidden;
    height: calc(57vw/14.4);
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
    height: calc(126.67vw/14.4);
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
    padding: 0px calc(80vw/14.4);
    height: calc(753vw/14.4);
    background: #bdf0ee;
    overflow: hidden;
  }

  .servicePhilosophy .h1 {
    color: #214743;
    font-family: "PingFangSC-Medium";
    font-size: calc(21vw/14.4);
    font-weight: 400;
    line-height: calc(27vw/14.4);
    margin-top: calc(40vw/14.4);
  }

  .servicePhilosophy .h2 {
    color: #214743;
    font-family: "Faktum-Regular";
    font-size: calc(84vw/14.4);
    font-weight: 400;
    line-height: calc(81.6vw/14.4);
    letter-spacing: calc(0.5vw/14.4);
    margin-top: calc(110vw/14.4);
    height: calc(445vw/14.4);
    overflow: hidden;
  }

  .servicePhilosophy .h3 {
    color: #214743;
    font-family: "PingFangSC-Regular";
    font-size: calc(36vw/14.4);
    font-weight: 400;
    line-height: calc(40vw/14.4);
    letter-spacing: calc(2.5vw/14.4);
    margin-top: calc(0vw/14.4);
  }

  #serviceBox1,
  #serviceBox2,
  #productBox {
    position: relative;
    top: calc(-64vw/14.4);
    display: block;
    height: 0;
    overflow: hidden;
  }

  .serviceBox {
    margin: calc(215vw/14.4) calc(80vw/14.4) 0px calc(80vw/14.4);
    height: calc(745vw/14.4);
    position: relative;
  }

  .serviceBox2 {
    height: calc(580vw/14.4);
    margin-top: calc(263vw/14.4);
  }

  .serviceBox .item-box {
    display: flex;
    height: calc(745vw/14.4);
    justify-content: space-between;
  }

  .serviceBox2 .item-box {
    height: calc(580vw/14.4);
  }

  .serviceBox .item-left {
    width: calc(440vw/14.4);
    height: calc(419vw/14.4);
    position: relative;
    margin-top: calc(152vw/14.4);
  }

  .serviceBox .item-left,
  .serviceBox .item-right .con,
  .serviceBox .rightBox {
    opacity: 0;
    transition: all .6s .4s;
    -moz-transition: all .6s .4s;
    -webkit-transition: all .6s .4s;
    -o-transition: all .6s .4s;
  }

  .serviceBox.cur .item-left,
  .serviceBox.cur .item-right .con,
  .serviceBox.cur .rightBox {
    opacity: 1;
    transition: all .6s .4s;
    -moz-transition: all .6s .4s;
    -webkit-transition: all .6s .4s;
    -o-transition: all .6s .4s;
  }

  .serviceBox2 .item-left {
    margin-top: 0px;
  }

  .serviceBox .item-right {}

  .serviceBox .item-right .h1 {
    color: #65ecaa;
    font-family: "PingFangSC-Regular";
    font-size: calc(21vw/14.4);
    font-weight: 400;
    line-height: calc(27vw/14.4);
  }

  .serviceBox .item-right .h2 {
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(36vw/14.4);
    font-weight: 400;
    line-height: calc(46vw/14.4);
    margin-top: calc(28vw/14.4);
    height: calc(92vw/14.4);
    box-sizing: border-box;
    padding-top: calc(92vw/14.4);
    overflow: hidden;
    transition: all .6s;
    -moz-transition: all .6s;
    -webkit-transition: all .6s;
    -o-transition: all .6s;
  }

  .serviceBox.cur .item-right .h2 {
    padding-top: 0px;
    transition: all .6s;
    -moz-transition: all .6s;
    -webkit-transition: all .6s;
    -o-transition: all .6s;
  }

  .serviceBox .item-right .h2 .p2 {
    opacity: 0.25;
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: calc(18vw/14.4);
    font-weight: 400;
    line-height: calc(14.4vw/14.4);
    margin-top: calc(20vw/14.4);
  }

  .serviceBox .item-right .con {
    margin-top: calc(58vw/14.4);
  }

  .serviceBox .item-right .c1 {
    opacity: 0.8;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(24vw/14.4);
    font-weight: 400;
    line-height: calc(30vw/14.4);
  }

  .serviceBox .item-right .c2 {
    opacity: 0.6;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(18vw/14.4);
    font-weight: 400;
    line-height: calc(26vw/14.4);
    letter-spacing: calc(0.0099vw/14.4);
    margin-top: calc(24vw/14.4);
    width: calc(542vw/14.4);
  }

  .serviceBox .rightBox {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .serviceBox .rightBox span {
    opacity: 0.25;
    width: calc(10vw/14.4);
    height: calc(10vw/14.4);
    background: #383a50;
    margin-right: calc(22vw/14.4);
    display: block;
    border-radius: 50%;
    cursor: pointer;
  }

  .serviceBox .rightBox span:last-child {
    margin-bottom: calc(0vw/14.4);
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
    margin-left: calc(-25vw/14.4);
  }

  .serviceBox .bottomBox span {
    opacity: 0.35;
    width: calc(11vw/14.4);
    height: calc(22vw/14.4);
    color: #383a50;
    font-family: "PingFangSC-Medium";
    font-size: calc(18vw/14.4);
    font-weight: 400;
    line-height: calc(21.6vw/14.4);
    display: block;
    margin-right: calc(28vw/14.4);
    position: relative;
  }

  .serviceBox .bottomBox span i {
    opacity: 0.8;
    width: calc(11vw/14.4);
    height: calc(2vw/14.4);
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
    margin: calc(165vw/14.4) calc(80vw/14.4) 0px calc(80vw/14.4);
    min-height: calc(994vw/14.4);
  }

  .productBox>.h1 {
    color: #65ecaa;
    font-family: "PingFangSC-Regular";
    font-size: calc(21vw/14.4);
    font-weight: 400;
    line-height: calc(27vw/14.4);
  }

  .productBox>.h2 {
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: calc(36vw/14.4);
    font-weight: 400;
    line-height: calc(45vw/14.4);
    margin-top: calc(29vw/14.4);
  }

  .productBox .productList {
    display: flex;
    align-items: flex-start;
    margin-top: calc(144vw/14.4);
  }

  .productBox .productList .listBox:hover .productInfo,
  .productBox .productList .imgBox:hover+.listBox>.productInfo {
    display: block;
  }

  .productBox .productList .list-box-1 {
    width: calc(396vw/14.4);
  }

  .productBox .productList .list-box-2 {
    width: calc(375vw/14.4);
  }

  .productBox .productList .list-box-3 {
    width: calc(373vw/14.4);
  }

  .productBox .productList .list-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .productBox .productList .imgBox {
    margin: 0px auto;
  }

  .productBox .productList .imgBox img {
    width: calc(230vw/14.4);
    display: block;
    height: auto;
  }

  .productBox .productList .listBox {
    margin-top: calc(92vw/14.4);
  }

  .productBox .productList .list-box-1 .listBox {
    width: calc(286vw/14.4);
  }

  .productBox .productList .list-box-2 .listBox {
    width: calc(265vw/14.4);
  }

  .productBox .productList .list-box-3 .listBox {
    width: calc(272vw/14.4);
  }

  .productBox .productList .title-1 {
    opacity: 0.8;
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: calc(24vw/14.4);
    font-weight: 400;
    line-height: calc(30vw/14.4);
  }

  .productBox .productList .title-2 {
    opacity: 0.6;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(21vw/14.4);
    font-weight: 400;
    line-height: calc(27vw/14.4);
    margin-top: calc(8vw/14.4);
  }

  .productBox .productList .productInfo {
    opacity: 0.6;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(15vw/14.4);
    font-weight: 400;
    line-height: calc(27vw/14.4);
    letter-spacing: calc(0.00825vw/14.4);
    margin-top: calc(22vw/14.4);
    display: none;
  }

  .innovativeService {
    margin-top: calc(35vw/14.4);
    margin-right: calc(80vw/14.4);
    margin-left: -100%;
    height: calc(672vw/14.4);
    overflow: hidden;
    position: relative;
    transition: all .6s;
    -webkit-transition: all .6s;
  }

  .innovativeService.cur {
    margin-left: calc(80vw/14.4);
    transition: all .6s;
    -webkit-transition: all .6s;
  }


  .innovativeService .h1 {
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(36vw/14.4);
    font-weight: 400;
    line-height: calc(46vw/14.4);
    margin-top: calc(140vw/14.4);
  }

  .innovativeService .p1 {
    opacity: 0.6;
    width: calc(1051vw/14.4);
    height: calc(126vw/14.4);
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(21vw/14.4);
    font-weight: 400;
    line-height: calc(42vw/14.4);
    margin-top: calc(58vw/14.4);
  }

  .innovativeService .bottomBox {
    position: absolute;
    bottom: calc(79vw/14.4);
    text-align: center;
    display: flex;
    left: 50%;
    margin-left: calc(-25vw/14.4);
  }

  .innovativeService .bottomBox span {
    opacity: 0.35;
    width: calc(11vw/14.4);
    height: calc(22vw/14.4);
    color: #383a50;
    font-family: "PingFangSC-Medium";
    font-size: calc(18vw/14.4);
    font-weight: 400;
    line-height: calc(21.6vw/14.4);
    display: block;
    margin-right: calc(28vw/14.4);
    position: relative;
  }

  .innovativeService .bottomBox span i {
    opacity: 0.8;
    width: calc(11vw/14.4);
    height: calc(2vw/14.4);
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

  .innovativeService .swiper-slide {
    opacity: 0;
    transition: all 1s;
    -moz-transition: all 1s;
    -webkit-transition: all 1s;
    -o-transition: all 1s;
  }

  .innovativeService.cur .swiper-slide-active {
    opacity: 1;
    transition: all 1s .3s;
    -moz-transition: all 1s .3s;
    -webkit-transition: all 1s .3s;
    -o-transition: all 1s .3s;
  }

  .brand {
    margin: calc(132vw/14.4) calc(80vw/14.4) 0px calc(80vw/14.4);
    height: calc(335vw/14.4);
  }

  .brand .title {
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(36vw/14.4);
    font-weight: 400;
    line-height: calc(46vw/14.4);
  }

  .brand .tabH {
    font-family: "PingFangSC-Regular";
    display: flex;
    height: calc(25vw/14.4);
    align-items: center;
    margin-top: calc(43vw/14.4);
  }

  .brand .tabH .list-h {
    opacity: 0.4;
    color: #383a50;
    font-size: calc(17vw/14.4);
    font-weight: 400;
    height: calc(25vw/14.4);
    cursor: pointer;
  }

  .brand .tabH .list-h-1 {
    margin-right: calc(41vw/14.4);
  }

  .brand .tabH .list-h-2 {
    margin-right: calc(68vw/14.4);
  }

  .brand .tabH .list-h.cur {
    opacity: 0.8;
    border-bottom: 1px solid #65ecaa;
  }

  .brand .tabC {
    padding-top: 1px;
  }

  .contact {
    margin: calc(216vw/14.4) calc(80vw/14.4) 0px calc(80vw/14.4);
    height: calc(312vw/14.4);
    margin-bottom: calc(216vw/14.4);
  }

  .contact .h1 {
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(36vw/14.4);
    font-weight: 400;
    line-height: calc(46vw/14.4);
  }

  .contact .p1 {
    opacity: 0.6;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(21vw/14.4);
    font-weight: 400;
    line-height: calc(42vw/14.4);
    margin-top: calc(42vw/14.4);
  }

  .contact .mailbox {
    color: #7ccca5;
    font-family: "Faktum-Regular";
    font-size: calc(42vw/14.4);
    font-weight: 400;
    height: calc(44vw/14.4);
    line-height: calc(44vw/14.4);
    display: inline-block;
    border-bottom: 2px solid #7ccca5;
    text-decoration: none;
    margin-top: calc(41vw/14.4);
  }
</style>
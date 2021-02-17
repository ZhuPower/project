<template>
  <div class="Recruitment">
    <topNav />
    <div class="bannerVideo">
      <video src="../assets/header3.mp4" autoplay loop muted>
        您的浏览器不支持 video 标签。
      </video>
      <div class="videoTxt">
        <p class="p1">如果你希望通过简单正确的事情重复做，<br />来提升人的幸福感，也让自己获得巨大成功，<br />欢迎你加入我们。</p>
        <div class="h1">
          <div class="icon"><img src="../assets/icon_2.png"></div>
          <div class="txt">了解更多岗位</div>
        </div>
      </div>
    </div>
    <div class="proMain">
      <div class="pro-box pro-box-1" :class="{'cur':title[0].show}" ref="pro-box-1">
        <div class="left">
          <div class="left-box">
            <div v-for="(item,index) in title[0].txt" class="title" :class="['title_'+index]"
              :style="{transitionDelay:index*0.4+'s'}" v-text="item">
            </div>
          </div>
        </div>
        <div class="right">
          美至科技成立于2015年，总部位于上海，在北京与广州设有分支公司。美至科技基于领先的Grotech®大数据及AI技术，深入洞察行业与消费者，致力于以独创的GaaS
          (Growth as a
          Service)服务模式，与产业上下游合作伙伴一起，创造出更多有“幸福力”的产品，并让尽可能多的消费者拥有它们。美至科技已为宜家家居、奈雪の茶、资生堂、李子柒、中国联通等数十家企业提供了服务。美至科技也为一流的投资机构提供基于大数据的行业研究，投资标的搜寻，以及尽职调查服务。
        </div>
      </div>
    </div>
    <div class="atGrotech" ref="atGrotech" :class="{'cur':isActive}">
      <div class="atList atList_0">
        <img src="../assets/img9.png">
        <div class="atInfo">
          <div class="h1">At Grotech</div>
          <div class="c1">在美至科技<br />我们特别珍视，雇佣<br />和晋升能够体现如下<br />特质的员工</div>
          <div class="b1">Keep</div>
        </div>

      </div>
      <div class="atList atList_1">
        <img src="../assets/img9.png">
        <div class="atInfo">
          <div class="x1">01</div>
          <div class="p1">坦荡<br />真诚、无私、<br />有沟通力</div>
          <div class="b1">Growing</div>
        </div>

      </div>
      <div class="atList atList_2">
        <img src="../assets/img9.png">
        <div class="atInfo">
          <div class="x1">02</div>
          <div class="p1">敢为<br />有勇气，<br />永远向前一步</div>
          <div class="b1">Growing</div>
        </div>

      </div>
      <div class="atList atList_3">
        <img src="../assets/img9.png">
        <div class="atInfo">
          <div class="x1">03</div>
          <div class="p1">追求卓越<br />充满好奇心，<br />有判断力，<br />顶级绩效</div>
          <div class="b1">Growing</div>
        </div>

      </div>
      <div class="atList atList_4">
        <img src="../assets/img9.png">
        <div class="atInfo">
          <div class="x1">04</div>
          <div class="p1">做价值创造的源泉<br />渴望创新，<br />渴望影响力</div>
          <div class="b1">Growing</div>
        </div>

      </div>
    </div>
    <div class="zp"></div>
  </div>
</template>

<script>

  import topNav from "../components/topNav";
  import { isElementNotInViewport } from "@/utils/index.js";
  export default {
    name: 'Recruitment',
    components: {
      topNav
    },
    created() { },
    computed: {},
    methods: {
      handleScroll() {
        let that = this
        doSome('pro-box-1', function () {
          that.title[0].show = true;
        }, function () {
          that.title[0].show = false;
        })


        doSome('atGrotech', function () {
          that.isActive = true;
        }, function () {
          that.isActive = false;
        })


        function doSome(str, endFn, endFn2) {
          let _h = document.documentElement.clientHeight
          //console.log(str)
          let _h2 = that.$refs[str] && that.$refs[str].offsetHeight || 0
          //获取滚动距顶部的距离，显示
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

          let _top = that.$refs[str] && that.$refs[str].offsetTop || 0
          let _top2 = _top + _h2

          if (scrollTop >= _top && scrollTop < _top2) {
            endFn && endFn()

          }

          if (that.$refs[str] && isElementNotInViewport(that.$refs[str])) {
            endFn2 && endFn2()
          }
        }

      }
    },
    data() {
      return {
        isActive: false,
        title: [
          {
            txt: ['美至科技文化', '与价值观'],
            show: false
          }
        ],
      }
    },
    watch: {},
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
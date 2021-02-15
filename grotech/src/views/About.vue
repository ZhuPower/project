<template>
  <div class="About">
    <topNav />
    <div class="bannerVideo">
      <video src="../assets/header3.mp4" autoplay="autoplay" loop="loop">
        您的浏览器不支持 video 标签。
      </video>
      <div class="videoTxt">
        <p class="p1">美至致力于以独创的GaaS(Growth as a Service)<br />服务模式,与合作伙伴一起,源源不断地创造让<br />消费者喜爱的流行产品</p>
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
      <div class="pro-box pro-box-2" :class="{'cur':title[1].show}" ref="pro-box-2">
        <div class="left">
          <div class="left-box">
            <div v-for="(item,index) in title[1].txt" class="title" :class="['title_'+index]"
              :style="{transitionDelay:index*0.4+'s'}" v-text="item">
            </div>
          </div>
        </div>
        <div class="right">
          我们深刻理解，要应对新消费时代的变革，需要一支融合贯通的专家团队。我们有来自斯坦福、沃顿商学院的技术专家，来自字节跳动的增长黑客，来自摩根斯坦利的数据科学家与分析师，也有来自宝洁、联合利华的行业专家。
        </div>
      </div>
    </div>
    <div class="VisionValue">
      <img src="../assets/img6.png"
        style="width: 100%;display: block; height: 100%; position: absolute;left: 0;top:0" />
      <div class="left">
        <div class="h1">Vision</div>
        <div class="bottom">
          <div class="h2">我们的愿景</div>
          <div class="p2">创造出更多有“幸福力”的产品，让尽可能多的消费者拥有它们，提升人的幸福感。</div>
        </div>
      </div>
      <div class="right">
        <div class="h1">Value</div>
        <div class="bottom">
          <div class="h2">幸福力定义</div>
          <div class="p2">更好地满足消费者需求，资源可持续利用，具备商业道德。</div>
        </div>
      </div>
    </div>
    <div class="team">
      <div class="h1">
        <div class="icon"><img src="../assets/icon_1.png"></div>
        <div class="txt">认识我们的团队</div>
      </div>
      <div class="temBox">
        <div class="temImg" v-for="(item,index) in temList " :class="{'cur':temCur == index}" @click="getTemCur(index)">
          <img src="../assets/img7.png">
          <div class="temInfo">
            <div class="p1">{{item.name}}</div>
            <div class="p2" v-html="item.info"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { isElementNotInViewport } from "@/utils/index.js";
  import topNav from "../components/topNav";
  export default {
    name: 'About',
    components: {
      topNav
    },
    created() { },
    computed: {},
    methods: {
      getTemCur(n) {
        this.temCur = n
      },
      handleScroll() {
        let that = this
        doSome('pro-box-1', function () {
          that.title[0].show = true;
        }, function () {
          that.title[0].show = false;
        })
        doSome('pro-box-2', function () {
          that.title[1].show = true;
        }, function () {
          that.title[1].show = false;
        })


        function doSome(str, endFn, endFn2) {
          let _h = document.documentElement.clientHeight
          let _h2 = that.$refs[str].offsetHeight
          //获取滚动距顶部的距离，显示
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          let _top = that.$refs[str].offsetTop
          let _top2 = that.$refs[str].offsetTop + _h2

          if (scrollTop >= _top && scrollTop < _top2) {
            endFn && endFn()

          }

          if (isElementNotInViewport(that.$refs[str])) {
            endFn2 && endFn2()
          }
        }
      }
    },
    data() {
      return {
        _w: document.body.clientWidth,
        temCur: 0,
        temList: [
          {
            name: '陈勇',
            info: '执行董事<br/>兼首席执行官'
          },
          {
            name: '赵涛',
            info: '首席财务官'
          },
          {
            name: '陈英明',
            info: '首席技术官'
          },
          {
            name: '杨文军',
            info: '联合创始人'
          }
        ],
        title: [
          {
            txt: ['公司介绍'],
            show: false
          },
          {
            txt: ['团队介绍'],
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
    height: 737px;
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .bannerVideo .videoTxt {
    position: absolute;
    left: 80px;
    bottom: 171px;
  }

  .bannerVideo .videoTxt .p1 {
    color: #ffffff;
    font-family: "PingFangSC-Regular";
    font-size: 36px;
    font-weight: 400;
    line-height: 54px;
  }

  .proMain {
    margin: 0px 80px;
  }

  .proMain .pro-box {
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    position: relative;
  }

  .proMain .pro-box-1 {
    height: 558px;
    padding-top: 95px;
    box-sizing: border-box;
  }

  .proMain .pro-box-1 .right {
    border-bottom: 1px solid #979797;
  }

  .proMain .pro-box-2 {
    height: 424px;
    padding-top: 87px;
    box-sizing: border-box;
  }

  .proMain .pro-box .left {
    width: 34.375%;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: 36px;
    font-weight: 400;
    line-height: 57px;
    letter-spacing: 2.5px;
  }

  .proMain .left .left-box .title {
    width: 0%;
    overflow: hidden;
    height: 57px;
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

  .proMain .pro-box .right {
    width: 65.625%;
    opacity: 0.6;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: 21px;
    font-weight: 400;
    line-height: 42px;
    letter-spacing: 0.65625px;
  }

  .proMain .pro-box-1 .right,
  .proMain .pro-box-2 .right {
    position: absolute;
    top: 100%;
    opacity: 0;
    right: 0;
  }

  .proMain .pro-box-1.cur .right,
  .proMain .pro-box-2.cur .right {
    top: 0%;
    opacity: 1;
    transition: all .6s .4s;
    -moz-transition: all .6s .4s;
    -webkit-transition: all .6s .4s;
    -o-transition: all .6s .4s;
  }

  .VisionValue {
    margin: 0px 80px;
    height: 608px;
    border-radius: 28px;
    overflow: hidden;
    position: relative;
    display: flex;
  }

  .VisionValue>div {
    position: relative;
    width: 50%;
    box-sizing: border-box;
    height: 608px;
  }

  .VisionValue .left {
    border-right: 1px solid #fff;
    padding-left: 42px;
  }

  .VisionValue .right {
    padding-left: 39px;
  }

  .VisionValue>div .bottom {
    width: 334px;
    height: 262px;
    position: absolute;
    left: 42px;
    bottom: -171px;
    transition: all .6s;
    -webkit-transition: all .6s;
  }

  .VisionValue>div .h1 {
    color: rgba(249, 245, 245, 0.91);
    font-family: "Faktum-Regular";
    font-size: 24px;
    font-weight: 400;
    line-height: 72px;
  }

  .VisionValue>div .bottom:hover {
    bottom: 0;
    transition: all .6s;
    -webkit-transition: all .6s;
  }

  .VisionValue>div .h2 {
    color: rgba(249, 245, 245, 0.91);
    font-family: "PingFangSC-Regular";
    font-size: 36px;
    font-weight: 400;
    line-height: 72px;
  }

  .VisionValue>div .p2 {
    color: rgba(255, 255, 255, 0.91);
    font-family: "PingFangSC-Regular";
    font-size: 21px;
    font-weight: 400;
    line-height: 36px;
    margin-top: 27px;
  }

  .team {
    margin-top: 215px;
    margin-bottom: 205px;
  }

  .team .h1 {
    margin-left: 80px;
    display: flex;
    align-items: center;
    height: 32px;
  }

  .team .h1 .icon {
    width: 30px;
    height: 30px;
    border: solid 1px #8765ed;
    border-radius: 50%;
    margin-right: 38px;
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
    font-size: 25px;
    font-weight: 400;
  }

  .team .temBox {
    margin-top: 223px;
    height: 971px;
    overflow: hidden;
  }

  .temBox .temImg {
    width: 20%;
    float: left;
    position: relative;
    transition: width .6s;
    -webkit-transition: width .6s;
    overflow: hidden;
  }

  .temBox .temImg img {
    width: 665px;
    height: 768px;
  }

  .temBox .temImg.cur {
    width: 40%;
    transition: width .6s;
    -webkit-transition: width .6s;
    z-index: 9;
  }

  .temBox .temInfo {
    width: 50%;
    margin-top: 37px;
    margin-left: 80px;
    opacity: 0;
    transition: all .6s;
    -webkit-transition: all .6s;
  }

  .temBox .temImg.cur .temInfo {
    opacity: 1;
    transition: all .6s;
    -webkit-transition: all .6s;
  }

  .temBox .p1 {
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: 26px;
    font-weight: 400;
    line-height: 72px;
  }

  .temBox .p2 {
    opacity: 0.6;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: 21px;
    font-weight: 400;
    line-height: 31.5px;
    margin-top: 9px;
  }
</style>
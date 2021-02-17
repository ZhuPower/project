<template>
  <div class="home">
    <topNav />
    <div class="Introduction" ref="Introduction">
      <div class="left">
        <p class="p2">Keep Growing</p>
      </div>
      <div class="right">
        <div class="h3">When the <br />finest arrives</div>
        <div class="h2">让美好如期而至</div>
        <p class="p1">美至倡导的幸福力即更好地满足消费者需求，资源可持续利用，并坚守商业道德。</p>
      </div>
    </div>
    <div class="content">
      <div class="homeVideo">
        <!-- controls -->
        <video src="../assets/header1.mp4" autoplay loop muted>
          您的浏览器不支持 video 标签。
        </video>
        <div class="videoTxt">
          <p class="p1">科技推动消费品创新与增长</p>
          <p class="p2">Leveraging Technology <br />for Innovation and Growth</p>
        </div>
      </div>
      <div class="proMain">
        <div class="pro-box pro-box-1" :class="{'cur':title[0].show}" ref="pro-box-1">
          <div class="left">
            <div class="left-box">
              <div v-for="(item,index) in title[0].txt" class="title" :class="['title_'+index]"
                :style="{transitionDelay:index*0.4+'s'}" v-html="item">
              </div>
            </div>
          </div>
          <div class="right">
            <div>
              <div class="list list-1">
                <h6>01</h6>
                <p>利用大数据规划<br />企业竞争战略</p>
              </div>
              <div class="list list-2">
                <h6>02</h6>
                <p>以消费者为中心，<br />以产品创新驱动增长</p>
              </div>
              <div class="list list-3">
                <h6>03</h6>
                <p>整合全渠道竞争策略，<br />广告投放品效合一</p>
              </div>
              <div class="list list-4">
                <h6>04</h6>
                <p>精细化管理消费者资产，<br />提高客户生命价值</p>
              </div>
            </div>
          </div>
        </div>
        <div class="pro-box pro-box-2" :class="{'cur':title[1].show}" ref="pro-box-2">
          <div class="left">
            <div class="left-box">
              <div v-for="(item,index) in title[1].txt" class="title" :class="['title_'+index]"
                :style="{transitionDelay:index*0.4+'s'}" v-html="item">
              </div>
            </div>
          </div>
          <div class="right">
            <p class="right-p1">
              我们始终坚信，结合专业主义的长期主义能带来巨大商业价值。真正的增长动力来自于创新力（提供让消费者感到幸福的产品）与营销力（销售给尽可能多的消费者）的完美结合。美至科技基于领先的<span
                style="font-family:Faktum-Regular;">Grotech®</span>大数据及AI技术，深入洞察行业与消费者，帮助消费品上下游企业制定竞争战略，推动产品创新，落实增长。
            </p>
            <p class="right-p2">
              美至科技也为一流的消费品基金提供基于大数据的行业研究，投资标的搜寻，以及尽职调查服务。美至科技致力与消费品产业上下游合作伙伴一起，创造出更多有“幸福力”的产品，并让尽可能多的消费者拥有它们。</p>
          </div>
        </div>
        <div class="pro-box pro-box-3" :class="{'cur':title[2].show}" ref="pro-box-3">
          <div class="left">
            <div class="left-box">
              <div v-for="(item,index) in title[2].txt" class="title" :class="['title_'+index]"
                :style="{transitionDelay:index*0.4+'s'}" v-html="item">
              </div>
            </div>
          </div>
          <div class="right">
            <p class="right-p3">
              自研的增长科技<span style="font-family:Faktum-Regular;">Grotech®</span>系统，拥有亿级消费者及商品交易数据，<br />应用前沿AI算法，制定企业发展策略。
            </p>
            <p class="right-p4">
              来自消费零售+投资银行+互联网科技的跨行业精英团队，从战略到落地，<br />使命必达。</p>

            <p class="right-p5">
              拥有全链路品牌成长孵化的实战经验，以生意伙伴的身份真正为商业成功负责。</p>
          </div>
        </div>
      </div>
      <div class="servicePhilosophy">
        <div class="h1">服务理念</div>
        <div class="h2">We begin with the end in mind put consumers first and value sustainability</div>
        <div class="h3">以终为始，以消费者为中心，以可持续为价值基石。</div>
      </div>
      <div class="serviceBox" :class="{'cur':sCur1}" ref="serviceBox1" id="serviceBox1">
        <div class="item-box">
          <div class="item-right">
            <div class="h1">服务</div>
            <div class="h2">
              <p>聚焦大消费行业的一站式增长服务</p>
              <p class="p2">Gaas（Growth as a Service）</p>
            </div>
            <div class="con">
              <div :class="{'c1':index ==0,'c2':index>0}" v-for="(item,index) in serviceTxt[nTab1]" v-html="item"></div>
            </div>
          </div>
          <div class="item-left">
            <div class="sphere">
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </div>
        </div>
        <div class="rightBox">
          <span :class="{'cur':nTab1==index}" v-for="(item,index) in serviceTxt" @click="pickThing(index)"></span>
        </div>
      </div>
      <div class="serviceBox serviceBox2" :class="{'cur':sCur2}" ref="serviceBox2" id="serviceBox2">
        <div class="item-box">
          <div class="item-left">
            <div class="sphere2">
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </div>
          <div class="item-right">
            <div class="h2">
              <p>大数据驱动，为投资机构量身<br />定制专属服务</p>
            </div>
            <div class="con">
              <div :class="{'c1':index ==0,'c2':index>0}" v-for="(item,index) in serviceTxt2[nTab2]" v-html="item">
              </div>
            </div>
          </div>
        </div>
        <div class="rightBox">
          <span :class="{'cur':nTab2==index}" v-for="(item,index) in serviceTxt2" @click="pickThing2(index)"></span>
        </div>
      </div>
      <div class="productBox" id="productBox">
        <div class="h1">产品</div>
        <div class="h2">Grotech<br />增长科技系统是什么?</div>
        <div class="productList">
          <div class="list-box list-box-1">
            <div class="imgBox">
              <img src="../assets/GDB.gif">
            </div>
            <div class="listBox">
              <div class="title">
                <div class="title-1">GDB</div>
                <div class="title-2">Growth Data Bank<br />独树一帜的美至科技数据银行</div>
              </div>
              <div class="productInfo">集合海量的社交网络、智能手机、电商平台<br />、线下购物等数据, 结合行业特征, <br />利用AI算法搭建多种商业策略模型。</div>
            </div>
          </div>
          <div class="list-box list-box-2">
            <div class="imgBox">
              <img src="../assets/Gropilot-gray.gif">
            </div>
            <div class="listBox">
              <div class="title">
                <div class="title-1">GroPilot</div>
                <div class="title-2">晶球创新的商业智能<br />决策系统</div>
              </div>
              <div class="productInfo">美至利用大数据+AI技术, <br />自研开发的商业增长智能系统。无论是<br />行业分析, 品类策略, 还是渠道战术, <br />竞争分析,
                <br />GroPilot水晶球让决策者利用先进技术洞察先机。
              </div>
            </div>
          </div>
          <div class="list-box list-box-3">
            <div class="imgBox">
              <img src="../assets/Adbot.gif">
            </div>
            <div class="listBox">
              <div class="title">
                <div class="title-1">AdBot</div>
                <div class="title-2">精益化消费者资<br />产管理系统</div>
              </div>
              <div class="productInfo">精益化消费者资产管理系统:使用前沿分<br />析技术, 将消费者聚类分组, <br />实现“千人千面”的消费者价值维护。提升<br />消费者忠诚度,
                从老客驱动业绩增长。<br />量化广告投放系统:美至将海量消费者行<br />为数据, <br />利用数据科学建立量化策略模型, <br />大幅度提高广告回报效果。</div>
            </div>
          </div>
        </div>
      </div>
      <div class="innovativeService" ref="innovativeService">
        <swiper ref="mySwiper2" :options="swiperOptions2">
          <swiper-slide>
            <div class="h1">创新服务与领域<br />专家的结合</div>
            <div class="p1">
              美至科技会考虑行业、消费者、企业资源等诸多因素，量体裁衣，提供个性化解决方案。美至的服务流程分为6个<br />步骤：深入调研-数据洞察-制定方案-实施执行-方案复盘-持续改进。美至服务团队会由客户经理、商业分析师、<br />数据科学家、领域专家组成，利用科学的a/b测试方法，为企业创新与增长持续服务。
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="h1">严苛标准<br />全面保障数据安全 </div>
            <div class="p1">
              企业数据经过美国国家安全局认可的不可逆散列加密算法SHA-512加密存储，确保商业信息安全。<br />美至科技同时是中国央企与世界500强外企的服务伙伴，经受过严格的体系安全认证，<br />并通过了欧盟GDPR规范审查。
            </div>
          </swiper-slide>
        </swiper>
        <div class="bottomBox">
          <span :class="{'cur':swiper2.activeIndex ==0}">1 <i></i></span>
          <span :class="{'cur':swiper2.activeIndex ==1}">2 <i></i></span>
        </div>
      </div>
      <div class="brand">
        <div class="title">我们服务的品牌</div>
        <div class="tabH">
          <div class="list-h list-h-1 cur">消费零售</div>
          <div class="list-h list-h-2">TMT科技/媒体/通信</div>
          <div class="list-h list-h-3">投资机构</div>
        </div>
        <div class="tabC">
          <div class="list-c" @mouseover="mouseOver" @mouseleave="mouseLeave">
            <swiper ref="mySwiper" :options="swiperOptions">
              <swiper-slide>
                <img src="../assets/l1.png">
              </swiper-slide>
              <swiper-slide>
                <img src="../assets/l2.png">
              </swiper-slide>
              <swiper-slide>
                <img src="../assets/l3.png">
              </swiper-slide>
              <swiper-slide>
                <img src="../assets/l4.png">
              </swiper-slide>
              <swiper-slide>
                <img src="../assets/l5.png">
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
      <div class="contact">
        <div class="h1">免费获取我们与众不同的<br />商业洞察报告</div>
        <div class="p1">随时联系我们的咨询团队，我们会根据您所在行业，提供一份见解独到的洞察报告。<br />请微信搜索gro-tech（代用名）关注我们的微信公众号，或者发送电邮至</div>
        <a href="javascript:;" class="mailbox">hello@gro-tech.com</a>
      </div>
    </div>
  </div>
</template>

<script>
  import { isElementNotInViewport } from "@/utils/index.js";
  import topNav from "../components/topNav";
  export default {
    name: 'Home',
    components: {
      topNav
    },
    created() { },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    methods: {
      mouseOver() {
        this.swiper.stopAutoplay();
      },
      mouseLeave() {
        this.swiper.startAutoplay();
      },
      pickThing(n) {
        this.nTab1 = n
      },
      pickThing2(n) {
        this.nTab2 = n
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
        doSome('pro-box-3', function () {
          that.title[2].show = true;
        }, function () {
          that.title[2].show = false;
        })

        doSome('serviceBox1', function () {
          that.sCur1 = true;
        }, function () {
          that.sCur1 = false;
        })

        doSome('serviceBox2', function () {
          that.sCur2 = true;
        }, function () {
          that.sCur2 = false;
        })

        doSome('innovativeService', function () {
          that.swiper2.slideTo(0);
        })

        function doSome(str, endFn, endFn2) {
          let _h = document.documentElement.clientHeight
          //console.log(str)
          let _h2 = that.$refs[str] && that.$refs[str].offsetHeight || 0
          let _h3 = that.$refs.Introduction.offsetHeight
          //获取滚动距顶部的距离，显示
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          let _top0 = (that.$refs[str] && that.$refs[str].offsetTop) || 0
          let _top = _top0 + _h3
          let _top2 = _top0 + _h3 + _h2

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
        title: [
          {
            txt: ['如何创造有“幸福力”', '的消费品获得持续增长'],
            show: false
          },
          {
            txt: ['创新的<span style="font-family:Faktum-Regular;">GaaS</span>', '增长即服务', 'Growth-as-a-Service'],
            show: false
          },
          {
            txt: ['美至的', '核心能力'],
            show: false
          }
        ],
        swiperOptions: {
          slidesPerView: 5,
          autoplay: 1500,//可选选项，自动滑动
          loop: true,//可选选项，开启循环
        },
        swiperOptions2: {
          mousewheelControl: true,
          // loop: true,
          onSlideChangeStart: function (swiper) {

          }
        },
        serviceTxt: [
          ['基于大数据与AI的策略服务', '企业竞争战略：由经验丰富的行业专家，利用美至科技大数据库与AI算法模型，从消费者趋势、产品创新、流量获取等多方面深入洞察分析，帮助企业制定精准有效的竞争战略。', '产品创新：我们利用大数据与算法洞察消费者行为，综合考虑商业竞争策略以及供应链技术变革，提供从产品概念研究到包装设计的全链路落地服务。', '全渠道增长策略：从线上到线下，从一线城市到下沉市场，从直营到分销，结合人-货-场，我们帮助企业制定科学精准的全渠道增长策略。'],
          ['精益化营销服务', '整合营销服务：利用美至科技<span style="font-family:Faktum-Regular;">Grotech</span>技术，精确计算品牌推广与效果广告的整合模型，并结合个性化创意与文案提高广告投资回报比（<span style="font-family:Faktum-Regular;">ROI</span>）。', '数据科学投放：通过数据科学量化模型，结合千人千面创意文案，大幅提高企业在信息流广告平台上的投放效果（包括但不限于阿里妈妈、抖音头条、百度等等）。'],
          ['<span style="font-family:Faktum-Regular;">ADAPT™</span>品牌孵化服务', '<span style="font-family:Faktum-Regular;">A-InnovAtion,D-Deep insight</span>, <span style="font-family:Faktum-Regular;">A-All dimensions P-Partnership T-Technology</span>.<span style="font-family:Faktum-Regular;">ADAPT</span>在英文中代表着进化，与时俱进，美至科技集合先进的策略+技术+营销能力，和合作伙伴一起，孵化属于中国的新消费品牌。']
        ],
        serviceTxt2: [
          ['行业研究', '和传统行研相比，美至科技聚焦于使用大数据与AI技术，从消费者、产品、渠道出发研究行业发展历史，并对未来做出定性预测。', '美至科技投资雷达：美至科技通过建立消费品细分行业模型，结合投资机构的个性化需求，更早更准确地挖掘投资标的。'],
          ['大数据尽职调查', '传统的投资尽职调查偏向于小样本访谈与研究，缺乏大数据支撑。美至科技利用技术能力结合经验丰富的行业专家，提供科学全面的尽职调查服务。'],
          ['投后管理服务', '对被投企业的市场表现进行数据监测，自动化分析并生成每月报告，在节省投后管理大量时间的同时，让投资机构迅速发现被投企业的问题或发展机遇。']
        ],
        nTab1: 0,
        nTab2: 0,
        sCur1: false,
        sCur2: false,
        swiper2: {
          activeIndex: 0
        }
      }
    },
    watch: {},
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
    margin: calc(35vw/14.4) calc(80vw/14.4) 0px calc(80vw/14.4);
    height: calc(672vw/14.4);
    overflow: hidden;
    position: relative;
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
    transition: all 2s;
    -moz-transition: all 2s;
    -webkit-transition: all 2s;
    -o-transition: all 2s;
  }

  .innovativeService .swiper-slide-active {
    opacity: 1;
    transition: all 2s;
    -moz-transition: all 2s;
    -webkit-transition: all 2s;
    -o-transition: all 2s;
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
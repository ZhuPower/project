<template>
  <div class="navMain" :class="{'cur':show}" id="navMain">
    <div class="topNav">
      <router-link :to="{path:'/CN/home'}"><img src="../assets/logo.png" class="logo"></router-link>
      <div class="menu" @click="showMenu">
        <i class="i-1"></i>
        <i class="i-2"></i>
        <i class="i-3"></i>
      </div>
    </div>
    <div class="menuBox">
      <div class="topNav">
        <div class="topLeft">
          <span @click="piakLg('CN')">中文</span>
          <i></i>
          <span @click="piakLg('EN')">EN</span>
        </div>
        <div class="menuMain" @click="closeMenu">
          <div class="menu menu_0">
            <i class="i-1"></i>
            <i class="i-2"></i>
            <i class="i-3"></i>
          </div>
        </div>
      </div>
      <div class="logoBox" :class="{'cur':!logonShow}">
        <img src="../assets/logo-animation.gif" class="logo-animation" v-if="logonShow">
        <img src="../assets/logotype.png" class="logotype">
      </div>

      <div class="menuList">
        <ul>
          <li v-for="(item,index) in menuList" :class="['li_'+index]" @mouseleave="leave(index)">
            <div class="menu-box" :class="{'cur':item.show}" @click.stop="showChild(index)">
              <div class="menuTxt" :data-text="item.name">{{item.name}}</div>
            </div>
            <div class="childList" v-if="item.child && item.child.length>0">
              <div class="child-box" v-for="(item2,index2) in item.child">
                <div class="menuTxt" @click.stop="goMenu(item2)">
                  <p v-html="item2.html"></p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  let enMenuList = [
    {
      name: 'Service',
      child: [
        {
          html: 'GaaS(Growth-as-a-Service)<br />A Unique Data Bank <br /> by Grotech',
          url: '/EN/home?id=serviceBox1'
        },
        {
          html: 'Big-Data-Driven <br />Customized Service for Investors',
          url: '/EN/home?id=serviceBox2'
        }
      ],
      show: false
    },
    {
      name: 'Product',
      child: [
        {
          html: 'GDB（Growth Data Bank）<br />A Unique Data Bank <br />by Grotech',
          url: '/EN/home?id=productBox'
        },
        {
          html: 'GroPilot<br /> Crystal Ball: An <br />Innovative and Smart <br />Business <br />Decision-Making System',
          url: '/EN/home?id=productBox'
        },
        {
          html: 'AdBot<br />A Data- Driven<br />Growth Tool',
          url: '/EN/home?id=productBox'
        }
      ],
      show: false
    },
    {
      name: 'About us',
      url: '/EN/about'
    },
    {
      name: 'Careers',
      url: '/EN/recruitment'
    }
  ]
  let cnMenuList = [
    {
      name: '服务',
      child: [
        {
          html: 'GaaS(Growth-as-a-Service)<br />聚焦大消费行业的一站式增长服务',
          url: '/CN/home?id=serviceBox1'
        },
        {
          html: '大数据驱动，为投资机构<br />量身定制专属服务',
          url: '/CN/home?id=serviceBox2'
        }
      ],
      show: false
    },
    {
      name: '产品',
      child: [
        {
          html: 'GDB（Growth Data Bank）<br />独树一帜的美至科技<br />数据银行',
          url: '/CN/home?id=productBox'
        },
        {
          html: 'AdBot<br />数据科学驱动的<br />增长工具',
          url: '/CN/home?id=productBox'
        },
        {
          html: 'GroPilot <br />水晶球创新的商业<br />智能决策系统',
          url: '/CN/home?id=productBox'
        }
      ],
      show: false
    },
    {
      name: '了解美至',
      url: '/CN/about'
    },
    {
      name: '加入我们',
      url: '/CN/recruitment'
    }
  ]
  export default {
    props: {},
    created() {
      if (this.$route.name.indexOf('en') == 0) {
        this.menuList = enMenuList
      } else {
        this.menuList = cnMenuList
      }
    },
    computed: {},
    methods: {
      showMenu() {
        this.show = true
        this.logonShow = true
        setTimeout(() => {
          this.logonShow = false
        }, 2500)
      },
      closeMenu() {
        this.show = false
      },
      showChild(n) {
        let obj = this.menuList[n];
        if (obj.show == undefined) {
          this.show = false
          document.body.scrollTop = document.documentElement.scrollTop = 0
          this.openScroll()
          this.$router.push(obj.url)
        } else {
          obj.show = true
        }
      },
      leave(n) {
        let obj = this.menuList[n];
        // console.log(obj)
        if (obj.show != undefined) {
          obj.show = false
        }
      },
      goMenu(obj) {
        if (this.$route.name == 'cnHome' || this.$route.name == 'enHome') {
          this.show = false
          let id = obj.url.split('=')[1]
          document.getElementById(id).scrollIntoView({
            block: 'start',
            behavior: 'smooth'
          });
        } else {
          document.body.scrollTop = document.documentElement.scrollTop = 0
          this.openScroll()
          this.$router.push(obj.url)
        }
      },
      stopScroll() {
        var mo = function (e) { passive: false; };
        document.body.style.overflow = 'hidden';
        document.addEventListener("touchmove", mo, false);//禁止页面滑动
      },
      openScroll() {
        var mo = function (e) { passive: false };
        document.body.style.overflow = '';//出现滚动条
        document.removeEventListener("touchmove", mo, false);
      },
      piakLg(str) {
        let _fullPath = this.$route.fullPath.substring(3)
        let url = `/${str}${_fullPath}`
        //this.show = false
        document.body.scrollTop = document.documentElement.scrollTop = 0
        this.openScroll()
        this.$router.push(url)
      }
    },
    data() {
      return {
        show: false,
        menuList: cnMenuList,
        logonShow: false
      }
    },
    watch: {
      show(val) {
        if (val) {
          this.stopScroll()
        } else {
          this.openScroll()
        }
      },
      '$route.name'(val, val2) {
        let _s1 = val.substring(0, 2)
        let _s2 = val2.substring(0, 2)
        if (_s1 != _s2) {
          if (val.indexOf('en') == 0) {
            this.menuList = enMenuList
          } else {
            this.menuList = cnMenuList
          }
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logoBox {
    position: absolute;
    left: calc(240vw/14.4);
    width: calc(960vw/14.4);
    height: calc(960vw*390/1800/14.4);
    top: 50%;
    margin-top: calc(-960vw*390/1800/28.8);
  }


  .logo-animation {
    width: 100%;
    height: auto;
    display: block;
  }

  .logotype {
    width: 100%;
    display: block;
    opacity: 0;
  }

  .logoBox.cur {
    top: calc(100% - 85vw/14.4);
    transition: all .5s;
    -webkit-transition: all .5s;
    left: 0;
    margin-left: calc(80vw/14.4);
    width: calc(221vw/14.4);
    height: calc(49vw/14.4);
    margin-top: 0px;
  }

  .logoBox.cur .logotype {
    opacity: 1;
  }

  .navMain {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9;
    background: #fff;
  }

  .topNav {
    height: calc(64vw/14.4);
    margin: 0px calc(80vw/14.4);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    width: calc(43vw/14.4);
    height: calc(39.66vw/14.4);
  }

  .menu {
    cursor: pointer;
    width: calc(27vw/14.4);
    height: calc(27vw/14.4);
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    overflow: hidden;
    box-sizing: border-box;
  }

  .menu i {
    width: 100%;
    height: calc(3vw/14.4);
    background: #000;
    display: block;
    margin-left: calc(3vw/14.4);
  }



  .menu i.i-1,
  .menu i.i-3 {
    position: absolute;
    left: 0;
    transform-origin: 0% 50%;
    transition: transform .3s;
  }

  .menu i.i-1 {
    top: calc(3vw/14.45);
  }

  .menu i.i-3 {
    bottom: calc(3vw/14.4);
  }

  .navMain .menu i.i-2 {
    transition: all .3s .3s;
  }

  .navMain.cur .menu i.i-2 {
    transform: translateX(calc(-27vw/14.4));
    transition: all .3s 2.6s;
  }

  .navMain.cur .menu i.i-1 {
    transform: rotate(45deg);
    transition: transform .3s 2.9s;
    top: calc(1.5vw/14.4);
    width: calc(30vw/14.4);
  }

  .navMain.cur .menu i.i-3 {
    bottom: calc(1.5vw/14.4);
    transform: rotate(-45deg);
    transition: transform .3s 2.9s;
    width: calc(30vw/14.4);
  }

  .topLeft {
    font-family: "PingFangSC-Regular";
    font-size: calc(21vw/14.4);
    font-weight: 400;
    line-height: calc(28vw/14.4);
    display: flex;
    align-items: center;
  }

  .topLeft i {
    margin: 0px calc(16vw/14.4);
    display: block;
    height: calc(20vw/14.4);
    width: calc(1vw/14.4);
    background: #000;
  }

  .topLeft span {
    cursor: pointer;
  }

  .menuBox {
    width: 100%;
    height: 100%;
    position: fixed;
    background: #fff;
    left: -100%;
    top: 0;
    z-index: 1;
    transition: all .6s;
    -webkit-transition: all .6s;
  }

  .navMain.cur .menuBox {
    left: 0;
    transition: all .6s;
    -webkit-transition: all .6s;
    /* Safari */
  }

  .menuList {
    color: #383a50;
    font-family: "PingFangSC-Medium";
    font-size: calc(42vw/14.4);
    font-weight: 400;
    width: 40.972%;
    position: absolute;
    right: 0;
    top: calc(110vw/14.4);
  }

  .menuList li {
    position: relative;
    overflow: hidden;
  }

  .menuList .menu-box {
    height: calc(41vw/14.4);
    overflow: hidden;
    cursor: pointer;
    margin-bottom: calc(24vw/14.4);
    display: inline-block;
    position: relative;
    top: calc(-41vw/14.4);
    opacity: 0;
  }

  .navMain.cur .menuList .menu-box {
    top: 0px;
    opacity: 1;
  }

  .navMain.cur .menuList .li_0 .menu-box {
    transition: all .11s 2.6s;
    -webkit-transition: all .11s 2.6s;
  }

  .navMain.cur .menuList .li_1 .menu-box {
    transition: all .07s 2.63s;
    -webkit-transition: all .11s 2.63s;
  }

  .navMain.cur .menuList .li_2 .menu-box {
    transition: all .11s 2.66s;
    -webkit-transition: all .11s 2.66s;
  }

  .navMain.cur .menuList .li_3 .menu-box {
    transition: all .11s 2.7s;
    -webkit-transition: all .11s 2.7s;
  }


  .menuList .menu-box>div {
    margin-top: calc(-9vw/14.4);
    padding-right: calc(10vw/14.4);
    transform: translate(0px, -59px);
    -webkit-transform: translate(0px, -59px);
    transition: all .6s;
    -webkit-transition: all .6s;
    position: relative;
  }

  .menuList .menu-box:hover>div {
    transform: translate(10px, 0px);
    -webkit-transform: translate(10px, 0px);
    transition: all .6s;
    -webkit-transition: all .6s;
  }

  .menuList .menu-box>div::after {
    content: attr(data-text);
    display: block;
    position: absolute;
    left: 0;
    top: 59px;
  }

  /* .navMain.cur .menuList {
    
    transition: all .6s 3.1s;
    -webkit-transition: all .6s 3.1s;
  } */

  .menuList .childList {
    width: 37.288%;
    position: absolute;
    top: 0;
    right: calc(80vw/14.4);
    opacity: 0.6;
    color: rgba(0, 0, 0, 0.7);
    font-family: "Faktum-Regular";
    font-size: calc(14vw/14.4);
    font-weight: 400;
    line-height: calc(21vw/14.4);
    z-index: -1;
    opacity: 0;
    transition: all .6s;
    -webkit-transition: all .6s;
  }

  .menuList .menu-box.cur+.childList {
    z-index: 2;
    opacity: 1;
    transition: all .6s;
    -webkit-transition: all .6s;
  }

  .menuList .childList .child-box {
    height: calc(63vw/14.4);
    overflow: hidden;
    margin-bottom: calc(16vw/14.4);
    display: inline-block;
  }

  .menuList .childList .child-box .menuTxt {
    opacity: 0.6;
    color: rgba(0, 0, 0, 0.7);
    font-family: "Faktum-Regular";
    font-size: calc(14vw/14.4);
    font-weight: 400;
    line-height: calc(21vw/14.4);
    position: relative;
    transition: all .6s;
    -webkit-transition: all .6s;
    cursor: pointer;
  }

  .menuList .childList .child-box:hover .menuTxt {
    font-weight: bold;
    color: 1;
    color: rgba(0, 0, 0, 1);
    transition: all .6s;
    -webkit-transition: all .6s;
  }
</style>
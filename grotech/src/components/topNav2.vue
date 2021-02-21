<template>
  <div class="navMain" :class="{'cur':show}" id="navMain">
    <div class="topNav" ref="topNav">
      <img src="../assets/mono.png" class="logo">
      <div class="menu" @click="showMenu">
        <i class="i-1"></i>
        <i class="i-2"></i>
        <i class="i-3"></i>
      </div>
    </div>
    <div class="navCon">
      <div class="topNav">
        <img src="../assets/mono.png" class="logo" v-if="isMenu">
      </div>
      <div class="nav-list">
        <div class="nav-box" @click.stop="goMenu('/CN/mobile/home?id=serviceBox')">服务</div>
        <div class="nav-box" @click.stop="goMenu('/CN/mobile/home?id=productBox')">产品</div>
        <div class="nav-box" @click.stop="goMenu('/CN/mobile/about')">了解美至</div>
        <div class="nav-box" @click.stop="goMenu('/CN/mobile/recruitment')">加入我们</div>
      </div>
      <div class="bottom">
        <div class="left">
          <img src="../assets/logotype2.png" class="logotype">
        </div>
        <div class="right">En</div>
      </div>
    </div>
    <div class="menuBox" :class="{'cur':isMenu}" @click="showMenu">
      <div class="menu">
        <i class="i-1"></i>
        <i class="i-2"></i>
        <i class="i-3"></i>
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
        this.show = !this.show
        if (this.show) {
          this.stopScroll()
        } else {
          this.openScroll()
        }
      },
      goMenu(str) {
        console.log(888888888)
        if (str.indexOf('?') > -1) {
          let query = str.substring(str.indexOf('?') + 1)
          let id = this.getQueryVariable('id', query)
          if (id && (this.$route.name == 'cnMHome' || this.$route.name == 'enMHome')) {
            this.show = false
            document.getElementById(id).scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            });
            this.openScroll()
          } else {
            document.body.scrollTop = document.documentElement.scrollTop = 0
            this.openScroll()
            this.$router.push(str)
          }
        } else {
          document.body.scrollTop = document.documentElement.scrollTop = 0
          this.openScroll()
          this.$router.push(str)
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
      handleScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        let _h2 = this.$refs.topNav && this.$refs.topNav.offsetHeight || 0
        if (scrollTop > _h2) {
          this.isMenu = true
        } else {
          this.isMenu = false
        }
      },
      getQueryVariable(variable, query) {
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
          var pair = vars[i].split("=");
          if (pair[0] == variable) { return pair[1]; }
        }
        return null;
      }
    },
    data() {
      return {
        show: false,
        menuList: cnMenuList,
        isMenu: false
      }
    },
    watch: {
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
      },
      show(val) {
        if (val) {
          this.stopScroll()
        } else {
          this.openScroll()
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navMain>.topNav {
    position: relative;
    z-index: 5;
  }

  .topNav {
    padding: 0px calc(24vw/3.75) 0px calc(23vw/3.75);
    height: calc(72vw/3.75);
    display: flex;
    width: 100%;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
  }

  .topNav .menu {
    width: calc(24vw/3.75);
    height: calc(24vw/3.75);
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    overflow: hidden;
    box-sizing: border-box;
  }

  .menuBox {
    width: calc(46vw/3.75);
    height: calc(46vw/3.75);
    border-radius: 50%;
    background: #65ecaa;
    position: fixed;
    top: calc(13vw/3.75);
    right: calc(13vw/3.75);
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all .6s;
  }

  .menuBox.cur {
    opacity: 1;
    transition: all .6s;
  }

  .menuBox .menu {
    width: calc(24vw/3.75);
    height: calc(24vw/3.75);
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    overflow: hidden;
    box-sizing: border-box;
  }

  .navMain .menu i {
    background: #000;
    width: 100%;
    height: calc(2vw/3.75);
    transition: all .3s .3s;
    margin-left: calc(2vw/3.75);
  }

  .navMain .menu i.i-1,
  .navMain .menu i.i-3 {
    position: absolute;
    left: 0;
    transform-origin: 0% 50%;
    transition: transform .3s;
  }

  .navMain .menu i.i-1 {
    top: calc(2vw/3.75);
  }

  .navMain .menu i.i-3 {
    bottom: calc(2vw/3.75);
  }

  .navMain.cur .menu i.i-2 {
    transform: translateX(calc(-24vw/3.75));
    transition: all .3s;
  }

  .navMain.cur .menu i.i-1 {
    transform: rotate(45deg);
    transition: transform .3s .3s;
    top: calc(1vw/3.75);
    width: calc(28.284vw/3.75);
  }

  .navMain.cur .menu i.i-3 {
    bottom: calc(1vw/3.75);
    transform: rotate(-45deg);
    transition: transform .3s .3s;
    width: calc(28.284vw/3.75);
  }

  .navMain .logo {
    width: calc(52vw/3.75);
    height: calc(48vw/3.75);
  }

  .navCon {
    position: fixed;
    right: -100%;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 4;
    box-sizing: border-box;
    top: 0;
    overflow: hidden;
    transition: all .6s;
  }

  .navMain.cur .navCon {
    right: 0%;
    transition: all .6s;
  }

  .navCon .nav-list {
    margin-top: calc(58vw/3.75);
    padding: 0px calc(23vw/3.75) 0px calc(24vw/3.75);
    box-sizing: border-box;
  }

  .navCon .nav-box {
    font-family: "PingFangSC-Medium";
    font-size: calc(24vw/3.75);
    font-weight: 400;
    line-height: calc(28vw/3.75);
    margin-bottom: calc(20vw/3.75);
  }

  .navCon .bottom {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    bottom: calc(20vw/3.75);
    padding: 0px calc(23vw/3.75) 0px calc(24vw/3.75);
    box-sizing: border-box;
  }

  .logotype {
    width: calc(137vw/3.75);
    height: calc(32vw/3.75);
  }

  .navCon .bottom .right {
    opacity: 0.6;
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(24vw/3.75);
    font-weight: 400;
    line-height: calc(28vw/3.75);
  }
</style>
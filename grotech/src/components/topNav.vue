<template>
  <div class="navMain" :class="{'cur':show}" id="navMain">
    <div class="topNav">
      <img src="../assets/logo.png" class="logo">
      <div class="menu" @click="showMenu">
        <img src="../assets/menu.png">
      </div>
    </div>
    <div class="menuBox">
      <div class="topNav">
        <div class="topLeft">
          <span>中文</span>
          <i></i>
          <span>EN</span>
        </div>
        <div class="menu" @click="closeMenu">
          <img src="../assets/closeMenu.png">
        </div>
      </div>
      <div class="logoBox" :class="{'cur':!logonShow}">
        <img src="../assets/logo-animation.gif" class="logo-animation" v-if="logonShow">
        <img src="../assets/logotype.png" class="logotype">
      </div>

      <div class="menuList">
        <ul>
          <li v-for="(item,index) in menuList" @mouseleave="leave(index)">
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
  export default {
    props: {},
    created() { },
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
        console.log('aaaaaaaa')
        if (this.$route.name == 'Home') {
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
    },
    data() {
      return {
        show: false,
        menuList: [
          {
            name: '服务',
            child: [
              {
                html: 'GaaS(Growth-as-a-Service)<br />聚焦大消费行业的一站式增长服务',
                url: '/?id=serviceBox1'
              },
              {
                html: '大数据驱动，为投资机构<br />量身定制专属服务',
                url: '/?id=serviceBox2'
              }
            ],
            show: false
          },
          {
            name: '产品',
            child: [
              {
                html: 'GDB（Growth Data Bank）<br />独树一帜的美至科技<br />数据银行',
                url: '/?id=productBox'
              },
              {
                html: 'AdBot<br />数据科学驱动的<br />增长工具',
                url: '/?id=productBox'
              },
              {
                html: 'GroPilot <br />水晶球创新的商业<br />智能决策系统',
                url: '/?id=productBox'
              }
            ],
            show: false
          },
          {
            name: '了解美至',
            url: '/about'
          },
          {
            name: '加入我们',
            url: '/recruitment'
          }
        ],
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
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logoBox {
    position: absolute;
    top: 34%;
    margin: 0px 18%;
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
    transition: all .6s;
    -webkit-transition: all .6s;
    left: 0;
    margin-left: calc(80vw/14.4);
    width: calc(221vw/14.4);
    height: calc(49vw/14.4);
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

  .menu {
    cursor: pointer;
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
    top: -100%;
    transition: all .6s .6s;
    -webkit-transition: all .6s .6s;
  }

  .menuList li {
    position: relative;
  }

  .menuList .menu-box {
    height: calc(41vw/14.4);
    overflow: hidden;
    cursor: pointer;
    margin-bottom: calc(24vw/14.4);
    display: inline-block;
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

  .navMain.cur .menuList {
    top: calc(110vw/14.4);
    transition: all .6s 3.1s;
    -webkit-transition: all .6s 3.1s;
  }

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
  }

  .menuList .childList .child-box:hover .menuTxt {
    font-weight: bold;
    color: 1;
    color: rgba(0, 0, 0, 1);
    transition: all .6s;
    -webkit-transition: all .6s;
  }
</style>
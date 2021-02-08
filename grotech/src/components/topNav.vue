<template>
  <div class="navMain" :class="{'cur':show}">
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
      <div class="menuList">
        <ul>
          <li>
            <div class="menu-box">
              <div class="menuTxt" data-text="服务">服务</div>
            </div>
          </li>
          <li>
            <div class="menu-box">
              <div class="menuTxt" data-text="产品">产品</div>
            </div>
          </li>
          <li>
            <div class="menu-box">
              <div class="menuTxt" data-text="了解美至">了解美至</div>
            </div>
          </li>
          <li>
            <div class="menu-box">
              <div class="menuTxt" data-text="加入我们">加入我们</div>
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
      },
      closeMenu() {
        this.show = false
      }
    },
    data() {
      return {
        show: false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .topNav {
    height: 64px;
    margin: 0px 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .menu {
    cursor: pointer;
  }

  .topLeft {
    font-family: "PingFangSC-Regular";
    font-size: 21px;
    font-weight: 400;
    line-height: 28px;
    display: flex;
    align-items: center;
  }

  .topLeft i {
    margin: 0px 16px;
    display: block;
    height: 20px;
    width: 1px;
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
    font-size: 42px;
    font-weight: 400;
    width: 40.97%;
    position: absolute;
    right: 0;
    top: -100%;
    transition: all .6s .6s;
    -webkit-transition: all .6s .6s;
  }

  .menuList .menu-box {
    height: 41px;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 24px;
    display: inline-block;
  }

  .menuList .menu-box>div {
    margin-top: -9px;
    padding-right: 10px;
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
    top: 110px;
    transition: all .6s .6s;
    -webkit-transition: all .6s .6s;
  }
</style>
<template>
  <div class="navMain" :class="{'cur':show}" id="navMain">
    <div class="topNav">
      <img src="../assets/mono.png" class="logo">
      <div class="menu" @click="showMenu">
        <i class="i-1"></i>
        <i class="i-2"></i>
        <i class="i-3"></i>
      </div>
    </div>
    <div class="navCon">
      <div class=""></div>
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

  .topNav .menu i {
    background: #000;
    width: 100%;
    height: calc(2vw/3.75);
    transition: all .3s .3s;
    margin-left: calc(2vw/3.75);
  }

  .topNav .menu i.i-1,
  .topNav .menu i.i-3 {
    position: absolute;
    left: 0;
    transform-origin: 0% 50%;
    transition: transform .3s;
  }

  .topNav .menu i.i-1 {
    top: calc(2vw/3.75);
  }

  .topNav .menu i.i-3 {
    bottom: calc(2vw/3.75);
  }

  .navMain.cur .topNav .menu i.i-2 {
    transform: translateX(calc(-24vw/3.75));
    transition: all .3s;
  }

  .navMain.cur .topNav .menu i.i-1 {
    transform: rotate(45deg);
    transition: transform .3s .3s;
    top: calc(1vw/3.75);
    width: calc(28.284vw/3.75);
  }

  .navMain.cur .topNav .menu i.i-3 {
    bottom: calc(1vw/3.75);
    transform: rotate(-45deg);
    transition: transform .3s .3s;
    width: calc(28.284vw/3.75);
  }

  .topNav .logo {
    width: calc(52vw/3.75);
    height: calc(48vw/3.75);
  }
</style>
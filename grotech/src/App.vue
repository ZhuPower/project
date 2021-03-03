<template>
  <div id="app">
    <div class="mBox" v-if="$route.name && ($route.name.charAt(2) == 'M')">
      <router-view />
    </div>
    <div class="pcBox" v-else>
      <router-view />
    </div>

  </div>
</template>
<script>
  export default {
    components: {},
    created() {
      this.isMobile()
    },
    mounted() {
      window.onresize = () => {
        setTimeout(() => {
          this.versionSwitch(this.$route.fullPath)
        }, 20)
      }
    },
    computed: {},
    methods: {
      isMobile() {
        var u = navigator.userAgent
        var b = !!u.match(/AppleWebKit.*Mobile.*/)
        return b;
      },
      openScroll() {
        var mo = function (e) { passive: false };
        document.body.style.overflow = '';//出现滚动条
        document.removeEventListener("touchmove", mo, false);
      },
      versionSwitch(str) {

        let b1 = this.isMobile()
        let b2 = str.indexOf('/mobile/') > -1 ? true : false

        if (b1 != b2) {
          let url = ''
          let url1 = str.substring(0, 3)
          let url2 = ''

          if (b1) {
            url2 = '/mobile' + str.substring(3)
          } else {
            url2 = str.substring(10)
          }

          url = `${url1}${url2}`
          document.body.scrollTop = document.documentElement.scrollTop = 0
          this.openScroll()
          this.$router.push(url)
        }
      }
    },
    data() {
      return {}
    },
    watch: {
      '$route.fullPath'(val) {
        this.versionSwitch(val)
      }
    }
  }
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }

  video {
    width: 100%;
  }

  .pcBox {
    padding-top: calc(64vw/14.4);
  }

  .home .homeVideo video {
    height: calc(817vw/14.4);
  }

  .content {
    position: relative;
    z-index: 3;
    background: #fff;
    overflow: hidden;
  }


  @keyframes myfirst {
    from {
      margin-top: calc(5vw/14.4);
    }

    to {
      margin-top: calc(7vw/14.4);
    }
  }

  @-moz-keyframes myfirst

  /* Firefox */
    {
    from {
      margin-top: calc(5vw/14.4);
    }

    to {
      margin-top: calc(76vw/14.4);
    }
  }

  @-webkit-keyframes myfirst

  /* Safari and Chrome */
    {
    from {
      margin-top: calc(5vw/14.4);
    }

    to {
      margin-top: calc(7vw/14.4);
    }
  }

  @-o-keyframes myfirst

  /* Opera */
    {
    from {
      margin-top: calc(5vw/14.4);
    }

    to {
      margin-top: calc(7vw/14.4);
    }
  }


  @keyframes atList_1 {
    from {
      left: -100%;
    }

    to {
      left: 0%;
    }
  }

  @-moz-keyframes atList_1

  /* Firefox */
    {
    from {
      left: -100%;
    }

    to {
      left: 0%;
    }
  }

  @-webkit-keyframes atList_1

  /* Safari and Chrome */
    {
    from {
      left: -100%;
    }

    to {
      left: 0%;
    }
  }

  @-o-keyframes atList_1

  /* Opera */
    {
    from {
      left: -100%;
    }

    to {
      left: 0%;
    }
  }
</style>
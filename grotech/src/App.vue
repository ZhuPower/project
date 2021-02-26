<template>
  <div id="app">
    <div class="mBox" v-if="$route.name && ($route.name.charAt(2) == 'M')">
      <router-view />
      <foot2 />
    </div>
    <div class="pcBox" v-else>
      <router-view />
      <foot />
    </div>

  </div>
</template>
<script>
  import foot from "./components/foot";
  import foot2 from "./components/foot2";
  export default {
    name: 'About',
    components: {
      foot,
      foot2
    },
    created() { },
    computed: {},
    methods: {
    },
    data() {
      return {

      }
    },
    watch: {}
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
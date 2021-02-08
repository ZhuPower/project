<template>
  <div id="app">
    <div style="font-size: 12px;padding-top: 64px;">
      <router-view />
      <foot />
    </div>

  </div>
</template>
<script>
  import foot from "./components/foot";
  export default {
    name: 'About',
    components: {
      foot
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

  .content {
    position: relative;
    z-index: 3;
    background: #fff;
    overflow: hidden;
  }

  @keyframes myfirst {
    from {
      margin-top: 5px;
    }

    to {
      margin-top: 7px;
    }
  }

  @-moz-keyframes myfirst

  /* Firefox */
    {
    from {
      margin-top: 5px;
    }

    to {
      margin-top: 76px;
    }
  }

  @-webkit-keyframes myfirst

  /* Safari and Chrome */
    {
    from {
      margin-top: 5px;
    }

    to {
      margin-top: 7px;
    }
  }

  @-o-keyframes myfirst

  /* Opera */
    {
    from {
      margin-top: 5px;
    }

    to {
      margin-top: 7px;
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
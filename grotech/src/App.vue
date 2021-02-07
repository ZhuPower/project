<template>
  <div id="app">
    <div style="font-size: 12px;">
      <router-view />
    </div>

  </div>
</template>

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
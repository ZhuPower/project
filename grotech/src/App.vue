<template>
  <div id="app">
    <div class="mBox" v-if="$route.name.charAt(2) == 'M'">
      <router-view />
    </div>
    <div class="pcBox" v-else>
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

  video {
    width: 100%;
  }

  .pcBox {
    font-size: 10px;
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


  .sphere1 {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    perspective: calc(440vw/14.4);
    position: absolute;
  }

  .sphere1 .circle {
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 100%;
    background: linear-gradient(rgba(56, 58, 82, 0.1), rgba(125, 128, 166, 0.1));
    transform-origin: center;
    -webkit-animation: rotate 8s linear infinite;
    animation: rotate 8s linear infinite;
  }

  .sphere1 .circle:nth-child(2) {
    -webkit-animation-delay: .1s;
    animation-delay: .1s;
  }

  .sphere1 .circle:nth-child(3) {
    -webkit-animation-delay: .2s;
    animation-delay: .2s;
  }

  .sphere1 .circle:nth-child(4) {
    -webkit-animation-delay: .3s;
    animation-delay: .3s;
  }

  .sphere1 .circle:nth-child(5) {
    -webkit-animation-delay: .4s;
    animation-delay: .4s;
  }

  .sphere1 .circle:nth-child(6) {
    -webkit-animation-delay: .5s;
    animation-delay: .5s;
  }

  .sphere1 .circle:nth-child(7) {
    -webkit-animation-delay: .6s;
    animation-delay: .6s;
  }

  .sphere1 .circle:nth-child(8) {
    -webkit-animation-delay: .7s;
    animation-delay: .7s;
  }

  .sphere1 .circle:nth-child(9) {
    -webkit-animation-delay: .8s;
    animation-delay: .8s;
  }

  .sphere1 .circle:nth-child(10) {
    -webkit-animation-delay: .9s;
    animation-delay: .9s;
  }


  .sphere2 {
    width: 100%;
    height: 100%;
    position: absolute;
    -webkit-perspective: calc(4000vw/14.4);
    perspective: calc(4000vw/14.4);
    -webkit-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    -o-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  .sphere2 .circle {
    -webkit-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    -o-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: calc(500vw/14.4);
    height: calc(500vw/14.4);
    position: absolute;
    border-radius: 100%;
    background: linear-gradient(rgba(56, 58, 82, 0.1), rgba(125, 128, 166, 0.1));
    transform-origin: center;
    -webkit-animation: rotate2 30s ease-in-out alternate infinite;
    animation: rotate2 30s ease-in-out alternate infinite;
  }

  .sphere2 .circle:nth-child(1) {
    -webkit-animation-delay: 200ms;
    animation-delay: 200ms;
  }

  .sphere2 .circle:nth-child(2) {
    -webkit-animation-delay: 400ms;
    animation-delay: 400ms;
  }

  .sphere2 .circle:nth-child(3) {
    -webkit-animation-delay: 600ms;
    animation-delay: 600ms;
  }

  .sphere2 .circle:nth-child(4) {
    -webkit-animation-delay: 800ms;
    animation-delay: 800ms;
  }

  .sphere2 .circle:nth-child(5) {
    -webkit-animation-delay: 1000ms;
    animation-delay: 1000ms;
  }

  .sphere2 .circle:nth-child(6) {
    -webkit-animation-delay: 1200ms;
    animation-delay: 1200ms;
  }

  .sphere2 .circle:nth-child(7) {
    -webkit-animation-delay: 1400ms;
    animation-delay: 1400ms;
  }

  .sphere2 .circle:nth-child(8) {
    -webkit-animation-delay: 1600ms;
    animation-delay: 1600ms;
  }

  .sphere2 .circle:nth-child(9) {
    -webkit-animation-delay: 1800ms;
    animation-delay: 1800ms;
  }

  .sphere2 .circle:nth-child(10) {
    -webkit-animation-delay: 2000ms;
    animation-delay: 2000ms;
  }

  @-webkit-keyframes rotate2 {
    0% {
      -webkit-transform: rotateY(0deg) rotateX(0deg);
      opacity: 1;
    }

    10% {
      -webkit-transform: rotateY(90deg) rotateX(108deg);
    }

    20% {
      -webkit-transform: rotateY(180deg) rotateX(216deg);
    }

    30% {
      -webkit-transform: rotateY(270deg) rotateX(324deg);
    }

    40% {
      -webkit-transform: rotateY(360deg) rotateX(432deg);
    }

    50% {
      -webkit-transform: rotateY(450deg) rotateX(540deg);
    }

    60% {
      -webkit-transform: rotateY(540deg) rotateX(648deg);
    }

    70% {
      -webkit-transform: rotateY(630deg) rotateX(756deg);
    }

    80% {
      -webkit-transform: rotateY(720deg) rotateX(864deg);
    }

    90% {
      -webkit-transform: rotateY(810deg) rotateX(972deg);
    }

    100% {
      -webkit-transform: rotateY(900deg) rotateX(1080deg);
      opacity: 1;
    }
  }

  @keyframes rotate2 {
    0% {
      -webkit-transform: rotateY(0deg) rotateX(0deg);
      /*-moz-transform: rotateY(0deg) rotateX(0deg);*/
      -ms-transform: rotateY(0deg) rotateX(0deg);
      -o-transform: rotateY(0deg) rotateX(0deg);
      transform: rotateY(0deg) rotateX(0deg);
      opacity: 1;
    }

    10% {
      -webkit-transform: rotateY(90deg) rotateX(108deg);
      /*-moz-transform: rotateY(90deg) rotateX(108deg);*/
      -ms-transform: rotateY(90deg) rotateX(108deg);
      -o-transform: rotateY(90deg) rotateX(108deg);
      transform: rotateY(90deg) rotateX(108deg);
    }

    20% {
      -webkit-transform: rotateY(180deg) rotateX(216deg);
      /*-moz-transform: rotateY(180deg) rotateX(216deg);*/
      -ms-transform: rotateY(180deg) rotateX(216deg);
      -o-transform: rotateY(180deg) rotateX(216deg);
      transform: rotateY(180deg) rotateX(216deg);
    }

    30% {
      -webkit-transform: rotateY(270deg) rotateX(324deg);
      /*-moz-transform: rotateY(270deg) rotateX(324deg);*/
      -ms-transform: rotateY(270deg) rotateX(324deg);
      -o-transform: rotateY(270deg) rotateX(324deg);
      transform: rotateY(270deg) rotateX(324deg);
    }

    40% {
      -webkit-transform: rotateY(360deg) rotateX(432deg);
      /*-moz-transform: rotateY(360deg) rotateX(432deg);*/
      -ms-transform: rotateY(360deg) rotateX(432deg);
      -o-transform: rotateY(360deg) rotateX(432deg);
      transform: rotateY(360deg) rotateX(432deg);
    }

    50% {
      -webkit-transform: rotateY(450deg) rotateX(540deg);
      /*-moz-transform: rotateY(450deg) rotateX(540deg);*/
      -ms-transform: rotateY(450deg) rotateX(540deg);
      -o-transform: rotateY(450deg) rotateX(540deg);
      transform: rotateY(450deg) rotateX(540deg);
    }

    60% {
      -webkit-transform: rotateY(540deg) rotateX(648deg);
      /*-moz-transform: rotateY(540deg) rotateX(648deg);*/
      -ms-transform: rotateY(540deg) rotateX(648deg);
      -o-transform: rotateY(540deg) rotateX(648deg);
      transform: rotateY(540deg) rotateX(648deg);
    }

    70% {
      -webkit-transform: rotateY(630deg) rotateX(756deg);
      /*-moz-transform: rotateY(630deg) rotateX(756deg);*/
      -ms-transform: rotateY(630deg) rotateX(756deg);
      -o-transform: rotateY(630deg) rotateX(756deg);
      transform: rotateY(630deg) rotateX(756deg);
    }

    80% {
      -webkit-transform: rotateY(720deg) rotateX(864deg);
      /*-moz-transform: rotateY(720deg) rotateX(864deg);*/
      -ms-transform: rotateY(720deg) rotateX(864deg);
      -o-transform: rotateY(720deg) rotateX(864deg);
      transform: rotateY(720deg) rotateX(864deg);
    }

    90% {
      -webkit-transform: rotateY(810deg) rotateX(972deg);
      /*-moz-transform: rotateY(810deg) rotateX(972deg);*/
      -ms-transform: rotateY(810deg) rotateX(972deg);
      -o-transform: rotateY(810deg) rotateX(972deg);
      transform: rotateY(810deg) rotateX(972deg);
    }

    100% {
      -webkit-transform: rotateY(900deg) rotateX(1080deg);
      /*-moz-transform: rotateY(900deg) rotateX(1080deg);*/
      -ms-transform: rotateY(900deg) rotateX(1080deg);
      -o-transform: rotateY(900deg) rotateX(1080deg);
      transform: rotateY(900deg) rotateX(1080deg);
      opacity: 1;
    }
  }



  @-webkit-keyframes rotate {
    to {
      transform: rotateY(1turn) rotateX(2turn);
    }
  }

  @keyframes rotate {
    to {
      transform: rotateY(1turn) rotateX(2turn);
    }
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
<template>
  <div class="footMain">
    <div class="foot-right">
      <img src="../assets/ewm.png" class="ewm">
      <div class="gztxt">关注微信公众号</div>
    </div>
    <div class="contact">
      <p class="p1">联系我们</p>
      <p class="p2">86-10-8639-8893</p>
    </div>

    <div class="address">
      <div class="address-box address-box-1">
        <div class="address-name">北京</div>
        <p>朝阳区霄云路35号5层<br />邮编：100000</p>
      </div>
      <div class="address-box address-box-2">
        <div class="address-name">上海</div>
        <p>浦东新区晶耀前滩<br />T5办公楼702&703单元<br />邮编：200002</p>
      </div>
      <div class="address-box address-box-3">
        <div class="address-name">广州</div>
        <p>天河区建中路59号天河<br />软件园西座柏朗奴大厦2<br />层 邮编：510665 </p>
      </div>
    </div>

    <div class="foot-left">
      <img src="../assets/txt2.png" class="mzkj" />
      <div class="copyright"><span style="font-family:Faktum-Regular;">@ 2020 Grotech </span>版权所有 </div>
    </div>

  </div>
</template>

<script>
  export default {
    props: {},
    created() { },
    computed: {},
    methods: {},
    data() {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footMain {
    background: #9999e4;
    padding: 0px calc(24vw/3.75) 0px calc(23vw/3.75);
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }

  .contact {
    margin-top: calc(14vw/3.75);
  }

  .contact .p1 {
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(15vw/3.75);
    font-weight: 400;
    line-height: calc(37vw/3.75);
  }

  .contact .p2 {
    color: #3d3c45;
    font-family: "Faktum-Regular";
    font-size: calc(18vw/3.75);
    font-weight: 500;
    line-height: calc(37vw/3.75);
    margin-top: calc(-11vw/3.75);
  }

  .address {}

  .address .address-name {
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(15vw/3.75);
    font-weight: 400;
    line-height: calc(28vw/3.75);
    margin-bottom: 0px;
  }

  .address .address-box p {
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(14vw/3.75);
    font-weight: 400;
    line-height: calc(16.6vw/3.75);
  }

  .footMain .foot-right {
    position: absolute;
    right: calc(20vw/3.75);
    bottom: calc(14vw/3.75);
    text-align: center;
  }

  .footMain .foot-left {
    margin-bottom: calc(20vw/3.75);
    margin-top: calc(44vw/3.75);
  }

  .footMain .foot-right .gztxt {
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(7vw/3.75);
    font-weight: 400;
    line-height: calc(42vw/3.75);
    margin-top: calc(-5vw/3.75);
  }

  .footMain .foot-right .ewm {
    width: calc(57vw/3.75);
    height: calc(58vw/3.75);
  }

  .footMain .foot-left .copyright {
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: calc(13vw/3.75);
    font-weight: 400;
    line-height: calc(28vw/3.75);
    margin-top: calc(-2vw/3.75);
  }

  .footMain .foot-left .mzkj {
    width: calc(68vw/3.75);
    height: calc(16vw/3.75);
  }

  .address-box-1 {
    margin-top: calc(15vw/3.75);
  }

  .address-box-2 {
    margin-top: calc(21vw/3.75);
  }

  .address-box-3 {
    margin-top: calc(15vw/3.75);
  }

  .address-box-1 .address-name {
    margin-bottom: calc(12vw/3.75);
  }

  .address-box-2 .address-name {
    margin-bottom: calc(12vw/3.75);
  }
</style>
<template>
  <div class="footMain">
    <div class="contact">
      <p class="p1">联系我们</p>
      <p class="p2">86-10-8639-8893</p>
    </div>

    <div class="address">
      <div class="address-box">
        <div class="address-name">北京</div>
        <p>朝阳区霄云路35号5层<br />邮编：100000</p>
      </div>
      <div class="address-box">
        <div class="address-name">上海</div>
        <p>浦东新区晶耀前滩<br />T5办公楼702&703单元<br />邮编：200002</p>
      </div>
      <div class="address-box">
        <div class="address-name">广州</div>
        <p>天河区建中路59号天河<br />软件园西座柏朗奴大厦2<br />层 邮编：510665 </p>
      </div>
    </div>

    <div class="foot-left">
      <img src="../assets/txt.png" class="mzkj" />
      <div class="copyright"><span style="font-family:Faktum-Regular;">@ 2020 Grotech </span>版权所有白空间黄河科技 </div>
    </div>
    <div class="foot-right">
      <img src="../assets/ewm.png" class="ewm">
      <div class="gztxt">关注微信公众号</div>
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
    width: 100%;
    height: calc(481vw/14.4);
    background: #9999e4;
    position: relative;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
  }

  .footMain .contact {
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(21vw/14.4);
    font-weight: 400;
    line-height: calc(55.5vw/14.4);
    width: 30.55%;
    margin-left: calc(80vw/14.4);
    margin-top: calc(72vw/14.4);
  }

  .footMain .contact .p1 {}

  .footMain .contact .p2 {}



  .footMain .address {
    display: flex;
    width: 58.33%;
    justify-content: space-between;
    margin-right: calc(80vw/14.4);
    margin-top: calc(70vw/14.4);
  }

  .footMain .address .address-name {
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(21vw/14.4);
    font-weight: 400;
    line-height: calc(42vw/14.4);
  }

  .footMain .address .address-box p {
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(17vw/14.4);
    font-weight: 400;
    line-height: calc(27vw/14.4);
  }

  .footMain .foot-left {
    position: absolute;
    left: calc(80vw/14.4);
    bottom: calc(24vw/14.4);
  }

  .footMain .foot-left .copyright {
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(19.5vw/14.4);
    font-weight: 400;
    line-height: calc(42vw/14.4);
  }

  .footMain .foot-right {
    position: absolute;
    right: calc(80vw/14.4);
    bottom: calc(0vw/14.4);
    text-align: center;
  }

  .footMain .foot-right .ewm {
    width: calc(110vw/14.4);
    height: calc(110vw/14.4);
  }

  .footMain .foot-right .gztxt {
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(14vw/14.4);
    font-weight: 400;
    line-height: calc(42vw/14.4);
    margin-top: calc(-2vw/14.4);
  }
</style>
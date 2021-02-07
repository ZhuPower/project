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
        <p>天河区建中路59号天河<br />软件园西座柏朗奴大厦2层<br />邮编：510665 </p>
      </div>
    </div>

    <div class="foot-left">
      <img src="../assets/txt.png" class="mzkj" />
      <div class="copyright">@ 2020 Grotech 版权所有白空间黄河科技</div>
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
    height: 481px;
    background: #9999e4;
    position: relative;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
  }

  .footMain .contact {
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: 21px;
    font-weight: 400;
    line-height: 55.5px;
    width: 30.55%;
    margin-left: 80px;
    margin-top: 72px;
  }

  .footMain .contact .p1 {}

  .footMain .contact .p2 {}



  .footMain .address {
    display: flex;
    width: 58.33%;
    justify-content: space-between;
    margin-right: 80px;
    margin-top: 70px;
  }

  .footMain .address .address-name {
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: 21px;
    font-weight: 400;
    line-height: 42px;
  }

  .footMain .address .address-box p {
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: 17px;
    font-weight: 400;
    line-height: 27px;
  }

  .footMain .foot-left {
    position: absolute;
    left: 80px;
    bottom: 24px;
  }

  .footMain .foot-left .copyright {
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: 19.5px;
    font-weight: 400;
    line-height: 42px;
  }

  .footMain .foot-right {
    position: absolute;
    right: 80px;
    bottom: 0px;
    text-align: center;
  }

  .footMain .foot-right .ewm {
    width: 110px;
    height: 110px;
  }

  .footMain .foot-right .gztxt {
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: 14px;
    font-weight: 400;
    line-height: 42px;
    margin-top: -2px;
  }
</style>
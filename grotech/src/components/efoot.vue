<template>
  <div class="footMain">
    <div class="contact">
      <p class="p1">Contact us</p>
      <p class="p2">86-10-8639-8893</p>
    </div>

    <div class="address">
      <div class="address-box address-box-1">
        <div class="address-name">Beijing</div>
        <p>5F 35 Xiaoyun Road<br />Chaoyang District Beijing<br />100028</p>
      </div>
      <div class="address-box address-box-2">
        <div class="address-name">Shanghai</div>
        <p>702&703 Block T5, Crystal Plaza <br />Pudong New Area Shanghai<br /> 200002</p>
      </div>
      <div class="address-box address-box-3">
        <div class="address-name">Guangzhou</div>
        <p>2F Bolangnu Building West<br /> Tower Tianhe Software Park 59<br /> Jianzhong Road Guangzhou <br />510665</p>
      </div>
    </div>

    <div class="foot-left">
      <img src="../assets/txt.png" class="mzkj" />
      <div class="copyright"><span style="font-family:Faktum-Regular;">@ 2020 Grotech </span>All Rights Reserved.ICP
      </div>
    </div>
    <div class="foot-right">
      <img src="../assets/ewm.png" class="ewm">
      <div class="gztxt">Follow our WeChat</div>
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
    overflow: hidden;
    padding-top: calc(68vw/14.4);
    box-sizing: border-box;
    padding-left: calc(80vw/14.4);
  }

  .footMain .contact {
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: calc(21vw/14.4);
    font-weight: 400;
    line-height: calc(55.5vw/14.4);
    width: calc(440vw/14.4);
    margin-top: calc(3vw/14.4);
  }


  .footMain .address {
    display: flex;
    width: calc(920vw/14.4);
    margin-top: calc(10vw/14.4);
  }

  .footMain .address .address-name {
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: calc(21vw/14.4);
    font-weight: 400;
    line-height: calc(42vw/14.4);
  }

  .footMain .address .address-box p {
    color: #383a50;
    font-family: "Faktum-Regular";
    font-size: calc(12vw/14.4);
    font-weight: 400;
    line-height: calc(16vw/14.4);
  }

  .footMain .address .address-box-1,
  .footMain .address .address-box-2 {
    width: calc(330vw/14.4);
  }

  .footMain .address .address-box-3 {
    width: calc(260vw/14.4);
  }

  .footMain .foot-left {
    position: absolute;
    left: calc(80vw/14.4);
    bottom: calc(24vw/14.4);
  }

  .footMain .foot-left>img {
    width: calc(102vw/14.4);
    height: calc(24vw/14.4);
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
    height: calc(111vw/14.4);
  }

  .footMain .foot-right .gztxt {
    color: #383a50;
    font-family: "PingFangSC-Regular";
    font-size: calc(12vw/14.4);
    font-weight: 400;
    line-height: calc(42vw/14.4);
    margin-top: calc(-2vw/14.4);
  }
</style>
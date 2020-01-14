<template>
  <div class="pointWrap">
    <div class="popBackground" v-if="oPoint.pop"></div>
    <div class="pointMain" v-if="oPoint.pop">
      <div class="pointHead">提示<a href="javascript:;" class="cloaeBtn icons_b" @click="close()"></a></div>
      <div class="pointCon" v-text="oPoint.pointWord"></div>
      <div class="pointFoot">
        <a href="javascript:;" class="qr" @click="confirm()">确定</a>
        <a href="javascript:;" class="qx" @click="close()" v-if="oPoint.closeBtn">取消</a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
export default {
  data () {
    return {}
  },
  watch: {},
  computed:{},
  created() {},
  computed:{
    ...mapState(['oPoint'])
  },
  methods: {
    ...mapMutations(['setPoint']),
    close(){
      this.setPoint({pop:false,closeBtn:false});
    },
    confirm(){
      if(this.oPoint.type == 0){
        this.setPoint({pop:false,closeBtn:false});
      }else{
        this.setPoint({pop:false,closeBtn:false,code:1});
      }
    }
  },
  components: {}
}
</script>


<style scoped>
.pointWrap{z-index: 999;position: relative;}
.popBackground{background: #000; position: fixed; width: 100%; height: 100%; top:0px;left: 0px;opacity: 0.7;}
.pointMain{position:fixed; top:50%; left: 50%; background: #fff; width: 400px; margin-left:-200px;/* height: 120px;*/ overflow: hidden; margin-top: -60px; animation: fk 0.6s ease-in forwards 0s 1 normal;}
.pointHead{height: 40px; line-height: 40px; border-bottom: 1px solid #eeeeee; padding-left: 10px; overflow: hidden; font-size: 18px;}
.pointHead a{display:block; float: right; width: 40px; height: 40px; text-align: center; line-height: 40px; margin-right: 10px;}
.pointHead a:before{width: 15px; height: 15px; background-position: -85px -96px;content:"";}
.pointCon{height: 80px; line-height: 80px; font-size: 16px; text-align: center;}
.pointFoot{text-align: center; border-top: 1px solid #eeeeee; height: 70px; box-sizing: border-box; padding-top: 20px; }
.pointFoot a{width: 108px; height: 30px; line-height: 30px; text-align: center; border-radius: 18px; font-weight: bold; font-size: 16px;  display: inline-block;}
.pointFoot a.qr{background: #dc0034; border:1px solid #dc0034; color: #fff; margin-right: 22px;}
.pointFoot a.qx{ border:1px solid #686a7c; color: #686a7c;}
.popBj{position: fixed; width: 100%;height: 100%; left: 0;top: 0;background: #000;opacity: .6;}
.popWrap{width: 400px;height: auto;  position:absolute; background: #fff; top:50%; left: 50%; margin-left:-200px; margin-top: -153px; animation: fk 0.6s ease-in forwards 0s 1 normal;}
.popWrap h3{text-align:center; font-weight: normal; font-size: 20px; height: 50px; line-height: 50px;}
.popWrap ul{}
.popWrap ul li{ margin-bottom:13px;overflow: hidden;}
.popWrap ul li>*{float: left;}
.popWrap ul li>label{margin-top: 8px;}
.popWrap ul li>div{width: 240px;}
.popWrap ul li>span{width: 100px;display: block; text-align: right; height: 32px; line-height: 32px;}
.popWrap .boxfoot{text-align: center; height: 50px;padding-top: 11px; box-sizing:border-box; }
.popWrap .boxfoot a{height: 28px; width: 100px; line-height: 28px; text-align: center;display: inline-block;border-radius: 14px;background:#9193aa;color: #fff;}
.popWrap .boxfoot a:first-child{background:#da0032;margin-right: 10px;}
.czBox{float: right; width: 84px; overflow: hidden; font-size: 0px; display: none; overflow: hidden;text-align: right;}
.czBox a{margin-left: 14px;}
.czBox a:first-child{margin-left: 0px;}
</style>

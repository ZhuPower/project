<template>
  <div class="pointWrap">
    <div class="popBackground" v-if="oPoint.pop"></div>
    <div class="pointMain" v-if="oPoint.pop">
      <div class="pointHead">提示<a href="javascript:;" class="cloaeBtn icons_b" @click="close()" v-if="oPoint.confirmBtn && (oPoint.type!=10)"></a><span v-if="oPoint.type==10">{{n}}S后关闭</span></div>
      <div class="pointCon" v-text="oPoint.pointWord"></div>
      <div class="pointFoot" v-if="oPoint.confirmBtn">
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
    return {
      n:3,
      nId:''
    }
  },
  watch: {
    'oPoint.type': {
         handler: function() {
            clearInterval(this.nId);
            if(this.oPoint.type == 10){
              this.n = 3;
              this.nId = setInterval(()=>{
                this.n--;
                if(this.n==0){
                  clearInterval(this.nId);
                  this.setPoint({pop:false,closeBtn:false,code:0});
                }
              },1000)
            }
         }
     }
  },
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
        if(this.oPoint.type == 10){
          clearInterval(this.nId);
          this.setPoint({pop:false,closeBtn:false,code:0});
        }
      }
    }
  },
  components: {}
}
</script>


<style scoped>
.pointWrap{z-index: 4000;position: relative;}
.popBackground{background: #000; position: fixed; width: 100%; height: 100%; top:0px;left: 0px;opacity: 0.7;}
.pointMain{position:fixed; top:50%; left: 50%; background: #fff; width: 400px; margin-left:-200px;/* height: 120px;*/ overflow: hidden; margin-top: -60px; animation: fk 0.6s ease-in forwards 0s 1 normal;}
.pointHead{height: 40px; line-height: 40px; border-bottom: 1px solid #eeeeee; padding-left: 10px; overflow: hidden; font-size: 18px;}
.pointHead a{display:block; float: right; width: 40px; height: 40px; text-align: center; line-height: 40px; margin-right: 10px;}
.pointHead span{display:block; float: right; width: auto; height: 40px; text-align: center; line-height: 40px; margin-right: 10px;}
.pointHead a:before{width: 15px; height: 15px; background-position: -85px -96px;content:"";}
.pointCon{height: 80px; line-height: 80px; font-size: 16px; text-align: center;}
.pointFoot{text-align: center; border-top: 1px solid #eeeeee; height: 70px; box-sizing: border-box; padding-top: 20px; }
.pointFoot a{width: 108px; height: 30px; line-height: 30px; text-align: center; border-radius: 18px; font-weight: bold; font-size: 16px;  display: inline-block;}
.pointFoot a.qr{background: #dc0034; border:1px solid #dc0034; color: #fff; margin-right: 22px;}
.pointFoot a.qx{ border:1px solid #686a7c; color: #686a7c;}
</style>

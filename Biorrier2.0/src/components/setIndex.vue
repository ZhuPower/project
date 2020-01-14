<template>
  <div class="indexWrap">
    <div class="popBackground"></div>
    <div class="storeListMain">
      <div class="storeHead">
        <span class="bold">调整优先级</span>
        <a href="javascript:;" class="cloaeBtn icons_b" @click="closeBtn()"></a>
      </div>
      <div class="storeMain" id="storeMain">
        <el-scrollbar style="height:100%">
          <listMain :oShow="oShow" id="priorityList"></listMain>
        </el-scrollbar>
      </div>
      <div class="storeFoot">
        <a href="javascript:;" class="qr" @click="saveBtn()">确定</a>
        <a href="javascript:;" class="qx" @click="closeBtn()">取消</a>
      </div>
    </div>
  </div>
</template>

<script>
import listMain from '@/components/listMain'
import {mapState,mapMutations} from 'vuex';
export default {
  data () {
    return {
      oShow:{
        doctorOrder:false,
        mallOrder:false,
        TmallOrder:false,
        proposalGoods:false,
        cooperativeDoctor:false,
        saleser:false,
        microBusiness:false,
        salesRepresentative:false,
        memberManagement:false,
        messageManagement:false
      }
    }
  },
  watch: {
  },
  computed:{},
  created() {},
  methods: {
    ...mapMutations(['setIsIndex','setPoint']),
    closeBtn(){
      this.setIsIndex(false);
    },
    saveBtn(){
      let aTr = document.getElementById('priorityList').getElementsByTagName('tr');

      for(let i=1;i<aTr.length;i++){
        let id = aTr[i].getAttribute('itemId');
        let index =parseInt(aTr[i].getAttribute('index'))+1;
        if(i==(aTr.length-1)){
          this.prioritylevel(id,index,true);
        }else{
          this.prioritylevel(id,index,false);
        }
      }
    },
  },
  components: {
    listMain
  }
}
</script>


<style scoped>
.indexWrap{z-index: 999;position: relative;}
.chooseStoreWrap{font-size: 14px;}
.popBackground{background: #000; position: fixed; width: 100%; height: 100%; top:0px;left: 0px;opacity: 0.7;}
.storeListMain{position:fixed; top:50%; left: 50%; background: #fff; width: 946px; margin-left:-473px; height: 424px; overflow: hidden; margin-top: -212px; animation: fk 0.6s ease-in forwards 0s 1 normal;}
.storeMain{overflow: hidden;  height: 258px; box-sizing: border-box;}
.storeHead{height: 68px; line-height: 68px; border-bottom: 1px solid #eeeeee; padding-left: 47px; overflow: hidden; font-size: 14px; color: #686a7f;}
.storeHead span{ color: #686b7c;}
.storeHead a{display:block; float: right; width: 31px; height: 32px; margin-top: 18px; margin-right:26px; text-align: center; line-height: 32px; }
.storeHead a:before{width: 15px; height: 15px; background-position: -85px -96px;content:"";}
.storeMain{padding-left: 8px;}
.storeMain{padding-top: 16px;}
.storeMain ul{overflow: hidden;}




.storeFoot{text-align: center; border-top: 1px solid #eeeeee; padding-top: 30px; }
.storeFoot a{width: 108px; height: 37px; line-height: 37px; text-align: center; border-radius: 18px; font-weight: bold; font-size: 16px;  display: inline-block;}
.storeFoot a.qr{background: #dc0034; border:1px solid #dc0034; color: #fff; margin-right: 22px;}
.storeFoot a.qx{ border:1px solid #686a7c; color: #686a7c;}

/* fk */
@keyframes fk
{
    0%   {opacity: 1;transform: scale(0);}
    100% {opacity: 1;transform: scale(1);}
}
 
@-webkit-keyframes fk 
{
    0%   {opacity: 1;-webkit-transform: scale(0);}
    100% {opacity: 1;-webkit-transform: scale(1);}
}
</style>

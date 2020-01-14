<template>
  <div class="relationWrap">
    <div class="popBackground"></div>
    <div class="relationMain">
      <div class="relationHead">修改绑定关系<a href="javascript:;" class="cloaeBtn icons_b" @click="close()"></a></div>
      <div class="relationCon">
        <div class="boxList">
          <span>新绑定销售ID：</span><el-input class="inputBox" v-model="newSalesId" placeholder="请输入原绑定销售ID" autocomplete="new-password" ></el-input>
        </div>
        <div class="boxList">
          <span>新绑定医生ID：</span><el-input class="inputBox" v-model="newDoctorsId" placeholder="请输入原绑定医生ID" autocomplete="new-password" ></el-input>
        </div>
        <div class="boxList">
          <span>新绑定微医ID：</span><el-input class="inputBox" v-model="newWDoctorsId" placeholder="请输入原绑定医生ID" autocomplete="new-password" ></el-input>
        </div>
      </div>
      <div class="relationFoot">
        <a href="javascript:;" class="qr" @click="confirm()">确定</a>
        <a href="javascript:;" class="qx" @click="close()">取消</a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
export default {
  data () {
    return {
      newSalesId:'',
      newDoctorsId:'',
      newWDoctorsId:''
    }
  },
  props: ['relationAll','id'],
  watch: {},
  computed:{
    ...mapState(['oPoint'])
  },
  created() {},
  methods: {
    ...mapMutations(['setPoint']),
    close(){
      this.$emit('setShow',false);
    },
    confirm(){
      this.accountEditbind();
    }
  },
  components: {}
}
</script>


<style scoped>
.relationWrap{z-index: 999;position: relative;}
.popBackground{background: #000; position: fixed; width: 100%; height: 100%; top:0px;left: 0px;opacity: 0.7;}
.relationMain{position:fixed; top:50%; left: 50%; background: #fff; width: 330px; margin-left:-165px;/* height: 120px;*/ overflow: hidden; margin-top: -130px; animation: fk 0.6s ease-in forwards 0s 1 normal;}
.relationHead{height: 48px; line-height: 48px; border-bottom: 1px solid #eeeeee;  overflow: hidden; font-size: 18px; text-align: center;}
.relationHead a{display:block; float: right; width: 40px; height: 40px; text-align: center; line-height: 40px; margin-right: 10px;}
.relationHead a:before{width: 15px; height: 15px; background-position: -85px -96px;content:"";}
.relationCon{overflow: hidden; padding: 30px 30px 10px 30px; font-size: 14px; display:flex; justify-content : space-around; flex-wrap: wrap; }
.relationCon>div{width: 100%; float: left;box-sizing:border-box; margin-bottom: 20px;}
.relationCon>div .inputBox{width: 150px;}
.relationFoot{text-align: center; border-top: 1px solid #eeeeee; height: 70px; box-sizing: border-box; padding-top: 20px; }
.relationFoot a{width: 108px; height: 30px; line-height: 30px; text-align: center; border-radius: 18px; font-weight: bold; font-size: 16px;  display: inline-block;}
.relationFoot a.qr{background: #dc0034; border:1px solid #dc0034; color: #fff; margin-right: 22px;}
.relationFoot a.qx{ border:1px solid #686a7c; color: #686a7c;}
</style>

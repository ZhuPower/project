<template>
  <div class="doctorLevel">
    <div class="levelMain">
      <div class="levelList" v-for="(item,index) in levelList">
        <div class="listH">
          <i :class="['icons','icon_1'+(index+2)]"></i>{{item.level_name}}<font style="color: red" v-if="item.is_period =='1'">（仅可享受一次）</font>
          <a href="javascript:;" class="bj" @click="onEdit(index)">编辑</a>
          <a href="javascript:;" class="bc" @click="onSave(index)" v-if="arrLevel[index]">保存</a>
        </div>
        <div class="listC">
          <div class="item">
            <div class="itemMain">
              <h3>升级条件</h3>
              <p v-if="item.level<=1">——</p>
              <p v-if="item.level>1">上月开单数≥<span class="inputSpan" v-show="!arrLevel[index]">{{item.upgrade}}</span><input type="number" v-show="arrLevel[index]" v-model="item.upgrade"></p>
            </div>
          </div>
          <div class="item">
            <div class="itemMain">
              <h3>分比</h3>
              <p>和客户绑定会员的复购金额*<span class="inputSpan" v-show="!arrLevel[index]">{{item.proportion = parseFloat(item.proportion)}}</span><input type="number" v-show="arrLevel[index]" v-model="item.proportion">%</p>
            </div>
          </div>
          <div class="item">
            <div class="itemMain">
              <h3 v-if="item.level == 0">体验期时间</h3>
              <h3 v-if="item.level != 0">参与时间</h3>
              <p v-if="item.level == 0">第0个月~第6个月</p>
              <p v-if="item.duration == 1">当月1日至月底</p>
              <p v-if="item.duration > 1 && item.level != 0">当月1日至下{{item.duration-1}}个月底</p>
            </div>
          </div>
          <div class="item">
            <div class="itemMain">
              <h3>复购渠道</h3>
              <p>柜台、微商城、天猫</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {common} from '@/assets/js/api'
import {mapState,mapMutations} from 'vuex';
export default {
  data () {
    return {
      levelList:[],
      arrLevel:{
        0:false,
        1:false,
        2:false,
        3:false
      }
    }
  },
  created(){
      if(this.$route.path == '/admin/distributionConfiguration/Y1S1/doctorLevel'){
        this.$emit('addRule',true);
        this.listLevel();
      }
  },
  methods: {
    ...mapMutations(['setPoint']),
    onEdit(n){
      this.arrLevel[n] = true;
    },
    onSave(n){
      this.arrLevel[n] = false;
      let obj = this.levelList[n];

      delete obj.created_at;
      delete obj.updated_at;

      this.updateLevel(obj);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.doctorLevel{margin-top: 44px;}
.levelMain{}
.levelMain .levelList{margin-bottom: 8px;}
.levelMain .levelList .listH{overflow: hidden; height: 51px; line-height: 51px; background: #f6f9fe; border: 1px solid #eeeeee; padding-left: 33px;font-size: 14px; color: #68697e; font-weight: bold; padding-right: 38px;}
.levelMain .levelList .listH>i{margin-right: 18px;}
.levelMain .levelList .listH a{float: right; display: block; width: 76px; height: 28px; line-height: 28px; text-align: center; border-radius: 14px;color: #fffffd; margin-top: 12px;}
.levelMain .levelList .listH a.bj{background: #9193aa;}
.levelMain .levelList .listH a.bc{background: #da0032; margin-right: 16px;}
.levelMain .levelList .listC{display: flex;flex-wrap:wrap; padding:0px 30px; }
.levelMain .levelList .listC .item{width: 33.333%; height: 119px;display:flex;}
.levelMain .levelList .listC .item:first-child{border-bottom:1px solid #eeeeee;}
.levelMain .levelList .listC .item:first-child+.item{border-bottom:1px solid #eeeeee;}
.levelMain .levelList .listC .item:first-child+.item+.item{border-bottom:1px solid #eeeeee;}
.levelMain .levelList .listC .item .itemMain{align-self:center; margin-left: 40px;}
.levelMain .levelList .listC .item .itemMain h3{font-size: 14px; color: #686b7e;}
.levelMain .levelList .listC .item .itemMain p{font-size: 14px; line-height: 34px;color: #666c7c;}
.levelMain .levelList .listC .item .itemMain p input{width:43px;height: 26px; background: none; border: 1px solid #dddddd; border-radius: 5px; text-align: center; margin:0px 10px; color: #686b7a; }
</style>

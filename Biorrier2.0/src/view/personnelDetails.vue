<template>
  <div class="personnelDetails">
    <div class="detailsMain" v-if="oShow.ys_personnel || oShow.ys_integral">
      <div class="personnelH">
          <h3><i class="icons icon_22"></i><span v-text="oData.doctor_no"></span></h3>
          <div class="personnelInfo">
              <p><span>绑定信息:</span>{{oData.bind_info}}</p>
              <p><span>所属区域:</span>{{oData.province_name}}-{{oData.city_name}}-{{oData.region_name}}</p>
              <p class="levelP">
                <span>等级:</span>
                <img src="../assets/level_1.png" v-if="oData.level == 0" class="level">
                <img src="../assets/level_2.png" v-if="oData.level == 1" class="level">
                <img src="../assets/level_3.png" v-if="oData.level == 2" class="level">
                <img src="../assets/level_4.png" v-if="oData.level == 3" class="level">
                {{oData.level_name}}
              </p>
              <p class="levelP">
                <span>分比:</span>
                {{parseFloat(oData.this_month_proportion)}}%
              </p>
              <!-- <p><span>会籍到期:</span>{{getEndTime(oData.level_time)}}</p> -->
              <p><span>状态:</span>{{parseInt(oData.status)?'正常':'冻结'}}</p>
              <!-- <div class="levelInfo" v-show="isLevelInfo">
                <div class="levelH">
                  <span>等级信息</span>
                  <a href="javasceipt:;" @click="hideLevelInfo()">确定</a>
                </div>
                <div class="levelC">
                  <ul>
                    <li>
                      <h3>
                        <i class="icons icon_26"></i>
                        <span>升级达成</span>
                        <span class="right" v-if="levelInfo.upgrade !='0'">{{levelInfo.order_count}}单</span>
                      </h3>
                      <p v-if="levelInfo.upgrade !='0'">上月开单数≥{{levelInfo.upgrade}}</p>
                      <p v-if="levelInfo.upgrade =='0'">——</p>
                    </li>
                    <li>
                      <h3>
                        <i class="icons icon_27"></i>
                        <span>分比</span>
                      </h3>
                      <p>和客户绑定会员的复购金额*{{parseFloat(levelInfo.proportion)}}%</p>
                    </li>
                  </ul>
                </div>
              </div> -->
          </div>
      </div>
      <div class="personnelBox">
          <div class="personnel-1">
              <h4>会员数量</h4>
              <p v-text="oData.bind_account_count"></p>
          </div>
          <div class="personnel-1">
              <h4>本月新增</h4>
              <p v-text="oData.newCount"></p>
          </div>
          <div class="personnel-1">
              <h4>全部订单数/总积分</h4>
              <p>{{oData.order_count}}/{{parseFloat(oData.total_money)}}</p>
          </div>
      </div>
      <div class="personnelTab">
          <div class="personnelTabH">
              <ul>
                  <li @click="fnTab(0)" :class="{active: ( indexTab == 0 ? true :false)}">绑定会员</li>
                  <li @click="fnTab(1)" :class="{active: ( indexTab == 1 ? true :false)}">积分订单</li>
              </ul>
          </div>
          <div class="personnelTabC">
              <div class="personnelDiv" v-show="indexTab == 0 ? true :false">
                  <listMain :oShow="oShow" :account_list="account_list" :total2="total" :lastPage2="lastPage" @setPage="setPage"></listMain>
              </div>
              <div class="personnelDiv" v-show="indexTab == 1 ? true :false">
                  <div class="items select year">
                    <span>年份：</span>
                    <el-select v-model="yearVlue" placeholder="请选择">
                      <el-option
                        v-for="item in yearOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                  <div class="month">
                    <ul>
                      <li v-for="item in monthArr" :class="{active:(item == monthIndex)?true:false}" @click="getThisMonth(item)">
                        <p>{{item}}月</p>
                      </li>
                    </ul>
                  </div>
                  <listMain :oShow="oShow" :yearVlue="yearVlue" :monthIndex="monthIndex"></listMain>
              </div>
          </div>
      </div>
    </div>
    <div class="detailsMain" v-if="oShow.xs_personnel || oShow.xs_integral">
      <div class="personnelH">
          <h3><i class="icons icon_23"></i><span v-text="oData.name"></span></h3>
          <div class="personnelInfo">
              <p><span>工号:</span>{{oData.salesrep_no}}</p>
              <p><span>所属区域:</span>{{oData.province_name}}-{{oData.city_name}}-{{oData.region_name}}</p>
              <p><span>所在柜台:</span>{{oData.pharmacy_name}}</p>
              <p><span>状态:</span>{{parseInt(oData.status)?'正常':'冻结'}}</p>
          </div>
      </div>
      <div class="personnelBox">
          <div class="personnel-1">
              <h4>会员数量</h4>
              <p v-text="oData.bind_account_count"></p>
          </div>
          <div class="personnel-1">
              <h4>本月新增</h4>
              <p v-text="oData.newCount">3</p>
          </div>
          <div class="personnel-1">
              <h4>本月非CF销售/销售额</h4>
              <p>{{oData.trade_count}} / {{parseFloat(oData.trade_money)}}</p>
          </div>
      </div>
      <div class="personnelTab">
          <div class="personnelTabH">
              <ul>
                  <li @click="fnTab(0)" :class="{active: ( indexTab == 0 ? true :false)}">绑定会员</li>
                  <li @click="fnTab(1)" :class="{active: ( indexTab == 1 ? true :false)}">积分订单</li>
              </ul>
          </div>
          <div class="personnelTabC">
              <div class="personnelDiv" v-show="indexTab == 0 ? true :false">
                  <listMain :oShow="oShow" :account_list="account_list" :total2="total" :lastPage2="lastPage" @setPage="setPage"></listMain>
              </div>
              <div class="personnelDiv" v-show="indexTab == 1 ? true :false">
                  <div class="items select year">
                    <span>年份：</span>
                    <el-select v-model="yearVlue" placeholder="请选择">
                      <el-option
                        v-for="item in yearOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                  <div class="month">
                    <ul>
                      <li v-for="item in monthArr" :class="{active:(item == monthIndex)?true:false}" @click="getThisMonth(item)">
                        <p>{{item}}月</p>
                      </li>
                    </ul>
                  </div>
                  <listMain :oShow="oShow" :yearVlue="yearVlue" :monthIndex="monthIndex"></listMain>
              </div>
          </div>
      </div>
    </div>
    <div class="detailsMain" v-if="oShow.wy_personnel || oShow.wy_integral">
      <div class="personnelH">
          <h3><i class="icons icon_24"></i><span v-text="oData.salesrep_name"></span></h3>
          <div class="personnelInfo">
              <p><span>Y1S1ID:</span>{{oData.salesrep_no}}</p>
              <p><span>所属销售代表:</span>{{oData.salesmanager_name}}（{{oData.salesmanager_no}}）</p>
              <p><span>状态:</span>{{parseInt(oData.status)?'正常':'冻结'}}</p>
          </div>
      </div>
      <div class="personnelBox">
          <div class="personnel-1">
              <h4>会员数量</h4>
              <p v-text="oData.bind_account_count"></p>
          </div>
          <div class="personnel-1">
              <h4>本月新增</h4>
              <p v-text="oData.newCount">3</p>
          </div>
          <div class="personnel-1">
              <h4>本月非CF销售/销售额</h4>
              <p>{{oData.trade_count}} / {{parseFloat(oData.trade_money)}}</p>
          </div>
      </div>
      <div class="personnelTab">
          <div class="personnelTabH">
              <ul>
                  <li @click="fnTab(0)" :class="{active: ( indexTab == 0 ? true :false)}">绑定会员</li>
                  <li @click="fnTab(1)" :class="{active: ( indexTab == 1 ? true :false)}">积分订单</li>
              </ul>
          </div>
          <div class="personnelTabC">
              <div class="personnelDiv" v-show="indexTab == 0 ? true :false">
                  <listMain :oShow="oShow" :account_list="account_list" :total2="total" :lastPage2="lastPage" @setPage="setPage"></listMain>
              </div>
              <div class="personnelDiv" v-show="indexTab == 1 ? true :false">
                  <div class="items select year">
                    <span>年份：</span>
                    <el-select v-model="yearVlue" placeholder="请选择">
                      <el-option
                        v-for="item in yearOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                  <div class="month">
                    <ul>
                      <li v-for="item in monthArr" :class="{active:(item == monthIndex)?true:false}" @click="getThisMonth(item)">
                        <p>{{item}}月</p>
                      </li>
                    </ul>
                  </div>
                  <listMain :oShow="oShow" :yearVlue="yearVlue" :monthIndex="monthIndex"></listMain>
              </div>
          </div>
      </div>
    </div>
    <div class="detailsMain" v-if="oShow.db_personnel || oShow.db_integral">
      <div class="personnelH">
          <h3><i class="icons icon_25"></i><span v-text="oData.salesmanager_name"></span></h3>
          <div class="personnelInfo">
              <p><span>工号:</span>{{oData.salesmanager_no}}</p>
              <p><span>所属区域:</span>{{oData.province_name}}-{{oData.city_name}}-{{oData.region_name}}</p>
              <p><span>状态:</span>{{parseInt(oData.status)?'正常':'冻结'}}</p>
          </div>
      </div>
      <div class="personnelBox">
          <div class="personnel-1">
              <h4>会员数量</h4>
              <p v-text="oData.bind_we_count"></p>
          </div>
          <div class="personnel-1">
              <h4>本月新增</h4>
              <p v-text="oData.newCount">3</p>
          </div>
          <div class="personnel-1">
              <h4>本月非CF销售/销售额</h4>
              <p>{{oData.trade_count}} / {{parseFloat(oData.total_money)}}</p>
          </div>
      </div>
      <div class="personnelTab">
          <div class="personnelTabH">
              <ul>
                  <li @click="fnTab(0)" :class="{active: ( indexTab == 0 ? true :false)}">绑定会员</li>
                  <li @click="fnTab(1)" :class="{active: ( indexTab == 1 ? true :false)}">积分订单</li>
              </ul>
          </div>
          <div class="personnelTabC">
              <div class="personnelDiv" v-show="indexTab == 0 ? true :false">
                  <listMain :oShow="oShow" :account_list="account_list" :total2="total" :lastPage2="lastPage" @setPage="setPage"></listMain>
              </div>
              <div class="personnelDiv" v-show="indexTab == 1 ? true :false">
                  <div class="items select year">
                    <span>年份：</span>
                    <el-select v-model="yearVlue" placeholder="请选择">
                      <el-option
                        v-for="item in yearOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                  <div class="month">
                    <ul>
                      <li v-for="item in monthArr" :class="{active:(item == monthIndex)?true:false}" @click="getThisMonth(item)">
                        <p>{{item}}月</p>
                      </li>
                    </ul>
                  </div>
                  <listMain :oShow="oShow" :yearVlue="yearVlue" :monthIndex="monthIndex"></listMain>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
import listMain from '@/components/listMain'
export default {
  data () {
    return {
      oShow:{
        ys_personnel:false,
        ys_integral:false,
        xs_personnel:false,
        xs_integral:false,
        wy_personnel:false,
        wy_integral:false,
        db_personnel:false,
        db_integral:false
      },
      yearOptions: [],
      yearVlue: new Date().getFullYear(),
      monthArr:[],
      monthIndex:0,
      isLevelInfo:false,
      indexTab:0,
      type:0,
      oData:{},
      account_list:[],
      oParameter:null,
      total:'',
      lastPage:'',
      levelInfo:{},
      levelName:''
    }
  },
  props: ['sPath'],
  computed:{
    ...mapState(['isDetails','oParameter2'])
  },
  watch: {
    oParameter2(){
      this.oParameter = this.oParameter2;
      this.userAccountlist2();
    },
    yearVlue(){
      let d = new Date();
      let y = d.getFullYear();
      let m = d.getMonth()+1;
      this.monthArr = [];
      this.monthIndex = 1;
      if(this.yearVlue != y){
        m = 12;
      }

      for(let i=1;i<=m;i++){
        this.monthArr.push(i);
      }
    }
  },
  created(){
      if(!this.isDetails){
          //this.$router.push(this.sPath)
          this.enterDetails(true)
      }

      this.getParameter();
      this.fShow();
      this.userInfo();
      this.userAccountlist2();
      this.setYearOptions();
  },
  destroyed(){
    this.enterDetails(false)
  },
  methods: {
    ...mapMutations(['enterDetails','setPoint','setParameter']),
    getThisMonth(n){
      this.monthIndex = n;
    },
    setYearOptions(){
      let firstYear = 2018;
      let d = new Date();
      let y = d.getFullYear();

      this.yearOptions = [];

      for(let i=firstYear;i<=y;i++){
        let obj = {
          value: i,
          label: i
        }

        this.yearOptions.push(obj)

      }

      let m = d.getMonth()+1;

      this.monthArr = [];
      this.monthIndex = m;
      for(let i=1;i<=m;i++){
        this.monthArr.push(i);
      }

    },
    setPage(obj){
      if(this.oShow.ys_personnel||this.oShow.xs_personnel||this.oShow.wy_personnel){
        this.getParameter();
        this.userAccountlist2();
      }
    },
    fShow(){

      let arr = [
        '/personnelManagement/servicingManagement/cooperativeDoctor'
      ]

      let arr2 = [
        '/personnelManagement/servicingManagement/saleser'
      ]

      let arr3 = [
        '/personnelManagement/servicingManagement/microBusiness',
      ]

      let arr4 = [
        '/personnelManagement/servicingManagement/salesRepresentative'
      ]

      this.oShow.ys_personnel = this.getBoolean(arr);
      this.oShow.xs_personnel = this.getBoolean(arr2); 
      this.oShow.wy_personnel = this.getBoolean(arr3); 
      this.oShow.db_personnel = this.getBoolean(arr4);
      if(this.oShow.ys_personne){this.type = 0}
      if(this.oShow.xs_personnel){this.type = 1}
      if(this.oShow.wy_personnel){this.type = 2}
      if(this.oShow.db_personnel){this.type = 3}
    },
    showLevelInfo() {
      this.isLevelInfo = true;
    },
    hideLevelInfo(){
      this.isLevelInfo = false;
    },
    fnTab(n){
      this.indexTab = n;

      if(this.oShow.ys_personnel && this.indexTab){
        this.oShow.ys_integral = true;
        this.oShow.ys_personnel = false;
      }else if(this.oShow.ys_integral){
        this.oShow.ys_integral = false;
        this.oShow.ys_personnel = true;
      }

      if(this.oShow.xs_personnel && this.indexTab){
        this.oShow.xs_integral = true;
        this.oShow.xs_personnel = false;
      }else if(this.oShow.xs_integral){
        this.oShow.xs_integral = false;
        this.oShow.xs_personnel = true;
      }

      if(this.oShow.wy_personnel && this.indexTab){
        this.oShow.wy_integral = true;
        this.oShow.wy_personnel = false;
      }else if(this.oShow.wy_integral){
        this.oShow.wy_integral = false;
        this.oShow.wy_personnel = true;
      }

      if(this.oShow.db_personnel && this.indexTab){
        this.oShow.db_integral = true;
        this.oShow.db_personnel = false;
      }else if(this.oShow.db_integral){
        this.oShow.db_integral = false;
        this.oShow.db_personnel = true;
      }


      let obj = {
        page:1,
        is_sort:1
      }

      this.setParameter(obj);


      let str = this.$route.path+'?';
      //delete this.oParameter.pageNum;
      this.oParameter.page = 1;
      for(let key in this.oParameter){
        str +=key+'='+this.oParameter[key]+'&'
      }
      str = str.slice(0,-1);
      this.$router.push(str)
    }
  },
  components: {
    listMain
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.personnelDetails{overflow: hidden;}
.personnelDetails .personnelH{margin-top: 28px;}
.personnelDetails .personnelH>h3{font-size: 24px; height: 38px;color: #686a7c; font-weight: normal;overflow: hidden;}
.personnelDetails .personnelH>h3 i{margin-right: 12px; float: left;}
.personnelDetails .personnelH>h3 span{margin-top: 3px; display: block; float: left; height: 38px; line-height: 38px}
.personnelDetails .personnelInfo{margin-top: 24px; font-size: 14px; font-weight: bold; color: #686a7c; clear: both; min-height:36px; height: auto; position: relative;}
.personnelDetails .personnelInfo p{float: left; margin-right: 34px;}
.personnelDetails .personnelInfo p span{font-weight: normal; color: #9496a6; margin-right: 4px;}
.personnelDetails .personnelInfo p.levelP img{width: 19px;height: 18px; vertical-align: middle; display: inline-block; margin: 0px 6px;}
.personnelDetails .personnelInfo p.levelP{cursor: pointer;}
.personnelDetails .personnelInfo .levelInfo{width: 239px; height: 207px; background: #ffff; box-shadow:0 2px 10px #ebeef3,2px 0px 10px #ebeef3,0 -2px 10px #ebeef3,-2px 0px 10px #ebeef3; position: absolute; left: 430px; top:34px;border: 1px solid #ebeef3; font-size: 12px; color: #68697b; z-index: 99;}
.personnelDetails .personnelInfo .levelInfo .levelH{height: 48px; line-height: 48px; border-bottom:1px solid #ebeef3; overflow: hidden;padding:0px 22px; }
.personnelDetails .personnelInfo .levelInfo .levelH span{font-weight: bold;}
.personnelDetails .personnelInfo .levelInfo .levelH a{display: block; float: right; width: 60px; height: 24px; line-height: 24px; color: #fff; background: #d90132; border-radius:12px; text-align: center;margin-top: 13px; }
.personnelDetails .personnelInfo .levelInfo .levelC{padding:0px 22px; }
.personnelDetails .personnelInfo .levelInfo .levelC ul{}
.personnelDetails .personnelInfo .levelInfo .levelC ul li{overflow: hidden; margin-top: 23px;}
.personnelDetails .personnelInfo .levelInfo .levelC ul li h3{ overflow: hidden; font-size: 12px; color: #68697b; font-weight: bold; height: 20px; line-height: 20px;}
.personnelDetails .personnelInfo .levelInfo .levelC ul li h3 span{margin-left: 8px;}
.personnelDetails .personnelInfo .levelInfo .levelC ul li h3 span.right{float: right; }
.personnelDetails .personnelInfo .levelInfo .levelC ul li p{color: #9496a5; font-weight: normal; width: 100%; clear: both;margin-top: 6px; }
.personnelBox{clear: both; overflow: hidden; background: #f6f7f9; padding:30px 0px 19px 0px; margin-top: 25px;}
.personnelBox>div{height: 107px;  border-left:1px solid #e0e1e6; width: 33.333%; box-sizing: border-box; float: left; text-align: center; color: #676a7b}
.personnelBox>div:first-child{border:0px; }
.personnelBox>div h4{font-size: 14px; margin-top: 12px; font-weight: bold;}
.personnelBox>div p{font-size: 40px; /*font-weight: bold;*/ margin-top: 8px;}
.personnelTab{margin-top: 37px;}
.personnelTab .personnelTabH{}
.personnelTab .personnelTabH ul{border-bottom: 1px solid #dcdcdc; padding-left: 18px; font-size: 0px; height: 40px;}
.personnelTab .personnelTabH ul li{display: inline-block; height: 39px; line-height: 39px; width: 106px; text-align: center; background: #f8f8f8; border:1px solid #dcdcdc;margin-right: 9px; font-size: 14px; color: #676a79; cursor: pointer; }
.personnelTab .personnelTabH ul li.active{background: #fff; border-bottom: 1px solid #fff; border-top:1px solid #da0032;}
.personnelTab .personnelTabC{overflow: hidden;}


.items.year{margin-top: 29px; padding-left: 11px;}
.month{overflow: hidden; margin-top: 14px; padding-left: 11px;}
.month>ul{overflow: hidden; width: 100%; clear: both; box-sizing: border-box;}
.month>ul li{float: left; width: 64px; height: 51px; text-align: center; background: #f6f7f9; border: 1px solid #ecedef; margin-right: 7px; cursor: pointer; color: #68697d;}
.month>ul li.active{background: #696a7c; color: #fff;}
.month>ul li p{ font-size: 14px; font-weight: bold; line-height: 51px;}
</style>

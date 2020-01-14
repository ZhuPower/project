<template>
  <div class="headMain">
      <div v-if="oShow.doctorOrder || oShow.TmallOrder">
        <input type="file" v-show="false" ref="y1s1File" accept=".xlsx" />
      </div>
      <div class="listHead" v-if="oShow.doctorOrder">
        <div class="items search">
          <span>订单编号：</span>
          <el-input 
            placeholder="订单编号" 
            v-model="inputOrder"
            @keyup.enter.native="y1s1Search()"
            clearable>
          </el-input>
        </div>
        <div class="items search">
          <span>柜台编码：</span>
          <el-input 
            placeholder="柜台编码" 
            v-model="counterCode"
            @keyup.enter.native="y1s1Search()"
            clearable>
          </el-input>
        </div>
        <div class="items search">
          <span>会员卡号：</span>
          <el-input 
            placeholder="会员卡号" 
            v-model="memberId"
            @keyup.enter.native="y1s1Search()"
            clearable>
          </el-input>
        </div>
        <div class="items search">
          <span>会员姓名：</span>
          <el-input 
            placeholder="会员卡号" 
            v-model="memberName"
            @keyup.enter.native="y1s1Search()"
            clearable>
          </el-input>
        </div>
        <div class="items time">
          <span>订单时间：</span>
          <el-date-picker 
            v-model="orderTime" 
            type="daterange" 
            :editable=false 
            :clearable=false 
            start-placeholder="开始时间" 
            end-placeholder="结束时间" 
            value-format="yyyy-MM-dd" 
            range-separator="~" 
            :default-time="['00:00:00', '23:59:59']">
          </el-date-picker>
          <i class="icons icon_11"></i>
        </div>
        <div class="items time">
          <span>结算时间：</span>
          <el-date-picker 
            v-model="accountTime" 
            type="daterange" 
            :editable=false 
            :clearable=false 
            start-placeholder="开始时间" 
            end-placeholder="结束时间" 
            value-format="yyyy-MM-dd" 
            range-separator="~" 
            :default-time="['00:00:00', '23:59:59']">
          </el-date-picker>
          <i class="icons icon_11"></i>
        </div>
        <div class="items time">
          <a href="javscript:;" @click="inquireFn()" class="inquireBtn">查询</a>
        </div>
        <!-- <div class="items time">
          <a href="javscript:;" @click="upFile1()" class="upFileBtn">Y1S1订单导入</a>
          <a href="./static/template.xlsx" download="模板.xlsx" class="downTemplate">下载模板</a>
        </div> -->
      </div>
      <div class="listHead" v-if="oShow.TmallOrder">
        <div class="items select orderType">
          <span>订单类型：</span>
          <el-select v-model="orderTypeVlue" placeholder="请选择">
            <el-option
              v-for="item in orderTypeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="items search">
          <span>订单编号：</span>
          <el-input 
            placeholder="订单编号" 
            v-model="inputOrder"
            @keyup.enter.native="TmallSearch()"
            clearable>
          </el-input>
        </div>
        <div class="items search">
          <span>柜台编码：</span>
          <el-input 
            placeholder="柜台编码" 
            v-model="counterCode"
            @keyup.enter.native="TmallSearch()"
            clearable>
          </el-input>
        </div>
        <div class="items time">
          <span>订单时间：</span>
          <el-date-picker 
            v-model="orderTime" 
            type="daterange" 
            :editable=false 
            :clearable=false 
            start-placeholder="开始时间" 
            end-placeholder="结束时间" 
            value-format="yyyy-MM-dd" 
            range-separator="~" 
            :default-time="['00:00:00', '23:59:59']">
          </el-date-picker>
          <i class="icons icon_11"></i>
        </div>
        <div class="items time">
          <span>结算时间：</span>
          <el-date-picker 
            v-model="accountTime" 
            type="daterange" 
            :editable=false 
            :clearable=false 
            start-placeholder="开始时间" 
            end-placeholder="结束时间" 
            value-format="yyyy-MM-dd" 
            range-separator="~" 
            :default-time="['00:00:00', '23:59:59']">
          </el-date-picker>
          <i class="icons icon_11"></i>
        </div>
        <div class="items time">
          <a href="javscript:;" @click="inquireFn()" class="inquireBtn">查询</a>
        </div>
        <div class="items time">
          <a href="javscript:;" @click="upFile1()" class="upFileBtn">天猫订单导入</a>
          <a href="./static/template.xlsx" download="模板.xlsx" class="downTemplate">下载模板</a>
        </div>
      </div>
      <div class="listHead" v-if="oShow.proposalGoods">
        <div class="items searchRule">
          <el-input 
            placeholder="规则名称" 
            v-model="inputOrder"
            @keyup.enter.native="proposalSearch()"
            clearable>
          </el-input>
        </div>
        <div class="items select ruleType">
          <span>状态：</span>
          <el-select v-model="ruleTypeVlue" placeholder="请选择">
            <el-option
              v-for="item in ruleTypeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="items time">
          <a href="javscript:;" @click="inquireFn()" class="inquireBtn">查询</a>
        </div>
        <a href="javasceipt:;" class="tzyxj" @click="setIndexFn()">调整优先级</a>
        <a href="javasceipt:;" class="xzgz icons_b" @click="addRule()">新增规则</a>
      </div>
      <div class="listHead" v-if="oShow.cooperativeDoctor">
        <div class="items time">
          <span>加入时间：</span>
          <el-date-picker 
            v-model="joinTime" 
            type="daterange" 
            :editable=false 
            :clearable=false 
            start-placeholder="开始时间" 
            end-placeholder="结束时间" 
            value-format="yyyy-MM-dd" 
            range-separator="~" 
            :default-time="['00:00:00', '23:59:59']">
          </el-date-picker>
          <i class="icons icon_11"></i>
        </div>
        <div class="items ysId">
          <el-input 
            placeholder="柜台号" 
            v-model="ysId"
            @keyup.enter.native="doctorSearch()"
            clearable>
          </el-input>
        </div>
        <div class="items select doctorLevel">
          <span>Y1S1等级：</span>
          <el-select v-model="doctorLevel" placeholder="请选择">
            <el-option
              v-for="item in doctorLevelOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="items select doctorStatus">
          <span>状态：</span>
          <el-select v-model="doctorStatus" placeholder="请选择">
            <el-option
              v-for="item in doctorStatusOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="items time">
          <a href="javscript:;" @click="inquireFn()" class="inquireBtn">查询</a>
        </div>
      </div>
      <div class="listHead" v-if="oShow.saleser || oShow.microBusiness || oShow.salesRepresentative">
        <div class="items ysId">
          <el-input 
            placeholder="ID" 
            v-model="saleserId"
            @keyup.enter.native="saleserSearch()"
            clearable>
          </el-input>
        </div>
        <div class="items select doctorStatus">
          <span>状态：</span>
          <el-select v-model="doctorStatus" placeholder="请选择">
            <el-option
              v-for="item in doctorStatusOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="items time">
          <a href="javscript:;" @click="inquireFn()" class="inquireBtn">查询</a>
        </div>
      </div>
      <div class="listHead" v-if="oShow.memberManagement">
        <div class="items search">
          <span>会员卡号：</span>
          <el-input 
            placeholder="会员卡号" 
            v-model="memberId"
            @keyup.enter.native="memberSearch()"
            clearable>
          </el-input>
        </div>
        <div class="items search">
          <span>会员姓名：</span>
          <el-input 
            placeholder="会员姓名" 
            v-model="memberName"
            @keyup.enter.native="memberSearch()"
            clearable>
          </el-input>
        </div>
        <div class="items search bindDoctor">
          <span>绑定Y1S1：</span>
          <el-input 
            placeholder="绑定Y1S1" 
            v-model="bindDoctor"
            @keyup.enter.native="memberSearch()"
            clearable>
          </el-input>
        </div>
        <div class="items search">
          <span>绑定销售：</span>
          <el-input 
            placeholder="绑定销售" 
            v-model="bindSale"
            @keyup.enter.native="memberSearch()"
            clearable>
          </el-input>
        </div>
        <div class="items select memberSource">
          <span>来源：</span>
          <el-select v-model="memberSource" placeholder="请选择">
            <el-option
              v-for="item in memberSourceOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="items time">
          <a href="javscript:;" @click="inquireFn()" class="inquireBtn">查询</a>
        </div>
      </div>
      <div class="listHead" v-if="oShow.messageManagement">
        <div class="items search">
          <span>标题：</span>
          <el-input 
            placeholder="请输入标题" 
            v-model="messageTitle"
            @keyup.enter.native="messageSearch()"
            clearable>
          </el-input>
        </div>
        <div class="items select">
          <span>类型：</span>
          <el-select v-model="messageType" placeholder="请选择">
            <el-option
              v-for="item in messageTypeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="items select">
          <span>类别：</span>
          <el-select v-model="messageUserType" placeholder="请选择">
            <el-option
              v-for="item in messageUserTypeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="items select">
          <span>是否有效：</span>
          <el-select v-model="messageEffect" placeholder="请选择">
            <el-option
              v-for="item in messageEffectOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="items time">
          <a href="javscript:;" @click="inquireFn()" class="inquireBtn">查询</a>
        </div>
      </div>
      <div class="listHead" v-if="oShow.distributionReport || oShow.pointReport || oShow.gradeReport">
        <div class="items timeBox">
          <span>时间：</span>
          <el-date-picker
            v-model="reportDate"
            type="month"
            value-format="yyyy-MM"
            placeholder="选择时间">
          </el-date-picker>
        </div>
        <div class="items inputBox">
          <span>大区：</span>
          <el-input 
            placeholder="请输入大区名称" 
            v-model="orgName"
            @keyup.enter.native="statistics0Search(0)"
            clearable>
          </el-input>
        </div>
        <div class="items inputBox">
          <span>省区：</span>
          <el-input 
            placeholder="请输入省区名称" 
            v-model="provinceName"
            @keyup.enter.native="statistics0Search(0)"
            clearable>
          </el-input>
        </div>
        <div class="items inputBox">
          <span style="width: 100px;">医学销售主管：</span>
          <el-input 
            placeholder="请输入医学销售主管名称" 
            v-model="salesmanName"
            @keyup.enter.native="statistics0Search(0)"
            clearable>
          </el-input>
        </div>
        <div class="items time">
          <a href="javscript:;" @click="inquireFn()" class="inquireBtn">查询</a>
        </div>
        <div class="items time">
          <a :href="exportReportUrl" class="exportReportBtn">导出报表</a>
        </div>
      </div>
      <div class="listHead" v-if="oShow.gradeStatistics">
        <div class="items timeBox">
           <span>年份：</span>
          <el-date-picker
            v-model="reportDate2"
            type="year"
            format="yyyy"
            value-format ="yyyy"
            placeholder="选择年份">
          </el-date-picker>
        </div>
        <div class="items inputBox">
          <span>大区：</span>
          <el-input 
            placeholder="请输入大区名称" 
            v-model="orgName"
            @keyup.enter.native="statistics0Search(1)"
            clearable>
          </el-input>
        </div>
        <div class="items inputBox">
          <span>省区：</span>
          <el-input 
            placeholder="请输入省区名称" 
            v-model="provinceName"
            @keyup.enter.native="statistics0Search(1)"
            clearable>
          </el-input>
        </div>
        <div class="items inputBox">
          <span style="width: 100px;">医学销售主管：</span>
          <el-input 
            placeholder="请输入医学销售主管名称" 
            v-model="salesmanName"
            @keyup.enter.native="statistics0Search(1)"
            clearable>
          </el-input>
        </div>
        <div class="items time">
          <a href="javscript:;" @click="inquireFn()" class="inquireBtn">查询</a>
        </div>
        <div class="items time">
          <a :href="exportReportUrl" class="exportReportBtn">导出报表</a>
        </div>
      </div>
      <div class="listHead" v-if="oShow.gradeDoctors">
        <div class="items time">
          <span>加入时间：</span>
          <el-date-picker 
            v-model="joinTime" 
            type="daterange" 
            :editable=false 
            :clearable=false 
            start-placeholder="开始时间" 
            end-placeholder="结束时间" 
            value-format="yyyy-MM-dd" 
            range-separator="~" 
            :default-time="['00:00:00', '23:59:59']">
          </el-date-picker>
          <i class="icons icon_11"></i>
        </div>
        <div class="items time">
          <a href="javscript:;" @click="inquireFn()" class="inquireBtn">查询</a>
        </div>
        <div class="items time">
          <a :href="exportReportUrl" class="exportReportBtn">导出报表</a>
        </div>
      </div>
      <setIndex v-if="isIndex"></setIndex>
  </div>
</template>

<script>
import setIndex from '@/components/setIndex'
import {upFile} from '@/assets/js/api'
import {mapState,mapMutations} from 'vuex';
export default {
  data () {
    return {
      inputOrder:'',
      areaVlue: [],
      options:[],
      orderTime:'',
      accountTime:'',
      orderTypeOptions: [
        {
          value: 0,
          label: '全部'
        },
        {
          value: 'CMR',
          label: '销售录入单'
        },
        {
          value: 'AEN',
          label: '销售补录单'
        },
        {
          value: 'RET',
          label: '顾客退货单'
        },
        {
          value: 'CAN',
          label: '销售撤销单'
        }
      ],
      orderTypeVlue: 0,
      inputRule:'',
      ruleTypeVlue:0,
      ruleTypeOptions: [
        {
          value: 0,
          label: '全部'
        },
        {
          value: 1,
          label: '未开始'
        },
        {
          value: 2,
          label: '使用中'
        },
        {
          value: 3,
          label: '已过期'
        }
      ],
      ysId:'',
      saleserId:'',
      doctorLevel:5,
      doctorLevelOptions: [
        {
          value: 5,
          label: '全部'
        },
        {
          value: 0,
          label: '体验期'
        },
        {
          value: 1,
          label: '正式期基础等级'
        },
        {
          value: 2,
          label: '正式期一级'
        },
        {
          value: 3,
          label: '正式期二级'
        }
      ],
      doctorStatus:2,
      doctorStatusOptions: [
        {
          value: 2,
          label: '全部'
        },
        {
          value: 1,
          label: '正常'
        },
        {
          value: 0,
          label: '冻结中'
        }
      ],
      memberId:'',
      memberName:'',
      memberSource:'null',
      memberSourceOptions: [
        {
          value: 'null',
          label: '全部'
        },
        {
          value: 'BA',
          label: '销售'
        },
        {
          value: 'DC',
          label: '微医'
        }
      ],
      oParameter:null,
      isOrderStore:true,
      counterCode:'',
      bindDoctor:'',
      bindSale:'',
      messageTitle:'',
      messageType:0,
      messageTypeOptions:[
        {
          value: 0,
          label: '全部'
        },
        {
          value: 1,
          label: '活动咨询'
        },
        {
          value: 2,
          label: '官方通知'
        }
      ],
      messageUserType:0,
      messageUserTypeOptions:[
        {
          value: 0,
          label: '全部'
        },
        {
          value: 1,
          label: '医生'
        },
        {
          value: 2,
          label: '销售'
        },
        {
          value: 3,
          label: '微医'
        },
        {
          value: 4,
          label: '销售代表'
        }
      ],
      messageEffect:0,
      messageEffectOptions:[
        {
          value: 0,
          label: '全部'
        },
        {
          value: 1,
          label: '有效'
        },
        {
          value: 2,
          label: '无效'
        }
      ],
      reportDate:'',
      reportDate2:new Date().getFullYear()+'',
      orgName:'',
      provinceName:'',
      salesmanName:'',
      exportReportUrl:'',
      joinTime:''
    }
  },
  props: ['oShow'],
  watch: {
    // orderTypeVlue(){
    //   if(this.oShow.TmallOrder){
    //     this.TmallSearch();
    //   }
    // },
    // ruleTypeVlue(){
    //   if(this.oShow.proposalGoods){
    //     this.proposalSearch();
    //   }
    // },
    // doctorLevel(){
    //   if(this.oShow.cooperativeDoctor){
    //     this.doctorSearch();
    //   }
    // },
    // doctorStatus(){
    //   if(this.oShow.cooperativeDoctor){
    //     this.doctorSearch();
    //   }else if(this.oShow.saleser || this.oShow.microBusiness || this.oShow.salesRepresentative){
    //     this.saleserSearch();
    //   }
    // },
    // orderTime(){
    //   if(this.oShow.doctorOrder){
    //     this.y1s1Search();
    //   }else if(this.oShow.TmallOrder){
    //     this.TmallSearch();
    //   }
    // },
    // accountTime(){
    //   if(this.oShow.doctorOrder){
    //     this.y1s1Search();
    //   }else if(this.oShow.TmallOrder){
    //     this.TmallSearch();
    //   }
    // },
    // memberSource(){
    //   if(this.oShow.memberManagement){
    //     this.memberSearch();
    //   }
    // },
    // messageType(){
    //   if(this.oShow.messageManagement){
    //     this.messageSearch();
    //   }
    // },
    // messageUserType(){
    //   if(this.oShow.messageManagement){
    //     this.messageSearch();
    //   }
    // },
    // messageEffect(){
    //   if(this.oShow.messageManagement){
    //     this.messageSearch();
    //   }
    // },
    // reportDate(){
    //   if(this.oShow.distributionReport || this.oShow.pointReport || this.oShow.gradeReport){
    //     this.statisticsSearch();
    //   }
    // },
    // reportDate2(){
    //   if(this.oShow.gradeStatistics){
    //     this.statistics2Search();
    //   }
    // }
  },
  created() {
    let d = new Date();
    let y = d.getFullYear();
    let m = d.getMonth()+1;
    let _d = d.getDate();
    this.orderTime=[];
    this.orderTime[0]= y+'-'+m+'-'+(_d-1);
    this.orderTime[1]= y+'-'+m+'-'+_d;

    var _m = d.getMonth();
    var _y = d.getFullYear();
    if(d.getMonth() ==0){
      _m = 12;
      _y = _y-1;
    }

    this.reportDate = _y+'-'+_m;

    this.getParameter();
    if(this.oShow.doctorOrder||this.oShow.TmallOrder){
      if(this.isOrderStore){
        this.isOrderStore =  false;
      }

      if(this.oShow.doctorOrder){
        this.y1s1Search();
      }else if(this.oShow.TmallOrder){
        this.TmallSearch();
      }
    }

    this.changeValue({key:'orderTypeVlue',value:this.orderTypeVlue});
    this.changeValue({key:'ruleTypeVlue',value:this.ruleTypeVlue});
    this.changeValue({key:'doctorLevel',value:this.doctorLevel});
    this.changeValue({key:'doctorStatus',value:this.doctorStatus});

    this.exportReport();
  },
  computed:{
    ...mapState(['isIndex'])
  },
  methods:{
    ...mapMutations(['changeValue','setParameter','enterDetails','setIsIndex','setPoint']),
    exportReport(){
      if(this.oShow.distributionReport){
        this.reportGetlistload();
      }else if(this.oShow.pointReport){
        this.reportGetlistloadintegral();
      }else if(this.oShow.gradeStatistics){
        this.reportGetlistdateload();
      }else if(this.oShow.gradeReport){
        this.reportGetlevelcountload();
      }else if(this.oShow.gradeDoctors){
        this.reportGetdoctoradd();
      }
    },
    inquireFn(){
      if(this.oShow.doctorOrder){
        this.y1s1Search();
      }else if(this.oShow.TmallOrder){
        this.TmallSearch();
      }else if(this.oShow.proposalGoods){
        this.proposalSearch();
      }else if(this.oShow.cooperativeDoctor){
        this.doctorSearch();
      }else if(this.oShow.saleser || this.oShow.microBusiness || this.oShow.salesRepresentative){
        this.saleserSearch();
      }else if(this.oShow.memberManagement){
        this.memberSearch();
      }else if(this.oShow.messageManagement){
        this.messageSearch();
      }else if(this.oShow.distributionReport || this.oShow.pointReport || this.oShow.gradeReport){
        this.statistics0Search(0);
      }else if(this.oShow.gradeStatistics){
        this.statistics0Search(1);
      }else if(this.oShow.gradeDoctors){
        this.gradeDoctorsSearch();
      }

      this.exportReport();
    },
    upFile1(){
      let oInput = this.$refs.y1s1File;
      let that = this;
      oInput.click();
      let _temp = null;

      oInput.onchange = function(){
        if(this.files[0]){
            that.setPoint({type:0,pop:true,confirmBtn:false,pointWord:'导入中'});
            upFile(this.files[0],'/order/importorder').then(res => {
              if(res.code == 1){
                    that.setPoint({type:0,pop:true,confirmBtn:true,pointWord:res.message});
                    this.value = '';
              }
            })
        }     
      }
    },
    addRule(){
      let str = -1;
      this.$router.push({
          path:`${this.$route.path}/${str}?page=1`
      })
      this.enterDetails(true);
    },
    setIndexFn(){
      this.setIsIndex(true);
    },
    y1s1Search(){
      //let numPage = this.oParameter.page;
      this.oParameter = {};
      this.oParameter.page = 1;
      if(this.inputOrder){
        this.oParameter.tordret_no = this.inputOrder;
      }

      if(this.counterCode){
        this.oParameter.store_code = this.counterCode;
      }

      if(this.memberId){
        this.oParameter.card_no = this.memberId;
      }

      if(this.memberName){
        this.oParameter.mobile = this.memberName;
      }

      if(this.orderTime){
        this.oParameter.start_date = this.orderTime[0];
        this.oParameter.end_date = this.orderTime[1];
      }

      if(this.accountTime){
        this.oParameter.set_start_date = this.accountTime[0];
        this.oParameter.set_end_date = this.accountTime[1];
      }

      this.searchFn();
    },
    TmallSearch(){
      //let numPage = this.oParameter.page;
      this.oParameter = {};
      this.oParameter.page = 1;

      if(this.orderTypeVlue != 0){
        this.oParameter.bill_type = this.orderTypeVlue;
      }

      if(this.inputOrder){
        this.oParameter.tordret_no = this.inputOrder;
      }

      if(this.counterCode){
        this.oParameter.store_code = this.counterCode;
      }

      if(this.orderTime){
        this.oParameter.start_date = this.orderTime[0];
        this.oParameter.end_date = this.orderTime[1];
      }

      if(this.accountTime){
        this.oParameter.set_start_date = this.accountTime[0];
        this.oParameter.set_end_date = this.accountTime[1];
      }

      this.searchFn();
    },
    proposalSearch(){
      //let numPage = this.oParameter.page;
      this.oParameter = {};
      this.oParameter.page = 1;

      if(this.inputOrder){
        this.oParameter.name = this.inputOrder;
      }

      if(this.ruleTypeVlue>0){
        this.oParameter.status = this.ruleTypeVlue;
      }

      this.searchFn();
    },
    doctorSearch(){
      //let numPage = this.oParameter.page;
      this.oParameter = {};
      this.oParameter.page = 1;
      
      if(this.joinTime){
        this.oParameter.start_date = this.joinTime[0];
        this.oParameter.end_date = this.joinTime[1];
      }

      if(this.ysId){
         this.oParameter.pharmacy_id = this.ysId;
      }

      if(this.doctorLevel<4){
        this.oParameter.level = this.doctorLevel;
      }


      if(this.doctorStatus<2){
        this.oParameter.status = this.doctorStatus;
      }

      this.searchFn();
    },
    saleserSearch(){
      //let numPage = this.oParameter.page;
      this.oParameter = {};
      this.oParameter.page = 1;

      if(this.saleserId){
        if(this.oShow.saleser || this.oShow.microBusiness || this.oShow.salesRepresentative){
          this.oParameter.sales_no = this.saleserId;
        }
      }

      if(this.doctorStatus<2){
        this.oParameter.status = this.doctorStatus;
      }

      this.searchFn();
    },
    memberSearch(){
       //let numPage = this.oParameter.page;
        this.oParameter = {};
        this.oParameter.page = 1;

        if(this.memberId){
          this.oParameter.mobile = this.memberId;
        }

        if(this.memberName){
          this.oParameter.name = this.memberName;
        }

        if(this.bindDoctor){
          this.oParameter.doctor_no = this.bindDoctor;
        }

        if(this.bindSale){
          this.oParameter.sales_no = this.bindSale;
        }

        if(this.memberSource != 'null'){

          this.oParameter.status = this.memberSource;
        }

        this.searchFn();
    },
    messageSearch(){
       //let numPage = this.oParameter.page;
        this.oParameter = {};
        this.oParameter.page = 1;

        if(this.messageTitle){
          this.oParameter.title = this.messageTitle;
        }

        if(this.messageType>0){
          this.oParameter.type = this.messageType;
        }

        if(this.messageUserType>0){
          this.oParameter.user_type = this.messageUserType;
        }

        if(this.messageEffect>0){
          this.oParameter.is_effect = this.messageEffect;
        }

        this.searchFn();
    },
    statisticsSearch(){
       //let numPage = this.oParameter.page;
        this.oParameter = {};
        this.oParameter.page = 1;

        if(this.reportDate){
          let arr = this.reportDate.split('-');
          this.oParameter.year = arr[0];
          this.oParameter.month = arr[1];
        }

        if(this.orgName){
          this.oParameter.org_name = this.orgName;
        }

        if(this.provinceName){
          this.oParameter.province_name = this.provinceName;
        }

        if(this.salesmanName){
          this.oParameter.salesman_name = this.salesmanName;
        }

        this.searchFn();
    },
    statistics2Search(){
       //let numPage = this.oParameter.page;
        this.oParameter = {};
        this.oParameter.page = 1;

        if(this.reportDate2){
          this.oParameter.year = this.reportDate2;
        }

        if(this.orgName){
          this.oParameter.org_name = this.orgName;
        }

        if(this.provinceName){
          this.oParameter.province_name = this.provinceName;
        }

        if(this.salesmanName){
          this.oParameter.salesman_name = this.salesmanName;
        }

        this.searchFn();
    },
    statistics0Search(n){
      if(n){
        this.statistics2Search();
      }else{
        this.statisticsSearch();
      }
    },
    gradeDoctorsSearch(){
       //let numPage = this.oParameter.page;
      this.oParameter = {};
      this.oParameter.page = 1;
      
      if(this.joinTime){
        this.oParameter.start_date = this.joinTime[0];
        this.oParameter.end_date = this.joinTime[1];
      }

        this.searchFn();
    },
    searchFn(){
      let str = this.$route.path+'?';
      for(let key in this.oParameter){
        str +=key+'='+this.oParameter[key]+'&'
      }
      str = str.slice(0,-1);
      this.$router.push(str)
      this.setParameter(this.oParameter)
    }
  },
  components: {
    setIndex
  }
}
</script>


<style scoped>
.listHead{overflow: hidden; height: auto; }
.listHead .items{float: left; margin-right: 28px; margin-top: 30px; font-size: 14px; color: #67697e;}
.listHead .items:last-child{margin-right: 0px;}
.listHead .items>*{float: left;}
.listHead .items>span{height: 36px; line-height: 36px; width: 76px; display: block; text-align: right;}
.listHead .time{position: relative;}
.listHead .time>div{width: 200px; padding: 0px; height: 36px; background: #f6f6f6;}
.listHead .time>div.is-active{ background: #fff;}
.listHead .time>i{position: absolute; right: 11px;top: 13px;}
.listHead .items.orderType{margin-right: 11px;}

.cooperativeDoctor .listHead .time>div{height: 32px;}

.inquireBtn{height: 32px; line-height: 32px; background: #9193aa;border-radius: 4px;color: #fff; width: 76px; text-align: center; font-size: 14px;}
.inquireBtn:hover{background: #3385ff;}
.distributionOrder .inquireBtn{height: 36px; line-height: 36px;}

.doctorOrder .listHead .search{width: 236px;}
.doctorOrder .listHead .search>div{width: 160px;}
.mallOrder .listHead .items{margin-right: 13px;}

.TmallOrder .listHead .search{width: 236px;}
.TmallOrder .listHead .search>div{width: 160px;}


.proposalProduct .listHead{padding-top: 8px;}
.proposalProduct .listHead .items{margin-right: 40px;}
.proposalProduct .listHead .tzyxj,.proposalProduct .listHead .xzgz{width: 134px; height: 38px; line-height: 38px; text-align: center; border-radius:19px;color: #fff; font-size: 16px;float: right; margin-right: 16px; margin-top: 27px}
.proposalProduct .listHead .tzyxj{background: #9193aa;}
.proposalProduct .listHead .xzgz{background: #da0032;}
.proposalProduct .listHead .xzgz:before{width: 21px; height: 21px; background-position: -8px -96px;margin-right: 12px; content:"";}



.notProposalProduct .listHead{padding-top: 8px;}
.notProposalProduct .listHead .items{margin-right: 40px;}
.notProposalProduct .listHead .tzyxj,.notProposalProduct .listHead .xzgz{width: 134px; height: 38px; line-height: 38px; text-align: center; border-radius:19px;color: #fff; font-size: 16px;float: right; margin-right: 16px; margin-top: 27px}
.notProposalProduct .listHead .tzyxj{background: #9193aa;}
.notProposalProduct .listHead .xzgz{background: #da0032;}
.notProposalProduct .listHead .xzgz:before{width: 21px; height: 21px; background-position: -8px -96px;margin-right: 12px; content:"";}


.memberManagement .listHead .search{width: 236px;}
.memberManagement .listHead .search>div{width: 160px;}

.messageManagement .listHead .search{width: 236px;}
.messageManagement .listHead .search>div{width: 160px;}
.upFileBtn{height: 34px; line-height: 34px; background: #f6f6f6;border: 1px solid #DCDFE6;border-radius: 4px;color: #606266; padding: 0px 6px; font-size: 14px;}
.downTemplate{height: 36px; line-height: 36px; color: #3385ff;padding-left: 20px; font-size: 14px;}
.exportReportBtn{height: 30px; line-height: 30px; background: #f6f6f6;border: 1px solid #DCDFE6;border-radius: 4px;color: #606266; padding: 0px 6px; font-size: 14px;}


.reportStatistics .listHead .inputBox>div{width: 170px;}
.reportStatistics .listHead .timeBox>div{width: 160px;} 
</style>


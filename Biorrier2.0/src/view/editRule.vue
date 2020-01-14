<template>
  <div class="editRuleWrap">
    <div class="editRuleH">
      <div class="hLeft">
        <div class="hLeft-top">
          <div class="items ruleTime">
            <span>适用时间：</span>
            <el-date-picker 
              v-model="ruleTime" 
              type="daterange" 
              :editable=false 
              :clearable=false 
              start-placeholder="开始时间" 
              end-placeholder="结束时间" 
              value-format="yyyy-MM-dd"
              format="yyyy-MM-dd HH:mm:ss" 
              range-separator="~" 
              :default-time="['00:00:00', '23:59:59']">
            </el-date-picker>
            <i class="icons icon_11"></i>
          </div>
          <div class="items ruleName">
            <span>规则名称：</span>
            <div class="text1">
              <el-input 
                placeholder="双十一试用" 
                v-model="ruleName"
                clearable>
              </el-input>
            </div>
          </div>
        </div>
        <div class="items ruleDescription">
          <span>规则描述：</span>
          <div class="text3">
            <textarea placeholder="双十一试用" v-model="describe"></textarea>
          </div>
        </div>
      </div>
      <div class="hRight">
        <a href="javascript:;" class="qx" @click="close()">取消</a>
        <a href="javascript:;" class="qr" @click="confirm()">确认</a>
      </div>
    </div>
    <div class="editRuleCon">
      <el-scrollbar>
        <div class="goodsMain" v-if="isProposalGoods">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <thead>
              <tr>
                <th class="col-1">
                  <label>
                    <input type="checkbox" @click="checkAll2()" v-model="checked2">
                    <i class="icons icon_17"></i>
                    <i class="icons icon_18"></i>
                  </label>
                </th>
                <th class="col-2">商品编码</th>
                <th class="col-3">商品名称</th>
                <th class="col-4">商品售价</th>
                <th class="col-5">方式</th>
                <th class="col-6">适用范围</th>
                <th class="col-7">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in oData">
                <td class="col-1">
                  <label>
                    <input type="checkbox" v-model="checkModel2" :value="item.item_id">
                    <i class="icons icon_17"></i>
                    <i class="icons icon_18"></i>
                  </label>
                </td>
                <td class="col-2" v-text="item.main_item_id"></td>
                <td class="col-3" v-text="item.item_name"></td>
                <td class="col-4" v-text="parseFloat(item.item_money)"></td>
                <td class="col-5">
                  <label>
                    <input type="radio" v-model="item.advisement_type" class="commissionWay" value="0">
                     <i class="icons icon_19" v-show="parseInt(item.advisement_type)?true:false"></i>
                    <i class="icons icon_20" v-show="parseInt(item.advisement_type)?false:true"></i>
                    <span>固定比例</span>
                  </label>
                  <label>
                    <input type="radio" v-model="item.advisement_type" class="commissionWay" value="1">
                    <i class="icons icon_19" v-show="parseInt(item.advisement_type)?false:true"></i>
                    <i class="icons icon_20" v-show="parseInt(item.advisement_type)?true:false"></i>
                    <span>固定金额</span>
                  </label>
                  <input type="number" :_value="item.advisement_numerial = parseFloat(item.advisement_numerial)" v-model="item.advisement_numerial">
                  <span class="percentage" v-show="parseInt(item.advisement_type)?false:true">%</span>
                  <span class="integer" v-show="parseInt(item.advisement_type)?true:false">元</span>
                </td>
                <td class="col-6">
                  <span v-text="item.area"></span>
                  <a href="javascript:;" @click="revisedScope(index)">修改范围</a>
                </td>
                <td class="col-7">
                  <a href="javasceipt:;" class="sc" @click="deleteBtn(item.item_id)">删除</a>
                </td>
              </tr>
              <tr>
                <td colspan="7" align="right"><a href="javascript:;" @click="addGoodBtn();" class="addGood">添加商品</a></td>
              </tr>
              <tr>
                <td class="col-1"></td>
                <td class="col-2 batch">批量设置</td>
                <td colspan="2"></td>
                <td class="col-5">
                  <label>
                    <input type="radio" v-model="batchSet.advisement_type" class="commissionWay" value="0">
                     <i class="icons icon_19" v-show="parseInt(batchSet.advisement_type)?true:false"></i>
                    <i class="icons icon_20" v-show="parseInt(batchSet.advisement_type)?false:true"></i>
                    <span>固定比例</span>
                  </label>
                  <label>
                    <input type="radio" v-model="batchSet.advisement_type" class="commissionWay" value="1">
                    <i class="icons icon_19" v-show="parseInt(batchSet.advisement_type)?false:true"></i>
                    <i class="icons icon_20" v-show="parseInt(batchSet.advisement_type)?true:false"></i>
                    <span>固定金额</span>
                  </label>
                  <input type="number" v-model="batchSet.advisement_numerial">
                  <span class="percentage" v-show="parseInt(batchSet.advisement_type)?false:true">%</span>
                  <span class="integer" v-show="parseInt(batchSet.advisement_type)?true:false">元</span>
                </td>
                <td class="col-6">
                  <span v-text="batchSet.area || '未选择范围'"></span>
                  <a href="javascript:;" @click="revisedScope(-1)">修改范围</a>
                </td>
                <td class="col-7">
                  <a href="javasceipt:;" class="sc" @click="deleteAllBtn()">删除</a>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- <pageBar :oParameter="oParameter" :total="total" @setPage="setPage"></pageBar> -->
        </div>
        <div class="goodsMain" v-if="isSalesProposalGoods || isSalesProposalGoods2">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <thead>
              <tr>
                <th class="col-1">
                  <label>
                    <input type="checkbox" @click="checkAll2()" v-model="checked2">
                    <i class="icons icon_17"></i>
                    <i class="icons icon_18"></i>
                  </label>
                </th>
                <th class="col-2">商品编码</th>
                <th class="col-3">商品名称</th>
                <th class="col-4">商品售价</th>
                <th class="col-5">方式</th>
                <th class="col-9">Y1S1</th>
                <th class="col-10">微信商城</th>
                <th class="col-11">天猫</th>
                <th class="col-6">适用范围</th>
                <th class="col-7">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in oData">
                <td class="col-1">
                  <label>
                    <input type="checkbox" v-model="checkModel2" :value="item.item_id">
                    <i class="icons icon_17"></i>
                    <i class="icons icon_18"></i>
                  </label>
                </td>
                <td class="col-2" v-text="item.main_item_id"></td>
                <td class="col-3" v-text="item.item_name"></td>
                <td class="col-4" v-text="parseFloat(item.item_money)"></td>
                <td class="col-5">
                  <label>
                    <input type="radio" v-model="item.advisement_type" class="commissionWay" value="0">
                     <i class="icons icon_19" v-show="parseInt(item.advisement_type)?true:false"></i>
                    <i class="icons icon_20" v-show="parseInt(item.advisement_type)?false:true"></i>
                    <span>固定比例</span>
                  </label>
                  <label>
                    <input type="radio" v-model="item.advisement_type" class="commissionWay" value="1">
                    <i class="icons icon_19" v-show="parseInt(item.advisement_type)?false:true"></i>
                    <i class="icons icon_20" v-show="parseInt(item.advisement_type)?true:false"></i>
                    <span>固定金额</span>
                  </label>
                </td>
                <td class="col-9">
                  <input type="number" :_value="item.y_advisement_numerial = parseFloat(item.y_advisement_numerial)" v-model="item.y_advisement_numerial">
                  <span class="percentage" v-show="parseInt(item.advisement_type)?false:true">%</span>
                  <span class="integer" v-show="parseInt(item.advisement_type)?true:false">元</span>
                </td>
                <td class="col-10">
                  <input type="number" :_value="item.sc_advisement_numerial = parseFloat(item.sc_advisement_numerial)" v-model="item.sc_advisement_numerial">
                  <span class="percentage" v-show="parseInt(item.advisement_type)?false:true">%</span>
                  <span class="integer" v-show="parseInt(item.advisement_type)?true:false">元</span>
                </td>
                <td class="col-11">
                  <input type="number" :_value="item.tm_advisement_numerial = parseFloat(item.tm_advisement_numerial)" v-model="item.tm_advisement_numerial">
                  <span class="percentage" v-show="parseInt(item.advisement_type)?false:true">%</span>
                  <span class="integer" v-show="parseInt(item.advisement_type)?true:false">元</span>
                </td>
                <td class="col-6">
                  <span v-text="item.area"></span>
                  <a href="javascript:;" @click="revisedScope(index)">修改范围</a>
                </td>
                <td class="col-7">
                   <a href="javasceipt:;" class="sc" @click="deleteBtn(item.item_id)">删除</a>
                </td>
              </tr>
              <tr>
                <td colspan="10" align="right"><a href="javascript:;" @click="addGoodBtn();" class="addGood">添加商品</a></td>
              </tr>
              <tr>
                <td class="col-1"></td>
                <td class="col-2 batch">批量设置</td>
                <td colspan="2"></td>
                <td class="col-5">
                  <label>
                    <input type="radio" v-model="batchSet.advisement_type" class="commissionWay" value="0">
                     <i class="icons icon_19" v-show="parseInt(batchSet.advisement_type)?true:false"></i>
                    <i class="icons icon_20" v-show="parseInt(batchSet.advisement_type)?false:true"></i>
                    <span>固定比例</span>
                  </label>
                  <label>
                    <input type="radio" v-model="batchSet.advisement_type" class="commissionWay" value="1">
                    <i class="icons icon_19" v-show="parseInt(batchSet.advisement_type)?false:true"></i>
                    <i class="icons icon_20" v-show="parseInt(batchSet.advisement_type)?true:false"></i>
                    <span>固定金额</span>
                  </label>
                </td>
                <td class="col-9">
                  <input type="number" v-model="batchSet.y_advisement_numerial">
                  <span class="percentage" v-show="parseInt(batchSet.advisement_type)?false:true">%</span>
                  <span class="integer" v-show="parseInt(batchSet.advisement_type)?true:false">元</span>
                </td>
                <td class="col-10">
                  <input type="number" v-model="batchSet.sc_advisement_numerial">
                  <span class="percentage" v-show="parseInt(batchSet.advisement_type)?false:true">%</span>
                  <span class="integer" v-show="parseInt(batchSet.advisement_type)?true:false">元</span>
                </td>
                <td class="col-11">
                  <input type="number" v-model="batchSet.tm_advisement_numerial">
                  <span class="percentage" v-show="parseInt(batchSet.advisement_type)?false:true">%</span>
                  <span class="integer" v-show="parseInt(batchSet.advisement_type)?true:false">元</span>
                </td>
                <td class="col-6">
                  <span v-text="batchSet.area || '未选择范围'"></span>
                  <a href="javascript:;" @click="revisedScope(-1)">修改范围</a>
                </td>
                <td class="col-7">
                  <a href="javasceipt:;" class="sc" @click="deleteAllBtn()">删除</a>
                </td>
              </tr>
            </tbody>
          </table>
         <!-- <pageBar :oParameter="oParameter" :total="total" @setPage="setPage"></pageBar> -->
        </div>
        <div class="goodsMain" v-if="isMicroDoctor || isMicroDoctor2">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <thead>
              <tr>
                <th class="col-1">
                  <label>
                    <input type="checkbox" @click="checkAll2()" v-model="checked2">
                    <i class="icons icon_17"></i>
                    <i class="icons icon_18"></i>
                  </label>
                </th>
                <th class="col-2">商品编码</th>
                <th class="col-3">商品名称</th>
                <th class="col-4">商品售价</th>
                <th class="col-5">首单方式</th>
                <th class="col-10">微信商城</th>
                <th class="col-11">天猫</th>
                <th class="col-12">非首单方式</th>
                <th class="col-13">微信商城</th>
                <th class="col-14">天猫</th>
                <th class="col-6">适用范围</th>
                <th class="col-7">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in oData">
                <td class="col-1">
                  <label>
                    <input type="checkbox" v-model="checkModel2" :value="item.item_id">
                    <i class="icons icon_17"></i>
                    <i class="icons icon_18"></i>
                  </label>
                </td>
                <td class="col-2" v-text="item.main_item_id"></td>
                <td class="col-3" v-text="item.item_name"></td>
                <td class="col-4" v-text="parseFloat(item.item_money)"></td>
                <td class="col-5">
                  <label>
                    <input type="radio" v-model="item.first_advisement_type" class="commissionWay" value="0">
                     <i class="icons icon_19" v-show="parseInt(item.first_advisement_type)?true:false"></i>
                    <i class="icons icon_20" v-show="parseInt(item.first_advisement_type)?false:true"></i>
                    <span>固定比例</span>
                  </label>
                  <label>
                    <input type="radio" v-model="item.first_advisement_type" class="commissionWay" value="1">
                    <i class="icons icon_19" v-show="parseInt(item.first_advisement_type)?false:true"></i>
                    <i class="icons icon_20" v-show="parseInt(item.first_advisement_type)?true:false"></i>
                    <span>固定金额</span>
                  </label>
                </td>
                <td class="col-10">
                  <input type="number" :_value="item.first_sc_advisement_numerial = parseFloat(item.first_sc_advisement_numerial)" v-model="item.first_sc_advisement_numerial">
                  <span class="percentage" v-show="parseInt(item.first_advisement_type)?false:true">%</span>
                  <span class="integer" v-show="parseInt(item.first_advisement_type)?true:false">元</span>
                </td>
                <td class="col-11">
                  <input type="number" :_value="item.first_tm_advisement_numerial = parseFloat(item.first_tm_advisement_numerial)" v-model="item.first_tm_advisement_numerial">
                   <span class="percentage" v-show="parseInt(item.first_advisement_type)?false:true">%</span>
                  <span class="integer" v-show="parseInt(item.first_advisement_type)?true:false">元</span>
                </td>
                <td class="col-12">
                  <label>
                    <input type="radio" v-model="item.advisement_type" class="commissionWay" value="0">
                     <i class="icons icon_19" v-show="parseInt(item.advisement_type)?true:false"></i>
                    <i class="icons icon_20" v-show="parseInt(item.advisement_type)?false:true"></i>
                    <span>固定比例</span>
                  </label>
                  <label>
                    <input type="radio" v-model="item.advisement_type" class="commissionWay" value="1">
                    <i class="icons icon_19" v-show="parseInt(item.advisement_type)?false:true"></i>
                    <i class="icons icon_20" v-show="parseInt(item.advisement_type)?true:false"></i>
                    <span>固定金额</span>
                  </label>
                </td>
                <td class="col-13">
                  <input type="number" :_value="item.sc_advisement_numerial = parseFloat(item.sc_advisement_numerial)" v-model="item.sc_advisement_numerial">
                  <span class="percentage" v-show="parseInt(item.advisement_type)?false:true">%</span>
                  <span class="integer" v-show="parseInt(item.advisement_type)?true:false">元</span>
                </td>
                <td class="col-14">
                  <input type="number" :_value="item.tm_advisement_numerial = parseFloat(item.tm_advisement_numerial)" v-model="item.tm_advisement_numerial">
                   <span class="percentage" v-show="parseInt(item.advisement_type)?false:true">%</span>
                  <span class="integer" v-show="parseInt(item.advisement_type)?true:false">元</span>
                </td>
                <td class="col-6">
                  <span v-text="item.area"></span>
                  <a href="javascript:;" @click="revisedScope(index)">修改范围</a>
                </td>
                <td class="col-7">
                  <a href="javasceipt:;" class="sc" @click="deleteBtn(item.item_id)">删除</a>
                </td>
              </tr>
              <tr>
                <td colspan="12" align="right"><a href="javascript:;" @click="addGoodBtn();" class="addGood">添加商品</a></td>
              </tr>
              <tr>
                <td class="col-1"></td>
                <td class="col-2 batch">批量设置</td>
                <td colspan="2"></td>
                <td class="col-5">
                  <label>
                    <input type="radio" v-model="batchSet.first_advisement_type" class="commissionWay" value="0">
                     <i class="icons icon_19" v-show="parseInt(batchSet.first_advisement_type)?true:false"></i>
                    <i class="icons icon_20" v-show="parseInt(batchSet.first_advisement_type)?false:true"></i>
                    <span>固定比例</span>
                  </label>
                  <label>
                    <input type="radio" v-model="batchSet.first_advisement_type" class="commissionWay" value="1">
                    <i class="icons icon_19" v-show="parseInt(batchSet.first_advisement_type)?false:true"></i>
                    <i class="icons icon_20" v-show="parseInt(batchSet.first_advisement_type)?true:false"></i>
                    <span>固定金额</span>
                  </label>
                </td>
                <td class="col-10">
                  <input type="number" v-model="batchSet.first_sc_advisement_numerial">
                  <span class="percentage" v-show="parseInt(batchSet.first_advisement_type)?false:true">%</span>
                  <span class="integer" v-show="parseInt(batchSet.first_advisement_type)?true:false">元</span>
                </td>
                <td class="col-11">
                  <input type="number" v-model="batchSet.first_tm_advisement_numerial">
                   <span class="percentage" v-show="parseInt(batchSet.first_advisement_type)?false:true">%</span>
                  <span class="integer" v-show="parseInt(batchSet.first_advisement_type)?true:false">元</span>
                </td>
                <td class="col-12">
                  <label>
                    <input type="radio" v-model="batchSet.advisement_type" class="commissionWay" value="0">
                     <i class="icons icon_19" v-show="parseInt(batchSet.advisement_type)?true:false"></i>
                    <i class="icons icon_20" v-show="parseInt(batchSet.advisement_type)?false:true"></i>
                    <span>固定比例</span>
                  </label>
                  <label>
                    <input type="radio" v-model="batchSet.advisement_type" class="commissionWay" value="1">
                    <i class="icons icon_19" v-show="parseInt(batchSet.advisement_type)?false:true"></i>
                    <i class="icons icon_20" v-show="parseInt(batchSet.advisement_type)?true:false"></i>
                    <span>固定金额</span>
                  </label>
                </td>
                <td class="col-13">
                  <input type="number" v-model="batchSet.sc_advisement_numerial">
                  <span class="percentage" v-show="parseInt(batchSet.advisement_type)?false:true">%</span>
                  <span class="integer" v-show="parseInt(batchSet.advisement_type)?true:false">元</span>
                </td>
                <td class="col-14">
                  <input type="number" v-model="batchSet.tm_advisement_numerial ">
                   <span class="percentage" v-show="parseInt(batchSet.advisement_type)?false:true">%</span>
                  <span class="integer" v-show="parseInt(batchSet.advisement_type)?true:false">元</span>
                </td>
                <td class="col-6">
                  <span v-text="batchSet.area || '未选择范围'"></span>
                  <a href="javascript:;" @click="revisedScope(-1)">修改范围</a>
                </td>
                <td class="col-7">
                  <a href="javasceipt:;" class="sc" @click="deleteAllBtn()">删除</a>
                </td>
              </tr>
            </tbody>
          </table>
         <!-- <pageBar :oParameter="oParameter" :total="total" @setPage="setPage"></pageBar> -->
        </div>
      </el-scrollbar>
    </div>
    <chooseStore></chooseStore>
    <div class="popBj" v-if="isAddGood"></div>
    <div class="popWrap" v-if="isAddGood">
      <h4>添加商品</h4>
      <div class="popMain">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" class="goodlistH">
            <thead>
              <tr>
                <th class="col-1">
                  <label>
                    <input type="checkbox" @click="checkAll" v-model="checked">
                    <i class="icons icon_17"></i>
                    <i class="icons icon_18"></i>
                  </label>
                </th>
                <th class="col-2">商品编码</th>
                <th class="col-3">商品名称</th>
                <th class="col-4">商品售价</th>
              </tr>
            </thead>
            <tr>
              <td colspan="4">
                <div class="goodBox">
                  <el-scrollbar style="height:100%">

                    <van-pull-refresh v-model="isLoading">
                      <van-list
                        :finished="finished"
                        finished-text="没有更多了">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="goodlistC">
                          <tbody>
                            <tr v-for="(item,index) in goodsListArr">
                              <td class="col-1">
                                <label>
                                  <input type="checkbox" v-model="checkModel" :value="getsj(item)">
                                  <i class="icons icon_17"></i>
                                  <i class="icons icon_18"></i>
                                </label>
                              </td>
                              <td class="col-2" v-text="item.main_item_id"></td>
                              <td class="col-3" v-text="item.item_name"></td>
                              <td class="col-4" v-text="item.item_money"></td>
                            </tr>
                          </tbody>
                        </table>
                      </van-list>
                      </van-pull-refresh>
                  </el-scrollbar>
                </div>
              </td>
            </tr>
            <tr>
                <td colspan="4" class="addBox">
                  <a href="javascript:;" class="addGood" @click="addGood()">添加</a>
                  <a href="javascript:;" class="closeGood" @click="closeGood()">取消</a>
                </td>
              </tr>
          </table>
          <!-- <pageBar :oParameter="oParameter" :total="total2" @setPage="setPage"></pageBar> -->
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
import chooseStore from '@/components/chooseStore'
import pageBar from '@/components/pageBar'
export default {
  data () {
    return {
      isProposalGoods:false,
      isNotProposalGoods:false,
      isSalesProposalGoods2:false,
      isSalesProposalGoods:false,
      isMicroDoctor:false,
      isMicroDoctor2:false,
      ruleName:'',
      ruleTime:'',
      describe:'',
      priority_level:'',
      oParameter:null,
      total:0,
      total2:0,
      goodsListArr:[],
      isAddGood:false,
      oData:[],
      checked:false,
      checkModel:[],
      checked2:false,
      checkModel2:[],
      userType:0,
      batchSet:{
        advisement_type:0,
        pharmacy_ids:0,
        advisement_numerial:0,
        y_advisement_numerial:0,
        sc_advisement_numerial:0,
        tm_advisement_numerial:0,
        first_advisement_type:0,
        first_sc_advisement_numerial:0,
        first_tm_advisement_numerial:0,
        pharmacy_ids:'0',
        area:'未选择范围'
      },
      id:0,
      proIndex:0,
      page:0,
      last_page:1,
      finished: false,//控制在页面往下移动到底部时是否调用接口获取数据
      isLoading: false//控制下拉刷新的加载动
    }
  },
  props: ['sPath'],
  computed:{
    ...mapState(['isDetails','arrStore','storeInfo'])
  },
  watch:{
    arrStore: {
      handler(str1,str2) {
        if(this.proIndex>-1){
          this.oData[this.proIndex].pharmacy_ids = this.arrStore;
          this.oData[this.proIndex].area = this.storeInfo;
        }else{
          this.batchSet.pharmacy_ids = this.arrStore;
          this.batchSet.area = this.storeInfo;
        }
      },
      deep: true
    },
    checkModel(){
      if(this.checkModel.length==this.goodsListArr.length){
        this.checked=true;
      }else{
        this.checked=false;
      }
  　},
    checkModel2(){
      if(this.checkModel2.length==this.oData.length &&(this.checkModel2.length!=0)){
        this.checked2=true;
      }else{
        this.checked2=false;
      }

      if(this.checkModel2.length>0){
        for(let i=0;i<this.checkModel2.length;i++){

          for(let ii=0;ii<this.oData.length;ii++){
            if(this.oData[ii].item_id == this.checkModel2[i]){
              this.oData[ii].advisement_type = this.batchSet.advisement_type;
              this.oData[ii].pharmacy_ids = this.batchSet.pharmacy_ids;
              this.oData[ii].advisement_numerial = this.batchSet.advisement_numerial;
              this.oData[ii].y_advisement_numerial = this.batchSet.y_advisement_numerial;
              this.oData[ii].sc_advisement_numerial = this.batchSet.sc_advisement_numerial;
              this.oData[ii].tm_advisement_numerial = this.batchSet.tm_advisement_numerial;
              this.oData[ii].first_advisement_type = this.batchSet.first_advisement_type;
              this.oData[ii].first_sc_advisement_numerial = this.batchSet.first_sc_advisement_numerial;
              this.oData[ii].first_tm_advisement_numerial = this.batchSet.first_tm_advisement_numerial;
              this.oData[ii].pharmacy_ids = this.batchSet.pharmacy_ids;
              this.oData[ii].area = this.batchSet.area;

              break;
            }
          }
        }
      }
  　},
    oData(){
      if(this.checkModel2.length==this.oData.length &&(this.checkModel2.length!=0)){
        this.checked2=true;
      }else{
        this.checked2=false;
      }
    },
    batchSet:{
      handler(newName, oldName) {
        if(this.checkModel2.length>0){
          for(let i=0;i<this.checkModel2.length;i++){

            for(let ii=0;ii<this.oData.length;ii++){
              if(this.oData[ii].item_id == this.checkModel2[i]){
                this.oData[ii].advisement_type = this.batchSet.advisement_type;
                this.oData[ii].pharmacy_ids = this.batchSet.pharmacy_ids;
                this.oData[ii].advisement_numerial = this.batchSet.advisement_numerial;
                this.oData[ii].y_advisement_numerial = this.batchSet.y_advisement_numerial;
                this.oData[ii].sc_advisement_numerial = this.batchSet.sc_advisement_numerial;
                this.oData[ii].tm_advisement_numerial = this.batchSet.tm_advisement_numerial;
                this.oData[ii].first_advisement_type = this.batchSet.first_advisement_type;
                this.oData[ii].first_sc_advisement_numerial = this.batchSet.first_sc_advisement_numerial;
                this.oData[ii].first_tm_advisement_numerial = this.batchSet.first_tm_advisement_numerial;
                this.oData[ii].pharmacy_ids = this.batchSet.pharmacy_ids;
                this.oData[ii].area = this.batchSet.area;

                break;
              }
            }
          }
        }
      },
      immediate: true,
      deep: true
    }
  },
  updated(){},
  created(){
      if(!this.isDetails){
          this.$router.push(this.sPath+'?page=1')
      }else{
          //this.getData()
          this.getParameter();
          this.isShowDetails();
          this.goodsList();
          let arr = this.$route.path.split('/');
          this.id = arr[arr.length-1];

          if(parseInt(this.id)>0){
            this.rulesInfo(this.id);
          }  
      }
  },
  destroyed(){
    this.enterDetails(false)
  },
  mounted(){},
  methods: {
    ...mapMutations(['enterDetails','setStorePop','setPoint']),
    deleteBtn(id){
      let _n = this.checkModel2.indexOf(id);

      if(_n>-1){
        this.checkModel2.splice(_n,1)
      }

      for(let i=0;i<this.oData.length;i++){
        if(this.oData[i].item_id == id){
          this.oData.splice(i,1);
          break;
        }
      }
    },
    confirm(){
      if(this.ruleName){
        if(this.ruleTime){
          if(this.describe){
            if(this.oData.length>0){
              if(parseInt(this.id)>0){
                this.rulesUpdate();
              }else{
                this.createRules();
              }
            }else{
              this.setPoint({type:0,pop:true,pointWord:'请添加商品'});
            }
          }else{
            this.setPoint({type:0,pop:true,pointWord:'请输入规则描述'});
          }
        }else{
          this.setPoint({type:0,pop:true,pointWord:'请设置适用时间'});
        }
      }else{
        this.setPoint({type:0,pop:true,pointWord:'请输入规则名称'});
      }
    },
    close(){
      this.$router.push(this.sPath+'?page=1')
    },
    getsj(obj,b){
      let oJson = {
        main_item_id:obj.main_item_id,
        item_id:obj.item_id||obj.id,
        item_name:obj.item_name,
        item_money:obj.item_money,
        pharmacy_ids:obj.pharmacy_ids ? obj.pharmacy_ids : 0,
        advisement_type:obj.advisement_type ? obj.advisement_type : 0,
        area:obj.area ? obj.area : '未选择范围'
      }

      let type = this.userType;

      if(type == 0){
        oJson.advisement_numerial = obj.advisement_numerial ? obj.advisement_numerial : 0;
      }else if(type == 2){
        oJson.y_advisement_numerial = obj.y_advisement_numerial ? obj.y_advisement_numerial : 0;
        oJson.sc_advisement_numerial = obj.sc_advisement_numerial ? obj.sc_advisement_numerial : 0;
        oJson.tm_advisement_numerial = obj.tm_advisement_numerial ? obj.tm_advisement_numerial : 0;
      }else if(type == 3){
        oJson.y_advisement_numerial = obj.y_advisement_numerial ? obj.y_advisement_numerial : 0;
        oJson.sc_advisement_numerial = obj.sc_advisement_numerial ? obj.sc_advisement_numerial : 0;
        oJson.tm_advisement_numerial = obj.tm_advisement_numerial ? obj.tm_advisement_numerial : 0;
      }else if(type == 4){
        oJson.sc_advisement_numerial = obj.sc_advisement_numerial ? obj.sc_advisement_numerial : 0;
        oJson.tm_advisement_numerial = obj.tm_advisement_numerial ? obj.tm_advisement_numerial : 0;
        oJson.first_advisement_type = obj.first_advisement_type ? obj.first_advisement_type : 0;
        oJson.first_sc_advisement_numerial = obj.first_sc_advisement_numerial ? obj.first_sc_advisement_numerial : 0;
        oJson.first_tm_advisement_numerial = obj.first_tm_advisement_numerial ? obj.first_tm_advisement_numerial : 0;
      }else if(type == 5){
        oJson.sc_advisement_numerial = obj.sc_advisement_numerial ? obj.sc_advisement_numerial : 0;
        oJson.tm_advisement_numerial = obj.tm_advisement_numerial ? obj.tm_advisement_numerial : 0;
        oJson.first_advisement_type = obj.first_advisement_type ? obj.first_advisement_type : 0;
        oJson.first_sc_advisement_numerial = obj.first_sc_advisement_numerial ? obj.first_sc_advisement_numerial : 0;
        oJson.first_tm_advisement_numerial = obj.first_tm_advisement_numerial ? obj.first_tm_advisement_numerial : 0;
      }

      if(b){
        return oJson
      }else{
        return JSON.stringify(oJson)
      }
    },
    deleteAllBtn(){
      if(this.checkModel2.length>0){
        for(let i=0;i<this.checkModel2.length;i++){
          let id = this.checkModel2[i];
          for(let i=0;i<this.oData.length;i++){
            if(this.oData[i].item_id == id){
              this.oData.splice(i,1);
              break;
            }
          }
        }
        this.checkModel2 = [];
        this.checked2=false;
      }
    },
    checkAll2(){
      if(this.checked2){
        this.checkModel2=[];
      }else{
        this.oData.forEach((item)=>{
          if(this.checkModel2.indexOf(item.item_id)==-1){
            this.checkModel2.push(item.item_id)
          }
        })
      }
　　},
    checkAll(){
      if(this.checked){
        this.checkModel=[];
      }else{
        this.goodsListArr.forEach((item)=>{
          if(this.checkModel.indexOf(this.getsj(item))==-1){
            this.checkModel.push(this.getsj(item))
          }
        })
      }
　　},
    addGood(){
      this.isAddGood = false;
      for(let i=0;i<this.checkModel.length;i++){
        this.oData.push(JSON.parse(this.checkModel[i]));
      }
    },
    closeGood(){
      this.isAddGood = false;
      this.checkModel=[];
    },
    addGoodBtn(){
      this.goodsList();
      this.checkModel=[];
      if(this.oData.length>0 && this.id<0){
        for(let i=0;i<this.oData.length;i++){
          this.checkModel.push(this.getsj(this.oData[i]));
        }
      }
      
      this.isAddGood = true;
    },
    setPage(obj){
    },
    revisedScope(num){
      this.proIndex = num;
      this.setStorePop(true)
    },
    isShowDetails(){
      let arr = [
        '/distributionConfiguration/Y1S1/proposalGoods',
      ];

      let arr3 = [
        '/distributionConfiguration/sales/proposalGoods'
      ];

      let arr30 = [
        '/distributionConfiguration/sales/notProposalGoods'
      ];

      let arr4 = [
        '/distributionConfiguration/microDoctor'
      ];

      let arr40 = [
        '/distributionConfiguration/salesDeputy'
      ];

      this.isProposalGoods = this.getBoolean(arr);
      this.isSalesProposalGoods = this.getBoolean(arr3);
      this.isSalesProposalGoods2 = this.getBoolean(arr30);
      this.isMicroDoctor = this.getBoolean(arr4);
      this.isMicroDoctor2 = this.getBoolean(arr40);

      if(this.isProposalGoods){this.userType=0;}
      if(this.isSalesProposalGoods){this.userType=2;}
      if(this.isSalesProposalGoods2){this.userType=3;}
      if(this.isMicroDoctor){this.userType=4;}
      if(this.isMicroDoctor2){this.userType=5;}
    }
  },
  components: {
    chooseStore, 
    pageBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.editRuleWrap{overflow: hidden;}
.editRuleWrap .editRuleH{overflow: hidden; margin-top: 30px; position: relative;}
.editRuleWrap .editRuleH .hLeft{overflow: hidden; margin-right:340px; }
.editRuleWrap .editRuleH .hLeft>div{overflow: hidden; width: 100%; clear: both;}
.editRuleWrap .editRuleH .items{margin-top: 20px;position: relative; overflow: hidden;}
.editRuleWrap .editRuleH .items>*{display: block; float:left;}
.editRuleWrap .editRuleH .items>span{display: block; width: auto; height: 36px; line-height: 36px;}

.editRuleWrap .editRuleH .ruleName{margin-right: 416px; width:auto;}
.editRuleWrap .editRuleH .ruleName>div{width:auto;}
.editRuleWrap .editRuleH .ruleName>span{float: left;}
.editRuleWrap .editRuleH .ruleName>.text1{float: none; margin-left: 60px;}

.editRuleWrap .editRuleH .ruleTime{width: 380px;float: right;}
.editRuleWrap .editRuleH .ruleTime>div{width: 320px; padding: 0px; height: 36px;}
.editRuleWrap .editRuleH .ruleTime>div.is-active{ background: #fff;}
.editRuleWrap .editRuleH .ruleTime>i{position: absolute; right: 11px;top: 13px;}

.editRuleWrap .editRuleH .ruleDescription{width: 100%; display: block; clear: both; overflow:hidden;}
.editRuleWrap .editRuleH .ruleDescription>span{float: left;}
.editRuleWrap .editRuleH .ruleDescription>.text3{float: none; margin-left: 60px;}
.editRuleWrap .editRuleH .ruleDescription textarea{width:100%; min-height: 92px; background: #fff; border:1px solid #dddddd; border-radius: 5px; text-indent: 14px; box-sizing: border-box;line-height: 24px; }
.editRuleWrap .editRuleH .hRight{overflow: hidden;  width: 304px; position: absolute; right: 0; top:20px;}
.editRuleWrap .editRuleH .hRight a{display: block; float: right;width: 134px; line-height: 39px; height: 39px;border-radius: 19px;color: #fff; font-size: 16px; font-weight: bold; text-align: center;}
.editRuleWrap .editRuleH .hRight a.qx{background: #9193aa; margin-right: 16px;}
.editRuleWrap .editRuleH .hRight a.qr{background: #da0032; margin-right: 20px;}


.editRuleWrap .goodsMain{margin-top: 13px; font-size: 14px; color: #676a79;}
.goodsMain table thead th{height: 44px; overflow: hidden;border-bottom:1px solid #eee; font-weight: normal; font-size: 12px; color: #9498a4;background: #f3f7fa; text-align:left; padding: 0px 8px;}
.goodsMain table tbody td{height: 89px; overflow: hidden; font-size: 14px; color: #696a7c; border-bottom:1px solid #eee; padding: 0px 8px;}
.goodsMain table tbody td.col-7 a{display: inline-block; width: 74px; height: 26px; line-height: 26px; text-align: center; border-radius: 13px; border:1px solid #686b7e; color: #686b7e;}
.goodsMain table tbody td.col-5 label{margin-right: 15px;}
.goodsMain table tbody td.col-5 label span{margin-left: 4px;}
.goodsMain table tbody td.col-5 input[type="number"]{width: 73px; height: 36px; line-height: 36px; text-align: center; border-radius: 5px; border:1px solid #dddddd;margin-right: 8px; color: #6b6a7c;}


.goodsMain table tbody td.col-6 a{color: #da0030; text-decoration:underline;margin-left: 15px; font-weight: normal;}
.goodsMain table tbody td a.addGood{ height: 28px; width: 102px; line-height: 28px; text-align: center; background: #da0032; color: #fff;border-radius: 14px;display: inline-block;border:0px;}
.goodsMain table tbody td.batch{font-weight: bold;}


.notProposalProduct .goodsMain tbody tr:first-child{background: #f7fbfe; font-weight: bold; color: #696a7c;}
.notProposalProduct .goodsMain tbody td.col-2{font-weight: bold; color: #696a7c;}
.notProposalProduct .goodsMain tbody td.col-8 label{margin-right: 30px;}
.notProposalProduct .goodsMain tbody td.col-8 label span{margin-left: 4px;}
.notProposalProduct .goodsMain tbody td.col-8 input[type="number"]{width: 40px; height: 36px; line-height: 36px; text-align: center; border-radius: 5px; border:1px solid #dddddd; }
.notProposalProduct .goodsMain tbody td.col-8>span{width: 15px;}



.salesProposalGoods .goodsMain tbody td.col-5{width: 200px;}
.salesProposalGoods .goodsMain tbody td.col-9,
.salesProposalGoods .goodsMain tbody td.col-10,
.salesProposalGoods .goodsMain tbody td.col-11{width: 72px;}
.salesProposalGoods .goodsMain tbody td.col-9 input[type="number"],
.salesProposalGoods .goodsMain tbody td.col-10 input[type="number"],
.salesProposalGoods .goodsMain tbody td.col-11 input[type="number"]{width: 40px; height: 36px; line-height: 36px; text-align: center; border-radius: 5px; border:1px solid #dddddd; }


.notsalesProposalGoods .goodsMain tbody td.col-5{width: 200px;}
.notsalesProposalGoods .goodsMain tbody td.col-9,
.notsalesProposalGoods .goodsMain tbody td.col-10,
.notsalesProposalGoods .goodsMain tbody td.col-11{width: 72px;}
.notsalesProposalGoods .goodsMain tbody td.col-9 input[type="number"],
.notsalesProposalGoods .goodsMain tbody td.col-10 input[type="number"],
.notsalesProposalGoods .goodsMain tbody td.col-11 input[type="number"]{width: 40px; height: 36px; line-height: 36px; text-align: center; border-radius: 5px; border:1px solid #dddddd; }



.microDoctor .goodsMain tbody td.col-5{width: 200px;}
.microDoctor .goodsMain tbody td.col-12{width: 200px;}
.microDoctor .goodsMain tbody td.col-10,
.microDoctor .goodsMain tbody td.col-13,
.microDoctor .goodsMain tbody td.col-14,
.microDoctor .goodsMain tbody td.col-11{width: 72px;}
.microDoctor .goodsMain tbody td.col-10 input[type="number"],
.microDoctor .goodsMain tbody td.col-13 input[type="number"],
.microDoctor .goodsMain tbody td.col-14 input[type="number"],
.microDoctor .goodsMain tbody td.col-11 input[type="number"]{width: 30px; height: 36px; line-height: 36px; text-align: center; border-radius: 5px; border:1px solid #dddddd; }


.salesDeputy .goodsMain tbody td.col-5{width: 200px;}
.salesDeputy .goodsMain tbody td.col-12{width: 200px;}
.salesDeputy .goodsMain tbody td.col-10,
.salesDeputy .goodsMain tbody td.col-13,
.salesDeputy .goodsMain tbody td.col-14,
.salesDeputy .goodsMain tbody td.col-11{width: 72px;}
.salesDeputy .goodsMain tbody td.col-10 input[type="number"],
.salesDeputy .goodsMain tbody td.col-13 input[type="number"],
.salesDeputy .goodsMain tbody td.col-14 input[type="number"],
.salesDeputy .goodsMain tbody td.col-11 input[type="number"]{width: 30px; height: 36px; line-height: 36px; text-align: center; border-radius: 5px; border:1px solid #dddddd; }



.popBj{position: fixed; width: 100%;height: 100%; left: 0;top:0;background: #000;opacity: .6; z-index: 3333;}
.popWrap{ background: #fff; width: 600px; height: auto;position: fixed; left: 50%;margin-left: -300px; top:20%; z-index: 3334; animation: fk 0.6s ease-in forwards 0s 1 normal}
.popWrap h4{height: 50px; line-height: 50px;text-align: center; font-weight: normal; font-size:16px;}
.popWrap .goodBox{height: 300px;}
.popWrap table thead th{height: 40px; overflow: hidden;border-bottom:1px solid #eee; font-weight: normal; font-size: 12px; color: #9498a4;background: #f3f7fa; text-align:left; padding: 0px 8px;}
.popWrap table tbody td{height: 30px; overflow: hidden; font-size: 14px; color: #696a7c; border-bottom:1px solid #eee; padding: 0px 8px;}
.popWrap .addBox{height: 89px; font-size: 14px; color: #696a7c; border-top:1px solid #eee; text-align: center;}
.popWrap .addBox a{ height: 28px; width: 102px; line-height: 28px; text-align: center;  color: #fff;border-radius: 14px;display: inline-block;border:0px;}
.popWrap .addBox a.addGood{ background: #da0032;margin-right:10px;}
.popWrap .addBox a.closeGood{background: #9193aa}

.microDoctor .goodsMain{min-width: 1400px; }
.microDoctor .goodsMain table{width: auto; min-width: 100%;}
.microDoctor .goodsMain table .col-3{width: 180px;  overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
.microDoctor .goodsMain table .col-4{width: 80px;}


.salesDeputy .goodsMain{min-width: 1400px; }
.salesDeputy .goodsMain table{width: auto; min-width: 100%;}
.salesDeputy .goodsMain table .col-3{width: 180px;  overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
.salesDeputy .goodsMain table .col-4{width: 80px;}

.goodsMain .col-3{width: 170px;}
.goodlistH .col-1,.goodlistC .col-1{width: 50px; box-sizing: border-box;}
.goodlistH .col-2,.goodlistC .col-2{width: 200px; box-sizing: border-box;}
.goodlistH .col-3,.goodlistC .col-3{width: 250px; box-sizing: border-box;}
.goodlistH .col-4,.goodlistC .col-4{width: 100px; box-sizing: border-box;}
</style>

<template>
  <div class="listContent">
    <div class="listMain" v-if="oShow.doctorOrder">
      <ul>
        <li v-for="item in oData">
          <div class="listH">
            <div class="orderNumber">订单编号：{{item.tordret_no}}</div>
            <div class="orderDate">订单完成时间：{{getBindTime(item.bill_date)}}</div>
          </div>
          <table width="100%" border="0" cellspacing="0" cellpadding="0" class="listC">
            <thead>
              <tr>
                <th class="col-1">会员信息</th>
                <th class="col-2">柜台号</th>
                <th class="col-3">柜台名称</th>
                <th class="col-4">版本号</th>
                <th class="col-5">结算金额</th>
                <th class="col-6">角色及其积分</th>
                <th class="col-7">结算时间</th>
                <th class="col-8"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="col-1">
                  <p v-text="item.account_name" v-if="item.account_name"></p>
                  <p v-text="item.mobile" v-if="item.mobile"></p>
                </td>
                <td class="col-2" v-text="item.store_code" ></td>
                <td class="col-3" v-text="item.counter_name"></td>
                <td class="col-4" v-text="item.counterlist_no"></td>
                <td class="col-5" v-text="parseFloat(item.settlement_money)"></td>
                <td class="col-6">
                  <div class="left">
                    <p v-if="item.salesrep_name">
                      <span>销售：{{item.salesrep_name}}</span>
                    </p>
                    <p v-if="item.doctor_name">
                      <span>Y1S1：{{item.doctor_name}}</span>
                    </p>
                    <p v-if="item.salesman_name">
                      <span>销售代表：{{item.salesman_name}}</span>
                    </p>
                  </div>
                  <div class="right">
                    <p v-if="item.salesrep_name">积分：{{parseFloat(item.salesrep_integral)}}</p>
                    <p v-if="item.doctor_name">积分：{{parseFloat(item.doctor_integral)}}</p>
                    <p v-if="item.salesman_name">积分：{{parseFloat(item.salesman_integral)}}</p>
                  </div>
                </td>
                <td class="col-7" v-text="getBindTime(item.set_time)"></td>
                <td class="col-8">
                  <a href="javascript:;" class="view icons_b" @click="showInfo($event)"></a>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="listC2">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <thead>
                <tr>
                  <th class="col-1"><i class="icons icon_7"></i></th>
                  <th class="col-2">商品条码</th>
                  <th class="col-3">商品名称</th>
                  <th class="col-4">单价*支数</th>
                  <th class="col-5">原价金额</th>
                  <th class="col-6">公司折扣额</th>
                  <th class="col-7">结算金额</th>
                  <th class="col-8">角色及其积分</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="json in item.list">
                  <td class="col-1"></td>
                  <td class="col-2" v-text="json.product_value"></td>
                  <td class="col-3" v-text="json.product_name"></td>
                  <td class="col-4">
                    {{parseFloat(json.pricelist)}}*{{json.qty}}
                  </td>
                  <td class="col-5" v-text="parseFloat(json.tot_amt_list)"></td>
                  <td class="col-6" v-text="parseFloat(json.tot_amt_diff)"></td>
                  <td class="col-7" v-text="parseFloat(json.tot_amt_actual)"></td>
                  <td class="col-8">
                    <div class="left">
                      <p v-if="json.salesrep_name">
                        <span>销售：{{json.salesrep_name}}</span>
                      </p>
                      <p v-if="json.doctor_name">
                        <span>Y1S1：{{json.doctor_name}}</span>
                      </p>
                      <p v-if="json.salesman_name">
                        <span>销售代表：{{json.salesman_name}}</span>
                      </p>
                    </div>
                    <div class="right">
                      <p v-if="json.salesrep_name">积分：{{parseFloat(json.salesrep_integral)}}</p>
                      <p v-if="json.doctor_name">积分：{{parseFloat(json.doctor_integral)}}</p>
                      <p v-if="json.salesman_name">积分：{{parseFloat(json.salesman_integral)}}</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </li>
      </ul>
      <pageBar :total="total" :lastPage="lastPage" @setPage="setPage"></pageBar>
    </div>
    <div class="listMain" v-if="oShow.TmallOrder">
      <ul>
        <li v-for="item in oData">
          <div class="listH">
            <div class="orderNumber">
              <span v-if="item.orgretail_no">退款</span>
              订单编号：{{item.tordret_no}}
            </div>
            <div class="orderDate">
              <span v-if="item.orgretail_no">退款时间：{{getBindTime(item.bill_date)}}</span>
              <span v-if="!item.orgretail_no">订单完成时间：{{getBindTime(item.bill_date)}}</span>
            </div>
          </div>
          <table width="100%" border="0" cellspacing="0" cellpadding="0" class="listC">
            <thead>
              <tr>
                <th class="col-1">会员信息</th>
                <th class="col-5"><span v-if="item.order_type==0">退款金额</span><span v-if="item.order_type==1">结算金额</span></th>
                <th class="col-6">角色及其<span v-if="item.order_type==0">扣除</span>积分</th>
                <th class="col-7">结算时间</th>
                <th class="col-8"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="col-1">
                  <p v-text="item.account_name" v-if="item.account_name"></p>
                  <p v-text="item.mobile" v-if="item.mobile"></p>
                </td>
                <td class="col-5" v-text="item.order_money"></td>
                <td class="col-6">
                  <div class="left">
                    <p v-if="item.salesrep_name">
                      <span>销售：{{item.salesrep_name}}</span>
                    </p>
                    <p v-if="item.doctor_name">
                      <span>Y1S1：{{item.doctor_name}}</span>
                    </p>
                    <p v-if="item.salesman_name">
                      <span>销售代表：{{item.salesman_name}}</span>
                    </p>
                  </div>
                  <div class="right">
                    <p v-if="item.salesrep_name">
                      <span v-if="parseFloat(item.salesrep_integral)<0">扣除</span>积分：{{parseFloat(item.salesrep_integral)}}</p>
                    <p v-if="item.doctor_name"><span v-if="parseFloat(item.doctor_integral)<0">扣除</span>积分：{{parseFloat(item.doctor_integral)}}</p>
                    <p v-if="item.salesman_name"><span v-if="parseFloat(item.salesman_integral)<0">扣除</span>积分：{{parseFloat(item.salesman_integral)}}</p>
                  </div>

                </td>
                <td class="col-7" v-text="getBindTime(item.set_time)"> </td>
                <td class="col-8">
                  <a href="javascript:;" class="view icons_b" @click="showInfo($event)"></a>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="listC2">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <thead>
                <tr>
                  <th class="col-1"><i class="icons icon_7"></i></th>
                  <th class="col-2">商品条码</th>
                  <th class="col-3">商品名称</th>
                  <th class="col-4">单价*支数</th>
                  <th class="col-5">原价金额</th>
                  <th class="col-6">公司折扣额</th>
                  <th class="col-7">结算金额</th>
                  <th class="col-8">角色及其积分</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="json in item.list">
                  <td class="col-1"></td>
                  <td class="col-2" v-text="json.product_value"></td>
                  <td class="col-3" v-text="json.product_name"></td>
                  <td class="col-4">
                    {{parseFloat(json.pricelist)}}*{{json.qty}}
                  </td>
                  <td class="col-5" v-text="parseFloat(json.tot_amt_list)"></td>
                  <td class="col-6" v-text="parseFloat(json.tot_amt_diff)"></td>
                  <td class="col-7" v-text="parseFloat(json.tot_amt_actual)"></td>
                  <td class="col-8">
                    <div class="left">
                      <p v-if="json.doctor_name">
                        <span>Y1S1：{{json.doctor_name}}</span>
                      </p>
                      <p v-if="json.salesrep_name">
                        <span>销售：{{json.salesrep_name}}</span>
                      </p>
                    </div>
                    <div class="right">
                      <p v-if="json.doctor_name"><span v-if="parseFloat(json.doctor_integral)<0">扣除</span>积分：{{parseFloat(json.doctor_integral)}}</p>
                      <p v-if="json.salesrep_name"><span v-if="parseFloat(json.salesrep_integral)<0">扣除</span>积分：{{parseFloat(json.salesrep_integral)}}</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </li>
      </ul>
      <pageBar :total="total" :lastPage="lastPage" @setPage="setPage"></pageBar>
    </div>
    <div class="listMain" v-if="oShow.proposalGoods">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th class="col-1">规则编号</th>
            <th class="col-2">优先级</th>
            <th class="col-3">规则名称</th>
            <th class="col-4">规则描述</th>
            <th class="col-5">适用时间</th>
            <th class="col-6">状态</th>
            <th class="col-7">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in oData" v-if="(headCondition.ruleTypeVlue == item.status) || (headCondition.ruleTypeVlue == 0)">
            <td class="col-1" v-text="item.number"></td>
            <td class="col-2" v-text="item.priority_level"></td>
            <td class="col-3" v-text="item.name"></td>
            <td class="col-4" v-text="item.describe"></td>
            <td class="col-5"><span v-if="item.start_time">{{getEndTime(item.start_time)}} ～ {{getEndTime(item.end_time)}}</span><span v-if="!item.start_time">--</span></td>
            <td class="col-6">
              <span v-if="item.status == 1" v-text="'未开始'"></span>
              <span v-if="item.status == 2" v-text="'使用中'"></span>
              <span v-if="item.status == 3" v-text="'已过期'"></span>
            </td>
            <td class="col-7">
              <a href="javasceipt:;" class="bj" @click="goDetails(item.id)">{{(parseInt(item.status)!=0)?'编辑':'查看'}}</a>
              <a href="javasceipt:;" class="sc" v-if="item.status!=''||parseInt(item.status)==0" @click="deleteBtn(item.id,1)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
      <pageBar :total="total" :lastPage="lastPage" @setPage="setPage"></pageBar>
    </div>
    <div class="listMain" v-if="oShow.cooperativeDoctor">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th class="col-1">Y1S1工号</th>
            <th class="col-2">所属区域</th>
            <th class="col-3">绑定信息(柜台号+版本号)</th>
            <th class="col-4">Y1S1等级</th>
            <th class="col-5">绑定会员</th>
            <th class="col-6">订单销售& 积分</th>
            <th class="col-7">状态</th>
            <th class="col-9">加入时间</th>
            <th class="col-8">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in oData" v-if="(headCondition.doctorStatus == item.status || headCondition.doctorStatus == 2)&&(headCondition.doctorLevel == item.level || headCondition.doctorLevel == 5)">
            <td class="col-1" v-text="item.doctor_no"></td>
            <td class="col-2">{{item.province_name}}-{{item.city_name}}-{{item.region_name}}</td>
            <td class="col-3" v-text="item.bind_info"></td>
            <td class="col-4" v-text="item.level_name"></td>
            <td class="col-5" v-text="item.bind_account_count"></td>
            <td class="col-6">{{item.order_count}}单/{{parseFloat(item.total_money)}}</td>
            <td class="col-7" v-text="parseInt(item.status)?'正常':'冻结中'"></td>
            <td class="col-9" v-text="getEndTime(item.add_time)"></td>
            <td class="col-8">
              <a href="javascript:;" @click="goDetails(item.doctor_no)">详情</a>
              <a href="javascript:;" v-text="parseInt(item.status)?'冻结用户':'解冻'" @click="statusBtn(item.id,!parseInt(item.status),2)"></a>
              <a href="javascript:;" @click="resetPassword(item.id,7)">重置密码</a>
            </td>
          </tr>
        </tbody>
      </table>
      <pageBar :total="total" :lastPage="lastPage" @setPage="setPage"></pageBar>
    </div>
    <div class="listMain" v-if="oShow.saleser">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th class="col-1">销售ID</th>
            <th class="col-2">姓名</th>
            <th class="col-3">所属区域</th>
            <th class="col-4">所在柜台</th>
            <th class="col-5">绑定会员</th>
            <th class="col-6">订单销售& 积分</th>
            <th class="col-7">状态</th>
            <th class="col-8">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in oData" v-if="headCondition.doctorStatus == item.status || headCondition.doctorStatus == 2">
            <td class="col-1" v-text="item.salesrep_no"></td>
            <td class="col-2" v-text="item.name"></td>
            <td class="col-3">{{item.province_name}}-{{item.city_name}}-{{item.region_name}}</td>
            <td class="col-4" v-text="item.pharmacy_name"></td>
            <td class="col-5" v-text="item.bind_account_count"></td>
            <td class="col-6">{{item.trade_count}}单/{{parseFloat(item.trade_money)}}</td>
            <td class="col-7" v-text="parseInt(item.status)?'正常':'冻结中'"></td>
            <td class="col-8">
              <a href="javascript:;" @click="goDetails(item.salesrep_no)">详情</a>
              <a href="javascript:;" v-text="parseInt(item.status)?'冻结用户':'解冻'" @click="statusBtn(item.id,!parseInt(item.status),2)"></a>
            </td>
          </tr>
        </tbody>
      </table>
      <pageBar :total="total" :lastPage="lastPage" @setPage="setPage"></pageBar>
    </div>
    <div class="listMain" v-if="oShow.microBusiness">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th class="col-1">Y1S1ID</th>
            <th class="col-2">Y1S1姓名</th>
            <th class="col-3">所属销售代表</th>
            <th class="col-4">绑定会员</th>
            <th class="col-5">订单销售/ 积分</th>
            <th class="col-6">资格条件</th>
            <th class="col-7">状态</th>
            <th class="col-8">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in oData" v-if="headCondition.doctorStatus == item.status || headCondition.doctorStatus == 2">
            <td class="col-1" v-text="item.salesrep_no"></td>
            <td class="col-2" v-text="item.salesrep_name"></td>
            <td class="col-3">{{item.salesmanager_name}}({{item.sales_represent_id}})</td>
            <td class="col-4" v-text="item.bind_account_count"></td>
            <td class="col-5">{{item.trade_count}}单/{{parseFloat(item.trade_money)}}</td>
            <td class="col-6" v-text="item.qualifications"></td>
            <td class="col-7" v-text="parseInt(item.status)?'正常':'冻结中'"></td>
            <td class="col-8">
              <a href="javascript:;" @click="goDetails(item.salesrep_no)">详情</a>
              <a href="javascript:;" v-text="parseInt(item.status)?'冻结用户':'解冻'" @click="statusBtn(item.id,!parseInt(item.status),2)"></a>
            </td>
          </tr>
        </tbody>
      </table>
      <pageBar :total="total" :lastPage="lastPage" @setPage="setPage"></pageBar>
    </div>
    <div class="listMain" v-if="oShow.salesRepresentative">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th class="col-1">销售代表ID</th>
            <th class="col-2">姓名</th>
            <th class="col-3">所属区域</th>
            <th class="col-4">绑定会员</th>
            <th class="col-5">订单销售/ 积分</th>
            <th class="col-7">状态</th>
            <th class="col-8">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in oData" v-if="headCondition.doctorStatus == item.status || headCondition.doctorStatus == 2">
            <td class="col-1" v-text="item.salesmanager_no"></td>
            <td class="col-2" v-text="item.salesmanager_name"></td>
            <td class="col-3">{{item.province_name}}-{{item.city_name}}-{{item.region_name}}</td>
            <td class="col-4" v-text="item.bind_we_count"></td>
            <td class="col-5">{{item.trade_count}}单/{{parseFloat(item.total_money)}}</td>
            <td class="col-7" v-text="parseInt(item.status)?'正常':'冻结中'"></td>
            <td class="col-8">
              <a href="javascript:;" @click="goDetails(item.salesmanager_no)">详情</a>
              <a href="javascript:;" v-text="parseInt(item.status)?'冻结用户':'解冻'" @click="statusBtn(item.id,!parseInt(item.status),2)"></a>
            </td>
          </tr>
        </tbody>
      </table>
      <pageBar :total="total" :lastPage="lastPage" @setPage="setPage"></pageBar>
    </div>
    <div class="listMain" v-if="oShow.ys_personnel || oShow.xs_personnel || oShow.wy_personnel">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th class="col-1">
              <label>
                <input name="qxList" type="checkbox" value="ys_personnel">
                <i class="icons icon_17"></i>
                <i class="icons icon_18"></i>
              </label>
            </th>
            <th class="col-2">会员姓名</th>
            <th class="col-3">手机号</th>
            <th class="col-4">
              <a href="javascript:;" @click="sortUserList(oParameter.is_sort)">
                绑定时间
                <i class="icons icon_28" v-if="oParameter.is_sort == 2"></i>
                <i class="icons icon_29" v-if="oParameter.is_sort == 1"></i>
              </a>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in account_list">
            <td class="col-1">
              <label>
                <input name="qxList" type="checkbox" value="ys_personnel">
                <i class="icons icon_17"></i>
                <i class="icons icon_18"></i>
              </label>
            </td>
            <td class="col-2" v-text="item.name"></td>
            <td class="col-3" v-text="item.mobile"></td>
            <td class="col-4" v-text="getBindTime(item.bind_time)"></td>
          </tr>
        </tbody>
      </table>
      <pageBar :total="total2" :lastPage="lastPage2" @setPage="setPage"></pageBar>
    </div>
    <div class="listMain" v-if="oShow.ys_integral">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th class="col-1">订单编号</th>
            <th class="col-2">订单完成时间</th>
            <th class="col-3">实付合计</th>
            <th class="col-4">积分类型</th>
            <th class="col-5">积分</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in oData">
            <td class="col-1" v-text="item.tordret_no"></td>
            <td class="col-2" v-text="getBindTime(item.set_time)"></td>
            <td class="col-3" v-text="parseFloat(item.settlement_money)"></td>
            <td class="col-4">
              {{(item.counterlist_no == 0) ? '非CF' : 'CF'}}
            </td>
            <td class="col-5" v-text="parseFloat(item.doctor_integral)"></td>
          </tr>
        </tbody>
      </table>
      <pageBar :total="total" :lastPage="lastPage" @setPage="setPage"></pageBar>
    </div>
    <div class="listMain" v-if="oShow.xs_integral || oShow.wy_integral || oShow.db_integral">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th class="col-1">订单编号</th>
            <th class="col-2">订单完成时间</th>
            <th class="col-3">实付合计</th>
            <th class="col-4">订单类型</th>
            <th class="col-5">积分</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in oData">
            <td class="col-1" v-text="item.tordret_no"></td>
            <td class="col-2" v-text="getBindTime(item.set_time)"></td>
            <td class="col-3" v-text="parseFloat(item.settlement_money)"></td>
            <td class="col-4">
              {{item.sales_type==1?'YIS1订单':''}}
              {{item.sales_type==2?'商城订单':''}}
              {{item.sales_type==3?'天猫订单':''}}
            </td>
            <td class="col-5" v-text="parseFloat(item.salesrep_integral)"></td>
          </tr>
        </tbody>
      </table>
      <pageBar :total="total" :lastPage="lastPage" @setPage="setPage"></pageBar>
    </div>
    <div class="listMain" v-if="oShow.db_personnel">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th class="col-1">Y1S1ID</th>
            <th class="col-2">Y1S1姓名</th>
            <th class="col-3">订单销售/ 积分</th>
            <th class="col-4">
              <a href="javascript:;" @click="sortUserList(oParameter.is_sort)">
                绑定时间
                <i class="icons icon_28" v-if="oParameter.is_sort == 2"></i>
                <i class="icons icon_29" v-if="oParameter.is_sort == 1"></i>
              </a>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in account_list">
            <td class="col-1" v-text="item.salesrep_no"></td>
            <td class="col-2" v-text="item.salesrep_name"></td>
            <td class="col-3">{{item.trade_count}}单/{{parseFloat(item.total_money)}}</td>
            <td class="col-4" v-text="getBindTime(item.bind_time)"></td>
          </tr>
        </tbody>
      </table>
      <pageBar :total="total" :lastPage="lastPage" @setPage="setPage"></pageBar>
    </div>
    <div class="listMain" v-if="oShow.memberManagement">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th class="col-1">会员号</th>
            <th class="col-2">会员姓名</th>
            <th class="col-3">绑定情况</th>
            <th class="col-4">编辑</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in oData">
            <td class="col-1" v-text="item.main_id"></td>
            <td class="col-2" v-text="item.name"></td>
            <td class="col-3"><span v-if="item.doctor_id">合作Y1S1：{{item.doctor_id}}   |</span> <span v-if="item.sales_id">销售：{{item.sales_name}}（{{item.sales_id}}）</span></td>
            <td class="col-4">
              <a href="javascript:;" @click="setRelation(item.main_id)">修改绑定</a>
            </td>
          </tr>
        </tbody>
      </table>
      <pageBar :total="total" :lastPage="lastPage" @setPage="setPage"></pageBar>
    </div>
    <div class="listMain" v-if="oShow.organizationManagement">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th class="col-1">
              <label>
                <input name="organizationManagement" type="checkbox" value="organizationManagement">
                <i class="icons icon_17"></i>
                <i class="icons icon_18"></i>
              </label>
            </th>
            <th class="col-2">姓名</th>
            <th class="col-3">手机号</th>
            <th class="col-4">部门</th>
            <th class="col-5">角色</th>
            <th class="col-6">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in oData">
            <td class="col-1">
              <label>
                <input name="organizationManagement" type="checkbox" value="organizationManagement">
                <i class="icons icon_17"></i>
                <i class="icons icon_18"></i>
              </label>
            </td>
            <td class="col-2" v-text="item.admin_name"></td>
            <td class="col-3" v-text="item.mobile"></td>
            <td class="col-4" v-text="item.org_name"></td>
            <td class="col-5" v-text="item.authority_name"></td>
            <td class="col-6">
              <a href="javascript:;" @click="xgzl(item)">修改资料</a>
              <a href="javascript:;" @click="statusBtn(item.id,!parseInt(item.is_effect),3)" v-text="parseInt(item.is_effect)?'冻结':'解冻'"></a>
              <a href="javascript:;" @click="deleteBtn(item.id,4)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
      <pageBar :total="total" :lastPage="lastPage" @setPage="setPage"></pageBar>
    </div>
    <div class="listMain" v-if="isIndex">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th class="col-1">优先级</th>
            <th class="col-2">规则名称</th>
            <th class="col-3"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in indexData" :index_b="index" :itemId="item.id" :index="index" class="indexTr">
            <td class="col-1" v-text="item.priority_level"></td>
            <td class="col-2" v-text="item.name"></td>
            <td class="col-3">
              <a href="javascript:;" @click="setIndexFn($event,-1)" :class="{indexBtn:true,indexPrev:true,stop:(index == 0)}"></a>
              <a href="javascript:;" @click="setIndexFn($event,1)" :class="{indexBtn:true,indexNext:true,stop:(index == indexData.length-1)}"></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="listMain" v-if="oShow.messageManagement">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th class="col-1">标题</th>
            <th class="col-2">消息类型</th>
            <th class="col-3">消息类别</th>
            <th class="col-4">状态</th>
            <th class="col-5">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in oData">
            <td class="col-1" v-text="item.title"></td>
            <td class="col-2">
              <span v-if="item.type==1">活动咨询</span>
              <span v-if="item.type==2">官方通知</span>
            </td>
            <td class="col-3" v-text="getUserTypeTxt(item.user_type)">
            </td>
            <td class="col-4">
              <span v-if="item.is_effect==1">有效</span>
              <span v-if="item.is_effect==2">无效</span>
            </td>
            <td class="col-5">
              <a href="javascript:;" @click="editMessage(item)">编辑</a>
              <a href="javascript:;" @click="effectMessage({id:item.id,is_effect:item.is_effect},8)">
                <span v-if="item.is_effect==2">设为有效</span>
                <span v-if="item.is_effect==1">设为无效</span>
              </a>
              <a href="javascript:;" @click="deleteMessage(item.id,9)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
      <pageBar :total="total" :lastPage="lastPage" @setPage="setPage"></pageBar>
      <div class="popBj" v-if="isEditMeg || isNewEditMeg"></div>
      <div class="editMessage" v-if="isEditMeg || isNewEditMeg">
        <div class="messageHead">编辑消息<a href="javascript:;" class="cloaeBtn icons_b" @click="closeMessage()"></a></div>
        <div class="messageCon">
          <ul>
            <li>
              <span>标题：</span>
              <el-input v-model="messageInfo.title" placeholder="请输入标题"></el-input>
            </li>
            <li>
              <span>是否有效：</span>
              <label>
                <input type="radio" v-model="messageInfo.is_effect" :value="1">
                <i class="icons icon_19" v-show="(parseInt(messageInfo.is_effect)==2)?true:false"></i>
                <i class="icons icon_20" v-show="(parseInt(messageInfo.is_effect)==1)?true:false"></i>
                <span>有效</span>
              </label>
              <label>
                <input type="radio" v-model="messageInfo.is_effect" :value="2">
                <i class="icons icon_19" v-show="(parseInt(messageInfo.is_effect)==1)?true:false"></i>
                <i class="icons icon_20" v-show="(parseInt(messageInfo.is_effect)==2)?true:false"></i>
                <span>无效</span>
              </label>
            </li>
            <li>
              <span>消息类型：</span>
              <label>
                <input type="radio" v-model="messageInfo.type" :value="1">
                <i class="icons icon_19" v-show="(parseInt(messageInfo.type)==2)?true:false"></i>
                <i class="icons icon_20" v-show="(parseInt(messageInfo.type)==1)?true:false"></i>
                <span>活动咨询</span>
              </label>
              <label>
                <input type="radio" v-model="messageInfo.type" :value="2">
                <i class="icons icon_19" v-show="(parseInt(messageInfo.type)==1)?true:false"></i>
                <i class="icons icon_20" v-show="(parseInt(messageInfo.type)==2)?true:false"></i>
                <span>官方通知</span>
              </label>
            </li>
            <li>
              <span>消息类别：</span>
              <label>
                <input type="checkbox" @click="checkMessage()" v-model="messageUserType">
                <i class="icons icon_17"></i>
                <i class="icons icon_18"></i>
                <span>全部</span>
              </label>
              <label>
                <input type="checkbox" v-model="messageInfo.user_type" :value="1">
                <i class="icons icon_17"></i>
                <i class="icons icon_18"></i>
                <span>Y1S1</span>
              </label>
              <label>
                <input type="checkbox" v-model="messageInfo.user_type" :value="2">
                <i class="icons icon_17"></i>
                <i class="icons icon_18"></i>
                <span>销售</span>
              </label>
              <label>
                <input type="checkbox" v-model="messageInfo.user_type" :value="3">
                <i class="icons icon_17"></i>
                <i class="icons icon_18"></i>
                <span>微医</span>
              </label>
              <label>
                <input type="checkbox" v-model="messageInfo.user_type" :value="4">
                <i class="icons icon_17"></i>
                <i class="icons icon_18"></i>
                <span>销售代表</span>
              </label>
            </li>
            <li>
              <span>内容：</span>
              <el-input
                type="textarea"
                :rows="6"
                placeholder="请输入内容"
                v-model="messageInfo.content">
              </el-input>
            </li>
          </ul>
        </div>
        <div class="messageFoot">
          <a href="javascript:;" class="qr" @click="confirmMessage()">保存</a>
          <a href="javascript:;" class="qx" @click="closeMessage()">取消</a>
        </div>
      </div>
    </div>

    <div class="listMain" v-if="oShow.distributionReport">
      <el-scrollbar>
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <thead>
            <tr>
              <th rowspan="2" class="col-1">大区</th>
              <th rowspan="2" class="col-2">省区</th>
              <th rowspan="2" class="col-17">地区</th>
              <th rowspan="2" class="col-3">医学销售主管</th>
              <th rowspan="2" class="col-4">柜台编码</th>
              <th rowspan="2" class="col-5">柜台名称</th>
              <th rowspan="2" class="col-6">Y1S1编码</th>
              <th rowspan="2" class="col-7">体验期<br/>开始时间</th>
              <th rowspan="2" class="col-8">体验期<br/>结束时间</th>
              <th colspan="6" class="col-9">上月数据</th>
              <th rowspan="2" class="col-16" v-text="(new Date().getMonth()+1)+'月分比'"></th>
            </tr>
            <tr>
              <th class="col-10">CF数</th>
              <th class="col-11">发展积分</th>
              <th class="col-12">非发展积分</th>
              <th class="col-13">分比</th>
              <th class="col-14">发展积分-分值</th>
              <th class="col-15">非发展积分-分值</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in oData">
              <td class="col-1" v-text="item.org_name"></td>
              <td class="col-2" v-text="item.province_name"></td>
              <td class="col-17" v-text="item.province_city_name"></td>
              <td class="col-3" v-text="item.salesman_name"></td>
              <td class="col-4" v-text="item.store_code"></td>
              <td class="col-5" v-text="item.store_name"></td>
              <td class="col-6" v-text="item.doctor_code"></td>
              <td class="col-7" v-text="getEndTime(item.period_start_time)"></td>
              <td class="col-8" v-text="getEndTime(item.period_end_time)"></td>
              <td class="col-10" v-text="item.a_trade_count"></td>
              <td class="col-11" v-text="parseFloat(item.a_trade_money).toFixed(3)"></td>
              <td class="col-12" v-text="parseFloat(item.t_trade_money).toFixed(3)"></td>
              <td class="col-13" v-text="parseFloat(item.proportion).toFixed(3)"></td>
              <td class="col-14" v-text="parseFloat(item.a_money).toFixed(3)"></td>
              <td class="col-15" v-text="parseFloat(item.t_money).toFixed(3)"></td>
              <td class="col-16" v-text="parseFloat(item.next_proportion).toFixed(3)"></td>
            </tr>
          </tbody>
        </table>
      </el-scrollbar>
      <pageBar :total="total" :lastPage="lastPage" @setPage="setPage"></pageBar>
    </div>

    <div class="listMain" v-if="oShow.pointReport">
      <el-scrollbar>
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <thead>
            <tr>
              <th rowspan="2" class="col-1">大区</th>
              <th rowspan="2" class="col-2">省区</th>
              <th rowspan="2" class="col-18">地区</th>
              <th rowspan="2" class="col-3">医学销售主管</th>
              <th rowspan="2" class="col-4">柜台编码</th>
              <th rowspan="2" class="col-5">柜台名称</th>
              <th rowspan="2" class="col-6">Y1S1编码</th>
              <th rowspan="2" class="col-7">体验期<br/>开始时间</th>
              <th rowspan="2" class="col-8">体验期<br/>结束时间</th>
              <th rowspan="2" class="col-9">CF数</th>
              <th rowspan="2" class="col-10">发展积分</th>
              <th colspan="6" class="col-11">非发展积分</th>
            </tr>
            <tr>
              <th class="col-12">专柜</th>
              <th class="col-13">微商城</th>
              <th class="col-14">天猫</th>
              <th class="col-15">总计</th>
              <th class="col-16">分比</th>
              <th class="col-17">非发展积分—分值</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in oData">
              <td class="col-1" v-text="item.org_name"></td>
              <td class="col-2" v-text="item.province_name"></td>
              <td class="col-18" v-text="item.province_city_name"></td>
              <td class="col-3" v-text="item.salesman_name"></td>
              <td class="col-4" v-text="item.store_code"></td>
              <td class="col-5" v-text="item.store_name"></td>
              <td class="col-6" v-text="item.doctor_code"></td>
              <td class="col-7" v-text="getEndTime(item.period_start_time)"></td>
              <td class="col-8" v-text="getEndTime(item.period_end_time)"></td>
              <td class="col-9" v-text="parseFloat(item.a_trade_count).toFixed(3)"></td>
              <td class="col-10" v-text="parseFloat(item.a_trade_money).toFixed(3)"></td>
              <td class="col-12" v-text="parseFloat(item.store_trade_money).toFixed(3)"></td>
              <td class="col-13" v-text="parseFloat(item.sc_trade_money).toFixed(3)"></td>
              <td class="col-14" v-text="parseFloat(item.tm_trade_money).toFixed(3)"></td>
              <td class="col-15" v-text="(parseFloat(item.store_trade_money) + parseFloat(item.sc_trade_money) + parseFloat(item.tm_trade_money)).toFixed(3)"></td>
              <td class="col-16" v-text="parseFloat(item.proportion).toFixed(3)"></td>
              <td class="col-17" v-text="parseFloat(item.t_money).toFixed(3)"></td>
              <!-- (parseFloat(item.store_trade_money) + parseFloat(item.sc_trade_money) + parseFloat(item.tm_trade_money)) -->
            </tr>
          </tbody>
        </table>
      </el-scrollbar>
      <pageBar :total="total" :lastPage="lastPage" @setPage="setPage"></pageBar>
    </div>

    <div class="listMain" v-if="oShow.gradeStatistics">
      <el-scrollbar>
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <thead>
            <tr>
              <th rowspan="2" class="col-1">大区</th>
              <th rowspan="2" class="col-2">省区</th>
              <th rowspan="2" class="col-22">地区</th>
              <th rowspan="2" class="col-3">医学销售主管</th>
              <th rowspan="2" class="col-4">柜台编码</th>
              <th rowspan="2" class="col-5">柜台名称</th>
              <th rowspan="2" class="col-6">Y1S1编码</th>
              <th rowspan="2" class="col-7">体验期<br/>开始时间</th>
              <th rowspan="2" class="col-8">体验期<br/>结束时间</th>
              <th colspan="12" class="col-9">
                {{oParameter.year+'年'}}
              </th>
            </tr>
            <tr>
              <th class="col-10">1月</th>
              <th class="col-11">2月</th>
              <th class="col-12">3月</th>
              <th class="col-13">4月</th>
              <th class="col-14">5月</th>
              <th class="col-15">6月</th>
              <th class="col-16">7月</th>
              <th class="col-17">8月</th>
              <th class="col-18">9月</th>
              <th class="col-19">10月</th>
              <th class="col-20">11月</th>
              <th class="col-21">12月</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in oData">
              <td class="col-1" v-text="item.org_name"></td>
              <td class="col-2" v-text="item.province_name"></td>
              <td class="col-22" v-text="item.province_city_name"></td>
              <td class="col-3" v-text="item.salesman_name"></td>
              <td class="col-4" v-text="item.store_code"></td>
              <td class="col-5" v-text="item.store_name"></td>
              <td class="col-6" v-text="item.doctor_code"></td>
              <td class="col-7" v-text="getEndTime(item.period_start_time)"></td>
              <td class="col-8" v-text="getEndTime(item.period_end_time)"></td>
              <td  v-for="num in 12">
                <span v-for="json in item.list"  v-if="(json.year == oParameter.year) && (parseInt(json.month) == num)">{{parseFloat(json.proportion).toFixed(2)}}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </el-scrollbar>
      <pageBar :total="total" :lastPage="lastPage" @setPage="setPage"></pageBar>
    </div>

    <div class="listMain" v-if="oShow.gradeReport">
      <el-scrollbar>
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th class="col-1">大区</th>
            <th class="col-2">省区</th>
            <th class="col-8">地区</th>
            <th class="col-3">医学销售主管</th>
            <th class="col-4">体验期数量</th>
            <th class="col-5">基础期数量</th>
            <th class="col-6">正式期一级数量</th>
            <th class="col-7">正式期二级数量</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in oData">
            <td class="col-1" v-text="item.org_name"></td>
            <td class="col-2" v-text="item.province_name"></td>
            <td class="col-8" v-text="item.province_city_name"></td>
            <td class="col-3" v-text="item.salesman_name"></td>
            <td class="col-4" v-text="item.peried_count"></td>
            <td class="col-5" v-text="item.level_count_1"></td>
            <td class="col-6" v-text="item.level_count_2"></td>
            <td class="col-7" v-text="item.level_count_3"></td>
          </tr>
        </tbody>
      </table>
      </el-scrollbar>
      <pageBar :total="total" :lastPage="lastPage" @setPage="setPage"></pageBar>
    </div>

    <div class="listMain" v-if="oShow.gradeDoctors">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th class="col-1">Y1S1工号</th>
            <th class="col-2">所属区域</th>
            <th class="col-3">绑定信息(柜台号+版本号)</th>
            <th class="col-4">Y1S1等级</th>
            <th class="col-5">绑定会员</th>
            <th class="col-6">订单销售& 积分</th>
            <th class="col-7">状态</th>
            <th class="col-9">加入时间</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in oData" v-if="(headCondition.doctorStatus == item.status || headCondition.doctorStatus == 2)&&(headCondition.doctorLevel == item.level || headCondition.doctorLevel == 5)">
            <td class="col-1" v-text="item.doctor_no"></td>
            <td class="col-2">{{item.province_name}}-{{item.city_name}}-{{item.region_name}}</td>
            <td class="col-3" v-text="item.bind_info"></td>
            <td class="col-4" v-text="item.level_name"></td>
            <td class="col-5" v-text="item.bind_account_count"></td>
            <td class="col-6">{{item.order_count}}单/{{parseFloat(item.total_money)}}</td>
            <td class="col-7" v-text="parseInt(item.status)?'正常':'冻结中'"></td>
            <td class="col-9" v-text="getEndTime(item.add_time)"></td>
          </tr>
        </tbody>
      </table>
      <pageBar :total="total" :lastPage="lastPage" @setPage="setPage"></pageBar>
    </div>

    <relation v-if="isRelation" :relationAll="relationAll" :id="doctor_id" @setShow="setShow"></relation>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
import pageBar from '@/components/pageBar'
import relation from '@/components/relation'

export default {
  data () {
    return {
      oData:[],
      userType:0,
      orderType:0,
      oParameter:null,
      total:0,
      lastPage:0,
      goodType:0,
      isRelation:false,
      relationAll:false,
      doctor_id:'',
      messageInfo:{
        title:'',
        content:'',
        type:1,
        user_type:[],
        is_effect:1
      },
      messageUserType:false
    }
  },
  props: ['oShow','account_list','upUser','orgId','lastPage2','total2','yearVlue','monthIndex'],
  updated(){},
  created(){
    this.getParameter();
    this.getListData();
  },
  mounted(){},
  computed:{
    ...mapState(['headCondition','isDetails','isTabHead','oParameter2','oPoint','isIndex','indexData','isIndex','isEditMeg','isNewEditMeg'])
  },
  watch: {
    orgId(){
      this.adminList(this.orgId);
    },
    upUser(){
      this.adminList(this.orgId);
    },
    oParameter2(){
      this.oParameter = this.oParameter2;
      this.getListData();
    },
    isIndex(){
      if(!this.isIndex){
        this.rulesList();
      }
    },
    yearVlue(){
      this.getUserType();
      this.userOrder();
    },
    monthIndex(){
      this.getUserType();
      this.userOrder();
    },
    'messageInfo.user_type'(str1,str2){
      if(this.messageInfo.user_type.length==4){
        this.messageUserType=true;
      }else{
        this.messageUserType=false;
      }
    },
    'oParameter.page'(str1,str2){
      this.getListData();
    },
    'oShow.setIndex'(str1,str2){
      // if(str2){
      //   console.log(123)
      // }
    },
    'oShow.db_integral'(str1,str2){
      if(str1){
        this.getUserType();
        this.userOrder();
      }
    },
    'oShow.wy_integral'(str1,str2){
      if(str1){
        this.getUserType();
        this.userOrder();
      }
    },
    'oShow.xs_integral'(str1,str2){
      if(str1){
        this.getUserType();
        this.userOrder();
      }
    },
    'oShow.ys_integral'(str1,str2){
      if(str1){
        this.getUserType();
        this.userOrder();
      }
    },
    'oPoint.code'(str1,str2){
      if(this.oPoint.code == 1){
        if(this.oPoint.type == 1){
          this.setPoint({code:0});
          this.rulesDelete(this.oPoint.parameter);
        }else if(this.oPoint.type == 2){
          this.setPoint({code:0});
          this.userStatus(this.oPoint.parameter.id,this.oPoint.parameter.status);
        }else if(this.oPoint.type == 3){
          this.setPoint({code:0});
          this.adminStatus(this.oPoint.parameter.id,this.oPoint.parameter.status);
        }else if(this.oPoint.type == 4){
          this.setPoint({code:0});
          this.adminDelete(this.oPoint.parameter);
        }else if(this.oPoint.type == 7){
          this.setPoint({code:0});
          this.remakePassword(this.oPoint.parameter);
        }else if(this.oPoint.type == 8){
          this.setPoint({code:0});
          this.newsUpdatestatus(this.oPoint.parameter);
        }else if(this.oPoint.type == 9){
          this.setPoint({code:0});
          this.newsDelete(this.oPoint.parameter);
        }
      }
    }
  },
  methods: {
    ...mapMutations(['enterDetails','setParameter','setPoint','setIndexData','setEditMeg','setEditMeg2']),
    sortUserList(num){
      this.oParameter = {};
      this.oParameter.page = 1;
      this.oParameter.is_sort = (num == 1)?2:1;
      let str = this.$route.path+'?';
      for(let key in this.oParameter){
        str +=key+'='+this.oParameter[key]+'&'
      }
      str = str.slice(0,-1);
      this.$router.push(str)
      this.setParameter(this.oParameter)
    },
    getUserTypeTxt(str){
      let str2 = '';
      let arr = str.split(',');
      if(arr.length == 4){
        str2 = '所有';
      }else{
        for(let i=0;i<arr.length;i++){

          let str3 = '';
          if(arr[i] == 1){
            str3 = '医生';
          }else if(arr[i] == 2){
            str3 = '销售';
          }else if(arr[i] == 3){
            str3 = '微医';
          }else if(arr[i] == 4){
            str3 = '销售代表';
          }

          str2 +=str3+','
        }

        str2 = str2.substring(0,str2.length-1);
      }

      return str2;
    },
    checkMessage(){
      console.log(this.messageUserType)
      if(this.messageUserType){
        this.messageInfo.user_type=[];
      }else{
        ['1','2','3','4'].forEach((item)=>{
          if(this.messageInfo.user_type.indexOf(item)==-1){
            this.messageInfo.user_type.push(item)
          }
        })
      }
    },
    deleteMessage(id,n){
      let str = '您确定要删除吗？';
      this.setPoint({type:n,pop:true,closeBtn:true,pointWord:str,parameter:id});
    },
    effectMessage(obj,n){
      let str = '您确定要更改状态吗？';
      this.setPoint({type:n,pop:true,closeBtn:true,pointWord:str,parameter:obj});
    },
    editMessage(obj){
      this.messageInfo = {
        title:obj.title,
        content:obj.content,
        type:obj.type,
        user_type:obj.user_type.split(','),
        is_effect:obj.is_effect,
        id:obj.id
      }
      this.setEditMeg(true);
    },
    closeMessage(){
      this.setEditMeg(false);
      this.setEditMeg2(false);
      this.messageInfo = {
        title:'',
        content:'',
        type:1,
        user_type:[],
        is_effect:1
      }
    },
    confirmMessage(){
      if(this.messageInfo.title){
        if(this.messageInfo.user_type.length>0){
          if(this.messageInfo.content){
            if(this.isNewEditMeg){
              this.createNews();
            }else if(this.isEditMeg){
              this.newsUpdate();
            }
          }else{
            let str = '请输入内容'
            this.setPoint({type:0,pop:true,pointWord:str});
          }
        }else{
          let str = '请选择类别'
          this.setPoint({type:0,pop:true,pointWord:str});
        }

      }else{
        let str = '请输入标题'
        this.setPoint({type:0,pop:true,pointWord:str});
      }
    },
    getListData(){
      if(this.oShow.doctorOrder||this.oShow.TmallOrder){
        this.getOrderType();
        if(this.oParameter.start_date&&this.oParameter.end_date){
          this.orderList();
        }
      }else if(this.oShow.cooperativeDoctor||this.oShow.saleser||this.oShow.microBusiness||this.oShow.salesRepresentative){
        this.getUserType();
        this.userList();
      }else if(this.oShow.memberManagement){
        this.accountList();
      }else if(this.oShow.organizationManagement){
        this.adminList(this.orgId);
      }else if(this.oShow.proposalGoods){
        this.getGoodType();
        this.rulesList(); 
      }else if(this.oShow.messageManagement){
        this.newsList();
      }else if(this.oShow.distributionReport || this.oShow.pointReport){
        this.reportList();
      }else if(this.oShow.gradeStatistics){
        this.reportPeriod();
      }else if(this.oShow.gradeReport){
        this.reportLevel();
      }else if(this.oShow.ys_integral || this.oShow.xs_integral || this.oShow.wy_integral || this.oShow.db_integral){
        this.getParameter();
        this.getUserType();
        this.userOrder();
      }else if(this.oShow.gradeDoctors){
        this.userType = 0;
        this.userList();
      }
    },
    setIndexFn(e,n){
      let px = 60;
      let oTb = e.target.parentNode.parentNode.parentNode;
      let oTr = e.target.parentNode.parentNode;
      let _index = oTr.getAttribute('index');

      if(n>0){
        if(_index == (oTb.children.length-1)){
          this.setPoint({type:0,pop:true,pointWord:'已经是最后一个了'});
        }else{
          move();
        }
      }else if(n<0){
        if(_index == 0){
          this.setPoint({type:0,pop:true,pointWord:'已经是第一个了'});
        }else{
          move();
        }
      }


      function move(){
        let _index_b = oTr.getAttribute('index_b');
        let _indexNext = parseInt(_index)+n;
        let oTrNext = null;
        for(let i=0;i<oTb.children.length;i++){
          let _index_ = parseInt(oTb.children[i].getAttribute('index'));
          if(_index_ == _indexNext){
            oTrNext = oTb.children[i];
            break;
          }
        }

        let _index_bNext = oTrNext.getAttribute('index_b');
        let _px = (_indexNext-parseInt(_index_b))*px;
        let _pxNext = (parseInt(_index)-parseInt(_index_bNext))*px;
        oTr.setAttribute('index',_indexNext);
        oTrNext.setAttribute('index',_index);

        if(_indexNext==0){
          e.target.classList.add('stop');
          oTrNext.children[2].children[0].classList.remove('stop');
        }else if(_indexNext==(oTb.children.length-1)){
          e.target.classList.add('stop');
          oTrNext.children[2].children[1].classList.remove('stop');
        }else{
          if(_index == 0 ){
            e.target.parentNode.children[0].classList.remove('stop');
            oTrNext.children[2].children[0].classList.add('stop');
          }else if(_index==(oTb.children.length-1)){
            e.target.parentNode.children[1].classList.remove('stop');
            oTrNext.children[2].children[1].classList.add('stop');
          }
        }

        oTr.style = 'transform: translateY('+_px+'px);';
        oTrNext.style = 'transform: translateY('+_pxNext+'px);';
      }
    },
    resetPassword(id,n){
      let str = '您确定要重置密码吗？';
      this.setPoint({type:n,pop:true,closeBtn:true,pointWord:str,parameter:id});
    },
    setShow(){
      this.isRelation = false;
      this.relationAll = false;
    },
    setRelation(str){
      this.doctor_id = str;
      this.isRelation = true;
    },
    setRelation2(){
      this.isRelation = true;
      this.relationAll = true;
    },
    statusBtn(id,b,n){
      let str = ''
      if(b){
        str = '您确定要解冻吗？';
      }else{
        str = '您确定要冻结吗？';
      }

      let obj = {
        id:id,
        status:b ? 1 : 0
      }
      this.setPoint({type:n,pop:true,closeBtn:true,pointWord:str,parameter:obj});
    },
    xgzl(id){
      this.$emit('xgzl',id);
    },
    setPage(obj){
      this.getParameter();

      if(this.oShow.ys_personnel || this.oShow.xs_personnel || this.oShow.wy_personnel){
        this.$emit('setPage');
      }
    },
    showInfo(e){
      let obj = e.target;
      let oI = obj.children[0];
      let oLi = obj.parentNode.parentNode.parentNode.parentNode.parentNode;
      let oDiv = oLi.children[2];

      let n = oDiv.children[0].children[1].children.length;
      let _h = 47 + n*62;

      if(obj.classList.toggle('active')){
        oDiv.style.height = _h + 'px';
        oDiv.classList.add("show");
      }else{
        oDiv.style.height = '0px';
        oDiv.classList.remove("show");
      }
    },
    goDetails(id) {
      if(id){
        let str = '';

        if(this.oShow.cooperativeDoctor || this.oShow.saleser || this.oShow.microBusiness || this.oShow.salesRepresentative){
          str = `${this.$route.path}/${id}?page=1&is_sort=1`;
        }else{
          str = `${this.$route.path}/${id}?page=1`;
        }

        this.$router.push({path:str});
        this.enterDetails(true);
      }else{
        this.$router.push({path:'/404'});
      }
    },
    getOrderType(){
      if(this.oShow.doctorOrder){this.orderType=1}
      if(this.oShow.mallOrder){this.orderType=2}
      if(this.oShow.TmallOrder){this.orderType=3}
    },
    getUserType(){
      if(this.oShow.cooperativeDoctor || this.oShow.ys_integral){this.userType=0}
      if(this.oShow.saleser || this.oShow.xs_integral){this.userType=1}
      if(this.oShow.microBusiness || this.oShow.wy_integral){this.userType=2}
      if(this.oShow.salesRepresentative || this.oShow.db_integral){this.userType=3}
    },
    getGoodType(){

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


      if(this.getBoolean(arr)){this.goodType=0;}
      if(this.getBoolean(arr3)){this.goodType=2;}
      if(this.getBoolean(arr30)){this.goodType=3;}
      if(this.getBoolean(arr4)){this.goodType=4;}
      if(this.getBoolean(arr40)){this.goodType=5;}
    }
  },
  components: { 
    pageBar,
    relation
  }
}
</script>


<style scoped>
.listMain{margin-top: 29px; overflow: hidden;}
.listMain ul{}
.listMain ul li{border:1px solid #eeeeee; margin-bottom: 18px;box-shadow:0px 2px 10px #ebeef3;}
.listMain ul li .listH{height: 49px; background:#f3f7fa; line-height: 49px; border-bottom:1px solid #eee;overflow: hidden; color: #9395a4; padding-left: 26px; }
.listMain ul li .listH>*{display: inline-block; margin-right: 58px;}
.listMain ul li table{margin: 0px; padding: 0px;}
.listMain ul li table .left,.listMain ul li table .right{display: inline-block;}
.listMain ul li table .left{margin-right: 6px;}

.listMain ul li .listC{}
.listMain ul li .listC thead th{height: 44px; overflow: hidden;border-bottom:1px solid #eee; font-weight: normal; font-size: 12px; color: #9498a4;  }
.listMain ul li .listC tbody td{height: 86px; overflow: hidden; font-size: 14px; color: #696a7c;}
.listMain ul li .listC tbody td .view{width: 92px; height: 28px; text-align: center; line-height: 28px; margin:0px auto; background: #9193aa; border-radius: 14px; display: block; color: #fff; font-size: 14px;}
.listMain ul li .listC tbody td .view.active{background: #da0032;}

.listMain ul li .listC tbody td .view:before{width: 8px; height: 6px; background-position: -179px -96px;margin-right: 4px; transform: rotate(0deg); transition: transform .25s; content:"";}
.listMain ul li .listC tbody td .view.active:before{transform: rotate(180deg);}

.listMain ul li .listC tbody td .view:after{content:"查看详情";}
.listMain ul li .listC tbody td .view.active:after{content:"收起详情";}

.listMain ul li .listC .col-1{padding-left:38px;}
.listMain ul li .listC .col-6{width: 270px;}
.listMain ul li .listC .col-7{width: 80px;}

.mallOrder .listMain ul li .listC .col-1{width: 240px;}
.mallOrder .listMain ul li .listC .col-6{width: auto;}

.listMain ul li .listC2{height: 0px; overflow: hidden; transition: height .5s; background: #f8f9fb;}
.listMain ul li .listC2.show{height:auto; transition: height .5s; border-top:1px solid #eee; }
.listMain ul li .listC2 thead th{height: 46px; overflow: hidden; border-bottom:1px solid #eee; font-size: 12px; color: #9796a4; font-weight: normal;}

.listMain ul li .listC2 tbody td{height: 62px;border-top:1px solid #eee;font-size: 14px; color: #676a7d;}
.listMain ul li .listC2 tbody tr:first-child>td{border-top:0px;}
.listMain ul li .listC2 tbody tr td:first-child{border-top:0px;}
.listMain ul li .listC2 .col-1{width: 42px; text-indent: 27px;}
.listMain ul li .listC2 .col-2{padding-left: 19px;}


.proposalProduct table thead th{height: 44px; overflow: hidden;border-bottom:1px solid #eee; font-weight: normal; font-size: 12px; color: #9498a4;background: #f3f7fa; text-align:left; padding: 0px 8px;}
.proposalProduct table tbody td{height: 86px; overflow: hidden; font-size: 14px; color: #696a7c; border-bottom:1px solid #eee; padding: 0px 8px;}
.proposalProduct table tbody td.col-7 a{width: 74px; height: 26px; border:1px solid #696a7c; color: #696a7c; display: inline-block; text-align: center; line-height: 26px; border-radius: 13px; float: left; margin-right: 16px; /*margin-top: 11px;*/}
.proposalProduct table tbody td.col-1{padding-left: 30px;}
.proposalProduct table thead th.col-1{padding-left: 30px;}

.indexWrap .listMain{margin:0px 54px; margin-top: 20px;}
.indexWrap .listMain td{height: 60px;line-height: 60px;}
.indexWrap .listMain .col-1{width: 15%;}
.indexWrap .listMain .col-2{width: 70%;}
.indexWrap .listMain .col-3{width: 15%;}
.indexTr{transition: transform .6s}
.indexNext{transform: rotate(180deg); margin-top: 6px;}

.distributionOrder .listMain table .col-3{width: 170px;}
.distributionOrder .listMain>ul>li>table .col-6{width: 290px;}
.TmallOrder .listMain table .col-3{width: 170px;}

.proposalProduct .listMain table .col-3{width: 150px;}
.proposalProduct .listMain table .col-4{width: 150px;}



.notProposalProduct table thead th{height: 44px; overflow: hidden;border-bottom:1px solid #eee; font-weight: normal; font-size: 12px; color: #9498a4;background: #f3f7fa; text-align:left; padding: 0px 8px;}
.notProposalProduct table tbody td{height: 86px; overflow: hidden; font-size: 14px; color: #696a7c; border-bottom:1px solid #eee; padding: 0px 8px;}
.notProposalProduct table tbody td.col-7 a{width: 74px; height: 26px; border:1px solid #696a7c; color: #696a7c; display: inline-block; text-align: center; line-height: 26px; border-radius: 13px; float: left; margin-right: 16px; /*margin-top: 11px;*/}
.notProposalProduct table tbody td.col-1{padding-left: 30px;}
.notProposalProduct table thead th.col-1{padding-left: 30px;}


.cooperativeDoctor table thead th{height: 44px; overflow: hidden;border-bottom:1px solid #eee; font-weight: normal; font-size: 12px; color: #9498a4;background: #f3f7fa; text-align:left; padding: 0px 8px;}
.cooperativeDoctor table tbody td{height: 86px; overflow: hidden; font-size: 14px; color: #696a7c; border-bottom:1px solid #eee; padding: 0px 8px;}
.cooperativeDoctor table tbody td.col-8{width: 262px}
.cooperativeDoctor table tbody td.col-8 a{width: 74px; height: 26px; border:1px solid #696a7c; color: #696a7c; display: inline-block; text-align: center; line-height: 26px; border-radius: 13px; float: left; margin-right: 16px; /*margin-top: 11px;*/}
.cooperativeDoctor table tbody td.col-8 a:last-child{margin-right: 0px;}
.cooperativeDoctor table tbody td.col-1{padding-left: 30px;}
.cooperativeDoctor table thead th.col-1{padding-left: 30px;}


.saleser table thead th{height: 44px; overflow: hidden;border-bottom:1px solid #eee; font-weight: normal; font-size: 12px; color: #9498a4;background: #f3f7fa; text-align:left; padding: 0px 8px;}
.saleser table tbody td{height: 86px; overflow: hidden; font-size: 14px; color: #696a7c; border-bottom:1px solid #eee; padding: 0px 8px;}
.saleser table tbody td.col-8 a{width: 74px; height: 26px; border:1px solid #696a7c; color: #696a7c; display: inline-block; text-align: center; line-height: 26px; border-radius: 13px; float: left; margin-right: 16px; /*margin-top: 11px;*/}
.saleser table tbody td.col-8 a:last-child{margin-right: 0px;}
.saleser table tbody td.col-1{padding-left: 30px;}
.saleser table thead th.col-1{padding-left: 30px;}


.microBusiness table thead th{height: 44px; overflow: hidden;border-bottom:1px solid #eee; font-weight: normal; font-size: 12px; color: #9498a4;background: #f3f7fa; text-align:left; padding: 0px 8px;}
.microBusiness table tbody td{height: 86px; overflow: hidden; font-size: 14px; color: #696a7c; border-bottom:1px solid #eee; padding: 0px 8px;}
.microBusiness table tbody td.col-8 a{width: 74px; height: 26px; border:1px solid #696a7c; color: #696a7c; display: inline-block; text-align: center; line-height: 26px; border-radius: 13px; float: left; margin-right: 16px; /*margin-top: 11px;*/}
.microBusiness table tbody td.col-8 a:last-child{margin-right: 0px;}
.microBusiness table tbody td.col-1{padding-left: 30px;}
.microBusiness table thead th.col-1{padding-left: 30px;}


.salesRepresentative table thead th{height: 44px; overflow: hidden;border-bottom:1px solid #eee; font-weight: normal; font-size: 12px; color: #9498a4;background: #f3f7fa; text-align:left; padding: 0px 8px;}
.salesRepresentative table tbody td{height: 86px; overflow: hidden; font-size: 14px; color: #696a7c; border-bottom:1px solid #eee; padding: 0px 8px;}
.salesRepresentative table tbody td.col-8 a{width: 74px; height: 26px; border:1px solid #696a7c; color: #696a7c; display: inline-block; text-align: center; line-height: 26px; border-radius: 13px; float: left; margin-right: 16px; /*margin-top: 11px;*/}
.salesRepresentative table tbody td.col-8 a:last-child{margin-right: 0px;}
.salesRepresentative table tbody td.col-1{padding-left: 30px;}
.salesRepresentative table thead th.col-1{padding-left: 30px;}



.cooperativeDoctor .personnelDetails table thead th.col-4 a{color: #9495a7;}
.cooperativeDoctor .personnelDetails table thead th.col-4 a i{margin-left: 10px;}


.saleser .personnelDetails table thead th.col-4 a{color: #9495a7;}
.saleser .personnelDetails table thead th.col-4 a i{margin-left: 10px;}


.microBusiness .personnelDetails table thead th.col-4 a{color: #9495a7;}
.microBusiness .personnelDetails table thead th.col-4 a i{margin-left: 10px;}

.salesRepresentative .personnelDetails table thead th.col-4 a{color: #9495a7;}
.salesRepresentative .personnelDetails table thead th.col-4 a i{margin-left: 10px;}


.memberManagement table thead th{height: 44px; overflow: hidden;border-bottom:1px solid #eee; font-weight: normal; font-size: 12px; color: #9498a4;background: #f3f7fa; text-align:left; padding: 0px 8px;}
.memberManagement table tbody td{height: 86px; overflow: hidden; font-size: 14px; color: #696a7c; border-bottom:1px solid #eee; padding: 0px 8px;}
.memberManagement table tbody td.col-4 a{width: 74px; height: 26px; border:1px solid #696a7c; color: #696a7c; display: inline-block; text-align: center; line-height: 26px; border-radius: 13px; float: left; margin-right: 16px; /*margin-top: 11px;*/}
.memberManagement table tbody td.col-1{padding-left: 30px;}
.memberManagement table thead th.col-1{padding-left: 30px;}


.organizationManagement table thead th{height: 44px; overflow: hidden;border-bottom:1px solid #eee; font-weight: normal; font-size: 12px; color: #9498a4;background: #f3f7fa; text-align:left; padding: 0px 8px;}
.organizationManagement table tbody td{height: 86px; overflow: hidden; font-size: 14px; color: #696a7c; border-bottom:1px solid #eee; padding: 0px 8px;}
.organizationManagement table tbody td.col-6 a{width: 74px; height: 26px; border:1px solid #696a7c; color: #696a7c; display: inline-block; text-align: center; line-height: 26px; border-radius: 13px; float: left; margin-right: 16px; /*margin-top: 11px;*/}
.organizationManagement table tbody td.col-1{padding-left: 30px;}
.organizationManagement table thead th.col-1{padding-left: 30px;}

.distributionConfiguration .listMain{}
.distributionConfiguration .listMain .col-2{width: 50px;}
.distributionConfiguration .listMain .col-3{max-width: 120px; overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
.distributionConfiguration .listMain .col-4{max-width: 120px; overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}


.messageManagement table thead th{height: 44px; overflow: hidden;border-bottom:1px solid #eee; font-weight: normal; font-size: 12px; color: #9498a4;background: #f3f7fa; text-align:left; padding: 0px 8px;}
.messageManagement table tbody td{height: 86px; overflow: hidden; font-size: 14px; color: #696a7c; border-bottom:1px solid #eee; padding: 0px 8px;}
.messageManagement table tbody td.col-5 a{width: 74px; height: 26px; border:1px solid #696a7c; color: #696a7c; display: inline-block; text-align: center; line-height: 26px; border-radius: 13px; float: left; margin-right: 16px;}
.messageManagement table tbody td.col-1{padding-left: 30px;}
.messageManagement table thead th.col-1{padding-left: 30px;}
.popBj{background: #000; position: fixed; width: 100%; height: 100%; top:0px;left: 0px;opacity: 0.7;}
.editMessage{width: 600px; height: 512px; background: #fff;border-radius: 15px;left: 50%; top:50%; position: fixed; margin-top: -256px; margin-left: -300px;animation: fk 0.6s ease-in forwards 0s 1 normal;}
.editMessage .messageHead{}
.editMessage .messageHead{height: 46px; line-height: 46px; border-bottom: 1px solid #eeeeee; padding-left: 20px; overflow: hidden; font-size: 18px;}
.editMessage .messageHead a{display:block; float: right; width: 40px; height: 40px; text-align: center; line-height: 40px; margin-right: 10px;}
.editMessage .messageHead a:before{width: 15px; height: 15px; background-position: -85px -96px;content:"";}
.messageCon{padding-top: 20px;}
.editMessage ul li{box-shadow:none; border: 0px; font-size: 14px; line-height: 32px; overflow: hidden;}
.editMessage ul li>*{float: left;}
.editMessage ul li>span{width: 100px; text-align: right;}
.editMessage ul li>div{width: 440px;}
.editMessage ul li label{margin-right: 10px;}
.messageFoot{text-align: center; border-top: 1px solid #eeeeee; height: 70px; box-sizing: border-box; padding-top: 20px; }
.messageFoot a{width: 108px; height: 30px; line-height: 30px; text-align: center; border-radius: 18px; font-weight: bold; font-size: 16px;  display: inline-block;}
.messageFoot a.qr{background: #dc0034; border:1px solid #dc0034; color: #fff; margin-right: 22px;}
.messageFoot a.qx{ border:1px solid #686a7c; color: #686a7c;}

.distributionReport table{border-left: 1px solid #999;text-align: center; width: 1500px;}
.distributionReport table thead th{height: 44px; overflow: hidden;border:1px solid #999; font-weight: normal; font-size: 12px; color: #67697e;background: #f3f7fa; padding: 0px 8px; border-left: 0px;}
.distributionReport table thead th.col-9{ border-bottom: 0px;}
.distributionReport table tbody td{min-height: 44px; height:auto;  overflow: hidden; font-size: 14px; color: #696a7c; border:1px solid #999; border-left: 0px; border-top: 0; padding: 4px 8px;}


.pointReport table{border-left: 1px solid #999;text-align: center; width: 1600px;}
.pointReport table thead th{height: 44px; overflow: hidden;border:1px solid #999; font-weight: normal; font-size: 12px; color: #67697e;background: #f3f7fa; padding: 0px 8px; border-left: 0px;}
.pointReport table thead th.col-11{border-bottom: 0px;}
.pointReport table tbody td{min-height: 44px; height:auto;  overflow: hidden; font-size: 14px; color: #696a7c; border:1px solid #999; border-left: 0px; border-top: 0; padding: 4px 8px;}


.gradeStatistics table{border-left: 1px solid #999;text-align: center; width: 1500px;}
.gradeStatistics table thead th{height: 44px; overflow: hidden;border:1px solid #999; font-weight: normal; font-size: 12px; color: #67697e;background: #f3f7fa;padding: 0px 8px; border-left: 0px;}
.gradeStatistics table thead th.col-9{border-bottom: 0px;}
.gradeStatistics table tbody td{min-height: 44px; height:auto;  overflow: hidden; font-size: 14px; color: #696a7c; border:1px solid #999; border-left: 0px; border-top: 0; padding: 4px 8px;}


.gradeReport table{border-left: 1px solid #999; text-align: center;}
.gradeReport table thead th{height: 44px; overflow: hidden;border:1px solid #999; font-weight: normal; font-size: 12px; color: #67697e;background: #f3f7fa;padding: 0px 8px; border-left: 0px;}
.gradeReport table tbody td{min-height: 44px; height:auto;  overflow: hidden; font-size: 14px; color: #696a7c; border:1px solid #999; border-left: 0px; border-top: 0; padding: 4px 8px;}


.gradeDoctors table{border-left: 1px solid #999; text-align: center;}
.gradeDoctors table thead th{height: 44px; overflow: hidden;border:1px solid #999; font-weight: normal; font-size: 12px; color: #67697e;background: #f3f7fa;padding: 0px 8px; border-left: 0px;}
.gradeDoctors table tbody td{min-height: 44px; height:auto;  overflow: hidden; font-size: 14px; color: #696a7c; border:1px solid #999; border-left: 0px; border-top: 0; padding: 4px 8px;}
</style>

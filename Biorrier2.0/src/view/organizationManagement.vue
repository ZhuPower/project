<template>
  <div class="organizationManagement" v-if="((aMenuId.indexOf(11)>-1)?true:false)">
    <div class="organizationLeft">
        <ul>
            <li class="active">
                <i class="icon_active"></i>
                <span>
                  部门
                  <div class="czBox">
                    <a href="javascript:;" @click="cjzzBtn(0,0)" title="创建子级"><i class="icons icon_31"></i></a>
                  </div>
                </span>
                <ul>
                    <li v-for="item in orgList" v-if="item.level=='0'" :class="{active:(nIndex == item.id)}">
                        <span><i class="icons icon_30"></i>
                          <a href="javascript:;" @click="showInfo(item.id,(item.child[0]?item.child[0].id:''))">{{item.name}}</a>
                          <div class="czBox">
                            <a href="javascript:;" @click="xgzzBtn(0,0,item.name,item.id)" title="编辑组织"><i class="icons icon_21"></i></a>
                            <a href="javascript:;" @click="cjzzBtn(1,item.id)" title="创建子级"><i class="icons icon_31"></i></a>
                            <a href="javascript:;" @click="deleteBtn(item.id,5)" title="删除组织"><i class="icons icon_38"></i></a>
                          </div>
                        </span>
                        <ul v-if="item.child.length>0" :style="{height:((nIndex == item.id)?(item.child.length*36+'px'):'0px')}">
                            <li :class="{active:nIndex2 == (item.id+'-'+obj.id)}" v-for="obj in item.child">
                                <span>
                                  <a href="javascript:;" @click="showInfo2(item.id,obj.id)">{{obj.name}}</a>
                                  <div class="czBox">
                                    <a href="javascript:;" @click="xgzzBtn(1,item.id,obj.name,obj.id)" title="编辑组织"><i class="icons icon_21"></i></a>
                                    <a href="javascript:;" @click="deleteBtn(obj.id,5)" title="删除组织"><i class="icons icon_38"></i></a>
                                  </div>
                                </span>

                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    <div class="organizationRight">
        <div class="organizationRightMain">
            <div class="organRH">
                <a href="javasceipt:;" @click="tjyhBtn()" class="xzgz"><i class="icons icon_16"></i>添加用户</a>
            </div>
            <listMain :oShow="oShow" :upUser="upUser" :orgId="orgId" @xgzl="xgzl"></listMain>
        </div>
    </div>
    <div class="popBj" v-if="popBj"></div>
    <div class="popWrap" v-if="cjzz ||cjyh">
      <div class="cjyh" v-if="cjyh">
        <h3>{{popTitle}} <a href="javascript:;" class="cloaeBtn icons_b" @click="closeBtn()"></a></h3>
        <ul>
          <li><span>名称：</span><el-input v-model="userJson.name" placeholder="请输入名称" autocomplete="new-password"></el-input></li>
          <li><span>密码：</span><el-input v-model="userJson.password" placeholder="请输入密码" autocomplete="new-password" show-password></el-input></li>
          <li v-if="!isXgzl"><span>手机号：</span><el-input v-model="userJson.mobile" placeholder="请输入手机号"></el-input></li>
          <li v-if="isXgzl"><span>手机号：</span><el-input v-model="userJson.mobile" placeholder="请输入手机号" :disabled="true"></el-input></li>
          <li><span>组织id：</span>
            <el-cascader 
              v-model="userJson.org"
              placeholder="请选择" 
              :options="orgArr">
            </el-cascader>
          </li>
          <li><span>角色id：</span>
            <el-select v-model="userJson.authority" placeholder="请选择">
              <el-option
                v-for="item in authorityArr"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </li>
        </ul>
        <div class="boxfoot">
          <a href="javascript:;" class="qr" @click="confirm()">确定</a>
          <a href="javascript:;" class="qx" @click="closeBtn()">取消</a>
        </div>
      </div>
      <div class="cjzz" v-if="cjzz">
        <h3>{{popTitle}} <a href="javascript:;" class="cloaeBtn icons_b" @click="closeBtn()"></a></h3>
        <ul>
          <li><span>组织名称：</span><el-input v-model="orgInfo.name" placeholder="请输入名称"></el-input></li>
          <li><span>等级：</span>
             <el-radio v-model="orgInfo.level" label="0">一级</el-radio>
             <el-radio v-model="orgInfo.level" label="1">二级</el-radio>
          </li>
          <li><span>父级id：</span><el-input v-model="orgInfo.parent_id" placeholder="请输入父级id"></el-input></li>
        </ul>
        <div class="boxfoot">
          <a href="javascript:;" class="qr" @click="confirm()">确定</a>
          <a href="javascript:;" class="qx" @click="closeBtn()">取消</a>
        </div>
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
      access_token:'',
      oShow:{
        organizationManagement:false
      },
      orgInfo:{
        name:'',
        level:'',
        parent_id:'',
        id:''
      },
      userJson:{
        name:'',
        password:'',
        mobile:'',
        is_effect:1,
        org:[],
        authority:'',
        id:''
      },
      orgList:[],
      popBj:false,
      cjyh:false,
      cjzz:false,
      popTitle:'',
      nIndex:0,
      nIndex2:'0-0',
      authorityArr:[],
      orgArr:[],
      upUser:false,
      orgId:1,
      isXgzl:false,
      oOrg:{}
    }
  },
  updated(){},
  created(){
     if(this.aMenuId.indexOf(11)<0){this.$router.push({path:'/404'});}
     this.fShow();
     this.getOrgList();
     this.getRoleList();
  },
  watch:{
    nIndex(){
      console.log(this.nIndex)
    },
    'oPoint.code'(str1,str2){
      if(this.oPoint.code == 1){
        if(this.oPoint.type == 5){
          this.setPoint({code:0});
          this.orgDelete(this.oPoint.parameter);
        }
      }
    }
  },
  computed:{
    ...mapState(['oPoint','aMenuId'])
  },
  methods:{
    ...mapMutations(['setPoint']),
    tjyhBtn(){
      this.popTitle = '创建用户';
      this.popBj= true;
      this.cjyh= true;
    },
    xgzl(obj){
      this.popTitle = '修改用户';
      this.userJson.id = obj.id;
      this.userJson.is_effect= obj.is_effect;
      this.userJson.name = obj.admin_name;
      this.userJson.mobile = obj.mobile;
      this.userJson.org = this.oOrg['org_'+obj.org] || obj.org;
      this.userJson.authority = obj.authority;
      this.isXgzl = true;
      this.popBj= true;
      this.cjyh= true;
    },
    cjzzBtn(str1,str2){
      this.popTitle = '创建组织';
      this.popBj= true;
      this.cjzz= true;
      this.orgInfo.level = str1+'';
      this.orgInfo.parent_id = str2;
    },
    xgzzBtn(str1,str2,str3,str4){
      this.popTitle = '修改组织';
      this.popBj= true;
      this.cjzz= true;
      this.orgInfo.name = str3
      this.orgInfo.level = str1+'';
      this.orgInfo.parent_id = str2;
      this.orgInfo.id= str4;
    },
    closeBtn(){
      this.isXgzl = false;
      this.popBj= false;
      this.cjzz= false;
      this.cjyh= false;
    },
    confirm(){
      if(this.popTitle == '创建组织'){
        this.orgCreate();
      }else if(this.popTitle == '修改组织'){
        this.orgUpdate();
      }else if(this.popTitle == '创建用户'){
        this.adminCreate();
      }else if(this.popTitle == '修改用户'){
        this.adminUpdate();
      }

      setTimeout(()=>{
        this.userJson.name = '';
        this.userJson.password = '';
        this.userJson.mobile = '';
        this.userJson.is_effect = 1;
        this.userJson.org = [];
        this.userJson.authority = '';
        this.userJson.id = '';

        this.orgInfo.name = '';
        this.orgInfo.level = '';
        this.orgInfo.parent_id = '';
        this.orgInfo.id = '';
      },1000)
    },
    showInfo2(n1,id){
      this.nIndex = n1;
      this.nIndex2 = n1+'-'+id;
      this.orgId = id;
    },
    showInfo(id,id2){
      this.nIndex = id;
      this.nIndex2 = id+'-'+id2;
      this.orgId = id;
    },
    fShow(){

      let arr = [
        '/systemConfiguration/organizationManagement'
      ]

      this.oShow.organizationManagement = this.getBoolean(arr);
    }
  },
  components: { 
    listMain
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.organizationManagement{overflow: hidden; border-radius: 20px;}
.organizationLeft{width: 236px; height: auto; background: #f9f9fb; float: left;padding-bottom: 9999px;margin-bottom: -9999px;  padding-top: 37px;font-size: 14px; border-right:1px solid #eeeeee; }
.organizationLeft ul{}
.organizationLeft>ul>li>ul>li>span>i{position: absolute; left: 0px; top:16px;}
.organizationLeft>ul>li>ul>li>span>a{margin-left: 16px;}
.organizationLeft li{display: block; line-height: 36px;}
.organizationLeft li>span{display: block; padding-right: 18px; position: relative;}
.organizationLeft li>span>a{color: #696a7e; display: block;}
.organizationLeft li>span:hover>.czBox{display: block;}
.organizationLeft>ul>li{ color: #696a7e;font-weight: bold; position:relative;}
.organizationLeft>ul>li i.icon_active{width: 4px; height: 17px; display: block; background: #da0032; display: none; position: absolute; left: 0; top:9px;}
.organizationLeft>ul>li.active>i.icon_active{display: block;}
.organizationLeft>ul>li>span{margin-left: 23px;}
.organizationLeft>ul>li>ul>li{clear: both;}
.organizationLeft>ul>li>ul>li.active ul{background:rgba(243, 247, 250,.7);}
.organizationLeft>ul>li>ul>li>span{margin-left: 28px;}
.organizationLeft>ul>li>ul>li>span>i.icon_30{margin-right: 6px; transform: rotate(0deg); transition: transform .25s;}
.organizationLeft>ul>li>ul>li.active ul{height: auto;font-size:14px; overflow: visible; transition: height .25s;}
.organizationLeft>ul>li>ul>li.active>span i.icon_30{transform: rotate(180deg);}
.organizationLeft>ul>li>ul>li>ul{height: 0px; overflow: hidden; transition: height .25s;}
.organizationLeft>ul>li>ul>li>ul>li{padding-left: 45px; box-sizing: border-box; font-weight: normal;cursor: pointer; overflow: hidden;}
.organizationLeft>ul>li>ul>li>ul>li.active{background: #fff; width: 237px;border-bottom: 1px solid #eeeeee;border-top: 1px solid #eeeeee;}
.organizationRight{padding-top: 37px; overflow: hidden;}
.organizationRightMain{margin-left: 32px;}
.organRH .xzgz{width: 134px; height: 39px; line-height: 39px; background: #da0030; color: #fff; display: inline-block; text-align: center; border-radius: 20px;font-size: 16px;}
.organRH .xzgz i{margin-right: 12px;}
.czBox{text-align: right; position: absolute; right: 18px; top:0; display: none;}
.popBj{position: fixed; width: 100%;height: 100%; left: 0;top: 0;background: #000;opacity: .6;}
.popWrap{width: 400px;height: auto; position: fixed; background: #fff; top:50%; left: 50%; margin-left:-200px; margin-top: -153px; animation: fk 0.6s ease-in forwards 0s 1 normal;}
.popWrap h3{height: 48px; line-height: 48px; border-bottom: 1px solid #eeeeee;  overflow: hidden; font-size: 18px; text-align: center; font-weight: normal;}
.popWrap h3 a{display:block; float: right; width: 40px; height: 40px; text-align: center; line-height: 40px; margin-right: 10px;}
.popWrap h3 a:before{width: 15px; height: 15px; background-position: -85px -96px;content:"";}
.popWrap ul{ padding: 30px 0px 10px 0px; font-size: 14px;  }
.popWrap ul li{ margin-bottom:13px;overflow: hidden;}
.popWrap ul li>*{float: left;}
.popWrap ul li>label{margin-top: 8px;}
.popWrap ul li>div{width: 240px;}
.popWrap ul li>span{width: 100px;display: block; text-align: right; height: 32px; line-height: 32px;}
.popWrap .boxfoot{text-align: center; border-top: 1px solid #eeeeee; height: 70px; box-sizing: border-box; padding-top: 20px; }
.popWrap .boxfoot a{width: 108px; height: 30px; line-height: 30px; text-align: center; border-radius: 18px; font-weight: bold; font-size: 16px;  display: inline-block;}
.popWrap .boxfoot a.qr{background: #dc0034; border:1px solid #dc0034; color: #fff; margin-right: 22px;}
.popWrap .boxfoot a.qx{ border:1px solid #686a7c; color: #686a7c;}
</style>


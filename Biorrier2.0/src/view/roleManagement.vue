<template>
  <div class="roleManagement" v-if="((aMenuId.indexOf(12)>-1)?true:false)">
    <div class="roleManagementMain" v-if="isShow">
        <div class="roleLeft">
            <div class="searchMain">
                <input type="text" v-model="searchName" placeholder="搜索角色" class="search" @keyup.enter="searchName2()">
                <a href="javascript:;" @click="searchName2()"><i class="icons icon_33"></i></a>
            </div>
            <a href="javascript:;" class="addRole" @click="addRole(-1)">
                <i class="icons icon_32"></i>
                添加角色
            </a>
            <div class="roleWrap">
                <ul>
                    <li :class="{active:nIndex == index}" v-for="(item,index) in oData" @click="selectRole(index)">
                       <div v-if="(index==0) && (item.id == 1)">超级管理员<span>默认</span></div>
                       <div v-if="item.id != 1">
                            {{item.name}}
                            <a href="javascript:;" class="sc" :index_id = "item.id" @click="deleteBtn(item.id,6)">删除</a>
                            <a href="javascript:;" class="bj" :index_id = "item.id" @click="addRole(item.id,{name:item.name,remarks:item.remarks,menu_ids:item.menu_ids})">编辑</a>
                       </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="roleRight">
            <div class="roleRightMain">
                <div class="roleRH" v-text="roleInfo.name"></div>
                    <div class="roleRC">
                        <div class="roleBox1">
                            <ul>
                                <li>
                                    <div class="divIcon"><i class="icons icon_34"></i></div>
                                    <div class="divCon">
                                        <span>角色名称</span>
                                        <p v-text="roleInfo.name"></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="divIcon"><i class="icons icon_35"></i></div>
                                    <div class="divCon">
                                        <span>角色说明</span>
                                        <p v-text="roleInfo.remarks"></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="roleBox2">
                            <h3>功能权限</h3>
                            <ul>
                              <li v-for="item in menuArr">
                                <h3>
                                    <i class="icons icon_31"></i>
                                    <span @click="showInfo($event)">{{item.name}}</span>
                                </h3>
                                <div class="pDiv">
                                  <p v-for="obj in item.child">
                                      {{obj.name}}
                                  </p>
                                </div>
                              </li>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    <router-view :isDetails="isDetails"></router-view>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
export default {
  data () {
    return {
         isShow:true,
         isDetails:false,
         oData:[],
         nIndex:0,
         roleInfo:{},
         menuArr:[],
         oParameter:{},
         searchName:''
    }
  },
  updated(){
      if(!this.isShow && this.$route.path == '/admin/systemConfiguration/roleManagement'){
        this.isShow = true;
        this.roleList();
      }
  },
  created(){
    if(this.aMenuId.indexOf(12)<0){this.$router.push({path:'/404'});}
    this.getParameter();
    this.roleList();
  },
  watch:{
    oParameter2(){
      this.oParameter = this.oParameter2;
      this.roleList();
    },
    'oPoint.code'(str1,str2){
      if(this.oPoint.code == 1){
        if(this.oPoint.type == 6){
          this.setPoint({code:0});
          this.roleDelete(this.oPoint.parameter);
        }
      }
    }
  },
  computed:{
    ...mapState(['oPoint','oParameter2','aMenuId'])
  },
  methods: {
    ...mapMutations(['setPoint','setParameter']),
    searchName2(){
      if(this.searchName){
        this.oParameter = {
          name:this.searchName
        };

        let str = this.$route.path+'?';
        for(let key in this.oParameter){
          str +=key+'='+this.oParameter[key]+'&'
        }
        str = str.slice(0,-1);
        this.$router.push(str)
        this.setParameter(this.oParameter)
      }else{
        this.setPoint({type:0,pop:true,pointWord:'请输入角色名称'});
      }
    },
    selectRole(n){
        this.nIndex = n;
        this.roleInfo = this.oData[n];
        this.menuArr = JSON.parse(this.roleInfo.menu_ids);

    },
    addRole(id,obj) {
        this.isShow = false;
        this.isDetails = true;
        if(id>0){
            let roleInfo = {
                name:obj.name,
                id:id,
                remarks:obj.remarks,
                menu_ids:obj.menu_ids
            }
            let str = JSON.stringify(roleInfo);
            localStorage.roleInfo = str;
        }else{
            localStorage.roleInfo = '';
        }
        this.$router.push({
            path:`${this.$route.path}/${id}`
        })
    },
    showInfo(e){
      let obj = e.target;
      let oLi = obj.parentNode.parentNode;
      let oDiv = oLi.children[1];

      let n = oDiv.children.length;
      let _h = n*66;

      if(oLi.classList.toggle('show')){
        oDiv.style.height = _h + 'px';
      }else{
        oDiv.style.height = '0px';
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.roleManagement{overflow: hidden; border-radius: 20px; font-size: 14px;}
.roleLeft{width: 338px;height: auto; background: #f9f9fb; float: left;padding-bottom: 9999px;margin-bottom: -9999px;  padding-top: 35px; border-right:1px solid #eeeeee; }
.searchMain{width: 278px; height: 34px; margin: 0px auto; border: 1px solid #dddddd;border-radius: 5px;background: #fff;overflow: hidden; }
.searchMain input{height: 34px; line-height: 34px; width: 248px; float: left; background: none; border: 0px; text-indent: 14px;}
.searchMain a{float: left; width: 30px;height: 34px; display: block;line-height: 34px; text-align: center;}
.addRole{width: 280px; height: 32px; display: block; text-align: center; line-height: 32px; border-radius: 16px; background: #696a7c; color: #fff; margin: 0px auto; margin-top: 17px;}
.addRole i{margin-right: 8px; margin-top: -1px;}
.roleWrap{ width: 280px; height: auto;  margin: 0px auto; margin-top: 17px;}
.roleWrap ul{}
.roleWrap ul li{height: 43px; line-height: 43px; background: #eeeef0; margin-bottom: 13px; color: #67687a; font-weight: bold; padding-left: 17px; overflow: hidden; cursor: pointer;}
.roleWrap ul li span{color: #969895;font-weight: normal; font-size: 12px; margin-left: 15px;}
.roleWrap ul li a{display: inline-block; width: 40px; height: 19px; text-align: center; line-height: 19px; border-radius: 10px; background: #fff; font-weight: normal; font-size: 12px; color: #696a7e; float: right; margin-right: 7px; margin-top: 13px;}
.roleWrap ul li.active{background: #dee1e8; border-left: 2px solid #da0032;}
.roleRight{overflow: hidden;}
.roleRight .roleRightMain{}
.roleRight .roleRH{height: 69px; line-height: 69px; border-bottom:1px solid #eeeeee; padding-left: 54px; color: #696a7f; font-weight: bold;}
.roleRight .roleRC{padding-left: 54px;}
.roleRight .roleRC .roleBox1{margin-top: 62px;}
.roleRight .roleRC .roleBox1 ul{overflow: hidden;}
.roleRight .roleRC .roleBox1 ul li{ float: left; overflow: hidden; }
.roleRight .roleRC .roleBox1 ul li:first-child{margin-right: 130px;}
.roleRight .roleRC .roleBox1 ul li>div{float: left;}
.roleRight .roleRC .roleBox1 ul li .divIcon{width: 74px; height: 74px; background: #c1c8d2; line-height: 74px; text-align: center; border-radius: 37px;}
.roleRight .roleRC .roleBox1 ul li .divCon{margin-left: 26px;}
.roleRight .roleRC .roleBox1 ul li .divCon span{display: block; font-size: 14px; color: #676a7d;margin-top:3px;}
.roleRight .roleRC .roleBox1 ul li .divCon p{font-size: 22px; color: #6b6a7c;margin-top: 11px;}
.roleRight .roleRC .roleBox2{margin-top: 80px;}
.roleRight .roleRC .roleBox2>h3{color: #67697e; font-size: 14px; margin-bottom: 27px;}
.roleRight .roleRC .roleBox2 ul{margin-right: 74px;}
.roleRight .roleRC .roleBox2 ul li{line-height: 56px;  margin-bottom: 13px; font-size: 14px; color: #67687c; overflow: hidden;}
.roleRight .roleRC .roleBox2 ul li i{margin-right: 6px;margin-top: -1px;}
.roleRight .roleRC .roleBox2 ul li>h3{background: #f6f6f8;  padding-left: 29px;}
.roleRight .roleRC .roleBox2 ul li>h3 span{display: inline-block;cursor: pointer;}
.roleRight .roleRC .roleBox2 .pDiv{height: 0px;transition: height .5s; }
.roleRight .roleRC .roleBox2 li.show .pDiv{height:auto; transition: height .5s; }
.roleRight .roleRC .roleBox2 p{padding-left: 73px; height: 66px; line-height: 66px; color: #676a7d; font-size: 14px; border-bottom:1px dashed #ccc;}
</style>

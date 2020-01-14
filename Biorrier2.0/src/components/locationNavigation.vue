<template>
  <div class="locationNavigation">
      <div class="mian">
          <div class="navLeft">
              <span v-for="(item,index) in arrPath" v-if="oPath[item]">
                <router-link :to="linkPath[index] ? linkPath[index] : ''" tag="span" v-text="oPath[item]"></router-link>
                <span v-if="oPath[arrPath[index+1]]">/</span>
              </span>
          </div>
          <div class="navRight">
              <img src="../assets/avatar.jpg" class="avatar">
              <span class="nickname" v-text="userName"></span>
              <span class="position" v-text="roleName"></span>
              <el-dropdown trigger="click" @command="handleCommand">
                <a href="javascript:;" class="setting"><i class="icons icon_5"></i></a>
                <el-dropdown-menu slot="dropdown" class="setWrap">
                  <el-dropdown-item command="1">修改密码</el-dropdown-item>
                  <el-dropdown-item command="2">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
          </div>
      </div>
      <div class="popBj" v-if="isShow"></div>
      <div class="popWrap" v-if="isShow">
        <div class="cjyh">
          <h3>修改密码<a href="javascript:;" class="cloaeBtn icons_b" @click="closeBtn()"></a></h3>
          <ul>
            <li><input type="password" class="cleanInput"><span>旧密码：</span><el-input v-model="oldPassword" placeholder="请输入旧密码" autocomplete="new-password" ></el-input></li>
            <li><span>新密码：</span><el-input v-model="newPassword" placeholder="请输入新密码" autocomplete="newPassword" show-password></el-input></li>
            <li><span>新密码：</span><el-input v-model="newPassword2" placeholder="请再次输入新密码" show-password></el-input></li>
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
import {pathName} from '@/assets/js/base'
import {mapState,mapMutations} from 'vuex';
export default {
  data () {
    return {
      oPath:{},
      arrPath:[],
      linkPath:[],
      oldPassword:'',
      newPassword:'',
      newPassword2:'',
      isShow:false,
      userName:sessionStorage.userName, 
      roleName:sessionStorage.roleName
    }
  },
  watch: {
    $route(to,from){
      this.getPath();
    }
  },
  created() {
    this.getPath();
  },
  methods: {
    ...mapMutations(['enterDetails','setParameter','setPoint']),
    getPath(){
      let _str = this.$route.path.substring(1);
      var _index = 0;
      this.oPath = pathName; 
      this.arrPath = _str.split('/');

      this.linkPath = [];
      for(let i=0;i<this.arrPath.length;i++){
        _index = _str.indexOf("/",_index+1);
        if(_index>-1){
          let _str1 = '/'+ _str.substring(0,_index)+'?page=1';
          this.linkPath.push(_str1);
        }
      }
    },
    confirm(){
      if(this.newPassword == this.newPassword2){
        this.editPassword();
      }else{
        this.setPoint({type:0,pop:true,pointWord:'两次输入的密码不一致，请重新输入！'});
      }
    },
    closeBtn(){
      this.isShow = false;
      this.oldPassword = '';
      this.newPassword = '';
      this.newPassword2 = '';
    },
    handleCommand(num){
      if(num == 1){
        this.isShow = true;
      }else if(num == 2){
        sessionStorage.adminLogin = false;
        sessionStorage.access_token = '';
        sessionStorage.access_id = '';
        sessionStorage.menu = '';
        sessionStorage.userName = '';
        sessionStorage.roleName = '';
        this.$router.push('/admin/login');
    }
    }
  },
  components: {}
}
</script>


<style scoped>
.locationNavigation{}
.cleanInput{height: 0px; width: 0px; border: 0px; font-size: 0px; background: none;}
.mian{width: 100%; box-sizing: border-box;height:72px; background: #ffffff;box-shadow:0px 10px 10px #e8e9ee; position: relative;overflow: hidden; }
.mian .navLeft{float: left; height: 72px; line-height: 72px; color: #676a79; font-size: 14px; margin-left: 67px;}
/*.mian .navLeft>a{color: #676a79;}*/
.mian .navLeft>span>span{margin-right: 16px;}
.mian .navLeft>span>span:first-child{cursor: pointer;}
.mian .navLeft>span:last-child{color: #696a7e; font-weight: bold;}
.mian .navLeft>span:last-child>span:first-child{cursor: auto;}
.mian .navRight{float: right; margin-right: 71px; font-size: 14px;}
.mian .navRight>*{display:block; float: left;}
.mian .navRight .avatar{width: 42px; height: 42px; background:#f5f6fb; border-radius: 50%; margin-right: 14px; margin-top: 15px; }
.mian .navRight .nickname{color: #696a7f; font-weight: bold;  height: 42px; line-height: 42px; margin-right: 15px; margin-top: 15px;}
.mian .navRight .position{width: auto;height: 19px;line-height: 19px; padding: 0px 6px; background: #f5f6fb; border-radius: 4px;text-align: center; font-size: 12px;border:1px solid #d3d3db; margin-right: 25px; margin-top: 25px;}
.mian .navRight .setting{margin-top: 26px; display: block;}
.setWrap{width: 100px; text-align: center;}

.popBj{position: fixed; width: 100%;height: 100%; left: 0;top: 0;background: #000;opacity: .6; z-index: 3333;}
.popWrap{width: 400px;height: auto; position: fixed; background: #fff; top:50%; left: 50%; margin-left:-200px; margin-top: -157px; animation: fk 0.6s ease-in forwards 0s 1 normal; z-index: 3333;}
.popWrap h3{height: 48px; line-height: 48px; border-bottom: 1px solid #eeeeee;  overflow: hidden; font-size: 18px; text-align: center; font-weight: normal;}
.popWrap h3 a{display:block; float: right; width: 40px; height: 40px; text-align: center; line-height: 40px; margin-right: 10px;}
.popWrap h3 a:before{width: 15px; height: 15px; background-position: -85px -96px;content:"";}
.popWrap ul{ padding: 30px 0px 10px 0px; font-size: 14px; }
.popWrap ul li{ margin-bottom:20px;overflow: hidden;}
.popWrap ul li>*{float: left;}
.popWrap ul li>label{margin-top: 8px;}
.popWrap ul li>div{width: 240px;}
.popWrap ul li>span{width: 100px;display: block; text-align: right; height: 32px; line-height: 32px;}
.popWrap .boxfoot{text-align: center; border-top: 1px solid #eeeeee; height: 70px; box-sizing: border-box; padding-top: 20px; }
.popWrap .boxfoot a{width: 108px; height: 30px; line-height: 30px; text-align: center; border-radius: 18px; font-weight: bold; font-size: 16px;  display: inline-block;}
.popWrap .boxfoot a.qr{background: #dc0034; border:1px solid #dc0034; color: #fff; margin-right: 22px;}
.popWrap .boxfoot a.qx{ border:1px solid #686a7c; color: #686a7c;}
</style>

<template>
  <div class="loginWarp">
    <div class="loginCon">
      <div class="logo">
        <!-- <img src="../assets/logo.png"> -->
      </div>
      <div class="loginMain">
        <h2>伊美聚合平台</h2>
        <div class="userName">
          <span>用户名：</span>
          <el-input v-model="inputName" placeholder="请输入用户名" @keyup.enter.native="next($event)" clearable></el-input>
        </div>
        <div class="userPassword">
          <span>密码：</span>
          <el-input v-model="inputPassword" placeholder="请输入密码" @keyup.enter.native="submit($event)" name="inputPassword" show-password></el-input>
        </div>
        <a href="javascript:;" @click="login()">登录</a>
      </div>
    </div>
  </div>
</template>

<script>
import {common} from '@/assets/js/api'
import {oJm} from '@/assets/js/crypto'
import {mapState,mapMutations} from 'vuex';
export default {
  data () {
    return {
      inputName:'',
      inputPassword:'',
      aPath:[
          '',
          '/admin/distributionOrder/doctorOrder?page=1',
          '/admin/distributionConfiguration',
          '/admin/distributionConfiguration/Y1S1',
          '/admin/distributionConfiguration/sales/proposalGoods?page=1',
          '/admin/distributionConfiguration/microDoctor?page=1',
          '/admin/distributionConfiguration/salesDeputy?page=1',
          '/admin/personnelManagement/servicingManagement/cooperativeDoctor?page=1',
          '/admin/personnelManagement/servicingManagement/cooperativeDoctor?page=1',
          '/admin/personnelManagement/memberManagement?page=1',
          '/admin/systemConfiguration/organizationManagement?page=1',
          '/admin/systemConfiguration/organizationManagement?page=1',
          '/admin/systemConfiguration/roleManagement',
          '/admin/systemConfiguration/message?page=1'
        ]
    }
  },
  watch: {
    $route(to,from){
      let str = to.path;
      if(str == '/admin/login'){
        if(eval(sessionStorage.adminLogin)){
          this.$router.push(this.aPath[arr[0].id]);
        }
      }
    }
  },
  created() {
    let str = this.$route.path;
    if(str == '/admin/login'){
      if(eval(sessionStorage.adminLogin)){
        this.$router.push(this.aPath[arr[0].id]);
      }
    }
  },
  methods: {
    ...mapMutations(['setPoint']),
    next(e){
      let input = document.getElementsByName("inputPassword")[0];
      e.target.blur();
      input.focus();
    },
    submit(){
      this.login();
    },
    login(){

      // // let obj = {
      //   mobile:'15079937676',
      //   password:'111111'
      // // }

      let obj = {
        mobile:this.inputName,
        password:this.inputPassword
      }

      

      common(obj,'/admin/login').then((res) => {
        if(res.code == 1){
          sessionStorage.adminLogin = true;
          sessionStorage.access_token = res.data.access_token;
          sessionStorage.access_id = res.data.id;
          sessionStorage.menu = oJm.jiami('id:'+res.data.id+';'+'menu:'+res.data.menu);
          sessionStorage.userName = res.data.name;
          sessionStorage.roleName = res.data.role_name;

          let arr = JSON.parse(res.data.menu);

          this.$router.push(this.aPath[arr[0].id]);
        }else{
          alert(res.message);
        }
      })
      
      


      // if(this.inputName == '123' && this.inputPassword){
      //   sessionStorage.adminLogin = true;
      //   this.$router.push('/admin/distributionOrder/doctorOrder');
      // }else{
      //   alert('用户名或密码错误！')
      // }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginWarp{position: fixed; width: 100%; height: 100%; top:0px; left: 0px; background: #43464d;}
.loginCon{position: absolute; top:50%; margin-top: -320px; width: 500px; left: 50%; margin-left: -250px;}
.loginWarp .logo{text-align: center; height: 147px;}
.loginMain{width: 500px; height: auto; background: #fff; margin:0px auto; padding-top: 25px; overflow: hidden; border-radius: 10px;  padding-bottom: 30px;}
.loginMain>h2{text-align: center; font-size: 30px; font-weight: normal; margin-bottom: 30px;}
.loginMain>div{overflow: hidden;margin-bottom:30px;}
.loginMain>div>*{float: left;}
.loginMain>div>span{font-size: 20px; height: 32px; line-height: 32px; width: 100px; text-align: right;}
.loginMain>div>div{width: 360px;}
.loginMain>div input{width:360px;}
.loginMain>a{width: 100px; height: 40px; line-height: 40px; display: block; text-align: center;border-radius: 6px; background: #409eff; color: #fff; margin: 0px auto; font-size: 20px; }
</style>

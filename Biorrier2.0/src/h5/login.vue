<template>
  <div class="loginWarp">
    <div class="loginCon">
      <!-- <div class="logo">
        <img src="../assets/logo.png">
      </div> -->
      <div class="loginMain">
        <h2>伊美聚合平台</h2>
        <div class="role">
          <span>角色：</span>
          <label>
            <input v-model="role" type="radio" value="ys">
            <i class="icons icon_19" v-show="role != 'ys'"></i>
            <i class="icons icon_20" v-show="role == 'ys'"></i>
            <span>Y1S1</span>
          </label>
          <label>
            <input v-model="role" type="radio" value="wy">
            <i class="icons icon_19" v-show="role != 'wy'"></i>
            <i class="icons icon_20" v-show="role == 'wy'"></i>
            <span>微店</span>
          </label>
          <label>
            <input v-model="role" type="radio" value="xs">
            <i class="icons icon_19" v-show="role != 'xs'"></i>
            <i class="icons icon_20" v-show="role == 'xs'"></i>
            <span>MA</span>
          </label>
          <label>
            <input v-model="role" type="radio" value="db">
            <i class="icons icon_19" v-show="role != 'db'"></i>
            <i class="icons icon_20" v-show="role == 'db'"></i>
            <span>沟通专员</span>
          </label>
        </div>
        <div class="userName">
          <span>用户名：</span>
          <el-input v-model="inputName" id="inputName" @blur="inputBlur()" placeholder="请输入用户名" name="inputName" clearable></el-input>
        </div>
        <div class="userPassword">
          <span>密码：</span>
          <el-input v-model="inputPassword" @blur="inputBlur()" placeholder="请输入密码" name="inputPassword" id="inputPassword" show-password></el-input>
        </div>
        <a href="javascript:;" @click="login()" id="login">登录</a>
      </div>
    </div>
  </div>
</template>

<script>
import {common} from '@/assets/js/api'
export default {
  data () {
    return {
      inputName:'',
      inputPassword:'',
      role:'ys'
    }
  },
  watch: {
    $route(to,from){
      let str = to.path;
      if(str == '/h5/login'){
        if(eval(sessionStorage.h5Login)){
          this.$router.push('/h5/index');
        }
      }
    }
  },
  created() {
    let str = this.$route.path;
    if(str == '/h5/login'){
      if(eval(sessionStorage.h5Login)){
        this.$router.push('/h5/index');
      }
    }
  },
  methods: {
    inputBlur:function(){
      setTimeout(function(){
        var x = document.activeElement.id;
        if(!x){
          window.scrollTo(0, 0);
        }
      },200);
    },
    login(){

      if(this.role == 'ys'){

        let obj = {
          mobile:this.inputName,
          password:this.inputPassword
        }

        common(obj,'/user/login').then((res) => {
          //console.log(res)
          if(res.code == 1){
            sessionStorage.h5Login = true;
            sessionStorage.access_token = res.data.access_token;
            sessionStorage.id = this.inputName;
            sessionStorage[this.role] = true;
            sessionStorage.userId = res.data.id;


            if(res.data.is_edit_pass == 0){
              this.$router.push('/h5/resetPassword');
            }else if(res.data.is_edit_pass == 1){
              this.$router.push('/h5/index');
            }
          }else{
            alert('用户名或密码错误！')
          }
        })
      }else{
        let _type = (this.role == 'db')?'1':'2';
        let obj = {
          name:this.inputName,
          pwd:this.inputPassword,
          type:_type
        }


        common(obj,'/user/outsidelogin').then((res) => {
          //console.log(res)
          if(res.code == 1){

            let obj2 = {
              mobile:res.data.data
              //mobile:18055392313
            }

            common(obj2,'/user/token').then((res)=>{
              if(res.code == 1){
                sessionStorage.h5Login = true;
                sessionStorage.access_token = res.data.access_token;
                sessionStorage.id = obj2.mobile;
                sessionStorage[this.role] = true;
                sessionStorage.userId = res.data.id;
                this.$router.push('/h5/index');
              }
            })

          }else{
            alert('用户名或密码错误！')
          }
        })

      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginWarp{position: fixed; width: 100%; height: 100%; top:0px; left: 0px; background: url('../assets/bj2.jpg') no-repeat; background-size: 100% auto; overflow: hidden;}
.loginCon{padding-top: 30px; width: 90%; margin:0px auto; margin-top: 40%; overflow: hidden;}
.loginWarp .logo{text-align: center;}
.loginMain{width:100%; height: auto; background: #fff; padding-top: 25px; overflow: hidden; border-radius: 10px;  padding-bottom: 25px;}
.loginMain>h2{text-align: center; font-size: 25px; font-weight: normal; margin-bottom: 25px;}
.loginMain>div{overflow: hidden;margin-bottom:25px;}
.loginMain>div>*{float: left;}
.loginMain>div>span{font-size: 16px; height: 32px; line-height: 32px; width: 80px; text-align: right;}
.loginMain>div>div{width: 70%; height: 32px;}
.loginMain>div input{ width: 100%; height: 32px;}
.loginMain>a{width: 100px; height: 32px; line-height: 32px; display: block; text-align: center;border-radius: 6px; background: #409eff; color: #fff; margin: 0px auto; font-size: 16px; }
.loginMain>div.role{line-height: 32px; margin-bottom: 10px;}
.loginMain>div.role label{margin-right: 4px;}
.loginMain>div.role label span{display: inline-block;vertical-align: middle;}
</style>

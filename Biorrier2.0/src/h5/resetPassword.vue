<template>
	<div class="resetWrap">
		<div class="header">
			<a href="javascript:;" @click="$router.push('/h5/index')"></a>
			修改密码
		</div>
		<div class="resetMain">
			<van-cell-group>
			  <van-field
			    v-model="oldPassword"
			    required
			    clearable
			    label="旧密码"
			    placeholder="请输入旧密码"
			  />

			  <van-field
			    v-model="newPassword"
			    type="password"
			    label="新密码"
			    placeholder="请输入新密码"
			    required
			  />
			  <van-field
			    v-model="newPassword2"
			    type="password"
			    label="新密码"
			    placeholder="请再次输入新密码"
			    required
			  />
			</van-cell-group>
			<van-button type="primary" size="large" class="qr" @click="confirm()">确认</van-button>
			<van-button type="default" size="large" color="red" class="qx" @click="close()">取消</van-button>
		</div>
	</div>
</template>
<script>
import {common} from '@/assets/js/api'
export default {
	data() {
		return {
			oldPassword:'',
			newPassword:'',
			newPassword2:''
		}
	},
	destroyed(){},
	methods: {
		userEditpassword(){
	      let obj = {
	        id:sessionStorage.id,
	        password:this.newPassword,
	        old_password:this.oldPassword
	      }

	      common(obj,'/user/editpassword').then((res) => {
	        if(res.code==1){
	            sessionStorage.h5Login = false;
		        sessionStorage.access_token = '';
		        sessionStorage.id = '';
		        sessionStorage.ys = '';
		        sessionStorage.wy = '';
		        sessionStorage.xs = '';
		        sessionStorage.db = '';
		        this.$router.push('/h5/login');
	        }else{
                if(res.data == 'token失效，请重新登录'){
                    alert(res.data)
                }else{
                    alert(res.message)
                }
            }
	      })
	    },
	    confirm(){
	      if(this.newPassword == this.newPassword2){
	        this.userEditpassword();
	      }else{
	        alert('两次输入的密码不一致，请重新输入！');
	      }
	    },
	    close(){
	    	this.oldPassword = '';
	    	this.newPassword = '';
	    	this.newPassword2 = '';
	    }
    }
	
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{height: 1.6rem; line-height: 1.6rem; background: #1e1f34; text-align: center; color: #fff; font-size: .5rem; overflow: hidden;}
.header a{width: .34rem; height: .6rem; background: url('../assets/icons_13.png') no-repeat; background-size: 100% 100%; display: block; float: left; margin-top:.54rem; margin-left: .82rem;}
.resetWrap{}
.qr,.qx{display: block; width: 90%; margin:1rem auto; }
</style>
<template>
	<div class="myMember">
		<div class="header">
			<a href="javascript:;" @click="aBack()"></a>
			我的会员
		</div>
		<div class="ss">
			<div class="ssMain">
				<input type="text" placeholder="搜索" v-model="mainId" @keyup.enter="submit()"> <i @click="submit()"></i>
			</div>
		</div>
		<div class="listMember">
			<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
				<van-list
				  v-model="loading"
				  :finished="finished"
				  finished-text="没有更多了"
				  @load="onLoad">
					<ul>
						<li v-for="item in oData">
							<i></i>
							<div class="useInfo">
								<p class="name" v-text="(item.name.length>7) ? (item.name.substr(0,7)+'...') : item.name"></p>
								<p class="mobile" v-text="item.mobile"></p>
							</div>
							<div class="joinTime">
								<p>加入时间</p>
								<p v-text="item.created_at"></p>
							</div>
						</li>
					</ul>
					<p class="total">共{{total}}人</p>
				</van-list>
  			</van-pull-refresh>
		</div>
	</div>
</template>
<script>
import {common} from '@/assets/js/api'
export default {
	data() {
		return {
			oShow:{
				ys:eval(sessionStorage.ys),
				wy:eval(sessionStorage.wy),
				xs:eval(sessionStorage.xs),
				db:eval(sessionStorage.db)
			},
			userType:0,
			mainId:'',
			oData:[],
			total:0,
      		page:0,
      		last_page:1,
            loading: false,//控制上拉加载的加载动画
            finished: false,//控制在页面往下移动到底部时是否调用接口获取数据
            isLoading: false//控制下拉刷新的加载动
		}
	},
	created(){
		this.getUserType();
	},
	watch: {},
	methods: {
        onRefresh() {
        	this.page = 0;
            setTimeout(() => {
                this.userAccountlist();
            }, 500);
        },
		onLoad() {
	      setTimeout(() => {
	        this.userAccountlist();
	      }, 500);
	    },
		getUserType(){
	    	if(this.oShow.ys){this.userType=0}
	    	if(this.oShow.xs){this.userType=1}
	    	if(this.oShow.wy){this.userType=2}
	    	if(this.oShow.db){this.userType=3}
	    },
		submit(){
			this.page = 1;
			let obj = {
		        type:this.userType,
		        page:1,
		        id:sessionStorage.id,
		        main_id:this.mainId
		    }

		    common(obj,'/user/accountlist').then((res) => {
		        if(res.code==1){
		        	this.isLoading = false;
		        	this.loading = false;
		        	if(this.page == 1){
		        		this.oData = [];
		        	}
		        	for(let i=0;i<res.data.data.length;i++){
		        		this.oData.push(res.data.data[i]);
		        	}
		          	this.total = res.data.total;
		          	this.last_page = res.data.last_page;

		          	if(this.page == this.last_page){
		          		 this.finished = true;
		          	}
		        }else{
	                if(res.data == 'token失效，请重新登录'){
	                    alert(res.data)
	                }else{
	                    alert(res.message)
	                }
	            }
		    })
		},
		userAccountlist(){
		    this.page = this.page+1;
	        let obj = {
	        	type:this.userType,
	        	page:this.page,
	        	id:sessionStorage.id
	      	}

	      	common(obj,'/user/accountlist').then((res) => {
		        if(res.code==1){
		        	this.isLoading = false;
		        	this.loading = false;
		        	if(this.page == 1){
		        		this.oData = [];
		        	}


		        	// res.data.data = [
		        	// 	{
		        	// 		name:'dage',
		        	// 		mobile:'13895468546',
		        	// 		created_at:'2019-10-08 20:59:29'
		        	// 	},
		        	// 	{
		        	// 		name:'woshi',
		        	// 		mobile:'15865469853',
		        	// 		created_at:'2019-10-07 04:23:26'
		        	// 	},
		        	// 	{
		        	// 		name:'xiaohuo',
		        	// 		mobile:'13554545538',
		        	// 		created_at:'2019-9-29 19:55:23'
		        	// 	},
		        	// 	{
		        	// 		name:'nihao',
		        	// 		mobile:'13155454549',
		        	// 		created_at:'2019-9-23 02:55:20'
		        	// 	},
		        	// 	{
		        	// 		name:'xiaofei',
		        	// 		mobile:'18756565656',
		        	// 		created_at:'2019-9-20 22:25:29'
		        	// 	},
		        	// 	{
		        	// 		name:'dalao',
		        	// 		mobile:'19145454545',
		        	// 		created_at:'2019-9-18 18:52:24'
		        	// 	},
		        	// 	{
		        	// 		name:'zaizhe',
		        	// 		mobile:'13645454569',
		        	// 		created_at:'2019-9-16 15:09:18'
		        	// 	}
		        	// ];


		        	for(let i=0;i<res.data.data.length;i++){
		        		this.oData.push(res.data.data[i]);
		        	}
		          	this.total = res.data.total;
		          	this.last_page = res.data.last_page;

		          	if(this.page == this.last_page){
		          		 this.finished = true;
		          	}


		          	this.total = res.data.data.length;


		        }else{
	                if(res.data == 'token失效，请重新登录'){
	                    alert(res.data)
	                }else{
	                    alert(res.message)
	                }
	            }
		    })
	    }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{height: 1.6rem; line-height: 1.6rem; background: #1e1f34; text-align: center; color: #fff; font-size: .5rem; overflow: hidden;}
.header a{width: .34rem; height: .6rem; background: url('../assets/icons_13.png') no-repeat; background-size: 100% 100%; display: block; float: left; margin-top:.54rem; margin-left: .82rem;}
.ss{height: 1.92rem; background: #f1f1f1;overflow: hidden;}
.ss .ssMain{margin: .34rem .72rem; overflow: hidden; position: relative;}
.ss .ssMain>input{  height: 1.23rem; line-height: 1.23rem; background: #fff; border:1px solid #aaaaaa; border-radius: .615rem; width:100%; box-sizing: border-box; text-indent: .56rem; font-size: .48rem}
.ss .ssMain>i{width: .63rem; height: .62rem; display: inline-block;background: url('../assets/icons_15.png') no-repeat; background-size: 100% 100%; right: .5rem; top:.3rem; position: absolute; }
.listMember{}
.listMember ul{overflow: hidden;}
.listMember ul li{height: 2.423rem; border-bottom: 1px solid #eeeeee; overflow:hidden;}
.listMember ul li>i{width: 1.36rem; height: 1.36rem; display: block; background: url('../assets/icons_14.png') no-repeat; background-size: 100% 100%; float: left; margin-top:.5rem; margin-left: .83rem;}
.listMember ul li .useInfo{float: left; overflow: hidden; margin-left: .47rem;}
.listMember ul li .useInfo .name{font-size: .6rem; color: #333; margin-top: .4rem}
.listMember ul li .useInfo .mobile{font-size: .4rem; color: #999; margin-top: .18rem}
.listMember ul li .joinTime{float: right; text-align: right; color: #999; margin-right: 1.03rem;line-height: 20px; margin-top: .74rem; font-size: .4rem;}
.listMember ul+p{text-align: center; font-size: .4rem; color: #aaaaaa; margin-top: .26rem;}
</style>
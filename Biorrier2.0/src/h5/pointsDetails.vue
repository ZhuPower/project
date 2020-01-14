<template>
	<div class="pointsDetails">
		<div class="header">
			<a href="javascript:;" @click="aBack()"></a>
			积分明细
		</div>
		<div class="sx">
			<div class="boxStart">
				<a href="javascript:;" class="xlsj" @click="showPopup">开始时间</a>
				<p v-text="txtData.startDate"></p>
			</div>
			<div class="boxEnd">
				<a href="javascript:;" class="xlsj" @click="showPopup2">结束时间</a>
				<p v-text="txtData.endDate"></p>
			</div>
			
			<a href="javascript:;" class="sxBtn" @click="sxOrder()">筛选</a>

			<van-popup v-model="show"  position="bottom">
				<van-datetime-picker
					v-if="isStart"
				    v-model="startDate"
				    type="date"
				    title=" "
				    @confirm="confirmFn('startDate')"
				    @cancel="cancelFn('startDate')"
				/>
				<van-datetime-picker
					v-if="!isStart"
				    v-model="endDate"
					type="date"
				    title=" "
				    @confirm="confirmFn('endDate')"
				    @cancel="cancelFn('endDate')"
				/>
			</van-popup>
			
		</div>
		<div class="list">
			<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
				<van-list
				  v-model="loading"
				  :finished="finished"
				  finished-text="没有更多了"
				  @load="onLoad">
					<ul>
						<li v-for="item in oData">
							<div class="jf" v-text="parseFloat(item.doctor_integral)>0?('+'+parseFloat(item.doctor_integral)):parseFloat(item.doctor_integral)"> </div>
							<h3>客户：{{item.card_no}}</h3>
							<!-- <div class="ddh">订单号：{{item.tordret_no}}</div> -->
							<div class="ddh-time">积分时间：{{item.created_at}}</div>
						</li>
					</ul>
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
			show: false,
			isStart:true,
			startDate:new Date(),
			endDate:new Date(),
			txtData:{
				startDate:'',
				endDate:''
			},
			oData:[],
			page:0,
      		last_page:1,
            loading: false,//控制上拉加载的加载动画
            finished: false,//控制在页面往下移动到底部时是否调用接口获取数据
            isLoading: false//控制下拉刷新的加载动
		}
	},
	created(){
		this.getUserType();
		//this.userOrder2();
		let d = new Date();
		let y = d.getFullYear();
		let m = d.getMonth()+1;
		let _m = d.getMonth();
		let _d = d.getDate();
		this.txtData.startDate = y+'/'+_m+'/'+_d;
		this.txtData.endDate = y+'/'+m+'/'+_d;

	},
	watch: {},
	methods: {
		onRefresh() {
        	this.page = 0;
            setTimeout(() => {
                this.userOrder2();
            }, 500);
        },
		onLoad() {
	      setTimeout(() => {
	        this.userOrder2();
	      }, 500);
	    },
		sxOrder(){
			let obj = {
		        type:this.userType,
		        page:1,
		        id:sessionStorage.id,
		        start_date:this.txtData.startDate,
		        end_date:this.txtData.endDate
		    }

		    common(obj,'/user/order').then((res) => {
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
		userOrder2(){
			let d = new Date();
			let y = d.getFullYear();
			let m = d.getMonth()+1;

			this.page = this.page+1;
		    let obj = {
		        type:this.userType,
		        page:this.page,
		        id:sessionStorage.id,
		        start_date:this.txtData.startDate,
		        end_date:this.txtData.endDate
		    }

	        common(obj,'/user/order').then((res) => {
		        if(res.code==1){
		        	this.isLoading = false;
		        	this.loading = false;
		        	if(this.page == 1){
		        		this.oData = [];
		        	}

		        	// res.data.data = [
			        // 	{
			        // 		card_no:'13895468546',
			        // 		created_at:'2019-10-08 20:59:29',
			        // 		doctor_integral:'7.220'
			        // 	},
			        // 	{
			        // 		card_no:'15454545574',
			        // 		created_at:'2019-10-07 04:23:26',
			        // 		doctor_integral:'6.54'
			        // 	},
			        // 	{
			        // 		card_no:'13038371991',
			        // 		created_at:'2019-10-09 16:53:16',
			        // 		doctor_integral:'3.57'
			        // 	},
			        // 	{
			        // 		card_no:'13038371991',
			        // 		created_at:'2019-9-23 02:55:20',
			        // 		doctor_integral:'6.87'
			        // 	},
			        // 	{
			        // 		card_no:'13038371991',
			        // 		created_at:'2019-9-20 22:25:29',
			        // 		doctor_integral:'8.45'
			        // 	},
			        // 	{
			        // 		card_no:'13038371991',
			        // 		created_at:'2019-9-18 18:52:24',
			        // 		doctor_integral:'9.54'
			        // 	},
			        // 	{
			        // 		card_no:'13038371991',
			        // 		created_at:'2019-9-16 15:09:18',
			        // 		doctor_integral:'3.58'
			        // 	}
		        	// ]


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
	    getUserType(){
	    	if(this.oShow.ys){this.userType=0}
	    	if(this.oShow.xs){this.userType=1}
	    	if(this.oShow.wy){this.userType=2}
	    	if(this.oShow.db){this.userType=3}
	    },
	    showPopup() {
	    	this.show = true;
	    	setTimeout(()=>{
	    		let obj = document.getElementsByClassName('van-picker__title')[0];
	    		obj.innerHTML = '选择开始时间';
	    	},200)	
	    },
	    showPopup2() {
	    	this.show = true;
	    	this.isStart = false;
	    	setTimeout(()=>{
	    		let obj = document.getElementsByClassName('van-picker__title')[0];
	    		obj.innerHTML = '选择结束时间';
	    	},200)
	    },
	    confirmFn(key){
	    	this.show = false;
	    	let d = this[key];
	    	this.txtData[key] = d.getFullYear() + '/' + (d.getMonth()+1) + '/' + d.getDate();
	    },
	    cancelFn(key){
	    	this.show = false;
	    	this[key] = new Date();
	    }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{height: 1.6rem; line-height: 1.6rem; background: #1e1f34; text-align: center; color: #fff; font-size: .5rem; overflow: hidden;}
.header a{width: .34rem; height: .6rem; background: url('../assets/icons_13.png') no-repeat; background-size: 100% 100%; display: block; float: left; margin-top:.54rem; margin-left: .82rem;}
.sx{height: 60px; background: #f1f1f1; overflow: hidden;}
.sx .boxStart,.sx .boxEnd{float: left; width: 33.33%; text-align: center; padding-top: .4rem; }
.sx>div>a{font-size: .38rem; color: #999}
.sx>div>a.xlsj:after{width: .23rem; height: .2rem; margin-left: .27rem;}
.sx>div>p{font-size: .44rem; color: #666666;margin-top: .1rem;}
.sxBtn{width: 2.12rem; height:.88rem; display: inline-block; text-align: center; line-height: .88rem; border-radius:.44rem; border: 1px solid #aaaaaa; color: #666; float: right; margin-top: .53rem; font-size: .44rem; margin-right: .91rem;}
.list{}
.list ul{}
.list ul li{height: 3.26rem; border-bottom: 1px solid #eeeeee; color: #999; padding:0px .9rem; overflow:hidden;}
.list ul li h3{font-weight: normal; color: #333; font-size: .5rem; margin-top: .5rem;}
.list ul li .ddh{ font-size: .4rem; margin-top: 7px;}
.list ul li .ddh-time{font-size: .4rem; margin-top: .30rem;}
.list ul li .jf{float: right; font-size: .6rem; color: #de2745; margin-top:.6rem;}
.list ul+p{text-align: center; font-size: .4rem; color: #aaaaaa; margin-top:.3rem;}

</style>
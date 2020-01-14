<template>
	<div class="index">
		<div class="indexMain" v-if="oShow.ys">
			<div class="head">
				<div class="tx">
					<img src="../assets/avatar1.jpg">
					<i class="icons_5"></i>
				</div>
				<div class="hello">
					<p>你好</p>
					<p v-text="oData.doctor_no"></p>
					<p><a href="javascript:;" @click="outLogin()">退出</a></p>
				</div>
				<div class="news">
					<router-link to="/h5/resetPassword" tag="a" >修改密码</router-link>
					<router-link to="/h5/message/advisory" tag="a" ><img src="../assets/icons_6.png"><i v-if="isNew"></i></router-link>
				</div>
			</div>



			<div class="level">
				<div class="now">等级：{{oData.level_name}}</div>
				<div class="next">分比：	{{parseFloat(oData.this_month_proportion)}}%</div>
			</div>




			<!-- <div class="level">
				<div class="now">
					体验期
				</div>
				<div class="schedule">
					<div class="schedule_w"><span :style="{width:((45/50)*100+'%')}"></span></div>
					<div class="schedule_s">
						<span class="s_has">45</span>
						<span class="s_target">50</span>
					</div>
				</div>
				<div class="next" v-if="parseInt(oData.level) == 4">
					正式期二级
					<i @click="sjtj()"></i>
				</div>
				<div class="next">
		              正式期一级
					<i @click="sjtj()"></i>
				</div>
			</div> -->


			<div class="useInfo">
				<div class="item item_1">
					<img src="../assets/useInfo_1.jpg">
					<div class="itemMain">
						<p>会籍到期时间</p>
						<div v-if="oData.level != 1">
							<h3 v-text="(new Date().getMonth()+1)+'/'+(new Date(new Date().getFullYear(),new Date().getMonth()+1,0).getDate())"></h3>
							<span v-text="new Date().getFullYear()"></span>
						</div>
					</div>
				</div>
				<div class="item item_2">
					<img src="../assets/useInfo_2.jpg">
					<div class="itemMain">
						<p>会籍期CF数量</p>
						<h3 v-text="oData.a_trade_count"></h3>
					</div>
				</div>
				<div class="item item_3">
					<router-link to="/h5/myMember" tag="a" >
						<img src="../assets/useInfo_3.jpg">
						<div class="itemMain">
							<p>我的会员<i></i></p>
							<h3 v-text="oData.bind_account_count"></h3>
						</div>
					</router-link>
				</div>
				<div class="item item_4">
					<router-link to="/h5/pointsDetails" tag="a" >
						<img src="../assets/useInfo_4.jpg">
						<div class="itemMain">
							<p>累计积分<i></i></p>
							<h3 v-text="isNaN(parseFloat(oData.total_money))?0:parseFloat(oData.total_money)"></h3>
						</div>
					</router-link>
				</div>
			</div>

			<!-- <div class="useInfo">
				<div class="item item_1">
					<img src="../assets/useInfo_1.jpg">
					<div class="itemMain">
						<p>会籍到期时间</p>
						<div v-if="oData.level != 1">
							<h3>10/31</h3>
							<span v-text="getEndTime2(oData.level_time)[1]"></span>
						</div>
						<h3 v-if="oData.level == 1">永久</h3>
					</div>
				</div>
				<div class="item item_2">
					<img src="../assets/useInfo_2.jpg">
					<div class="itemMain">
						<p>会籍期CF数量</p>
						<h3>45</h3>
					</div>
				</div>
				<div class="item item_3">
					<router-link to="/h5/myMember" tag="a" >
						<img src="../assets/useInfo_3.jpg">
						<div class="itemMain">
							<p>我的会员<i></i></p>
							<h3>16</h3>
						</div>
					</router-link>
				</div>
				<div class="item item_4">
					<router-link to="/h5/pointsDetails" tag="a" >
						<img src="../assets/useInfo_4.jpg">
						<div class="itemMain">
							<p>累计积分<i></i></p>
							<h3>541</h3>
						</div>
					</router-link>
				</div>
			</div> -->

			<div class="yjtj">
				<v-echarts :id="'main'" :options="echartsOptions1"></v-echarts>
					<div class="yjtjM">
						<div class="yf">
						<ul>
							<li v-for="n in 5" v-text="arrMonth[(new Date().getMonth()+n-4)]"  :class="{active:(index==(new Date().getMonth()+n-4))}" @click="xzyf((new Date().getMonth()+n-4),(n-1))"></li>
						</ul>
					</div>
					<div class="yjtj_xq">
                        <div class="item item_1">
                            <p v-text="oInfo.new_count"></p>
                            <span>新增会员</span>
                        </div>
                        <div class="item item_2">
                            <p v-text="oInfo.t_money"></p>
                            <span>发展积分</span>
                        </div>
                        <div class="item item_3">
                            <p v-text="oInfo.a_money"></p>
                            <span>非发展积分</span>
                        </div>
                    </div>
				</div>
			</div>
		</div>
		<div class="indexMain" v-if="oShow.wy">
			<div class="head">
				<div class="tx">
					<img src="../assets/avatar1.jpg">
					<i class="icons_5"></i>
				</div>
				<div class="hello">
					<p>你好</p>
					<p v-text="oData.salesrep_name"></p>
					<p><a href="javascript:;" @click="outLogin()">退出</a></p>
				</div>
				<div class="news">
					<router-link to="/h5/message/advisory" tag="a" ><img src="../assets/icons_6.png"><i v-if="isNew"></i></router-link>
				</div>
			</div>
			<div class="level">
				<i></i>
				<h3>保级情况</h3>
				<p>*保级条件：最近3个人新增会员>0/积分>5000</p>
			</div>
			<div class="useInfo">
				<div class="item item_1">
					<img src="../assets/useInfo_2.jpg">
					<div class="itemMain">
						<p>新增会员</p>
						<h3 v-text="oData.newCount"></h3>
					</div>
				</div>
				<div class="item item_2">
					<img src="../assets/useInfo_6.jpg">
					<div class="itemMain">
						<p>积分</p>
						<h3 v-text="integral"></h3>
					</div>
				</div>
				<div class="item item_3">
					<router-link to="/h5/myMember" tag="a" >
						<img src="../assets/useInfo_3.jpg">
						<div class="itemMain">
							<p>我的会员<i></i></p>
							<h3 v-text="oData.bind_account_count"></h3>
						</div>
					</router-link>
				</div>
				<div class="item item_4">
					<router-link to="/h5/pointsDetails" tag="a" >
						<img src="../assets/useInfo_4.jpg">
						<div class="itemMain">
							<p>累计积分<i></i></p>					     
							<h3 v-text="isNaN(parseFloat(oData.total_money))?0:parseFloat(oData.total_money)"></h3>
						</div>
					</router-link>
				</div>
			</div>
			<div class="yjtj">
				<v-echarts :id="'main'" :options="echartsOptions1"></v-echarts>
					<div class="yjtjM">
						<div class="yf">
						<ul>
							<li v-for="n in 5" v-text="arrMonth[(new Date().getMonth()+n-4)]"  :class="{active:(index==(new Date().getMonth()+n-4))}" @click="xzyf((new Date().getMonth()+n-4),(n-1))"></li>
						</ul>
					</div>
					<div class="yjtj_xq">
                        <div class="item item_1">
                            <p v-text="oInfo.new_count"></p>
                            <span>新增会员</span>
                        </div>
                        <div class="item item_2">
                            <p v-text="oInfo.t_money"></p>
                            <span>发展积分</span>
                        </div>
                        <div class="item item_3">
                            <p v-text="oInfo.a_money"></p>
                            <span>非发展积分</span>
                        </div>
                    </div>
				</div>
			</div>
		</div>
		<div class="indexMain" v-if="oShow.xs">
			<div class="head">
				<div class="tx">
					<img src="../assets/avatar1.jpg">
					<i class="icons_5"></i>
				</div>
				<div class="hello">
					<p v-text="oData.name"></p>
					<p v-text="oData.salesrep_no"></p>
					<p><a href="javascript:;" @click="outLogin()">退出</a></p>
				</div>
				<div class="news">
					<router-link to="/h5/message/advisory" tag="a" ><img src="../assets/icons_6.png"><i v-if="isNew"></i></router-link>
				</div>
			</div>
			<div class="useInfo">
				<div class="item item_3">
					<router-link to="/h5/myMember" tag="a" >
						<img src="../assets/useInfo_3.jpg">
						<div class="itemMain">
							<p>我的会员<i></i></p>
							<h3 v-text="oData.bind_account_count"></h3>
						</div>
					</router-link>
				</div>
				<div class="item item_4">
					<router-link to="/h5/pointsDetails" tag="a" >
						<img src="../assets/useInfo_4.jpg">
						<div class="itemMain">
							<p>累计积分<i></i></p>			     
							<h3 v-text="isNaN(parseFloat(oData.total_money))?0:parseFloat(oData.total_moeny)"></h3>
						</div>
					</router-link>
				</div>
			</div>
			<div class="yjtj">
				<v-echarts :id="'main'" :options="echartsOptions1"></v-echarts>
					<div class="yjtjM">
						<div class="yf">
						<ul>
							<li v-for="n in 5" v-text="arrMonth[(new Date().getMonth()+n-4)]"  :class="{active:(index==(new Date().getMonth()+n-4))}" @click="xzyf((new Date().getMonth()+n-4),(n-1))"></li>
						</ul>
					</div>
					<div class="yjtj_xq">
                        <div class="item item_1">
                            <p v-text="oInfo.new_count"></p>
                            <span>新增会员</span>
                        </div>
                        <div class="item item_2">
                            <p v-text="oInfo.a_money"></p>
                            <span>获得积分</span>
                        </div>
                    </div>
				</div>
			</div>
		</div>
		<div class="indexMain" v-if="oShow.db">
			<div class="head">
				<div class="tx">
					<img src="../assets/avatar1.jpg">
					<i class="icons_5"></i>
				</div>
				<div class="hello">
					<p v-text="oData.salesmanager_name"></p>
					<p v-text="oData.salesmanager_no"></p>
					<p><a href="javascript:;" @click="outLogin()">退出</a></p>
				</div>
				<div class="news">
					<router-link to="/h5/message/advisory" tag="a" ><img src="../assets/icons_6.png"><i v-if="isNew"></i></router-link>
				</div>
			</div>
			<div class="useInfo">
				<div class="item item_3">
					<router-link to="/h5/myMember" tag="a" >
						<img src="../assets/useInfo_5.jpg">
						<div class="itemMain">
							<p>绑定的微医<i></i></p>
							<h3 v-text="oData.bind_we_count"></h3>
						</div>
					</router-link>
				</div>
				<div class="item item_4">
					<router-link to="/h5/pointsDetails" tag="a" >
						<img src="../assets/useInfo_4.jpg">
						<div class="itemMain">
							<p>累计积分<i></i></p>
							<h3 v-text="isNaN(parseFloat(oData.total_money))?0:parseFloat(oData.total_money)"></h3>
						</div>
					</router-link>
				</div>
			</div>
			<div class="yjtj">
				<v-echarts :id="'main'" :options="echartsOptions1"></v-echarts>
					<div class="yjtjM">
						<div class="yf">
						<ul>
							<li v-for="n in 5" v-text="arrMonth[(new Date().getMonth()+n-4)]"  :class="{active:(index==(new Date().getMonth()+n-4))}" @click="xzyf((new Date().getMonth()+n-4),(n-1))"></li>
						</ul>
					</div>
					<div class="yjtj_xq">
                        <div class="item item_1">
                            <p v-text="oInfo.new_count"></p>
                            <span>新增绑定微医</span>
                        </div>
                        <div class="item item_2">
                            <p v-text="oInfo.a_money"></p>
                            <span>获得积分</span>
                        </div>
                    </div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import {common,aMonth} from '@/assets/js/api'
import vEcharts from '@/components/echarts'
export default {
	data() {
		return {
			oShow:{
				ys:eval(sessionStorage.ys),
				wy:eval(sessionStorage.wy),
				xs:eval(sessionStorage.xs),
				db:eval(sessionStorage.db)
			},
			isNew:false,
			userType:0,
			oData:{},
			echartsOptions1:  {
				title: {    
	                text: '积分统计',
	                textStyle:{
	                	fontWeight:'normal'
	                } 
	            },
	            legend: {                  
	                show:true,
	                y:'bottom'
	            },
	            color:[
                   '#ffb28c',
                   '#8dc5fe', 
                   '#beea9f'
                ],
			    xAxis: {
			        type: 'category',
			        data: [aMonth[new Date().getMonth()-4],aMonth[new Date().getMonth()-3],aMonth[new Date().getMonth()-2],aMonth[new Date().getMonth()-1],aMonth[new Date().getMonth()]]
			    },
			    yAxis: {
			        type: 'value'
			    },
			    series: [{
			        data: [],
			        name:'非发展积分',
			        type: 'line',
			        smooth: true
			    },
			    {
			        data: [],
			        name:'发展积分',
			        type: 'line',
			        smooth: true
			    },
			    {
			        data: [],
			        name:'新增会员',
			        type: 'line',
			        smooth: true
			    }]
			},
			arrMonth:['','一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
			oInfo:{
                a_money:'',
                t_money:'',
                new_count:''
            },
			index:0,
			integral:0
		}
	},
	created(){
		this.userDateinfo();
		this.getUserType();
		this.userInfo();
		this.newsCount();

		if(this.oShow.xs || this.oShow.db){
			this.echartsOptions1.series.splice(1,1);
			this.echartsOptions1.series[0].name = '积分';
			if(this.oShow.db){
				this.echartsOptions1.series[1].name = '新增绑定微医';
			}
		}
	},
	methods: {
		newsCount(){
			let obj = {
		        user_id:sessionStorage.userId
		      }

		      common(obj,'/news/count').then((res) => {
		        if(res.code == 1){
		        	if(res.data>0){
		        		this.isNew = true;
		        	}else{
		        		this.isNew = false;
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
		xzyf(n,n2){
			this.index = n;
			
            if(this.oShow.xs || this.oShow.db){
            	this.oInfo.a_money = this.echartsOptions1.series[0].data[n2];
	            this.oInfo.new_count = this.echartsOptions1.series[1].data[n2];
            }else{
            	this.oInfo.a_money = this.echartsOptions1.series[0].data[n2];
	            this.oInfo.t_money = this.echartsOptions1.series[1].data[n2];
	            this.oInfo.new_count = this.echartsOptions1.series[2].data[n2];
            }
		},
		userDateinfo(){
			let that = this;
			let aSeries1 = [0,0,0,0,0];
			let aSeries2 = [0,0,0,0,0];
			let aSeries3 = [0,0,0,0,0];
			getDateinfo(0);
			getDateinfo(1);
			getDateinfo(2);
			getDateinfo(3);
			getDateinfo(4);



		    function getDateinfo(num){
	    		let d = new Date();
				let y = d.getFullYear();
				let m = d.getMonth()+1;

		    	let obj = {
					page:1,
			        type:that.userType,
			        id:sessionStorage.id,
			        year:y,
			        month:parseInt(m-num)
			    }

		    	common(obj,'/user/dateinfo').then((res) => {
		        	if(res.code == 1){
		        		if(that.oShow.xs || that.oShow.db){
			            	aSeries1[4-num]=res.data.a_money+res.data.t_money;
				        	aSeries2[1].data[4-num]=res.data.new_count;
			            }else{
			          //   	that.echartsOptions1.series[0].data[4-num]=res.data.a_money;
				         //    that.echartsOptions1.series[1].data[4-num]=res.data.t_money;
				        	// that.echartsOptions1.series[2].data[4-num]=res.data.new_count;


				        	aSeries1[4-num]=res.data.a_money;
				            aSeries2[4-num]=res.data.t_money;
				        	aSeries3[4-num]=res.data.new_count;


				        	if(that.oShow.wy && num == 0){
								that.integral = res.data.a_money + res.data.t_money;
							}
			            }


			            if(num == 4){
			            	that.echartsOptions1.series[0].data = aSeries1;
			            	that.echartsOptions1.series[1].data = aSeries2;
			            	that.echartsOptions1.series[2].data = aSeries3;
							let n = new Date().getMonth()+1;
							setTimeout(()=>{
								that.xzyf(n,4);
							},200)
			            }

		        	}else{
		        		if(num == 4){
		        			if(res.data == 'token失效，请重新登录'){
			        			alert(res.data)
			        		}else{
			        			alert(res.message)
			        		}
		        		}
		        	}
		      	})
	    	}
		},
		outLogin(){
			sessionStorage.h5Login = false;
	        sessionStorage.access_token = '';
	        sessionStorage.id = '';
	        sessionStorage.ys = '';
	        sessionStorage.wy = '';
	        sessionStorage.xs = '';
	        sessionStorage.db = '';
	        this.$router.push('/h5/login');
		},
		userInfo(){
		  let d = new Date();
	      let y = d.getFullYear();
	      let m = d.getMonth()+1;
	      let obj = {
	        type:this.userType,
	        id:sessionStorage.id,
	        year:y,
	        month:m
	      }

	      common(obj,'/user/info').then((res) => {
	        if(res.code == 1){
	          this.oData = res.data;
	          // this.account_list = res.data.account_list; 
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
	    }
	},
	components:{ 
	  vEcharts 
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{background: url('../assets/bj2.jpg') #1b1b27 left 3.08rem no-repeat; background-size: 100% auto; padding-bottom: 0.22rem;}
.head{height: 3.08rem; background: url('../assets/bj.jpg') no-repeat; background-size: 100% 100%; overflow: hidden;}
.head .tx{width: 1.7rem; height: 1.7rem; position: relative; margin-top: .65rem; margin-left: .97rem;float: left; }
.head .tx img{width: 1.6rem; height: 1.6rem; border-radius: 50%; border:.05rem solid #fec274;}
.head .tx i{position: absolute; top:.04rem; right: -.14rem; width: .54rem; height: .54rem; display: block; background: url('../assets/icons_5.png') no-repeat; background-size: 100% 100%;}
.head .hello{float: left; color: #fff; font-size:.5rem; margin-top:.86rem; margin-left:.6rem;}
.head .hello p{font-size:.4rem; margin-top: .24rem;}
.head .hello p:first-child{margin-top: 0;}
.head .hello p a{color: #fff;font-size: .44rem;}
.head .news{position: relative; height: .69rem;margin-top: 1.17rem; float: right; margin-right: 1.17rem;}
.head .news a{color: #fff;font-size: .44rem; display: inline-block; vertical-align: top; }
.head .news a:first-child{margin-right: .44rem;}
.head .news img{ width: .71rem; height: .69rem; }
.head .news img+i{position: absolute; width:.28rem; height: .28rem; top:-0.1rem; right: -0.1rem; background: red; border-radius: 50%;}
.level{/*height: 2.05rem;*/ height: auto; min-height: 1.61rem; overflow: hidden; box-sizing: border-box;}
.level>div{float: left; }
.level>i{float: left; width: 1.03rem; height: .98rem; display: block; background: url('../assets/icons_10.png') no-repeat; background-size: 100% 100%; margin-left: .76rem; margin-right: .45rem; margin-top: .5rem; margin-bottom: 0.55rem; }
.level>h3{ font-size: .44rem; color: #fff; font-weight: normal; margin-top: .53rem; }
.level>p{color:#636377; font-size: .4rem; margin-top: .1rem;}
.level .now{/*width: 3.43rem;*/ padding-left: 1.15rem; box-sizing: border-box; font-size: .44rem; color:#fec274; padding-top: .7rem;}
.schedule{width: 4.8rem; padding-top: .7rem;} 
.schedule .schedule_w{width: 100%; display: block; clear: both; height: .15rem; background:#1b1b1b; overflow: hidden;}
.schedule .schedule_w span{display: block; width: 62.4%; height: .15rem;background: url('../assets/icons_8.png') left top repeat-x; background-size: auto 100%; }
.schedule .schedule_s{overflow: hidden; margin-top: 0.1rem; font-size: .3rem;}
.schedule .schedule_s .s_has{float: left; color: #fdc274;}
.schedule .schedule_s .s_target{float: right;}
.level .next{font-size: .44rem;color: #cccccc; margin-left: .64rem; padding-top: .7rem;}
.level .next i{display: inline-block; width: .41rem; height: .41rem; background: url('../assets/icons_7.png') no-repeat; background-size: 100% 100%; margin-left: .5rem}
.useInfo{margin:0px .3rem; overflow: hidden; margin-top: .25rem;}
.useInfo .item{float: left; width: 50%; box-sizing: border-box; overflow: hidden; position: relative; margin-bottom:10px;}
.useInfo .item:nth-child(odd){padding-right: 5px;}
.useInfo .item:nth-child(even){padding-left: 5px;}
.useInfo .itemMain{position: absolute;top:0;left: 0px;}
.useInfo .item:nth-child(odd) .itemMain{padding-left: 15px;}
.useInfo .item:nth-child(even) .itemMain{padding-left: 20px;}
.useInfo .itemMain p{font-size: .36rem; color: #999; margin-top: 10px;}
.useInfo .itemMain p i{width: 6px; height: 10px; background: url('../assets/icons_9.png') no-repeat; background-size: 100% 100%; display: inline-block; margin-left: 7px;}
.useInfo .itemMain h3{font-size: .7rem; color: #333; font-weight: normal; margin-top: 3px;}
.useInfo .itemMain span{font-size: 12px; color: #333333; font-size: .36rem; margin-top:1px; display: block;}
.useInfo .item img{display: block; width: 100%; height: auto;}
.yjtj{margin:0px 10px; overflow: hidden;}
.yjtj>img{display: block; width: 100%; height: auto;}
.yjtj .yjtjM{overflow: hidden; background: #fff; margin-top: 10px;}
.yjtj .yf{margin-top: 10px;}
.yjtj .yf ul{display:flex; justify-content : space-around; border-bottom: 1px solid #dddddd; height: 44px;}
.yjtj .yf ul li{height: 44px;line-height: 44px; margin-bottom: -1px; border-bottom: 1px; font-size: .44rem;}
.yjtj .yf ul li.active{border-bottom: 1px solid red;}
.yjtj .yjtj_xq{overflow: hidden; height: 104px; display:flex; flex-wrap: nowrap;}
.yjtj .yjtj_xq .item{width:100%;text-align: center; }
.yjtj .yjtj_xq .item>*{display: block;}
.yjtj .yjtj_xq .item p{color: #333; font-size: .6rem; margin-top: 24px;}
.yjtj .yjtj_xq .item span{color: #999;font-size: .4rem; margin-top: 10px;}
</style>
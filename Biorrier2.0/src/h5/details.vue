<template>
	<div class="details">
		<div class="header">
			<a href="javascript:;" @click="aBack()"></a>
			消息详情
		</div>
		<div class="time" v-text="oJson.updated_at"></div>
		<div class="detailsContent">
			{{oJson.content}}
		</div>
	</div>
</template>
<script>
import {common} from '@/assets/js/api'
export default {
	data() {
		return {
            id:0,
            oJson:null
        }
	},
	created(){
		this.setxx();
	},
	methods: {
		setxx(){
			 let arr = this.$route.path.split('/');
          	 this.id = arr[arr.length-1];

          	 this.oJson = JSON.parse(sessionStorage.messageInfo);
             if(this.oJson.is_read == 0){
                let obj = {
                    user_id:sessionStorage.userId,
                    news_id:this.id,
                    is_read:1
                }

                common(obj,'/news/read').then((res) => {
                    if(res.code==1){
                        
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
	},
	destroyed(){}
	
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{height: 1.6rem; line-height: 1.6rem; background: #1e1f34; text-align: center; color: #fff; font-size: .5rem; overflow: hidden;}
.header a{width: .34rem; height: .6rem; background: url('../assets/icons_13.png') no-repeat; background-size: 100% 100%; display: block; float: left; margin-top:.54rem; margin-left: .82rem;}
.details{}
.details .time{background: #1e1f34; text-align: center; color: #515062; padding-bottom: 14px;margin-top: -9px; padding-left: 35px; font-size: .34rem}
.detailsContent{margin: 0px 20px; line-height: .8rem; font-size: .48rem; color: #333;padding: 16px 0px 20px 0px;}
.detailsContent p{text-indent: 2em;}
.detailsContent img{display: block; width: 100%; height: auto; margin: 20px 0px;}
</style>
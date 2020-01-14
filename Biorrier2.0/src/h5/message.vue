<template>
	<div class="message">
		<div class="header">
			<a href="javascript:;" @click="$router.push('/h5/index')"></a>
			消息中心
		</div>
		<div class="tab">
			<ul>
				<router-link to="/h5/message/advisory" tag="li" :class="{active: $route.path =='/h5/message/advisory' ? true :false }">活动咨询</router-link>
				<router-link to="/h5/message/notice" tag="li" :class="{active: $route.path =='/h5/message/notice' ? true :false }">官方通知</router-link>
			</ul>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
export default {
	data() {
		return {}
	},
	created() {},
	methods: {
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{height: 1.6rem; line-height: 1.6rem; background: #1e1f34; text-align: center; color: #fff; font-size: .5rem; overflow: hidden;}
.header a{width: .34rem; height: .6rem; background: url('../assets/icons_13.png') no-repeat; background-size: 100% 100%; display: block; float: left; margin-top:.54rem; margin-left: .82rem;}
.message{background: #fff;}
.tab{ overflow: hidden;}
.tab ul{height: 1.45rem; border-bottom: 1px solid #eee; display:flex; justify-content : space-around;}
.tab ul li{line-height: 1.44rem; margin-bottom: -1px; border-bottom: 1px; cursor: pointer; color: #999; font-size: .48rem;}
.tab ul li.active{border-bottom: 1px solid red; color: #333;}
</style>
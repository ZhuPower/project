<template>
  <div class="distributionOrder"  v-if="((aMenuId.indexOf(1)>-1)?true:false)">
    <div class="tabHead">
  		<router-link to="/admin/distributionOrder/doctorOrder?page=1" tag="a" :class="{active: ($route.path.indexOf('/admin/distributionOrder/doctorOrder') >-1 ? true :false)}">Y1S1订单</router-link>
  		<router-link to="/admin/distributionOrder/TmallOrder?page=1" tag="a" :class="{active: ($route.path.indexOf('/admin/distributionOrder/TmallOrder') >-1 ? true :false)}">天猫订单</router-link>
    </div>
    <div class="tabCon">
		 <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
export default {
  data () {
    return {}
  },
  created(){if(this.aMenuId.indexOf(1)<0){this.$router.push({path:'/404'});}},
  computed:{
    ...mapState(['aMenuId'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

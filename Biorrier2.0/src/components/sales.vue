<template>
  <div class="sales" v-if="((aMenuId.indexOf(4)>-1)?true:false)">
    <div class="tabHead" v-if="isTabHead">
      <router-link to="/admin/distributionConfiguration/sales/proposalGoods?page=1" tag="a" :class="{active: ($route.path == '/admin/distributionConfiguration/sales/proposalGoods' ? true :false)}">CF商品规则</router-link>
      <router-link to="/admin/distributionConfiguration/sales/notProposalGoods?page=1" tag="a" :class="{active: ($route.path == '/admin/distributionConfiguration/sales/notProposalGoods' ? true :false)}">非CF商品规则</router-link>
    </div>
    <div class="tabCon">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  data () {
    return {}
  },
  watch: {
  },
  created(){if(this.aMenuId.indexOf(4)<0){this.$router.push({path:'/404'});}},
  computed:{
    ...mapState(['isTabHead','aMenuId'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

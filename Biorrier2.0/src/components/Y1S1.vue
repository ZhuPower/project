<template>
  <div class="y1s1" v-if="((aMenuId.indexOf(3)>-1)?true:false)">
    <div class="tabHead" v-if="isTabHead">
      <router-link to="/admin/distributionConfiguration/Y1S1/doctorLevel" tag="a" :class="{active: ($route.path == '/admin/distributionConfiguration/Y1S1/doctorLevel' ? true :false)}">Y1S1会籍管理</router-link>
      <router-link to="/admin/distributionConfiguration/Y1S1/proposalGoods?page=1" tag="a" :class="{active: ($route.path.indexOf('/admin/distributionConfiguration/Y1S1/proposalGoods') >-1 ? true :false)}">CF商品规则</router-link>
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
  created(){if(this.aMenuId.indexOf(3)<0){this.$router.push({path:'/404'});}},
  computed:{
    ...mapState(['isTabHead','aMenuId'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

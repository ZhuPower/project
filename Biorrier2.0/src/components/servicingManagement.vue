<template>
  <div class="servicingManagement" v-if="((aMenuId.indexOf(8)>-1)?true:false)">
    <div class="tabHead" v-if="isTabHead">
      <router-link to="/admin/personnelManagement/servicingManagement/cooperativeDoctor?page=1" tag="a" :class="{active: ($route.path == '/admin/personnelManagement/servicingManagement/cooperativeDoctor' ? true :false)}">合作Y1S1</router-link>
      <router-link to="/admin/personnelManagement/servicingManagement/saleser?page=1" tag="a" :class="{active: ($route.path == '/admin/personnelManagement/servicingManagement/saleser' ? true :false)}">销售人员</router-link>
      <router-link to="/admin/personnelManagement/servicingManagement/microBusiness?page=1" tag="a" :class="{active: ($route.path == '/admin/personnelManagement/servicingManagement/microBusiness' ? true :false)}">微商Y1S1</router-link>
      <router-link to="/admin/personnelManagement/servicingManagement/salesRepresentative?page=1" tag="a" :class="{active: ($route.path == '/admin/personnelManagement/servicingManagement/salesRepresentative' ? true :false)}">销售代表</router-link>
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
  created(){if(this.aMenuId.indexOf(8)<0){this.$router.push({path:'/404'});}},
  watch: {
  },
  computed:{
    ...mapState(['isTabHead','aMenuId'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

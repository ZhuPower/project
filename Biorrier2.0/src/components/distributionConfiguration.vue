<template>
  <div class="distributionConfiguration" v-if="((aMenuId.indexOf(2)>-1)?true:false)">
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
export default {
  data () {
    return {}
  },
  created(){if(this.aMenuId.indexOf(2)<0){this.$router.push({path:'/404'});}},
  computed:{
    ...mapState(['aMenuId'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

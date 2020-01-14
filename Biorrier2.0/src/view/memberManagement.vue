<template>
  <div class="memberManagement" v-if="((aMenuId.indexOf(9)>-1)?true:false)">
    <ruleList></ruleList>
  </div>
</template>

<script>
import ruleList from '@/components/listWrap'
import {mapState,mapMutations} from 'vuex';
export default {
  data () {
    return {}
  },
  updated(){},
  created(){if(this.aMenuId.indexOf(9)<0){this.$router.push({path:'/404'});}},
  methods: {},
  computed:{
    ...mapState(['aMenuId'])
  },
  components: { 
    ruleList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.memberManagement{padding: 46px; padding-top: 16px;}
</style>

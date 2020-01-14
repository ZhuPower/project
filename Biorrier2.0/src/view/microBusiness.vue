<template>
  <div class="microBusiness">
    <ruleList v-if="!isDetails"></ruleList>
    <router-view :sPath="sPath"></router-view>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import ruleList from '@/components/listWrap'
export default {
  data () {
    return {
      sPath:'/admin/personnelManagement/servicingManagement/microBusiness'
    }
  },
  created(){},
  watch: {},
  computed:{
    ...mapState(['isDetails'])
  },
  methods: {},
  components: {
    ruleList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

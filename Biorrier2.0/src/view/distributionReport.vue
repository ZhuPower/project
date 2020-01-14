<template>
  <div class="distributionReport" v-if="((aMenuId.indexOf(15)>-1)?true:false)">
    <ruleList></ruleList>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import ruleList from '@/components/listWrap'
export default {
  data () {
    return {}
  },
  created(){},
  watch: {},
  computed:{
    ...mapState(['aMenuId'])
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

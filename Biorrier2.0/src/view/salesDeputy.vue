<template>
  <div class="salesDeputy" v-if="((aMenuId.indexOf(6)>-1)?true:false)">
    <div class="microH" v-if="isShow">
      <h3>资格条件</h3>
      <div class="microHR">
        <P>最近三个月：新增会员人数 > 0  /  营业额  >  5000</P>
        <a href="javascript:;">
          <i class="icons icon_21"></i>
          编辑
        </a>
      </div>
    </div>
    <div class="microC proposalProduct">
      <ruleList v-if="!isDetails"></ruleList>
      <router-view :sPath="sPath"></router-view>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import ruleList from '@/components/listWrap'
export default {
  data () {
    return {
      sPath:'/admin/distributionConfiguration/salesDeputy',
      isShow:true
    }
  },
  created(){if(this.aMenuId.indexOf(6)<0){this.$router.push({path:'/404'});}},
  watch: {},
  computed:{
    ...mapState(['isDetails','aMenuId'])
  },
  methods: {},
  components: {
    ruleList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.salesDeputy{}
.salesDeputy .microH{height: 67px; line-height: 67px; border-bottom:1px solid #eeeeee; overflow: hidden; padding:0px 46px; }
.salesDeputy .microH h3{float: left; color: #676a7b; font-size: 14px;}
.salesDeputy .microH .microHR{float: right;}
.salesDeputy .microH .microHR>*{display: inline-block;}
.salesDeputy .microH .microHR>a{color: #6b6a7a; text-decoration: underline;margin-left: 30px;}
.salesDeputy .microH .microHR>a i{margin-right: 8px;}
.salesDeputy .microC{padding:0px 46px;}
</style>

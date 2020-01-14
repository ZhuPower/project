<template>
  <div class="listWrap">
    <listHead :oShow="oShow"></listHead>
    <listMain :oShow="oShow" @setShow="setShow"></listMain>
  </div>
</template>

<script>
import listHead from '@/components/listHead'
import listMain from '@/components/listMain'

export default {
  data () {
    return {
      oShow:{
        doctorOrder:false,
        mallOrder:false,
        TmallOrder:false,
        proposalGoods:false,
        cooperativeDoctor:false,
        saleser:false,
        microBusiness:false,
        salesRepresentative:false,
        memberManagement:false,
        messageManagement:false,
        distributionReport:false,
        pointReport:false,
        gradeStatistics:false,
        gradeReport:false,
        gradeDoctors:false
      }
    }
  },
  created(){
    this.fShow();
  },
  mounted(){},
  watch: {},
  methods: {
    setShow(){
      this.$emit('setShow',true);
    },
    fShow(){

      let arr = [
        '/distributionOrder/doctorOrder'
      ]

      let arr2 = [
        '/distributionOrder/mallOrder'
      ]
      let arr20 = [
        '/distributionOrder/TmallOrder'
      ]

      let arr3 = [
        '/distributionConfiguration/Y1S1/proposalGoods',
        '/distributionConfiguration/Y1S1/notProposalGoods',
        '/distributionConfiguration/sales/proposalGoods',
        '/distributionConfiguration/sales/notProposalGoods',
        '/distributionConfiguration/microDoctor',
        '/distributionConfiguration/salesDeputy'
      ]

      let arr4 = [
        '/personnelManagement/servicingManagement/cooperativeDoctor'
      ]

      let arr5 = [
        '/personnelManagement/servicingManagement/saleser'
      ]

      let arr6 = [
        '/personnelManagement/servicingManagement/microBusiness'
      ]

      let arr7 = [
        '/personnelManagement/servicingManagement/salesRepresentative'
      ]

      let arr8 = [
        '/personnelManagement/memberManagement'
      ]

      let arr9 = [
        '/systemConfiguration/message'
      ]

      let arr10 = [
        '/reportStatistics/distributionReport'
      ]

      let arr11 = [
        '/reportStatistics/pointReport'
      ]

      let arr12 = [
        '/reportStatistics/gradeStatistics'
      ]

      let arr13 = [
        '/reportStatistics/gradeReport'
      ]

      let arr14 = [
        '/reportStatistics/gradeDoctors'
      ]

      this.oShow.doctorOrder = this.getBoolean(arr); 
      this.oShow.mallOrder = this.getBoolean(arr2); 
      this.oShow.TmallOrder = this.getBoolean(arr20); 
      this.oShow.proposalGoods = this.getBoolean(arr3); 
      this.oShow.cooperativeDoctor = this.getBoolean(arr4); 
      this.oShow.saleser = this.getBoolean(arr5); 
      this.oShow.microBusiness = this.getBoolean(arr6); 
      this.oShow.salesRepresentative = this.getBoolean(arr7); 
      this.oShow.memberManagement = this.getBoolean(arr8); 
      this.oShow.messageManagement = this.getBoolean(arr9); 
      this.oShow.distributionReport = this.getBoolean(arr10); 
      this.oShow.pointReport = this.getBoolean(arr11); 
      this.oShow.gradeStatistics = this.getBoolean(arr12); 
      this.oShow.gradeReport = this.getBoolean(arr13); 
      this.oShow.gradeDoctors = this.getBoolean(arr14); 

      
    }
  },
  components: {
    listHead,
    listMain
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.listWrap{font-size: 12px; margin-top: 1px; overflow: hidden;}
</style>

<template>
  <div>
    <div :id="id" class="main"></div>
  </div>
</template>
 
<script>
import * as echarts from 'echarts';
export default {
  props: ['options','id'],
  mounted() {
    let timeId = setInterval(()=>{
        let len = this.options.series[0].data.length;
        if(len>0){
            clearInterval(timeId);
            var myChart = echarts.init(document.getElementById(this.id));
            myChart.setOption(this.options);
        }
    },200)
  },
  created(){
  }
}
</script>
 
<style scoped>
.main{width: 100%;height: 8.74rem; background: #fff;padding-left: .14rem; padding-top: .3rem; padding-bottom: .3rem; }
</style>
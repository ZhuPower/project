<template>
  <div class="leftWrap">
    <div class="logoMain">
      伊美聚合平台
    </div>
    <div class="navWrap">
      <ul>
        <li v-for="(item,index) in aMenu" :class="{active: ($route.path.indexOf(aPath2[item.id]) >-1 ? true :false)}">
          <i class="icon_active" v-if="item.id == 1"></i>
          <router-link :to="(item.child.length>0)?(aPath[item.child[0].id]):(aPath[item.id])" tag="span"><i :class="['icons','icon_0'+(index+1)]"></i>{{item.name}}</router-link>
          <ul :class="{show: ($route.path.indexOf(aPath2[item.id]) >-1 ? true :false)}" v-if="item.child.length>0" :style="{height:(($route.path.indexOf(aPath2[item.id]) >-1) ? (item.child.length*40+'px') :'0px')}">
            <router-link :to="aPath[json.id]" tag="li" :class="{active: ($route.path.indexOf(aPath2[json.id]) >-1 ? true :false)}" v-for="json in item.child" :key="json.id"><i class="icon_active"></i><span>{{json.name}}</span></router-link>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex';
  export default {
    data() {
      return {
        aPath:[
          '',
          '/admin/distributionOrder/doctorOrder?page=1',
          '/admin/distributionConfiguration',
          '/admin/distributionConfiguration/Y1S1',
          '/admin/distributionConfiguration/sales/proposalGoods?page=1',
          '/admin/distributionConfiguration/microDoctor?page=1',
          '/admin/distributionConfiguration/salesDeputy?page=1',
          '/admin/personnelManagement/servicingManagement/cooperativeDoctor?page=1',
          '/admin/personnelManagement/servicingManagement/cooperativeDoctor?page=1',
          '/admin/personnelManagement/memberManagement?page=1',
          '/admin/systemConfiguration/organizationManagement?page=1',
          '/admin/systemConfiguration/organizationManagement?page=1',
          '/admin/systemConfiguration/roleManagement',
          '/admin/systemConfiguration/message?page=1',
          '/admin/reportStatistics',
          // '/admin/reportStatistics/distributionReport?page=1&year='+new Date().getFullYear()+'&month='+(new Date().getMonth()),
          // '/admin/reportStatistics/pointReport?page=1&year='+new Date().getFullYear()+'&month='+(new Date().getMonth()),
          // '/admin/reportStatistics/gradeStatistics?page=1&start_date='+new Date().getFullYear()+'-'+new Date().getMonth()+'&end_date='+new Date().getFullYear()+'-'+(new Date().getMonth()+1),
          // '/admin/reportStatistics/gradeReport?page=1&year='+new Date().getFullYear()+'&month='+(new Date().getMonth()),
          '',
          '',
          '',
          '',
          '/admin/reportStatistics/gradeDoctors?page=1'
        ],
        aPath2:[
          '',
          '/admin/distributionOrder',
          '/admin/distributionConfiguration',
          '/admin/distributionConfiguration/Y1S1',
          '/admin/distributionConfiguration/sales/',
          '/admin/distributionConfiguration/microDoctor',
          '/admin/distributionConfiguration/salesDeputy',
          '/admin/personnelManagement',
          '/admin/personnelManagement/servicingManagement',
          '/admin/personnelManagement/memberManagement',
          '/admin/systemConfiguration',
          '/admin/systemConfiguration/organizationManagement',
          '/admin/systemConfiguration/roleManagement',
          '/admin/systemConfiguration/message',
          '/admin/reportStatistics',
          '/admin/reportStatistics/distributionReport',
          '/admin/reportStatistics/pointReport',
          '/admin/reportStatistics/gradeStatistics',
          '/admin/reportStatistics/gradeReport',
          '/admin/reportStatistics/gradeDoctors'
        ]
      }
    },
    watch: {},
    computed:{
      ...mapState(['aMenu','aMenuId'])
    },
    created() {
      var d = new Date();
      var y = d.getFullYear();
      var m = d.getMonth();
      var y1;

      if(m==0){
        y1 = y;
        m = 12;
        y = y-1;
      }

      this.aPath[15] = '/admin/reportStatistics/distributionReport?page=1&year='+y+'&month='+m;
      this.aPath[16] = '/admin/reportStatistics/pointReport?page=1&year='+y+'&month='+m;
      this.aPath[17] = '/admin/reportStatistics/gradeStatistics?page=1&year='+y1,
      this.aPath[18] = '/admin/reportStatistics/gradeReport?page=1&year='+y+'&month='+m;
      // console.log(this.aMenu)
      // console.log(this.aMenuId)
    },
    methods: {

    },
    components: {}
  }
</script>


<style scoped>
.leftWrap{width: 15.806%; max-width: 294px;height:auto; background: #43464d; float: left; padding-bottom:9999px; margin-bottom:-9999px;}
.logoMain{width: 100%;height: 147px; height: auto; text-align: center; line-height: 147px; color: #fff; font-size: .24rem; }
.logoMain img{width:100%;height:auto;display: block;}
.navWrap{color: #d7dbe4;}
.navWrap ul{width: 100%;height: auto;}
.navWrap ul li{min-height: 59px;font-size: 14px; position: relative; cursor: pointer; overflow: hidden;}
.navWrap ul li span{display: block; height: 59px; line-height: 59px;padding-left: 34px; width: 100%; box-sizing: border-box;}
.navWrap>ul>li>span>i.icons{margin-right: 16px;}
.navWrap ul li i.icon_active{width: 6px; height: 22px; display: block; background: #da0032; float: left; display: none; position: absolute; left: 0; top:50%;margin-top: -11px;}
.navWrap>ul>li.active{background: #494e54;}
.navWrap>ul li.active>i.icon_active{display: block;}
.navWrap ul li ul{ height: 0px; transition: all .5s;}
.navWrap ul li ul li{min-height: 40px;}
.navWrap ul li ul li span{padding-left: 83px;height: 40px;line-height: 40px;}
.navWrap ul li ul li.active>span{color: #fff; font-weight: bold;}
.navWrap ul li ul.show{margin-bottom: 15px; margin-top: -4px; transition: all .5s;}
</style>

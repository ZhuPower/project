<template>
  <div class="layout">
    <navigation></navigation>
    <div class="content" id="content">
      <locationNavigation></locationNavigation>
      <div class="contentMain" ref="contentMain">
        <router-view></router-view>
      </div>
    </div>
    <point></point>
  </div>
</template>

<script>
import navigation from '@/components/navigation'
import locationNavigation from '@/components/locationNavigation'
import point from '@/components/point'
import {mapState,mapMutations} from 'vuex';
export default {
  watch: {
    $route(to,from){
      setTimeout(() => {this.setHeight();}, 0);
    }
  },
  created() {
    this.getMenu();
    setTimeout(() => {this.setHeight();}, 0);
    if(!sessionStorage.storeList){
      this.orderStore((res,res2)=>{
        sessionStorage.storeList = JSON.stringify(res);
        sessionStorage.storeList2 = JSON.stringify(res2);
      });
    }
  },
  methods: {
    ...mapMutations(['setMenuId','setMenu','setPoint']),
    setHeight() {
      let h1 = document.documentElement.clientHeight;
      let h2 = document.body.clientHeight;
      let h3 = 72+46+46;
      this.$refs.contentMain.children[0].style.minHeight = (h1-h3) +'px';
      let oDiv = this.$refs.contentMain.children[0].children[0];
      if(oDiv.className == 'organizationManagement' || oDiv.className == 'roleManagement'){
        oDiv.style.minHeight = (h1-h3) +'px';
      }
    }
  },
  components: { 
    navigation, 
    locationNavigation,
    point
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

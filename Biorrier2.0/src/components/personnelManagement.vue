<template>
  <div class="personnelManagement" v-if="((aMenuId.indexOf(7)>-1)?true:false)">
    <router-view></router-view>
  </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex';
  export default {
    data() {
      return {}
    },
    watch: {},
    computed:{
      ...mapState(['aMenuId'])
    },
    created(){if(this.aMenuId.indexOf(7)<0){this.$router.push({path:'/404'});}},
    methods: {},
    components: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

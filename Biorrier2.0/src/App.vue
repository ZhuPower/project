<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {}
  },
  watch: {
    $route(to,from){
      sessionStorage.path = this.$route.path;
      let str = to.path.substring(0,4);
      if(str == '/h5/'){
        document.body.style.background = 'none';
        if(!eval(sessionStorage.h5Login)){
          this.$router.push('/h5/login');
        }
      }else{
        if(this.$route.path != '/admin/login'){
          document.body.style.background = '#ebeef3';
          if(!eval(sessionStorage.adminLogin)){
            this.$router.push('/admin/login');
          }
        }
      }
    }
  },
  created() {
    //sessionStorage.adminLogin = true;
    //sessionStorage.h5Login = true;

    let str = this.$route.path.substring(0,4);
    if(str == '/h5/'){
      document.body.style.background = 'none';
      if(!eval(sessionStorage.h5Login)){
        this.$router.push('/h5/login');
      }
    }else{
      if(this.$route.path != '/admin/login'){
        document.body.style.background = '#ebeef3';
        if(!eval(sessionStorage.adminLogin)){
          this.$router.push('/admin/login');
        }
      }
    }
  },
  methods: {
  },
  components: {}
}
</script>
<style type="text/css">
i.icons,a.icons_b:before,a.icons_a:after{display: inline-block;background-image:url('./assets/icon.png'); vertical-align:middle;}
.xlsj:after{display: inline-block;background-image:url('./assets/icons_16.png'); vertical-align:middle; content:""; background-size: 100% 100%;}
a.indexBtn{display:block;background-image:url('./assets/icons_up2.png'); background-size: 100% 100%; vertical-align:middle;width: 14px; height: 7px;}
.indexBtn.stop{background-image:url('./assets/icons_up1.png'); background-size: 100% 100%;}
i.icon_05{background-image:url('./assets/reportStatistics.png'); background-size: 100% 100%;}
</style>

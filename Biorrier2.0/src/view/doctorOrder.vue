<template>
  <div class="doctorOrder">
    <inquireList></inquireList>
  </div>
</template>

<script>
import inquireList from '@/components/listWrap'
export default {
  data () {
    return {}
  },
  created(){
  	if(this.$route.path == '/admin/distributionOrder/doctorOrder'){
  		this.$router.push(this.$route.path+'?page=1');
  	}
  },
  components: { 
    inquireList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

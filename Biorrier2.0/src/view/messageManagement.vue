<template>
  <div class="messageManagement" v-if="((aMenuId.indexOf(13)>-1)?true:false)">
    <div class="messageH">
      <h3>消息列表</h3>
      <a href="javasceipt:;" class="addMessage icons_b" @click="addMessage()">新增消息</a>
    </div>
    <div class="messageC">
      <ruleList></ruleList>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
import ruleList from '@/components/listWrap'
export default {
  data () {
    return {
    }
  },
  updated(){
  },
  created(){if(this.aMenuId.indexOf(13)<0){this.$router.push({path:'/404'});}},
  watch:{
    
  },
  computed:{
    ...mapState(['oPoint','aMenuId'])
  },
  methods: {
    ...mapMutations(['setPoint','setEditMeg2']),
    addMessage(){
      this.setEditMeg2(true);
    }
  },
  components: {
    ruleList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.messageManagement{overflow: hidden; border-radius: 20px; font-size: 14px;}
.messageManagement .messageH{height: 67px; line-height: 67px; border-bottom:1px solid #eeeeee; overflow: hidden; padding:0px 46px; overflow: hidden;}
.messageManagement .messageH h3{float: left; color: #676a7b; font-size: 14px;}
.messageManagement .messageH .addMessage:before{width: 21px; height: 21px; background-position: -8px -96px;margin-right: 12px; content:""; margin-top: -2px;}
.messageManagement .messageH .addMessage{width: 134px; height: 34px; line-height: 34px; text-align: center; border-radius:17px;color: #fff; font-size: 15px;float: right; margin-right: 16px; margin-top: 16px;background: #da0032;}
.messageC{padding: 0px 46px;}
</style>

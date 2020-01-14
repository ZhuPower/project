<template>
  <div class="pageBar">
    <div class="zj">总共<span v-text="lastPage"></span>页<span v-text="total"></span>条记录</div>
    <div class="xy">
      <a href="javascript:;" @click="prevPage(pageIndex)"><i class="icons icon_9"></i></a>
      <a href="javascript:;" v-for="index in pageLen" v-text="index" :class="{active:index == pageIndex}" @click="setPage(index)" v-if="index>(pageLen-5)"></a>
      <a href="javascript:;"  @click="nextPage(pageIndex)"><i class="icons icon_10"></i></a>
    </div>
    <div class="tz">
      <span>跳至</span>
      <input type="text" v-model="jumpPage" @keyup.enter="jumpPageFn()">
      <span>页</span>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
export default {
  data () {
    return {
       pageNum:5,
       pageLen:0,
       pageIndex:1,
       jumpPage:1,
       oParameter:null
    }
  },
  props: ['total','lastPage'],
  computed:{
    ...mapState(['oParameter2'])
  },
  watch:{
      oParameter(){
        this.pageIndex = parseInt(this.oParameter.page);
        let time_id = setInterval(()=>{
          if(this.lastPage){
            clearInterval(time_id);
            this.pageNum = parseInt(this.lastPage);
            if(this.pageIndex<5){
              this.pageLen = parseInt((this.pageNum>=5) ? 5 : this.pageNum);
            }else{
              this.pageLen = parseInt(this.pageIndex);
            }
          }
        },200)
      },
      oParameter2(){
        //console.log(this.oParameter2)
        this.oParameter = this.oParameter2;
      }
  },
  created() {
    this.getParameter();
    this.pageIndex = parseInt(this.oParameter.page);
    let time_id = setInterval(()=>{
      if(this.lastPage){
        clearInterval(time_id);
        this.pageNum = parseInt(this.lastPage);
        if(this.pageIndex<5){
          this.pageLen = parseInt((this.pageNum>=5) ? 5 : this.pageNum);
        }else{
          this.pageLen = parseInt(this.pageIndex);
        }
      }
    },200)
    
  },
  methods: {
    setPage(n){
      let str = this.$route.path+'?';
      //delete this.oParameter.pageNum;
      this.oParameter.page = n;
      this.pageIndex = n;
      for(let key in this.oParameter){
        str +=key+'='+this.oParameter[key]+'&'
      }
      str = str.slice(0,-1);
      this.$router.push(str)
      this.$emit('setPage');
    },
    prevPage(n){
      let num = parseInt(n)>1?(parseInt(n)-1):1;
      if(num<=(this.pageLen-5)){
        this.pageLen = this.pageLen-1;
      }
      this.setPage(num);
    },
    nextPage(n){
      let num = parseInt(n)<this.pageNum?(parseInt(n)+1):this.pageNum;
      if(num>this.pageLen){
        this.pageLen = num;
      }
      this.setPage(num);
    },
    jumpPageFn(){
      if(parseInt(this.jumpPage)>parseInt(this.pageNum)){
        this.jumpPage = parseInt(this.pageNum)
      }
      
      if(parseInt(this.jumpPage)>this.pageLen){
        this.pageLen = parseInt(this.jumpPage);
      }else if(parseInt(this.jumpPage)<=(this.pageLen-5)){
        this.pageLen = parseInt(this.jumpPage)+4;
      }
      this.setPage(parseInt(this.jumpPage));
    }
  },
  components: { 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pageBar{text-align: right; padding-right: 26px; color:#676a7b; margin: 40px 0px;}
.pageBar>*{display: inline-block; vertical-align: middle;}
.pageBar>.zj{margin-right: 14px;}
.pageBar>.xy{overflow:hidden;}
.pageBar>.xy>a{display: block; float: left; width: 28px; height: 27px; text-align: center; line-height: 27px; border:1px solid #dcdcdc;color:#676a7b; border-radius: 4px; margin-right: 4px;}
.pageBar>.xy>a.active{ color: #fff; background:#9193aa;}
.pageBar>.tz{}
.pageBar>.tz>*{margin-left: 8px;}
.pageBar>.tz input{width: 39px; height: 27px; text-align: center; line-height: 27px; background: none; border:1px solid #dcdcdc;color:#676a7b; color:#676a7b;}
</style>

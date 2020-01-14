<template>
  <div class="addRoleWrap">
    <div class="addRoleH">
        <div class="addRoleH-right">
            <a href="javascript:;" class="qx" @click="close()">取消</a>
            <a href="javascript:;" class="qr" @click="confirm()">确认</a>
        </div>
        <div class="addRoleH-left">
            <ul>
                <li>
                    <span><i>*</i>角色名称：</span>
                    <input type="text" placeholder="运营" class="text1" v-model="oData.name">
                </li>
                <li>
                    <span><i>*</i>角色说明：</span>
                    <textarea class="text2" placeholder="角色" maxlength="1000" v-model="oData.remarks"></textarea>
                    <i>还能输入{{1000-oData.remarks.length}}字</i>
                </li>
            </ul>
        </div>
    </div>
    <div class="addRoleC">
        <ul>
          <li v-for="(item,index) in oMenu">
            <h3>
                <label>
                  <input type="checkbox"  @click="checkAllOrder(item.id,index)" v-model="checkedArr[index]">
                  <i class="icons icon_17"></i>
                  <i class="icons icon_18"></i>
                </label>
                <span @click="showInfo($event)">{{item.name}}</span>
            </h3>
            <div class="pDiv">
              <p v-for="obj in item.child">
                  <label>
                    <input type="checkbox" v-model="checkModel['list_'+index]" :value="obj">
                    <i class="icons icon_17"></i>
                    <i class="icons icon_18"></i>
                  </label>
                  {{obj.name}}
                  <a href="javascript:;" class="ckddxq">查看{{obj.name}}</a>
              </p>
            </div>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
export default {
  data () {
    return {
      oMenu:[],
      oData:{
        name:'',
        remarks:''
      },
      checkedArr:[],
      checkModel:{
        list_0:[],
        list_1:[],
        list_2:[],
        list_3:[],
        list_4:[]
      },
      sortArr:[],
      menuArr:[]
    }
  },
  props: ['isDetails'],
  computed:{
    ...mapState(['oPoint'])
  },
  created(){
      if(!this.isDetails){
          this.$router.push('/admin/systemConfiguration/roleManagement')
      }else{
          this.menuList();
          if(localStorage.roleInfo){
            this.oData = JSON.parse(localStorage.roleInfo);
          }
          //this.getData()
      }
  },
  watch: {
    'checkModel.list_0'(str1,str2){
      this.getModel(0);
    },
    'checkModel.list_1'(str1,str2){
      this.getModel(1);
    },
    'checkModel.list_2'(str1,str2){
      this.getModel(2);
    },
    'checkModel.list_3'(str1,str2){
      this.getModel(3);
    }
  },
  methods: {
    ...mapMutations(['setPoint']),
    checkAllOrder(id,num){
      if(this.checkedArr[num]){
        this.checkModel['list_'+num] = [];
      }else{
        this.sortArr[num].forEach((item)=>{
          if(this.checkModel['list_'+num].indexOf(item)==-1){
            this.checkModel['list_'+num].push(item)
          }
        })
      }
    },
    getModel(n){
      if((this.checkModel['list_'+n].length == this.sortArr[n].length) && (this.sortArr[n].length !=0)){
        this.checkedArr[n] = true;
      }else{
        this.checkedArr[n] = false;
      }
    },
    confirm(){
      if(this.oData.name){
        if(this.oData.remarks){

          let arr = [];

          for(let i=0;i<this.menuArr.length;i++){
            if(i==0 && this.checkedArr[0]){
              arr.push(this.menuArr[i])
            }else{
              if(this.checkModel['list_'+i].length>0){
                for(let ii=0;ii<this.checkModel['list_'+i].length;ii++){
                  let josn = {}
                  josn.id = this.checkModel['list_'+i][ii].id;
                  josn.name = this.checkModel['list_'+i][ii].name;
                  this.menuArr[i].child.push(josn)
                }
                arr.push(this.menuArr[i])
              }
            }
          }

          console.log(arr);
          
          if(arr.length>0){
            if(localStorage.roleInfo){
              this.roleUpdate(JSON.stringify(arr));
            }else{
              this.createRole(JSON.stringify(arr));
            }
          }else{
            this.setPoint({type:0,pop:true,pointWord:'请设置权限'});
          }
        }else{
          this.setPoint({type:0,pop:true,pointWord:'请输入角色说明'});
        }
      }else{
        this.setPoint({type:0,pop:true,pointWord:'请输入角色名称'});
      }
    },
    close(){
      this.$router.push('/admin/systemConfiguration/roleManagement')
    },
    showInfo(e){
      let obj = e.target;
      let oLi = obj.parentNode.parentNode;
      let oDiv = oLi.children[1];

      let n = oDiv.children.length;
      let _h = n*66;

      if(oLi.classList.toggle('show')){
        oDiv.style.height = _h + 'px';
      }else{
        oDiv.style.height = '0px';
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.addRoleWrap{padding: 46px;}
.addRoleWrap .addRoleH{overflow: hidden;}
.addRoleWrap .addRoleH .addRoleH-left{width: auto; margin-right: 320px;}
.addRoleWrap .addRoleH .addRoleH-left ul{font-size: 14px; color: #686a79;}
.addRoleWrap .addRoleH .addRoleH-left ul li{overflow: hidden; margin-bottom: 21px;}
.addRoleWrap .addRoleH .addRoleH-left ul li span{float: left;height: 36px; line-height: 36px; display: block;}
.addRoleWrap .addRoleH .addRoleH-left ul li span i{color: red; margin-right: 8px; font-style: normal;}
.addRoleWrap .addRoleH .addRoleH-left ul li input{float: left; height: 34px; width: 80%; background: none; border: 1px solid #dcdcdc; border-radius: 5px; color: #686a79; text-indent: 14px;}
.addRoleWrap .addRoleH .addRoleH-left ul li textarea{float: left; line-height: 24px; min-height: 92px; width: 80%; background: none; border: 1px solid #dcdcdc; border-radius: 5px; color: #686a79; text-indent: 14px;}
.addRoleWrap .addRoleH .addRoleH-left ul li textarea+i{display: block; font-style: normal;width: 100%;box-sizing: border-box; padding-left: 85px; clear: both; padding-top: 16px;}
.addRoleWrap .addRoleH .addRoleH-right{width: 320px; float: right; overflow: hidden; box-sizing: border-box; padding-right: 30px;}
.addRoleWrap .addRoleH .addRoleH-right a{display: block; width: 134px; height: 39px; line-height: 39px; text-align: center; color: #fff; border-radius: 20px; font-size: 16px; float: right;}
.addRoleWrap .addRoleH .addRoleH-right .qx{background: #9193aa}
.addRoleWrap .addRoleH .addRoleH-right .qr{background: #da0032; margin-right: 20px;}
.addRoleWrap .addRoleC{overflow: hidden; margin-top: 58px; padding-left: 55px;}
.addRoleWrap .addRoleC h3{height: 45px; line-height: 45px; background: #f3f7fa; font-size: 14px; color: #676a7b; padding-left: 33px; overflow: hidden; }
.addRoleWrap .addRoleC li{overflow: hidden; margin-bottom:13px;}
.addRoleWrap .addRoleC h3 label{margin-right: 18px;}
.addRoleWrap .addRoleC h3 span{display: inline-block;cursor: pointer;}
.addRoleWrap .addRoleC .pDiv{height: 0px;transition: height .5s; }
.addRoleWrap .addRoleC li.show .pDiv{height:auto; transition: height .5s; }
.addRoleWrap .addRoleC p{padding-left: 73px; height: 66px; line-height: 66px; color: #676a7d; font-size: 14px;}
.addRoleWrap .addRoleC p label{margin-right: 18px;}
.addRoleWrap .addRoleC p a{display: inline-block; width: auto; padding:0px 15px;  height: 26px; line-height: 26px; border-radius: 13px; border: 1px solid #676a7d; color: #676a7d; font-size: 14px; text-align: center; margin-left: 23px;}
</style>

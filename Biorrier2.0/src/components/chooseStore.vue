<template>
  <div class="chooseStoreWrap">
    <div class="popBackground" v-if="isStoreListPop || isStoreListPop2"></div>
    <div class="storeListMain" v-show="isStoreListPop">
      <div class="storeHead">
        <span class="bold">门店列表</span>
        <a href="javascript:;" class="closeBtn icons_b" @click="closeBtn()"></a>
      </div>
      <div class="storeMain" id="storeMain">
        <el-scrollbar style="height:100%">
            <ul>
              <li v-for="(item,index) in options.large">
                <label>
                    <input type="checkbox" @click="checkAll1(index,options.largeArr[index])" v-model="checkModel.checkedArr" :value="options.largeArr[index]">
                    <i class="icons icon_17"></i>
                    <i class="icons icon_36"></i>
                </label>
                <a href="javascript:;" @click="showList($event)" class="bold chooseStoreBtn icons_a" v-text="options.largeArr[index]"></a>
                <ul :listNum="item.province.length">
                  <li v-for="(item2,index2) in item.province">
                    <label>
                        <input type="checkbox" @click="checkAll2(index,index2,item.provinceArr[index2],true)" v-model="checkModel.large[index].checkedArr" :value="item.provinceArr[index2]">
                        <i class="icons icon_17"></i>
                        <i class="icons icon_36"></i>
                    </label>
                    <a href="javascript:;" @click="showList($event)" class="bold chooseStoreBtn icons_a" v-text="item.provinceArr[index2]"></a>
                    <ul :listNum="item2.city.length">
                      <li v-for="(item3,index3) in item2.city">
                        <label>
                            <input type="checkbox" @click="checkAll3(index,index2,index3,item2.cityArr[index3],true)" v-model="checkModel.large[index].province[index2].checkedArr" :value="item2.cityArr[index3]">
                            <i class="icons icon_17"></i>
                            <i class="icons icon_36"></i>
                        </label>
                        <a href="javascript:;" @click="showList($event)" class="bold chooseStoreBtn icons_a" v-text="item2.cityArr[index3]"></a>
                        <ul :listNum="item3.region.length">
                          <li v-for="(item4,index4) in item3.region">
                            <label>
                                <input type="checkbox" @click="checkAll4(index,index2,index3,index4,item3.regionArr[index4],true)" v-model="checkModel.large[index].province[index2].city[index3].checkedArr" :value="item3.regionArr[index4]">
                                <i class="icons icon_17"></i>
                                <i class="icons icon_36"></i>
                            </label>
                            <a href="javascript:;" @click="showList($event)" class="bold chooseStoreBtn icons_a" v-text="item3.regionArr[index4]"></a>
                            <ul :listNum="item4.counter.length">
                              <li v-for="(item5,index5) in item4.counter">
                                <label>
                                    <input type="checkbox" v-model="checkModel.large[index].province[index2].city[index3].region[index4].checkedArr" :value="item5">
                                    <i class="icons icon_17"></i>
                                    <i class="icons icon_36"></i>
                                    <span v-text="item5.name"></span>
                                </label>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
        </el-scrollbar>
      </div>
      <div class="storeFoot">
        <a href="javascript:;" class="qr" @click="nextBtn()">确定</a>
        <a href="javascript:;" class="qx" @click="closeBtn()">取消</a>
      </div>
    </div>
    <div class="selectedStoreListMain" v-if="isStoreListPop2">
      <div class="storeHead">
        <span class="bold">已选门店</span>
        <a href="javascript:;" class="closeBtn icons_b" @click="closeBtn2()"></a>
      </div>
      <div class="storeMain" id="storeMain">
        <el-scrollbar style="height:100%">
          <ul>
            <li v-for="item in storeList">
              <i></i>
              <span v-text="item.name"></span>
              <ul>
                <li v-for="item2 in item.checkedArr">
                  <span v-text="item2.name"></span>
                  <ul>
                    <li v-for="item3 in item2.checkedArr">
                      <span v-text="item3.name"></span>
                      <ul>
                        <li v-for="item4 in item3.checkedArr" class="storeLi2">
                          <span v-text="item4.name"></span>
                          <ul>
                            <li v-for="item5 in item4.checkedArr" class="storeLi">
                              <i class="icons icon_37"></i>{{item5}}
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </el-scrollbar>
      </div>
      <div class="storeFoot">
        <a href="javascript:;" class="qr" @click="saveBtn()">确定</a>
        <a href="javascript:;" class="qx" @click="aBack()">返回</a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
export default {
  data () {
    return {
      options: JSON.parse(sessionStorage.storeList),
      checkModel: JSON.parse(sessionStorage.storeList2),
      isStoreListPop2:false,
      storeList:[],
      _arrstore:[]
    }
  },
  watch: {
    checkModel: {
      handler(str1,str2) {
        for(let i=0;i<str1.large.length;i++){
          if(str1.large[i].checkedArr.length == str1.large[i].province.length){
            if(!str1.large[i].b){
              str1.large[i].b = true;
              if(str1.checkedArr.indexOf(this.options.largeArr[i])<0){
                str1.checkedArr.push(this.options.largeArr[i]);
              }
            }
          }else{
            let index = str1.checkedArr.indexOf(this.options.largeArr[i]);
            if(index>-1){
              str1.large[i].b = false;
              str1.checkedArr.splice(index,1);
            }
          }

          for(let ii=0;ii<str1.large[i].province.length;ii++){
            if(str1.large[i].province[ii].checkedArr.length == str1.large[i].province[ii].city.length){
              if(!str1.large[i].province[ii].b){
                str1.large[i].province[ii].b = true;
                if(str1.large[i].checkedArr.indexOf(this.options.large[i].provinceArr[ii])<0){
                  str1.large[i].checkedArr.push(this.options.large[i].provinceArr[ii]);
                }
              }
            }else{
              let index2 = str1.large[i].checkedArr.indexOf(this.options.large[i].provinceArr[ii]);
              if(index2>-1){
                str1.large[i].province[ii].b = false;
                str1.large[i].checkedArr.splice(index2,1);
              }
            }
            
            for(let iii=0;iii<str1.large[i].province[ii].city.length;iii++){
              if(str1.large[i].province[ii].city[iii].checkedArr.length == str1.large[i].province[ii].city[iii].region.length){
                if(!str1.large[i].province[ii].city[iii].b){
                  str1.large[i].province[ii].city[iii].b = true;
                  if(str1.large[i].province[ii].checkedArr.indexOf(this.options.large[i].province[ii].cityArr[iii])<0){
                    str1.large[i].province[ii].checkedArr.push(this.options.large[i].province[ii].cityArr[iii]);
                  }
                }
              }else{
                let index3 = str1.large[i].province[ii].checkedArr.indexOf(this.options.large[i].province[ii].cityArr[iii]);
                if(index3>-1){
                  str1.large[i].province[ii].city[iii].b = false;
                  str1.large[i].province[ii].checkedArr.splice(index3,1);
                }
              }

              for(let iiii=0;iiii<str1.large[i].province[ii].city[iii].region.length;iiii++){
                if(str1.large[i].province[ii].city[iii].region[iiii].checkedArr.length ==str1.large[i].province[ii].city[iii].region[iiii].counter.length){
                  if(!str1.large[i].province[ii].city[iii].region[iiii].b){
                    str1.large[i].province[ii].city[iii].region[iiii].b = true;
                    if(str1.large[i].province[ii].city[iii].checkedArr.indexOf(this.options.large[i].province[ii].city[iii].regionArr[iiii])<0){
                      str1.large[i].province[ii].city[iii].checkedArr.push(this.options.large[i].province[ii].city[iii].regionArr[iiii]);
                    }
                  }
                }else{
                  let index4 = str1.large[i].province[ii].city[iii].checkedArr.indexOf(this.options.large[i].province[ii].city[iii].regionArr[iiii]);
                  if(index4>-1){
                    str1.large[i].province[ii].city[iii].region[iiii].b = false;
                    str1.large[i].province[ii].city[iii].checkedArr.splice(index4,1)
                  }
                }
              }
            }
          }
        }
      },
      deep: true
    }
  },
  computed:{
    ...mapState(['isStoreListPop'])
  },
  created() {},
  methods: {
    ...mapMutations(['setStorePop','setArrStore','setStoreInfo']),
    checkAll4(num,num2,num3,num4,str,b){
      let index = this.checkModel.large[num].province[num2].city[num3].checkedArr.indexOf(str);
      if((index>-1)&&b){
        this.checkModel.large[num].province[num2].city[num3].region[num4].checkedArr = [];
      }else{
        this.options.large[num].province[num2].city[num3].region[num4].counter.forEach((item)=>{
          if(this.checkModel.large[num].province[num2].city[num3].region[num4].checkedArr.indexOf(item)==-1){
            this.checkModel.large[num].province[num2].city[num3].region[num4].checkedArr.push(item)
          }
        })
      }
    },
    checkAll3(num,num2,num3,str,b){
      let index = this.checkModel.large[num].province[num2].checkedArr.indexOf(str);
      if((index>-1)&&b){
        this.checkModel.large[num].province[num2].city[num3].checkedArr = [];
        this.checkModel.large[num].province[num2].city[num3].b = false;
        for(let i=0;i<this.checkModel.large[num].province[num2].city[num3].region.length;i++){
          this.checkModel.large[num].province[num2].city[num3].region[i].checkedArr = [];
          this.checkModel.large[num].province[num2].city[num3].region[i].b = false;
        }
      }else{
        this.options.large[num].province[num2].city[num3].regionArr.forEach((item,index2)=>{
          this.checkAll4(num,num2,num3,index2,item,false);
          if(this.checkModel.large[num].province[num2].city[num3].checkedArr.indexOf(item)==-1){
            this.checkModel.large[num].province[num2].city[num3].checkedArr.push(item)
          }
        })
      }
    },
    checkAll2(num,num2,str,b){
      let index = this.checkModel.large[num].checkedArr.indexOf(str);

      if((index>-1)&&b){
        this.checkModel.large[num].province[num2].checkedArr=[];
        this.checkModel.large[num].province[num2].b = false;
        for(let i=0;i<this.checkModel.large[num].province[num2].city.length;i++){
          this.checkModel.large[num].province[num2].city[i].checkedArr = [];
          this.checkModel.large[num].province[num2].city[i].b = false;
          for(let ii=0;ii<this.checkModel.large[num].province[num2].city[i].region.length;ii++){
            this.checkModel.large[num].province[num2].city[i].region[ii].checkedArr = [];
            this.checkModel.large[num].province[num2].city[i].region[ii].b = false;
          }
        }
      }else{
        this.options.large[num].province[num2].cityArr.forEach((item,index2)=>{
          this.checkAll3(num,num2,index2,item,false);
          if(this.checkModel.large[num].province[num2].checkedArr.indexOf(item)==-1){
            this.checkModel.large[num].province[num2].checkedArr.push(item);
          }
        })
      }
    },
    checkAll1(num,str){
      let index = this.checkModel.checkedArr.indexOf(str);;

      if(index>-1){
        this.checkModel.large[num].checkedArr=[];
        this.checkModel.large[num].b=false;
        for(let x=0;x<this.checkModel.large[num].province.length;x++){
          for(let i=0;i<this.checkModel.large[num].province[x].city.length;i++){
            this.checkModel.large[num].province[x].city[i].checkedArr = [];
            this.checkModel.large[num].province[x].city[i].b = false;
            for(let ii=0;ii<this.checkModel.large[num].province[x].city[i].region.length;ii++){
              this.checkModel.large[num].province[x].city[i].region[ii].checkedArr = [];
              this.checkModel.large[num].province[x].city[i].region[ii].b = false;
            }
          }
        }
      }else{
        this.options.large[num].provinceArr.forEach((item,index2)=>{
          this.checkAll2(num,index2,item,false);
          if(this.checkModel.large[num].checkedArr.indexOf(item)==-1){
            this.checkModel.large[num].checkedArr.push(item)
          }
        })
      }
    },
    showList(e){

      let oUl = e.target.parentNode.children[2];
      if(oUl){

        let num = parseInt(oUl.getAttribute('listnum'));
        let h = num*41;
        let obj = oUl.parentNode.parentNode;

        if(oUl.classList.toggle('show')){
          oUl.style.height = h + 'px';
          
          if(obj.tagName.toLowerCase() == 'ul'){
            obj.style.height = 'auto'
          }
        }else{

          if(obj.tagName.toLowerCase() == 'ul'){
            let num2 = parseInt(obj.getAttribute('listnum'));
            let h2 = num2*40;
            obj.style.height = h2 + 'px';
          }
          oUl.style.height = '0px';
        }

        e.target.classList.toggle('active');
      }
    },
    nextBtn(){
      this.setStorePop(false)
      this.isStoreListPop2 = true;
      this.storeList = [];
      this._arrstore = [];

      for(let i1=0;i1<this.checkModel.large.length;i1++){

        let arr1 = [];
        for(let i2=0;i2<this.checkModel.large[i1].province.length;i2++){

          let arr2 = [];
          for(let i3=0;i3<this.checkModel.large[i1].province[i2].city.length;i3++){

            let arr3 = [];
            for(let i4=0;i4<this.checkModel.large[i1].province[i2].city[i3].region.length;i4++){

              let arr4 = [];
              for(let i5=0;i5<this.checkModel.large[i1].province[i2].city[i3].region[i4].checkedArr.length;i5++){
                arr4.push(this.checkModel.large[i1].province[i2].city[i3].region[i4].checkedArr[i5].name);
                this._arrstore.push(this.checkModel.large[i1].province[i2].city[i3].region[i4].checkedArr[i5].value);
              }

              if(arr4.length>0){
                let obj4 = {
                  checkedArr:arr4,
                  name:this.options.large[i1].province[i2].city[i3].regionArr[i4]
                }
                arr3.push(obj4)
              }
            }

            if(arr3.length>0){
              let obj3 = {
                checkedArr:arr3,
                name:this.options.large[i1].province[i2].cityArr[i3]
              }
              arr2.push(obj3);
            }
          }

          if(arr2.length>0){
            let obj2 = {
              checkedArr:arr2,
              name:this.options.large[i1].provinceArr[i2]
            }
            arr1.push(obj2);
          }
        }

        if(arr1.length>0){
          let obj1 = {
            checkedArr:arr1,
            name:this.options.largeArr[i1]
          }
          this.storeList.push(obj1);
        }
      }
      
    },
    closeBtn(){
      this.setStorePop(false);
    },
    saveBtn(){
      this.setStorePop(false)
      this.isStoreListPop2 = false;
      this.setArrStore(this._arrstore.join(','));

      let str = '';
      if(this.storeList.length>0){
        for(let i=0; i<this.storeList.length;i++){
          let _index_ = this.options.largeArr.indexOf(this.storeList[i].name);
          let _len_ = this.options.large[_index_].provinceArr.length;
          
          if(_len_ == this.storeList[i].checkedArr.length){
            str += this.storeList[i].name+'-全区,';
          }else{
            str += this.storeList[i].name+'-部分,';
          }
        }
      }else{
        str = '未选择范围';
      }
      str = str.substring(0,str.length-1);
      this.setStoreInfo(str);
      this.checkModel=JSON.parse(sessionStorage.storeList2);
    },
    closeBtn2(){
      this.setStorePop(false)
      this.isStoreListPop2 = false;
    },
    aBack(){
      this.setStorePop(true)
      this.isStoreListPop2 = false;
    }
  },
  components: {}
}
</script>


<style scoped>
.chooseStoreWrap{font-size: 14px;}
.bold{font-weight: bold;}
.popBackground{background: #000; position: fixed; width: 100%; height: 100%; top:0px;left: 0px;opacity: 0.7;}
.storeListMain,.selectedStoreListMain{position:fixed; top:50%; left: 50%; background: #fff; width: 550px; margin-left:-275px; height: 424px; overflow: hidden; margin-top: -212px; animation: fk 0.6s ease-in forwards 0s 1 normal;}
.selectedStoreListMain{width: 648px; margin-left: -324px;}
.storeMain{overflow:hidden;  height: 258px; box-sizing: border-box;}
.selectedStoreListMain .storeMain{padding-bottom: 15px;}
.storeHead{height: 68px; line-height: 68px; border-bottom: 1px solid #eeeeee; padding-left: 47px; overflow: hidden;}
.storeHead span{ color: #686b7c;}
.storeHead a{display:block; float: right; width: 31px; height: 32px; margin-top: 18px; margin-right:26px; text-align: center; line-height: 32px; }
.storeHead a:before{width: 15px; height: 15px; background-position: -85px -96px;content:"";}
.storeMain{padding-left: 8px;}
.storeMain{padding-top: 16px;}
.storeMain ul{overflow: hidden;}
.storeMain ul li .bold{color: #686a79;}
.storeMain ul li .bold:after{content:"";width: 10px; height: 7px; background-position: -52px -127px; margin-left: 12px; transform: rotate(-90deg);transition: transform .25s;}
.storeMain ul li .bold.active:after{transform: rotate(0deg);}
.storeMain ul li{padding-left: 40px;overflow: hidden; height: auto; line-height: 40px; color: #696a7c;}
.storeMain ul li>a,.storeMain ul li>label{height: 40px; line-height: 40px;}
.storeMain ul li>a,.storeMain ul li>label>span{margin-left: 18px; cursor: pointer; display: inline-block; height: 40px; line-height: 40px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap; width: 260px; vertical-align: middle;}
.storeMain .el-scrollbar__view>ul>li ul{height: 0px;transition: height .5s;}
.storeMain .el-scrollbar__view>ul>li ul.show{height:auto;transition: height .5s;}

.selectedStoreListMain .storeMain .el-scrollbar__view>ul>li ul{height: auto;}
.selectedStoreListMain .storeMain .el-scrollbar__view>ul>li>i{width: 4px; height: 13px; display: inline-block; margin-right: 14px; background: #dd0035;}
.selectedStoreListMain .storeMain .el-scrollbar__view>ul li>span{ font-weight: bold;font-size: 14px; color: #696a7c; }
.selectedStoreListMain .storeMain .el-scrollbar__view>ul li{overflow: hidden;}

.selectedStoreListMain .storeMain .el-scrollbar__view>ul li.storeLi2>span{display: block; float: left; width: 103px;}
.selectedStoreListMain .storeMain .el-scrollbar__view>ul li.storeLi2>ul{overflow:hidden; width: auto; margin-left: 103px;}
.selectedStoreListMain .storeMain .el-scrollbar__view>ul li.storeLi{float: left;padding-left: 0px; height: 30px; line-height: 30px; margin-right: 20px;}
.selectedStoreListMain .storeMain .el-scrollbar__view>ul li.storeLi i{margin-right: 10px;}



.storeFoot{text-align: center; border-top: 1px solid #eeeeee; padding-top: 30px; }
.storeFoot a{width: 108px; height: 37px; line-height: 37px; text-align: center; border-radius: 18px; font-weight: bold; font-size: 16px;  display: inline-block;}
.storeFoot a.qr{background: #dc0034; border:1px solid #dc0034; color: #fff; margin-right: 22px;}
.storeFoot a.qx{ border:1px solid #686a7c; color: #686a7c;}

/* fk */
@keyframes fk
{
    0%   {opacity: 1;transform: scale(0);}
    100% {opacity: 1;transform: scale(1);}
}
 
@-webkit-keyframes fk 
{
    0%   {opacity: 1;-webkit-transform: scale(0);}
    100% {opacity: 1;-webkit-transform: scale(1);}
}
</style>

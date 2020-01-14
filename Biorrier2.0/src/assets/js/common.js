import {getJson,common} from '@/assets/js/api'
import {oJm} from '@/assets/js/crypto'

const mixin = {
  methods: {
    orderStore(endFn){
      let obj = {
        page:1
      }

      let _num = 1;
      let storeArr = {
        largeArr:[],
        large:[]
      };
      let storeArr2 = {
        checkedArr:[],
        large:[]
      };
      common(obj,'/order/store').then((res) => {
        if(res.code == 1){

          this.getlargeArr(res.data.data,storeArr,storeArr2);

          let num = res.data.last_page;

          for(let i=2;i<=num;i++){
            let obj = {
              page:i
            }
            
            common(obj,'/order/store').then((res) => {
              if(res.code == 1){
                this.getlargeArr(res.data.data,storeArr,storeArr2);
                _num++;
                if(_num==num){
                  endFn&&endFn(storeArr,storeArr2);
                }
              }else{
                this.setPoint({type:0,pop:true,pointWord:res.message});
              }
            })
          }
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    getlargeArr(aArr,bJson,cObj){
      for(let ii=0;ii<aArr.length;ii++){
        let obj_11 = aArr[ii];
        let largeIndex = bJson.largeArr.indexOf(obj_11.large_area_name);
        if(largeIndex<0){
          bJson.largeArr.push(obj_11.large_area_name);

          let oJson = {
            provinceArr:[],
            province:[]
          }

          let obj ={
            checkedArr:[],
            province:[]
          }

          oJson.provinceArr.push(obj_11.province_name);

          let oJson2 = {
            cityArr:[],
            city:[]
          }

          let obj2 ={
            checkedArr:[],
            city:[]
          }

          oJson2.cityArr.push(obj_11.city_name);

          let oJson3 = {
            regionArr:[],
            region:[]
          }

          let obj3 ={
            checkedArr:[],
            region:[]
          }

          if(obj_11.region_name){
            oJson3.regionArr.push(obj_11.region_name);
          }else{
            oJson3.regionArr.push(obj_11.city_name);
          }

          let oJson4 = {
            counter:[]
          }

          let oJson5 = {
            value:obj_11.counter_code,
            name:obj_11.counter_name
          }

          let obj4 ={
            checkedArr:[],
            counter:[]
          }

          oJson4.counter.push(oJson5);
          oJson3.region.push(oJson4);
          oJson2.city.push(oJson3);
          oJson.province.push(oJson2);
          bJson.large.push(oJson);

          obj4.counter.push(oJson5);
          obj3.region.push(obj4);
          obj2.city.push(obj3);
          obj.province.push(obj2);
          cObj.large.push(obj);

        }else{
          let largeIndex2 = bJson.large[largeIndex].provinceArr.indexOf(obj_11.province_name);
          if(largeIndex2<0){
            bJson.large[largeIndex].provinceArr.push(obj_11.province_name);

            let oJson2 = {
              cityArr:[],
              city:[]
            }

            let obj2 ={
              checkedArr:[],
              city:[]
            }

            oJson2.cityArr.push(obj_11.city_name);

            let oJson3 = {
              regionArr:[],
              region:[]
            }

            let obj3 ={
              checkedArr:[],
              region:[]
            }

            if(obj_11.region_name){
              oJson3.regionArr.push(obj_11.region_name);
            }else{
              oJson3.regionArr.push(obj_11.city_name);
            }

            let oJson4 = {
              counter:[]
            }

            let oJson5 = {
              value:obj_11.counter_code,
              name:obj_11.counter_name
            }

            let obj4 ={
              checkedArr:[],
              counter:[]
            }

            oJson4.counter.push(oJson5);
            oJson3.region.push(oJson4);
            oJson2.city.push(oJson3);
            bJson.large[largeIndex].province.push(oJson2);

            obj4.counter.push(oJson5);
            obj3.region.push(obj4);
            obj2.city.push(obj3);
            cObj.large[largeIndex].province.push(obj2);

          }else{
            let _city_name = obj_11.city_name?obj_11.city_name:'其它';
            let largeIndex3 = bJson.large[largeIndex].province[largeIndex2].cityArr.indexOf(_city_name);
            if(largeIndex3<0){
              bJson.large[largeIndex].province[largeIndex2].cityArr.push(_city_name);

              let oJson3 = {
                regionArr:[],
                region:[]
              }

              let obj3 ={
                checkedArr:[],
                region:[]
              }

              if(obj_11.region_name){
                oJson3.regionArr.push(obj_11.region_name);
              }else{
                oJson3.regionArr.push(obj_11.city_name);
              }

              let oJson4 = {
                counter:[]
              }

              let oJson5 = {
                value:obj_11.counter_code,
                name:obj_11.counter_name
              }

              let obj4 ={
                checkedArr:[],
                counter:[]
              }


              oJson4.counter.push(oJson5);
              oJson3.region.push(oJson4);
              bJson.large[largeIndex].province[largeIndex2].city.push(oJson3);

              obj4.counter.push(oJson5);
              obj3.region.push(obj4);
              cObj.large[largeIndex].province[largeIndex2].city.push(obj3);

            }else{
              let _region_name = obj_11.region_name?obj_11.region_name:'其它';
              let largeIndex4 = bJson.large[largeIndex].province[largeIndex2].city[largeIndex3].regionArr.indexOf(_region_name);
              if(largeIndex4<0){
                 bJson.large[largeIndex].province[largeIndex2].city[largeIndex3].regionArr.push(_region_name);
                let oJson4 = {
                  counter:[]
                }

                let oJson5 = {
                  value:obj_11.counter_code,
                  name:obj_11.counter_name
                }

                let obj4 ={
                  checkedArr:[],
                  counter:[]
                }

                oJson4.counter.push(oJson5);
                bJson.large[largeIndex].province[largeIndex2].city[largeIndex3].region.push(oJson4);

                obj4.counter.push(oJson5);
                cObj.large[largeIndex].province[largeIndex2].city[largeIndex3].region.push(obj4);
              }else{
   
                let oJson5 = {
                  value:obj_11.counter_code,
                  name:obj_11.counter_name
                }

                bJson.large[largeIndex].province[largeIndex2].city[largeIndex3].region[largeIndex4].counter.push(oJson5);
                cObj.large[largeIndex].province[largeIndex2].city[largeIndex3].region[largeIndex4].counter.push(oJson5);
              }
            }
          }
        }
      }
    },
    getBoolean(arr){
      let str = this.$route.path;
      let b = false;
      for(let i=0;i<arr.length;i++){
        b = str.indexOf(arr[i])>-1;
        if(b){
          break;
        }
      }
      return b;
    },
    aBack(){
        if (window.history.length <= 1) {
            this.$router.push({path:'/h5/index'})
            return false
        } else {
            this.$router.go(-1)
        }
    },
    getBindTime(str){
      if(str){
        let d = new Date(parseInt(str)*1000);
        return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
      }else{
         return '';
      }
    },
    getEndTime(str){
      if(str){
        let d = new Date(parseInt(str)*1000);
        return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
      }else{
        return '';
      } 
    },
    getEndTime2(str){
      if(str){
        let d = new Date(parseInt(str)*1000);
        return [(d.getMonth()+1)+'/'+d.getDate(),d.getFullYear()];
      }else{
        return ['',''];
      } 
    },
    getParameter(){
      var _hash = window.location.href;
      if(window.location.href.indexOf('?')>-1){
        var _str = _hash.split("?")[1];
      
        var oParameter = {};

        if(_str.indexOf('&')>-1){
          var aParameter = _str.split("&");
          for(var i=0;i<aParameter.length;i++){
              var _key = aParameter[i].split("=")[0];
              var _value = aParameter[i].split("=")[1];
              oParameter[_key] = _value;
          }
        }else{
          var _key = _str.split("=")[0];
          var _value = _str.split("=")[1];
          oParameter[_key] = _value;
        }

        this.oParameter = oParameter;
      }
    },
    deleteBtn(id,n){
      this.setPoint({type:n,pop:true,closeBtn:true,pointWord:'您确定要删除吗？',parameter:id});
    },
    getMenu(){
      let str = oJm.jiemi(sessionStorage.menu);
      let str1 = 'id:'+sessionStorage.access_id+';'+'menu:';
      if(str.indexOf(str1)>-1){
        let str2 = str.replace(str1,'');
        let arr = JSON.parse(str2);

        //console.log(arr)
        this.setMenu(arr);
        let arr2 = [];
        for(let i=0;i<arr.length;i++){
          arr2.push(arr[i].id);
          if(arr[i].child.length>0){
            for(let ii=0; ii<arr[i].child.length;ii++){
              arr2.push(arr[i].child[ii].id);
            }
          }
        }

        this.setMenuId(arr2);
      }else{
        this.setPoint({type:0,pop:true,pointWord:'权限错误，请重新登录！'});
      }

    }
  }
}

export default mixin;
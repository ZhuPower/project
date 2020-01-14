import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    headCondition:{
        orderTypeVlue:0,
        ruleTypeVlue:0,
        doctorLevel:0,
        doctorStatus:0
    },
    isDetails:false,
    isTabHead:true,
    isStoreListPop:false,
    oParameter2:null,
    oPoint:{
        pop:false,
        pointWord:'',
        closeBtn:false,
        confirmBtn:true,
        type:0,  //1:删除规则 2:人员管理状态 3:组织管理用户状态 4:删除组织管理用户 5:删除组织 6:删除角色 7:医生初始化密码 8:更改消息状态 9:删除消息 10：倒计时
        code:0,
        parameter:null
    },
    isIndex:false,
    indexData:[],
    isEditMeg:false,
    isNewEditMeg:false,
    aMenuId:[],
    aMenu:[],
    arrStore:'',
    storeInfo:''
}

const mutations = {
    changeValue(state,obj){
        state.headCondition[obj.key] = obj.value;
    },
    enterDetails(state,b){
    	state.isDetails = b;
    	state.isTabHead = !b;
    },
    setStorePop(state,b){
        state.isStoreListPop = b;
    },
    setParameter(state,obj){
        state.oParameter2 = obj;
    },
    setPoint(state,obj){
        for(let key in obj){
            state.oPoint[key] = obj[key];
        }
    },
    setIsIndex(state,b){
        state.isIndex = b;
    },
    setIndexData(state,obj){
        state.indexData = obj;
    },
    setEditMeg(state,b){
        state.isEditMeg = b;
    },
    setEditMeg2(state,b){
        state.isNewEditMeg = b;
    },
    setMenuId(state,arr){
        state.aMenuId = arr;
    },
    setMenu(state,arr){
        state.aMenu = arr;
    },
    setArrStore(state,str){
        state.arrStore = str;
    },
    setStoreInfo(state,str){
        state.storeInfo = str;
    }
}

export default new Vuex.Store({
    state,
    mutations
})
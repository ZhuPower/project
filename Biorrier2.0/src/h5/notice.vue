<template>
    <div class="listMes">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad">
                <ul>
                    <li :class="{new:(item.is_read==0)?true:false}" v-for="item in oData" @click="goDetails(item)">
                        <i></i>
                        <p v-text="item.content"></p>
                        <div class="time" v-text="item.updated_at"></div>
                    </li>
                </ul>
            </van-list>
        </van-pull-refresh>
    </div>
</template>
<script>
import {common} from '@/assets/js/api'
export default {
    data() {
        return {
            oData:[],
            page:0,
            last_page:1,
            loading: false,//控制上拉加载的加载动画
            finished: false,//控制在页面往下移动到底部时是否调用接口获取数据
            isLoading: false//控制下拉刷新的加载动
        }
    },
    created() {
    },
    methods: {
        goDetails(obj) {
          let messageInfo = JSON.stringify(obj);
          sessionStorage.messageInfo = messageInfo;
          let id = obj.id;
          this.$router.push('/h5/details/'+id);
        },
        onRefresh() {
            this.page = 0;
            setTimeout(() => {
                this.newslist();
            }, 500);
        },
        onLoad() {
          setTimeout(() => {
            this.newslist();
          }, 500);
        },
        newslist(){
            this.page = this.page+1;
            let obj = {
                type:2,
                user_id:sessionStorage.userId,
                page:this.page
            }

            common(obj,'/news/listuser').then((res) => {
                if(res.code==1){
                    this.isLoading = false;
                    this.loading = false;
                    if(this.page == 1){
                        this.oData = [];
                    }
                    for(let i=0;i<res.data.data.length;i++){
                        this.oData.push(res.data.data[i]);
                    }

                    this.last_page = res.data.last_page;

                    if(this.page == this.last_page){
                         this.finished = true;
                    }
                }else{
                    if(res.data == 'token失效，请重新登录'){
                        alert(res.data)
                    }else{
                        alert(res.message)
                    }
                }
            })
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{height: 1.6rem; line-height: 1.6rem; background: #1e1f34; text-align: center; color: #fff; font-size: .5rem; overflow: hidden;}
.header a{width: .34rem; height: .6rem; background: url('../assets/icons_13.png') no-repeat; background-size: 100% 100%; display: block; float: left; margin-top:.54rem; margin-left: .82rem;}
.listMes{overflow: hidden; width: 100%; height: auto;}
.listMes ul{margin: 0px .6rem;}
.listMes ul li{max-height: 4.74rem; overflow: hidden; border-bottom: 1px solid #eee;}
.listMes ul li i{width: 1.01rem;  height: 1.01rem; display: block; float: left; background: url('../assets/icons_11.png') no-repeat; background-size: 100% 100%; margin-top: .73rem; margin-left: 0.29rem;}
.listMes ul li.new i{background: url('../assets/icons_12.png') no-repeat; background-size: 100% 100%;}
.listMes ul li p{color: #333; font-size: .44rem; line-height: .66rem; max-height: 2.64rem; overflow: hidden; text-overflow: ellipsis;display:-webkit-box; -webkit-box-orient:vertical; -webkit-line-clamp:4; width: 78.3%;float: left; margin-left: 18px; margin-top: 14px;}
.listMes ul li .time{float: left;width: 100%; box-sizing: border-box; padding-left:1.96rem; margin-top: .28rem; font-size: .38rem;margin-bottom: .81rem;}
</style>
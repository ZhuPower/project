import {common,mergeJsonObject} from '@/assets/js/api'


const mixinApi = {
  methods: {
    /*Y1s1信息表导出接口*/
    reportGetdoctoradd(){
      let obj0 = {
        type:0,
        status:2
      }

      let obj = mergeJsonObject(obj0,this.oParameter);

      delete obj.page;

      common(obj,'/report/getdoctoradd','get').then((res) => {
        if(res.code==1){
          this.exportReportUrl = res.message;
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*等级汇总报表导出接口*/
    reportGetlevelcountload(){
      let obj0 = {}

      let obj = mergeJsonObject(obj0,this.oParameter);

      delete obj.page;

      common(obj,'/report/getlevelcountload','get').then((res) => {
        if(res.code==1){
          this.exportReportUrl = res.message;
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*等级统计报表导出接口*/
    reportGetlistdateload(){
      let obj0 = {}

      let obj = mergeJsonObject(obj0,this.oParameter);

      delete obj.page;

      common(obj,'/report/getlistdateload','get').then((res) => {
        if(res.code==1){
          this.exportReportUrl = res.message;
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*积分数据报表导出接口*/
    reportGetlistloadintegral(){
      let obj0 = {}

      let obj = mergeJsonObject(obj0,this.oParameter);

      delete obj.page;

      common(obj,'/report/getlistloadintegral','get').then((res) => {
        if(res.code==1){
          this.exportReportUrl = res.message;
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*分佣统计报表导出接口*/
    reportGetlistload(){
      let obj0 = {}

      let obj = mergeJsonObject(obj0,this.oParameter);

      delete obj.page;

      common(obj,'/report/getlistload','get').then((res) => {
        if(res.code==1){
          this.exportReportUrl = res.message;
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*等级汇总*/
    reportLevel(){
      let obj0 = {
        page:this.oParameter.page
      }

      let obj = mergeJsonObject(obj0,this.oParameter);

      common(obj,'/report/level').then((res) => {
        if(res.code==1){
          this.oData = res.data.data;
          this.total = res.data.total;
          this.lastPage = res.data.last_page;
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*等级统计*/
    reportPeriod(){
      let obj0 = {
        page:this.oParameter.page
      }

      let obj = mergeJsonObject(obj0,this.oParameter);

      common(obj,'/report/period').then((res) => {
        if(res.code==1){
          this.oData = res.data.data;
          this.total = res.data.total;
          this.lastPage = res.data.last_page;
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*统计和积分数据*/
    reportList(){
      let obj0 = {
        page:this.oParameter.page
      }

      let obj = mergeJsonObject(obj0,this.oParameter);

      common(obj,'/report/list').then((res) => {
        if(res.code==1){
          this.oData = res.data.data;
          this.total = res.data.total;
          this.lastPage = res.data.last_page;
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*消息更新*/
    newsDelete(id){
      let obj = {
        id:id
      }

      common(obj,'/news/delete').then((res) => {
        if(res.code==1){
          this.newsList();
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*消息更新*/
    newsUpdate(id){
      let obj = {
        title:this.messageInfo.title,
        content:this.messageInfo.content,
        type:this.messageInfo.type,
        user_type:this.messageInfo.user_type.join(','),
        is_effect:this.messageInfo.is_effect,
        id:this.messageInfo.id
      }

      common(obj,'/news/update').then((res) => {
        if(res.code==1){
          this.newsList();
          this.setEditMeg(false);
          this.messageInfo = {
            title:'',
            content:'',
            type:1,
            user_type:[],
            is_effect:1
          }
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*消息更新状态*/
    newsUpdatestatus(json){
      let obj = {
        is_effect:(json.is_effect == 1)?2:1,
        id:json.id
      }

      common(obj,'/news/updatestatus').then((res) => {
        if(res.code==1){
          this.newsList();
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*消息列表*/
    newsList(){
      let obj0 = {
        page:this.oParameter.page
      }

      let obj = mergeJsonObject(obj0,this.oParameter);
      common(obj,'/news/list').then((res) => {
        if(res.code==1){
          this.oData = res.data.data;
          //this.oParameter.pageNum = res.data.last_page;
          this.total = res.data.total;
          this.lastPage = res.data.last_page;
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*消息创建*/
    createNews(){
      let obj = {
        title:this.messageInfo.title,
        content:this.messageInfo.content,
        type:this.messageInfo.type,
        user_type:this.messageInfo.user_type.join(','),
        is_effect:this.messageInfo.is_effect
      }

      common(obj,'/news/create').then((res) => {
        if(res.code==1){
          this.newsList();
          this.setEditMeg2(false);
          this.messageInfo = {
            title:'',
            content:'',
            type:1,
            user_type:[],
            is_effect:1
          }
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*菜单列表*/
    menuList(){
      let obj = {}

      common(obj,'/menu/list').then((res) => {
        if(res.code==1){
          
          for(let i=0;i<res.data.length;i++){
            this.checkedArr.push(false);
            this.sortArr.push(res.data[i].child);
            let obj = {
              id:res.data[i].id,
              name:res.data[i].name,
              child:[]
            }
            this.menuArr.push(obj)
          }
          this.oMenu = res.data;
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*更新角色*/
    roleUpdate(str){
      let obj = {
        name:this.oData.name,
        id:this.oData.id,
        remarks:this.oData.remarks,
        is_admin:0,
        menu_ids:str

      }

      common(obj,'/role/update').then((res) => {
        if(res.code == 1){
          this.$router.push('/admin/systemConfiguration/roleManagement')
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*创建角色*/
    createRole(str){
      let obj = {
        name:this.oData.name,
        remarks:this.oData.remarks,
        is_admin:0,
        menu_ids:str
      }

      common(obj,'/role/create').then((res) => {
        if(res.code==1){
          this.$router.push('/admin/systemConfiguration/roleManagement')
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*角色列表*/
    roleList(){
      let obj0 = {}
      let obj = mergeJsonObject(obj0,this.oParameter);
      common(obj,'/role/list').then((res) => {
        if(res.code == 1){
            this.oData = res.data;
            this.nIndex = 0;
            if(res.data.length>0){
              this.roleInfo = res.data[0];
              this.menuArr = JSON.parse(res.data[0].menu_ids);
            }
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*删除角色*/
    roleDelete(id){
      let obj = {
        id:id
      }

      common(obj,'/role/delete').then((res) => {
        if(res.code == 1){
            this.roleList();
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*更新组织*/
    orgUpdate(){
      let obj = {
        id:this.orgInfo.id,
        name:this.orgInfo.name,
        level:this.orgInfo.level,
        parent_id:this.orgInfo.parent_id
      }

      common(obj,'/org/update').then((res) => {
        if(res.code==1){
          this.getOrgList();
          this.popBj= false;
          this.cjzz= false;
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*删除组织*/
    orgDelete(id){
      let obj = {
        id:id
      }

      common(obj,'/org/delete').then((res) => {
        if(res.code==1){
          this.getOrgList();
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*创建组织*/
    orgCreate(){

      if(this.orgInfo.name){
        let obj = {
          name:this.orgInfo.name,
          level:this.orgInfo.level,
          parent_id:this.orgInfo.parent_id
        }

        common(obj,'/org/create').then((res) => {
          if(res.code==1){
            this.getOrgList();
            this.popBj= false;
            this.cjzz= false;
          }else{

            this.setPoint({type:0,pop:true,pointWord:res.message});
          }
        })
      }else{
        this.setPoint({type:0,pop:true,pointWord:'请输入组织名称'});
      }
    },
    /*角色列表*/
    getRoleList(){
      let obj = {}

      common(obj,'/role/list').then((res) => {
        if(res.code == 1){
          this.authorityArr = [];
          for(let i=0;i<res.data.length;i++){
            let obj = {
              value: res.data[i].id,
              label: res.data[i].name
            }
            this.authorityArr.push(obj)
          }
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*组织列表*/
    getOrgList(){
      let obj = {}

      common(obj,'/org/list').then((res) => {
        if(res.code == 1){
          this.orgList = res.data;

          this.nIndex = res.data[0].id;

          if(res.data[0].child.length>0){
            this.nIndex2 = this.nIndex +'-'+res.data[0].child[0].id;
          }else{
            this.nIndex2 = this.nIndex;
          }

          for(let i=0;i<res.data.length; i++){
            let obj1 = {
              value:res.data[i].id,
              label:res.data[i].name
            }

            if(res.data[i].child.length>0){
              obj1.children =[]
              for(let ii=0;ii<res.data[i].child.length;ii++){
                let obj2 = {
                  value:res.data[i].child[ii].id,
                  label:res.data[i].child[ii].name
                }
                obj1.children.push(obj2);

                let _arr = [res.data[i].id,res.data[i].child[ii].id];

                this.oOrg['org_'+res.data[i].child[ii].id] = _arr;
              }
            }else{
              let _arr = [res.data[i].id];

              this.oOrg['org_'+res.data[i].id] = _arr;
            }

            this.orgArr.push(obj1)
          }
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*修改密码*/
    editPassword(){
      let obj = {
        id:parseInt(sessionStorage.access_id),
        password:this.newPassword,
        old_password:this.oldPassword
      }

      common(obj,'/admin/editpassword').then((res) => {
        if(res.code==1){
          this.isShow = false;
          this.oldPassword = '';
          this.newPassword = '';
          this.newPassword2 = '';
          sessionStorage.adminLogin = false;
          sessionStorage.access_token = '';
          sessionStorage.access_id = '';
          this.$router.push('/admin/login');
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*组织管理更新用户*/
    adminUpdate(){

      let obj = {
        name:this.userJson.name,
        password:this.userJson.password,
        is_effect:1,
        org:((typeof this.userJson.org).toLowerCase()=='number') ? this.userJson.org : this.userJson.org[this.userJson.org.length-1],
        authority:this.userJson.authority,
        id:this.userJson.id
      }

      common(obj,'/admin/update').then((res) => {
        if(res.code==1){
          if(obj.org == this.orgId){
            
            this.orgId = (this.orgId == 1)?2:1;

            setTimeout(()=>{
              if((typeof this.userJson.org).toLowerCase()=='number'){
                this.showInfo(obj.org,'');
              }else{
                if(this.userJson.org.length==1){
                  this.showInfo(obj.org,'');
                }else{
                  this.showInfo2(this.userJson.org[0],this.userJson.org[1]);
                }
              }
            },200)
          }else{
            setTimeout(()=>{
              if((typeof this.userJson.org).toLowerCase()=='number'){
                this.showInfo(obj.org,'');
              }else{
                if(this.userJson.org.length==1){
                  this.showInfo(obj.org,'');
                }else{
                  this.showInfo2(this.userJson.org[0],this.userJson.org[1]);
                }
              }
            },200)
          }
          
          this.isXgzl = false;
          this.popBj= false;
          this.cjyh= false;
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*组织管理创建用户*/
    adminCreate(){
      let obj = {
        name:this.userJson.name,
        password:this.userJson.password,
        mobile:this.userJson.mobile,
        is_effect:1,
        org:this.userJson.org[this.userJson.org.length-1],
        authority:this.userJson.authority
      }

      common(obj,'/admin/create').then((res) => {
        if(res.code==1){
          this.popBj= false;
          this.cjyh= false;
          this.upUser = !this.upUser;
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*组织管理用户状态*/
    adminStatus(id,status){
      let obj = {
        id:id,
        is_effect:status
      }

      common(obj,'/admin/updatestatus').then((res) => {
        if(res.code==1){
          this.adminList();
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*删除组织管理用户*/
    adminDelete(id){
      let obj = {
        id:id
      }

      common(obj,'/admin/delete').then((res) => {
        if(res.code==1){
          this.adminList();
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*组织管理用户列表*/
    adminList(id){
      let obj = {
        page:this.oParameter.page,
        org:id
      }

      common(obj,'/admin/list').then((res) => {
        if(res.code==1){
          this.oData = res.data.data;
          //this.oParameter.pageNum = res.data.last_page;
          this.total = res.data.total;
          this.lastPage = res.data.last_page;
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*会员管理列表*/
    accountEditbind(){
      let obj = {
        id:this.id
      }
      if(this.newSalesId){
        obj.sales_id = this.newSalesId
      }

      if(this.newDoctorsId){
        obj.doctor_id = this.newDoctorsId
      }

      if(this.newWDoctorsId){
        obj.we_doctor_id = this.newWDoctorsId
      }

      common(obj,'/account/editbind').then((res) => {
        if(res.code==1){
          this.$emit('setShow',false);
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*会员管理列表*/
    accountList(){
      let obj0 = {
        page:1
      }

      let obj = mergeJsonObject(obj0,this.oParameter);
      common(obj,'/account/list').then((res) => {
        if(res.code==1){
          this.oData = res.data.data;
          //this.oParameter.pageNum = res.data.last_page;
          this.total = res.data.total;
          this.lastPage = res.data.last_page;
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*编辑配置规则 商品列表*/
    goodsList(){
      this.page = this.page+1;
      let obj0 = {
        attribute:2,
        page:this.page,
      }


      let obj = mergeJsonObject(obj0,this.oParameter);
      common(obj,'/goods/list').then((res) => {
        if(res.code==1){
          this.isLoading = false;
          for(let i=0;i<res.data.data.length;i++){
            this.goodsListArr.push(res.data.data[i]);
          }
          this.last_page = res.data.last_page;
          if(this.page == this.last_page){
             this.finished = true;
          }
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*更新分比配置规则优先级*/
    prioritylevel(id,level,b){
      let obj = {
        id:id,
        priority_level:level
      }

      common(obj,'/rules/prioritylevel').then((res) => {
        if(res.code==1){
          if(b){
            this.setIsIndex(false);
          }
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*分比配置规则详情*/
    rulesInfo(id){
      let obj = {
        id:id
      }

      common(obj,'/rules/info').then((res) => {
        if(res.code==1){
          for(let i=0;i<res.data.goods.length;i++){
            this.oData.push(this.getsj(res.data.goods[i],true));
          }

          let arr = [];
          arr[0] = this.getEndTime(res.data.start_time);
          arr[1] = this.getEndTime(res.data.end_time);
          this.ruleName = res.data.name;
          this.ruleTime = arr;
          this.describe = res.data.describe;
          this.priority_level = res.data.priority_level;
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*更新分比配置规则*/
    rulesUpdate(){
      let goods = null;
      let type = this.userType;
      let arr = this.$route.path.split('/');
      let id = arr[arr.length-1];

      let obj = {
        id:id,
        name:this.ruleName,
        type:type,
        priority_level:this.priority_level,
        start_time:this.ruleTime[0],
        end_time:this.ruleTime[1],
        describe:this.describe,
        goods:JSON.stringify(this.oData)
      }

      common(obj,'/rules/update').then((res) => {
        if(res.code == 1){
          this.$router.push(this.sPath+'?page=1')
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*创建分比配置规则*/
    createRules(){
      let goods = null;
      let type = this.userType;

      let obj = {
        name:this.ruleName,
        type:type,
        priority_level:1,
        start_time:this.ruleTime[0],
        end_time:this.ruleTime[1],
        describe:this.describe,
        goods:JSON.stringify(this.oData)
      }

      common(obj,'/rules/create').then((res) => {
        if(res.code == 1){
          this.$router.push(this.sPath+'?page=1')
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*删除分比配置规则*/
    rulesDelete(id){
      let obj = {
        id:id
      }
      common(obj,'/rules/delete').then((res) => {
        if(res.code==1){
          this.rulesList();
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*分比配置规则列表*/
    rulesList(){
      let obj0 = {
        page:this.oParameter.page,
        type:this.goodType
      }

      let obj = mergeJsonObject(obj0,this.oParameter);

      common(obj,'/rules/list').then((res) => {
        if(res.code==1){
          this.oData = res.data.data;
          //this.oParameter.pageNum = res.data.last_page;
          this.total = res.data.total;
          this.lastPage = res.data.last_page;
          this.setIndexData(res.data.data)
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*h5登录用户重制密码接口*/
    remakePassword(id){
      let obj = {
        id:id
      }

      common(obj,'/user/remakepassword').then((res) => {
        if(res.code==1){
          this.setPoint({type:10,pop:true,pointWord:'密码重置成功！'});
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    userAccountlist2(){
      let arr = this.$route.path.split('/');
      let id = arr[arr.length-1];
      let obj0 = {
          type:this.type,
          page:this.oParameter.page,
          id:id
      }

      let obj = mergeJsonObject(obj0,this.oParameter);
      common(obj,'/user/accountlist').then((res) => {
        if(res.code==1){
         this.account_list = res.data.data; 
         this.total = res.data.total;
         this.lastPage = res.data.last_page;
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*人员管理积分订单*/
    userOrder(){
      let arr = this.$route.path.split('/');
      let id = arr[arr.length-1];
      let obj = {
        type:this.userType,
        page:this.oParameter.page,
        id:id,
        year:this.yearVlue,
        month:this.monthIndex
      }

      common(obj,'/user/order').then((res) => {
        if(res.code==1){
          this.oData = res.data.data;
          //this.oParameter.pageNum = res.data.last_page;
          this.total = res.data.total;
          this.lastPage = res.data.last_page;
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*人员管理详情*/
    userInfo(){

      let arr = this.$route.path.split('/');
      let id = arr[arr.length-1];
      let d = new Date();
      let y = d.getFullYear();
      let m = d.getMonth()+1;
      let obj = {
        type:this.type,
        id:id,
        year:y,
        month:m
      }

      common(obj,'/user/info').then((res) => {
        if(res.code == 1){
          this.oData = res.data;
          if(this.oShow.ys_personnel || this.oShow.ys_integral){
            this.levelName = res.data.level_name;
          }
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*人员管理状态*/
    userStatus(id,status){
      let obj = {
        type:this.userType,
        id:id,
        status:status
      }
      common(obj,'/user/status').then((res) => {
        if(res.code == 1){
          this.userList();
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*人员管理列表*/
    userList(){
      let obj0 = {
        page:this.oParameter.page,
        type:this.userType,
        status:2
      }
      let obj = mergeJsonObject(obj0,this.oParameter);
      common(obj,'/user/list').then((res) => {
        if(res.code == 1){
          this.oData = res.data.data;
          //this.oParameter.pageNum = res.data.last_page;
          this.total = res.data.total;
          this.lastPage = res.data.last_page;
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*修改等级*/
    updateLevel(obj){

      common(obj,'/rules/doctor/update').then((res) => {
        if(res.code == 1){
          this.listLevel();
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*等级列表*/
    listLevel(){
      let obj = {
        page:1
      }

      common(obj,'/rules/doctor/list').then((res) => {
        if(res.code == 1){
          if(this.$route.path == '/admin/distributionConfiguration/Y1S1/doctorLevel'){
            this.levelList = res.data.data.reverse();
          }else{
            for(let i=0;i<res.data.data.length;i++){
              if(res.data.data[i].level_name == this.levelName){
                this.levelInfo = res.data.data[i];
              }
            }
          }
          
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*删除等级*/
    deleteLevel(){
      let obj = {
        id:2
      }

      common(obj,'/level/delete').then((res) => {
        if(res.code == 1){

        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    },
    /*创建登级*/
    createLevel(){
      // let obj = {
      //   level_name:'体验期',
      //   proportion:5,
      //   level:0,
      //   upgrade:0,
      //   is_period:1,
      //   duration:6,
      //   apply_channel:'1,2,3'
      // }

      // let obj = {
      //   level_name:'正式期基础等级',
      //   proportion:0,
      //   level:1,
      //   upgrade:0,
      //   is_period:0,
      //   duration:1,
      //   apply_channel:'1,2,3'
      // }

      // let obj = {
      //   level_name:'正式期一级',
      //   proportion:5,
      //   level:1,
      //   upgrade:50,
      //   is_period:0,
      //   duration:1,
      //   apply_channel:'1,2,3'
      // }

      // let obj = {
      //   level_name:'正式期二级',
      //   proportion:10,
      //   level:1,
      //   upgrade:100,
      //   is_period:0,
      //   duration:1,
      //   apply_channel:'1,2,3'
      // }

      // common(obj,'/rules/doctor/create').then((res) => {
      //   console.log(res)
      // })
    },
    /*订单管理*/
    orderList(){
      let d = new Date();
      let y = d.getFullYear();
      let m = d.getMonth()+1;
      let _d = d.getDate();
      let obj0 = {
        page:this.oParameter.page,
        type:this.orderType
        // set_start_date:y+'-'+m+'-'+(_d-1),
        // set_end_date:y+'-'+m+'-'+_d
      }

      let obj = mergeJsonObject(obj0,this.oParameter);

      common(obj,'/order/list').then((res) => {
        if(res.code == 1){
          this.oData = res.data.data;
          //this.oParameter.pageNum = res.data.last_page;
          this.total = res.data.total;
          this.lastPage = res.data.last_page;
        }else{
          this.setPoint({type:0,pop:true,pointWord:res.message});
        }
      })
    }
  }
}

export default mixinApi;
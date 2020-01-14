import axios from 'axios'
import {md5} from '@/assets/js/md5'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// const apiUrl ='http://47.98.116.169:8098/api';
// const apiUrl2 ='http://222.66.48.190:8356/scrm-check/checkPwd';


export const arrPath = {
    doctorOrderPage1:'distributionOrder/doctorOrder/page1.json'
}


export const aMonth = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];

export function mergeJsonObject (jsonbject1, jsonbject2) {
    var resultJsonObject={};
    for(var attr in jsonbject1){
        resultJsonObject[attr]=jsonbject1[attr];
    }
    for(var attr in jsonbject2){
        resultJsonObject[attr]=jsonbject2[attr];
    }
    return resultJsonObject;
}


//获取签名
function getSign(obj){
    const key = 'hbtUb7qesrHY4EwjUdGF62etDSs0flxr';
    let arr = []
    let str = ''

    for(let name in obj){arr.push(name)}
        
    arr.sort()
    
    for(let i=0;i<arr.length;i++){
        if(i == arr.length-1){
            str += obj[arr[i]]+key
        }else{
            str += obj[arr[i]]+'|'
        }
    }

    return str
}


//通用接口
export function common(obj,str,pattern){
    let url = apiUrl + str 
    let params = new URLSearchParams()
    
    if(sessionStorage.path == '/admin/login'){
        if(eval(sessionStorage.adminLogin)){
            obj.access_token = sessionStorage.access_token
        }
    }else if(sessionStorage.path == '/h5/login'){
        if(eval(sessionStorage.h5Login)){
            obj.access_token = sessionStorage.access_token
        }
    }else{
        if(eval(sessionStorage.adminLogin) || eval(sessionStorage.h5Login)){
            obj.access_token = sessionStorage.access_token
        }
    }


    if(obj.password){
        obj.password = md5(obj.password+'bfy');
    }

    if(obj.old_password){
        obj.old_password = md5(obj.old_password+'bfy');
    }

    if(obj.pwd){
        obj.pwd = md5(obj.pwd).toUpperCase();
    }


    let sign = getSign(obj);
    

    if(str == '/user/outsidelogin'){
        obj = {
            json:JSON.stringify(obj)
        }
    }


    obj.sign = md5(sign);

    let _url = '';

    for(let key in obj){
        params.append(key, obj[key]);
        if(pattern == 'get'){
            _url+= key+'='+obj[key]+'&';
        }
    }



    if(pattern == 'get'){
        url +='?'+_url.substr(0,_url.length-1);
        return Promise.resolve({code:1,message:url});

    }else{
        return axios({
            method: 'post',
            url:url,
            data:params
        }).then((res)=>{
            if(res.data.data == 'token失效，请重新登录'){
                return Promise.resolve({code:-1,message:res.data.data})
            }else{
                return Promise.resolve(res.data) 
            }
        }).catch(err=>{
            return Promise.resolve({code:-1,message:'系统出错了，联系管理员！'})
        }) 
    }
  
    
}



export function upFile(oFile,str){
    let url = apiUrl + str;
    //let file = oFile || obj.files[0]
   
   
    let obj = {};

    if(eval(sessionStorage.adminLogin) || eval(sessionStorage.h5Login)){
        obj.access_token = sessionStorage.access_token;
    }

    let sign = getSign(obj);
    obj.sign = md5(sign);

    let image = new FormData();

    for(let key in obj){
        image.append(key, obj[key]);
    }

    image.append('file', oFile);

    
    return axios({
        method:'post',
        url:url,
        data:image,
        headers:{
          "Content-Type": "multipart/form-data",
        }
    }).then((res)=>{
        if(res.data.data == 'token失效，请重新登录'){
            return Promise.resolve({code:-1,message:res.data.data})
        }else{
            return Promise.resolve(res.data) 
        }
    }).catch(err=>{
        return Promise.resolve({code:-1,message:'系统出错了，联系管理员！'})
    })
}


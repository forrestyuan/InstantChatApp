import axios from 'axios';
import querystring from 'querystring';
// axios 配置
axios.defaults.timeout = 30000;//请求超时，适当修改
axios.defaults.baseURL = "http://127.0.0.1:3001/api";
/**
 * 封装axios的通用请求
 * @param  {string}   url       请求的接口URL
 * @param  {object}   data      传的参数，没有则传空对象
 * @param  {Function} fn        回调函数 fn(返回的数据,错误信息)
 * @return
 */

export default (url,data,fn,sendType="post")=>{
    let head = 'application/x-www-form-urlencoded; charset=UTF-8';
    if (Object.prototype.toString.call(data) === '[object FormData]') {
        head = 'multiple/form-data';//上传文件
    }else {
        data = querystring.stringify(data);
    }
    axios({
        method: sendType,
        url:url,
        data: data,
        headers: {'Content-Type': head}
    }).then(
        (res) => {
            res = res ||{status:404,statusText:'服务器出错！'};
            if (res.status === 200 || res.status === 304 || res.status === 400) {
                res.data.success = true;
                return res; 
            } else {
                return {
                    status: res.status,
                    data: { success: false, data: {}, message: res.statusText }
                };
            }
        }
    ).then(
        (res) => {
            let err;
            if (res.data && !res.data.success) {
                err = res.data.message;
               err ? console.log(err) : false;
            }
            if(!err && typeof res.data !== 'object'){
                console.error("返回对象不能为空！");
            }
            fn.call(this,err ? null : res.data,err);
        }
    ).catch(err=>{
        console.log("代码有问题：",err);
    });
};

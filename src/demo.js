//读取系统的CPU信息
const os = require('os');
const cpuSize = os.cpus();
console.log("cup数量:"+cpuSize.length);
//获取内存信息
const  total  = os.totalmem();//bytes
console.log("内存大小:"+total/1024/1024/1024);
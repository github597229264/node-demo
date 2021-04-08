//const buf = Buffer.alloc(256);
//let len = buf.write('{type:1,age:23}');
//console.log("文本长度="+len);
//
////从缓冲区读取数据
//console.log("保存的内容(字符串):"+buf.toString());
//
////将 Buffer 转换为 JSON 对象
//const jsonBuf = Buffer.from([2,1,3,4]);
//console.log("保存的内容(JSON对象):"+JSON.stringify(jsonBuf));
//
////缓冲区合并
//const newBuf1 = Buffer.from(('缓冲区合并111'));
//const newBuf2 = Buffer.from(('缓冲区合并222'));
//const concatBuf = Buffer.concat([newBuf1,newBuf2]);
//console.log("合并后的内容:"+concatBuf);

//缓冲区copy

var buf1 = Buffer.from('abcdefghijkl');
var buf2 = Buffer.from('RUNOOB');

//将 buf2 插入到 buf1 指定位置上
buf2.copy(buf1, 2);

console.log(buf1.toString());

//缓冲区裁剪

var buf3 = buf1.slice(0,5);
console.log("裁剪后的内容="+buf3.toString());

//缓冲区长度
console.log("裁剪后的内容="+buf1.length);

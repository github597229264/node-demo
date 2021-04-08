var fs =  require('fs');
var data ='';

//-----------创建可读流-----------
//var readerStream = fs.createReadStream('E:/privateWorkSpace/node-demo/src/file/input.txt');

//readerStream.setEncoding('UTF8');
//
//readerStream.on('data',function(chunk){
//	console.log("data");
//	data += chunk;
//});
//
//readerStream.on('end',function(){
//	console.log(data);
//});
//
//readerStream.on('error',function(err){
//	
//	console.log("error="+err.stack);
//});
//
//console.log('读程序执行完毕');

//var writerData = "写入流测试111111111111111111111111";

// -------创建一个可以写入的流，写入到文件 output.txt 中---------
//var writerStream = fs.createWriteStream("E:/privateWorkSpace/node-demo/src/file/output.txt");
//writerStream.write(writerData,'UTF8');
//writerStream.end();
//writerStream.on('finish',function(){
//	console.log("写入完成");
//});


//-------------管道流-----------------
var readerStream3 = fs.createReadStream('E:/privateWorkSpace/node-demo/src/file/input.mp3');
var writeStream3 = fs.createWriteStream('E:/privateWorkSpace/node-demo/src/file/output.mp3');
var startTime = new Date().getTime();
readerStream3.pipe(writeStream3);
writeStream3.on('finish',function(chunk){
	var endTime = new Date().getTime();
	console.log("管道流程序执行完毕,用时："+(endTime-startTime)+'毫秒');
});

//-------------链式流-----------------
var zlib = require('zlib');
//fs.createReadStream('E:/privateWorkSpace/node-demo/src/file/input.txt')
//.pipe(zlib.createGzip())
//.pipe(fs.createWriteStream('E:/privateWorkSpace/node-demo/src/file/input.txt.gz'));
//
//console.log("链式流:压缩 input.txt 文件为 input.txt.gz完成。");

//fs.createReadStream('E:/privateWorkSpace/node-demo/src/file/input.txt.gz')
//.pipe(zlib.createGunzip())
//.pipe(fs.createWriteStream('E:/privateWorkSpace/node-demo/src/file/inputJieya.txt'))
//console.log("链式流:解压 input.txt.gz 文件为 inputJieya.txt完成。");
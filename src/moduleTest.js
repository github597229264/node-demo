//var hello = require('./file/Hello');
//hello.world();
var Hello = require('./file/HelloTest.js');
hello = new Hello();
hello.setName("张三撒");
hello.SayHello();

var http = require("http");

http.createServer(function(request,response){
	response.writeHead(200,{
		"Content-Type":"text/plain"
	});
	response.write("hello world");
	response.end();
}).listen(8881);
 
function onRequest(request,response){
	response.writeHead(200,{
		"Content-Type":"text/plain"
	});
	response.write("hello world");
	response.end();
};
http.createServer(onRequest).listen(8882);

var http = require("http");
var url = require("url");
var c = 0
function start(route) {
	c++
	console.log("c= " + c);
	http.createServer(function(request, response) {
		var pathname = url.parse(request.url).pathname;
    	console.log("Request for " + pathname + " received.");
    	route(pathname);
		// 发送 HTTP 头部 
		// HTTP 状态值: 200 : OK
		// 内容类型: text/plain
		response.writeHead(200, {
			'Content-Type': 'text/plain'
		});
		let returnData = [{
				id: 1,
				name: 'aaa'
			},
			{
				id: 2,
				name: 'bbb'
			}
		];
		response.end(JSON.stringify(returnData));
	}).listen(8888);
}
exports.start = start
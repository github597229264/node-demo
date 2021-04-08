var http = require("http");
var url = require("url");
var c = 0
function start(route) {
	c++
	console.log("c= " + c);
	function onRequest(request, response) {
		console.log("c2= " + c);
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		route(pathname);
		
		response.writeHead(200, {
			"Content-Type": "text/plain"
		});
		response.write("hello world");
		response.end();
	};
	http.createServer(onRequest).listen(8889);
	console.log("Server has started.");
}

exports.start = start;
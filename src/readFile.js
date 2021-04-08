var fs = require("fs");
fs.readFileSync("file/serverconfig.json");
console.log(fs);
console.log("程序执行结束");


fs.readFile("file/serverconfig.json",function(err,data){
	if(err){
		return console.error(err);
	}
	console.log(data.toString());
});

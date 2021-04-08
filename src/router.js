var server = require("./nodeServer.js");
var router = require("./nodeRouter.js");
server.start(router.route);

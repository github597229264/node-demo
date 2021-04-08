var events = require("events");

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
	console.log('连接成功');
	eventEmitter.emit('data_received');
}

eventEmitter.on('connection',connectHandler);

eventEmitter.on('data_received',function(){
	console.log('数据接收成功1');
});
eventEmitter.on('data_received',function(){
	console.log('数据接收成功2');
});

eventEmitter.emit('connection');

console.log('程序执行完毕');


//eventEmitter.removeAllListeners('connection');//移除指定事件的监听器

var countEvents = eventEmitter.listeners('connection').length;
console.log('eventEmitter监听器数量='+countEvents);

//eventEmitter.removeAllListeners();//移除所有事件的监听器

//三种方式获取事件监听器数量
var countEvents2 = eventEmitter.listeners('data_received').length;
console.log('eventEmitter监听器数量='+countEvents2);

var countEvents3 = events.listenerCount(eventEmitter,'data_received');
console.log('eventEmitter监听器数量='+countEvents3);

var countEvents4 = eventEmitter.listenerCount('data_received');
console.log('eventEmitter监听器数量='+countEvents4);

eventEmitter.on('error',function(err){
	console.log('捕捉error'+err);
});

eventEmitter.emit('error');

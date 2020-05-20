var http = require('http');
var server = http.createServer();
var socket_io = require('socket.io');
server.listen(3000);
var io = socket_io();
io.attach(server);
io.on('connection', function(socket){
  	console.log("Socket connected: " + socket.id);
  	socket.on('messages', (action) => {
		console.log("Socket connected: messages");
		if (action.type === 'server/LOCAL_MESSAGE') {
			socket.emit('messages', { type:'local_message', data: action.data });
		}
		if (action.type === 'server/GLOBAL_MESSAGE') {
			console.log('Got global data!', action.data);
			io.sockets.emit('messages', { type:'global_message', data: action.data });
		}
		if (action.type === 'server/BROADCAST_MESSAGE') {
			console.log('Got broadcast data!', action.data);
			socket.broadcast.emit('messages', { type:'broadcast_message', data: action.data });
		}
	});
});
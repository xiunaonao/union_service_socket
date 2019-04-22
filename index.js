var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
let banner=require('./banner')
let banner_socket
let usrs=[]
let usr_name={}
io.on('connection', function(socket){
	banner.init(socket,(soc)=>{
		if(!banner_socket)
			banner_socket=soc
	})

	socket.on('new_user',(msg)=>{
		console.log('新用户'+msg+'先出了爱心')
		usrs.push(socket.id)
		usr_name[socket.id]=msg
		banner_socket.post(banner_socket,msg)
	})
	



});

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

http.listen(1026, function(){
  console.log('listening on *:1026');
});
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
let banner_socket
let usrs=[]
let usr_name={}
io.on('connection', function(socket){
	// banner.init(socket,(soc)=>{
	// 	if(!banner_socket)
	// 		banner_socket=soc
	// 	else{
	// 		console.log('已经获得,id:'+banner_socket.id)
	// 	}
	// })


	socket.on('banner',(msg)=>{
		banner_socket=socket
	})

	socket.on('new_user',(msg)=>{
		console.log('新用户'+msg+'献出了爱心')
		usrs.push(socket.id)
		usr_name[socket.id]=msg
		//banner.post(banner_socket,msg)
		if(banner_socket)
			banner_socket.emit('user',msg)
	})
	
	socket.on('beginn',(msg)=>{
		if(banner_socket)
			banner_socket.emit('begin',msg)
	})


});

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

http.listen(1026, function(){
  console.log('listening on *:1026');
});
let socket={
	init(io,callback){
		this.join(io,callback)
	},
	join(io,callback){
		io.on('banner',(msg)=>{
			console.log('大屏幕已加入'+io.id)
			//this.id=this.io.id

			callback(io)
			//this.io.emit()
		})

	},
	post(io,name){
		console.log('大屏幕'+io.id+'回复')
		io.emit('user',name)
	},
	
}



module.exports=socket

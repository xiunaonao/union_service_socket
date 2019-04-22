let socket={
	io:'',
	id:'',
	init(io,callback){
		this.io=io
		this.join()
		callback(this.io)
	},
	join(){
		this.io.on('banner',(msg)=>{
			console.log('大屏幕已加入'+this.io.id)
			this.id=this.io.id
			//this.io.emit()
		})

	},
	post(name){
		console.log('大屏幕'+this.io.id+'回复')
		this.io.emit('user',name)
	},
	
}



module.exports=socket

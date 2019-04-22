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
	post(io,name){
		console.log('大屏幕'+io.id+'回复')
		io.emit('user',name)
	},
	
}



module.exports=socket

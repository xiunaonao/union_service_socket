let socket={
	io:'',
	id:'',
	init(io){
		this.io=io
		this.join()
	},
	join(){
		this.io.on('banner',(msg)=>{
			console.log('大屏幕已加入')
			this.id=this.io.id
			//this.io.emit()
		})

	},
	post(name){
		this.io.emit('user',name)
	},
	
}



module.exports=socket

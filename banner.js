let socket={
	io:'',
	id:'',
	init(io){
		if(this.io)
			return
		this.io=io
		this.join()
	},
	join(){
		this.io.on('banner',(msg)=>{
			this.id=this.io.id
			//this.io.emit()
		})

	},
	post(name){
		this.io.emit('user',name)
	},
	
}



module.exports=socket

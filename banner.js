let socket={
	io:null,
	id:'',
	init(io){
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

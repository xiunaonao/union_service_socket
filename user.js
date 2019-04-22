let socket={
	io:null,
	id:'',
	init(io){
		this.io=io
		this.join()
	},
	join(){
		this.io.on('new_user',(msg)=>{
			this.id=this.io.id
			//this.io.emit()
		})

	},
	get(){
		this.io.emit('user',name)
	},
	
}



module.exports=socket

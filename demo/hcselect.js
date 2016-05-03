/**
 * 
 * create by herec 
 * @date    2016-04-08 09:40:36
 * 
 */

(function (){
	var hcSelect=function(option){
		var self=this;
		this.index=0;//ul的索引
		this.nowIdx=-1;
		this.nextIdx=-1;
		this.list=[]//主标题数组
		/*create html*/
		this._sMask=document.createElement("div");
		this._sMask.className="stMask";
		this._stSelect=document.createElement("div");
		this._stSelect.className="stselectbd";
		this._h3=document.createElement("h3");
		this._h3.className="stselectTip";
		document.body.appendChild(this._sMask);
		this._sMask.appendChild(this._stSelect);
		this._stSelect.appendChild(this._h3);
		//bd动画结束后执行
		this._stSelect.addEventListener("webkitTransitionEnd",function(){
			if(this.nexIdx!=-1){
				  self.hideAllList();
				  self.list[self.nowIdx].className="stlist dishow";
				  self._stSelect.className="stselectbd show";
			}
		},false)
		return this;
	}
	hcSelect.prototype.hideAllList=function(){
		  for(var i=0;i<this.list.length;i++){
		  	  this.list[i].className="stlist";
		  }
	}
	hcSelect.prototype.add=function(arr){
		var self=this;
		//ul的设置
		this.index++;
		self.listUl=document.createElement("ul");
		self.listUl.id="stselect"+this.index+"";
		self.listUl.className="stlist";
		
		self._stSelect.appendChild(self.listUl);
		arr.tipName &&  this.list.push(self.listUl);
		//添加列表
		for(var i=0;arr.item && i<arr.item.length;i++){
			var _li=document.createElement("li");
			_li.innerText=arr.item[i];
			self.listUl.appendChild(_li)
		}
		// console.log(this.index)
		return self;
	}
	hcSelect.prototype.show=function(idx){
		this.nowIdx=idx-1;
		if(this._sMask.style.visibility!="visible"){//隐藏
			this.hideAllList();
			this._stSelect.className="stselectbd show";
			this.list[this.nowIdx].className="stlist dishow";
			this._sMask.style.visibility="visible";
			this.nexIdx=this.nowIdx;
		}else{
			this._stSelect.className="stselectbd";
		}
	}
	hcSelect.prototype.close=function(){
		 
	}
window.hcSelect=hcSelect;//hcSelect是在function里面，要把它暴露出function外
})()


var hcselect=new hcSelect()


hcselect.add({
	tipName:"选择列表1",
	item:["广东省","广东省","广东省","广东省","广东省","广东省","广东省"]
}).add({
	tipName:"选择列表1",
	item:["北京","北京","北京","北京","北京","北京","北京"]
}).add({
	tipName:"选择列表1",
	item:["江西省","江西省","江西省","江西省","江西省","江西省","江西省"]
})
setTimeout(function(){
	 hcselect.show(1);
	 setTimeout(function(){
	 	hcselect.show(2);
	 	setTimeout(function(){
	 		hcselect.show(3)
	 	},3000)
	 },3000)
},100)
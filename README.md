# 简介
仿iphone下拉列表
#使用
####添加css
 
    .stMask{width:100%;height:100%;background:rgba(0,0,0,0.5);position:fixed;font-size:0.3rem;z-index:99999;}
	.stselectbd{width:100%;-webkit-transform:translate3d(0,100%,0);-webkit-transition:-webkit-transform 300ms linear;position:absolute;bottom:0rem;}
	.stlist{width:100%;background-color:#303030;overflow:auto;height:3rem;display:none;}
	.stselectTip{width:100%;background-color:#000;text-align:center;line-height:100%;height:0.8rem;color:#848484;line-height:0.8rem;}
	.stMask ul li:nth-child(2n+1){background-color:#242424;}
	.stMask li{width:100%;height:0.6rem;background-color:#343434;text-align:center;line-height:0.6rem;color:#fff;}
	.stselectbd.show{-webkit-transform:translate3d(0,0,0);}
	.dishow{display:block;}
####添加js
`add()`是添加列表

`show()`是显示列表

####初始化
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
	
	

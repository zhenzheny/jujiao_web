/*分享页面跳转地址*/
var andAppUrl="http://j.shjujiao.com/static/page/a/teaMsg/downPage.html";
var iosAppUrl="http://j.shjujiao.com/static/page/a/teaMsg/downPage.html";
//var andAppUrl="http://118.89.150.168:8090/static/page/a/teaMsg/downPage.html";
//var iosAppUrl="http://118.89.150.168:8090/static/page/a/teaMsg/downPage.html";
/*设置是不是app打开*/
var agent=navigator.userAgent;
var hasPlus=agent.indexOf("isaplus");
var tokenData=agent.split("token/")[1];
//var tokenData="hMtMBtBNzo67GPR0";
var imgUrl="http://img.shjujiao.com/";
/*判断手机机型（start from teacher 207 common）*/
var u = navigator.userAgent, app = navigator.appVersion;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
//线上接口
//var jieUrl="http://localhost:10001/msg/";
//线下接口
var jieUrl="http://122.152.194.233:8080/msg/";
//var pageUrl="http://j.shjujiao.com/static/page/a/"
var pageUrl="http://122.152.194.233:8080/static/page/a/"
//var jieUrl="http://118.89.150.168";
var oldUrl="http://118.89.150.168";
/*判断页面中是否含有null或是undefined*/
//function hasNull(msg){
//	var dataArray=msg.d;
//	console.log(dataArray.length);
//	for(l=0;l<dataArray.length;l++){
//		console.log("dddddddddddddddd")
//		if(dataArray[l]==null){
//			console.log(dataArray[l])
//		}else if(dataArray[l]==undefined){
//			console.log(dataArray[l])
//		}else{
//			console.log("jjjjj")
//		}
//	}
//}

//var agent=location.search; 
//var hasPlus=agent.indexOf("isaplus");

// 链接参数
var url=location.search; 
if(url.indexOf("?")!=-1) 
{
    function GetQueryString(name)
    {
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r!=null)return  unescape(r[2]); return null;
    }
    var idNum=GetQueryString("id");
    var userId=GetQueryString("user_id");
    //var parm={"id":idNum,"user_id":userId};
}

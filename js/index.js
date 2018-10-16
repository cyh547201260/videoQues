var h=window.innerHeight;
var w=window.innerWidth;
var rightAudio=document.getElementById("rightAudio");
var wrongAudio=document.getElementById("wrongAudio");
var video = document.getElementById('Bvideo');
//适配
var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
if(isAndroid||isiOS) {
    var touchstart1="touchstart";
    var touchmove1="touchmove";
    var touchend1="touchend";
    var tap1="touchstart"
}else{
    var touchstart1="mousedown";
    var touchmove1="mousemove";
    var touchend1="mouseup";
    var tap1="click"
}
$(".dian").on(tap1,function(){
	$(".start").css("display","none");
	$(".section1").css("display","block");
	document.getElementById("Bvideo").play();
})
var video1 = document.getElementById("Bvideo");
video1.addEventListener('ended', function () {  
	$(".section1").css("display","none");
	$(".question").css("display","block");
}, false);
$(".ques-p4 img").on(tap1,function(){
	if($(this).attr("data") == ""){
		return false;
	}
	$(".question").css("display","none");
//	$(".section2").css("display","block");
//	document.getElementById("right").play();
	if($(this).attr("data") == 1){
		$(".section2").css("display","block");
		document.getElementById("right").play();
	}else{
		$(".section3").css("display","block");
		document.getElementById("wrong").play();
	}
})
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title></title>
		<link rel="stylesheet" href="css/index.css" />
		<audio src="images/right.mp3" id="rightAudio"></audio>
        <audio src="images/wrong.mp3" id="wrongAudio"></audio>
		<style>
    		html,body{
                margin: 0;
                padding: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
                position: relative;
            }           
            @-webkit-keyframes fadeIn {0% {opacity: 0;}100% {opacity: 1;}}
            @-moz-keyframes fadeIn {0% {opacity: 0;}100% {opacity: 1;}}
            @keyframes fadeIn {0% {opacity: 0;}100% {opacity: 1;}}
    	</style>
	</head>
	<body>
		<!--1.在开始页面放点击图片
    		2.在点击完成后 开始播放视频
    		3.视频播放完毕后显示题目与选项
    		4.点击选项后 判断选项是否正确 错误 播放错误视频 然后把题目和选项在列出来
    		                                                            正确 播放正确视频 然后下一题
   -->
   		<!--设置一开始的图像与点击按钮-->
    	<div class="start">
    		<img src="images/poster0.jpg" alt="" class="first_bg"/>
    		<img src="images/p0.1.png" alt="" class="study"/>
    		<img src="images/dian.png" alt="" class="dian"/>
    	</div>
    	<!--开始视频播放-->
    	<div class="section1">
    		<video id="Bvideo" poster="images/poster0.jpg" width="100%" class="video" preload="auto" x-webkit-airplay="true" webkit-playsinline="true" playsinline="" x5-video-player-type="h5" x5-video-player-fullscreen="true" src="images/video0.mp4"></video>
    	</div>
    	<!--正确视频-->
    	<div class="section2">
    		<video id="right" poster="images/poster0.jpg" width="100%" preload="auto" x-webkit-airplay="true" webkit-playsinline="true" playsinline="" x5-video-player-type="h5" x5-video-player-fullscreen="true" src="images/video01.mp4"></video>
    	</div>
    	<!--错误视频-->
    	<div class="section3">
    		<video id="wrong" poster="images/poster0.jpg" width="100%" preload="auto" x-webkit-airplay="true" webkit-playsinline="true" playsinline="" x5-video-player-type="h5" x5-video-player-fullscreen="true" src="images/video1.mp4"></video>
    	</div>
    	<!--答题页-->
    	<div class="question">
    		<img src="images/poster1.jpg" alt="" class="ques-bg"/>
    		<div class="ques-p4">
    			<img src="images/p4.1.png" alt="" class="ques-p4-1" data=""/>
    			<img src="images/p4.2.png" alt="" class="ques-p4-2" data="1"/>
    			<img src="images/p4.3.png" alt="" class="ques-p4-3" data="2"/>
    			<img src="images/p4.4.png" alt="" class="ques-p4-4" data="3"/>
    			<img src="images/p4.5.png" alt="" class="ques-p4-5" data="4"/>
    		</div>
    	</div>
    	
    	
	</body>
	<script src="js/jquery-2.1.1.min.js"></script>
	<script src="js/index.js"></script>
	<script src="js/loader.js"></script>
	<script src="js/m.js"></script>
</html>

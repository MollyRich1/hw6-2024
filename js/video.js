var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay= false;
	video.loop= false;
	console.log("Autoplay is set to " + video.autoplay);
	console.log("loop is set to " + video.loop)

});

//play button
document.querySelector("#play").addEventListener("click", function() {
	video = document.querySelector("#player1")
	//HOW TO UPDATE VOLUME
	//start volume at default volume
	video.play();
	let vol = video.volume;
	//does this work right??
	document.querySelector("#volume").innerHTML = vol;
	console.log("Play Video");
});

//pause button
document.querySelector("#pause").addEventListener("click", function() {
	// document.querySelector(".video").innerHTML(autoplay = false);
	// document.querySelector("autoplay").innerHTML = false;
	video = document.querySelector("#player1")
	video.pause();
	console.log("Pause Video");
});


//slow down
document.querySelector("#slower").addEventListener("click", function() {
	video = document.querySelector("#player1")
	let curr_rate = video.playbackRate;
	let tenth_rate = video.playbackRate * (1/10);
	video.playbackRate = curr_rate - tenth_rate;
	curr_rate = video.playbackRate;
	console.log("video slowed, current speed: "+ video.playbackRate);
});


//speed up
document.querySelector("#faster").addEventListener("click", function() {
	video = document.querySelector("#player1")
	let curr_rate = video.playbackRate;
	let tenth_rate = video.playbackRate * (1/10);
	video.playbackRate = curr_rate + tenth_rate;
	// let curr_rate = video.playbackRate;
	console.log("video sped up, current speed: " + video.playbackRate);
});


//skip ahead
//how to know what place the video is at, like how long it has been playing for / how long is left in the video
document.querySelector("#skip").addEventListener("click", function() {
	video = document.querySelector("#player1")
	let length =  video.duration;
	let curr_played = video.currentTime;
	if(curr_played + 10 <= length){
		//CAN I USE MY VARIABLES
		video.currentTime = curr_played + 10;
		console.log("the current location of video: " + video.currentTime);
	}
	else{
		video.currentTime = 0;
		console.log("the current location of video: " + video.currentTime);
	}
});


//mute button
document.querySelector("#mute").addEventListener("click", function() {
	video = document.querySelector("#player1");
	if (video.muted == true){
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else{
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
})

//volume slider


//styled

//original




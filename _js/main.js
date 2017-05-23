	var today = new Date();  //get's today's date in the long ass string format
	var day = today.getDay(); //Days are counted 0-6, Sun = 0
	var hour = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();
	var daylist = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	var ampm = "AM";
	console.log("Today is " + daylist[day] + ".");
	var playingVideo = new Boolean(false);

$(document).ready(function () {
	var n = 15;
	while(n > 0){
		$(".animation-container").append($(".animation-container").children().first().clone());
		n -= 1;
	}
});


function clock(){

	var today = new Date();  //get's today's date in the long ass string format
	var day = today.getDay(); //Days are counted 0-6, Sun = 0
	var hour = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();
	var daylist = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	var ampm = "AM";
	console.log("Today is " + daylist[day] + ".")

	if(hour >= 12){
		var realhours = hour;
		var ampm = "PM";
		console.log("The time is " + realhours + ":" + minutes + " AM");
	} 
	else {
		var realhours = hour;
		// var ampm = "AM";
	}

	if(minutes < 10){ minutes = '0' + minutes }

	else {minutes = minutes}


	var display_date = daylist[day];
	var display_time = hour + ":" + minutes;

	document.getElementById("time_now").innerHTML = display_date + ", " + display_time + " " + ampm;

	// hide the audio wave
	if (day == 1 & hour >= 22) {
		$('.off-air').css("display","none");
		$('.info-text').css("display", "none");
		$('.on-air').css("color", "#8CD867");
		console.log("we are on the air");
		videoPlay();

	} else {
		$('.on-air').css("display", "none");
		$('.animation-container').css("display", "none");
		$('.off-air').css("color", "#DD007C");
		console.log("radio silence");
		
		}
}

clock();
setInterval(clock, 1000);

function videoPlay(){
	var video = document.getElementById("video");
	console.log('got the video!');
	video.play();
	if(video.play()) {playingVideo = true;} 
		else { playingVideo = false;}
	console.log(playingVideo);

}

let dt = new Date(new Date().setTime(0));
let time = dt.getTime();
let seconds = Math.floor((time%(100*60))/1000);
let minutes = Math.floor((time%(1000*60*60))/(1000*60));



timex = 0;

let myTime = setInterval(function(){
	if (seconds<59){
		seconds++
	}else{
		minutes++;
		seconds =0;
	}
	// 

	let t_second = seconds <10 ? ` 0${seconds} `: `${seconds}`;
	let t_min = minutes <10 ? ` 0${minutes} `: `${minutes}`;
	document.querySelector(".time").innerHTML = `${t_second}:${t_min}`;

},1000);
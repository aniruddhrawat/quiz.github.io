window.onload = ()=>{
	show(0);
	
}


let questions = [

{
	id:1,
	question:"what is Computer ?",
	answer:"All of the above.",
	option:[
	"Computer is an electronic device.",
	"We can store data and get data with it.",
	"We can transfer the data.",
	"All of the above."
	]
},
{
	id:2,
	question:"Father Of Modern Computer ?",
	answer:"Charles Babbage.",
	option:[
	"Einstine.",
	"willium James.",
	"Charles Babbage.",
	"None of these."
	]
},
{
	id:3,
	question:" World first electronic  Computer ?",
	answer:"ENIAC-1.",
	option:[
	"PARAM.",
	"SUPERFAST.",
	"ENIAC-1.",
	"ENICA-1."
	]
},

{
	id:4,
	question:"What is cpu?",
	answer:"central processing unit.",
	option:[
	"centrals processing unit.",
	"central processing unit.",
	"central processing unix.",
	"central power unified."
	]
},

{
	id:5,
	question:"cpu is Known as ?",
	answer:"both.",
	option:[
	"brain of computer.",
	"micro processor.",
	"both.",
	"None of the above."
	]
},

{
	id:6,
	question:"Scanner is ?",
	answer:"input device.",
	option:[
	"input word.",
	"input device.",
	"output device.",
	"camera frame."
	]
},

{
	id:7,
	question:"which one is not the high level language ?",
	answer:"BASICS.",
	option:[
	"LOGO.",
	"COMAL.",
	"FORTH.",
	"BASICS."
	]
},

{
	id:8,
	question:"1MB ?",
	answer:"All of the above.",
	option:[
	"1/1024gb.",
	"1024kb.",
	"1024x1024 byte.",
	"All of the above."
	]
},

{
	id:9,
	question:"which is refresh key in the keyboard ?",
	answer:"F5.",
	option:[
	"F4.",
	"F5.",
	"F6.",
	"F8."
	]
},

{
	id:10,
	question:"Speaker is ?",
	answer:"output device.",
	option:[
	"input device.",
	"output device.",
	"electronic device.",
	"part of computer."
	]
}

];
















function submitform(e) {
	e.preventDefault();
	let name = document.forms['form']['name'].value;
	sessionStorage.setItem("name", name);
	location.href = "quiz.html";
}



let question_count = 0;
let point = 0;

function next(){

	let user_answer = document.querySelector("li.option.active").innerHTML;
	
	if(user_answer== questions[question_count].answer){
		point += 10;
		sessionStorage.setItem("point",point);
	}
	if(question_count==questions.length-1){

		sessionStorage.setItem('time',`${minutes} minutes ${seconds} seconds`)
		clearInterval(myTime);
		location.href = "end.html";
		return;
	}


	question_count++;
	show(question_count);
}

function show(count){
	let question = document.getElementById('question');
	question.innerHTML = `<h3> Q.${question_count+1}  ${questions[count].question}  </h3>
	<ul class="option-group">
				
				<li class="option">${questions[count].option[0]}</li>
				<li class="option">${questions[count].option[1]}</li>
				<li class="option">${questions[count].option[2]}</li>
				<li class="option">${questions[count].option[3]}</li>
			
			</ul>
	`;
	toggleActive();
}


function toggleActive(){
	let option = document.querySelectorAll("li.option");
	for(let i=0; i<option.length; i++){
		option[i].onclick = function(){

			for(let i=0 ; i<option.length; i++){
				if(option[i].classList.contains("active")){
					option[i].classList.remove('active');
				}
			}
			option[i].classList.add("active");

		 }
		
	}

}
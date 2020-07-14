let names = sessionStorage.getItem("name");
let points = sessionStorage.getItem("point");
let times = sessionStorage.getItem("time");


document.querySelector(".name").innerHTML = names;
document.querySelector(".point").innerHTML = points;
document.querySelector(".time").innerHTML = times;

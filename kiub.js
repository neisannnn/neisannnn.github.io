setTimeout(start, 3000);

function start(){
document.getElementById("logo").style.display = "none";
document.getElementById("p4").style.display = "block";
setTimeout(p1, 3000);
setTimeout(p2, 1500);
setTimeout(p3, 1000);
setTimeout(p5, 3000);
setTimeout(log, 5000);
setTimeout(signlog, 6000);
}

function p1(){
	document.getElementById("p1").style.display = "block";
}

function p2(){
	document.getElementById("p2").style.display = "block";
}

function p3(){
	document.getElementById("p3").style.display = "block";
}

function p5(){
	document.getElementById("p5").style.display = "block";
}

function log(){
	document.getElementById("log").style.display = "block";
}

function signlog(){
	document.getElementById("login").style.display = "block";
	document.getElementById("signin").style.display = "block";
}

function login(){
	document.getElementById("signin").style.color = "white";
	document.getElementById("login").style.color = "#f1c40f";
	document.getElementById("log").style.display = "block";
	document.getElementById("reg").style.display = "none";
}

function signin(){
	document.getElementById("signin").style.color = "#f1c40f";
	document.getElementById("login").style.color = "white";
	document.getElementById("log").style.display = "none";
	document.getElementById("reg").style.display = "block";
}

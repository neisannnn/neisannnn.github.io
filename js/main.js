var navState = 0;

var navButton = document.getElementById("header-nav-button");
var navLine1 = document.getElementById("header-nav-btn-line-1");
var navLine2 = document.getElementById("header-nav-btn-line-2");

ScrollOut({
	threshold: .8,
	once: true
});

navButton.addEventListener("mouseenter", function( event ) {
	navLine1.style.transform = "rotate(450deg)";
	navLine1.style.position = "absolute";
	navLine2.style.transform = "rotate(360deg)";
}, false);

navButton.addEventListener("mouseleave", function( event ) {
	if (navState != 1) {
		navLine1.style.transform = "rotate(0deg)";
		navLine2.style.transform = "rotate(0deg)";
		setTimeout(function(){
			navLine1.style.position = "relative";
		},200);
	}else{
		navButton.style.transform = "rotate(45deg)";
	}
}, false);

function navClick(){
	if (navState == 1) {
		navState = 0;
		navButton.style.transform = "rotate(0deg)";
		document.getElementById("header-logo").src = "img/logo.png";
		document.getElementById("header-bg").style.width = "0%";
		setTimeout(function(){
			document.getElementById("nav-title-1").style.color = "transparent";
			document.getElementById("nav-title-1").style.pointerEvents = "none"
		},150);
		setTimeout(function(){
			document.getElementById("nav-title-2").style.color = "transparent";
			document.getElementById("nav-title-2").style.pointerEvents = "none"
		},200);
		setTimeout(function(){
			document.getElementById("nav-title-3").style.color = "transparent";
			document.getElementById("nav-title-3").style.pointerEvents = "none"
		},300);
		setTimeout(function(){
			navLine1.style.backgroundColor = "#171717";
			navLine2.style.backgroundColor = "#171717";
		},700);
	}else{
		navState = 1;
		setTimeout(function(){
			document.getElementById("header-logo").src = "img/logo-w.png";
		},700);
		setTimeout(function(){
			document.getElementById("nav-title-1").style.color = "#dfe6e9";
			document.getElementById("nav-title-1").style.pointerEvents = "all"
		},300);
		setTimeout(function(){
			document.getElementById("nav-title-2").style.color = "#dfe6e9";
			document.getElementById("nav-title-2").style.pointerEvents = "all"
		},200);
		setTimeout(function(){
			document.getElementById("nav-title-3").style.color = "#dfe6e9";
			document.getElementById("nav-title-3").style.pointerEvents = "all"
		},150);
		navLine1.style.backgroundColor = "#dfe6e9";
		navLine2.style.backgroundColor = "#dfe6e9";
		document.getElementById("header-bg").style.width = "96%";
	}
}
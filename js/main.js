var navState = 0;

var moreProjectsDiv = document.getElementById("more-projects");
var moreProjectsBg = document.getElementById("more-projects-bg");
var moreProjectsText = document.getElementById("more-projects-text");

var moreInfosDiv = document.getElementById("more-infos");
var moreInfosBg = document.getElementById("more-infos-bg");
var moreInfosText = document.getElementById("more-infos-text");

var navButton = document.getElementById("header-nav-button");
var navLine1 = document.getElementById("header-nav-btn-line-1");
var navLine2 = document.getElementById("header-nav-btn-line-2");

var projectBtn1 = document.getElementById("project-btn-1");
var insideCircle1 = document.getElementById("inside-circle-1");
var textBtn1 = document.getElementById("project-btn-txt-1");

var projectBtn2 = document.getElementById("project-btn-2");
var insideCircle2 = document.getElementById("inside-circle-2");
var textBtn2 = document.getElementById("project-btn-txt-2");

var projectBtn3 = document.getElementById("project-btn-3");
var insideCircle3 = document.getElementById("inside-circle-3");
var textBtn3 = document.getElementById("project-btn-txt-3");

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

moreProjectsDiv.addEventListener("mouseenter", function( event ) {
	moreProjectsBg.style.width = "100%";
	setTimeout(function(){
		moreProjectsText.style.color = "#ecf0f1";
	},80);
}, false);

moreProjectsDiv.addEventListener("mouseleave", function( event ) {
	moreProjectsBg.style.width = "0%";
	setTimeout(function(){
		moreProjectsText.style.color = "#171717";
	},150);
}, false);

moreInfosDiv.addEventListener("mouseenter", function( event ) {
	moreInfosBg.style.width = "100%";
	setTimeout(function(){
		moreInfosText.style.color = "#ecf0f1";
	},100);
}, false);

moreInfosDiv.addEventListener("mouseleave", function( event ) {
	moreInfosBg.style.width = "0%";
	setTimeout(function(){
		moreInfosText.style.color = "#171717";
	},150);
}, false);



projectBtn1.addEventListener("mouseenter", function( event ) {
	insideCircle1.style.width = "124px";
	insideCircle1.style.height = "124px";
	insideCircle1.style.borderRadius = "62px";
	textBtn1.style.letterSpacing = "0px";
}, false);

projectBtn1.addEventListener("mouseleave", function( event ) {
	insideCircle1.style.width = "0px";
	insideCircle1.style.height = "0px";
	insideCircle1.style.borderRadius = "0px";
	textBtn1.style.letterSpacing = "5px";
}, false);

projectBtn2.addEventListener("mouseenter", function( event ) {
	insideCircle2.style.width = "124px";
	insideCircle2.style.height = "124px";
	insideCircle2.style.borderRadius = "62px";
	textBtn2.style.letterSpacing = "0px";
}, false);

projectBtn2.addEventListener("mouseleave", function( event ) {
	insideCircle2.style.width = "0px";
	insideCircle2.style.height = "0px";
	insideCircle2.style.borderRadius = "0px";
	textBtn2.style.letterSpacing = "5px";
}, false);

projectBtn3.addEventListener("mouseenter", function( event ) {
	insideCircle3.style.width = "124px";
	insideCircle3.style.height = "124px";
	insideCircle3.style.borderRadius = "62px";
	textBtn3.style.letterSpacing = "0px";
}, false);

projectBtn3.addEventListener("mouseleave", function( event ) {
	insideCircle3.style.width = "0px";
	insideCircle3.style.height = "0px";
	insideCircle3.style.borderRadius = "0px";
	textBtn3.style.letterSpacing = "5px";
}, false);
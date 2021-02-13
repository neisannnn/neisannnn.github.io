var projectBtn1 = document.getElementById("project-btn-1");
var insideCircle1 = document.getElementById("inside-circle-1");
var textBtn1 = document.getElementById("project-btn-txt-1");

var projectBtn2 = document.getElementById("project-btn-2");
var insideCircle2 = document.getElementById("inside-circle-2");
var textBtn2 = document.getElementById("project-btn-txt-2");

var projectBtn3 = document.getElementById("project-btn-3");
var insideCircle3 = document.getElementById("inside-circle-3");
var textBtn3 = document.getElementById("project-btn-txt-3");

var moreProjectsDiv = document.getElementById("more-projects");
var moreProjectsBg = document.getElementById("more-projects-bg");
var moreProjectsText = document.getElementById("more-projects-text");

var moreInfosDiv = document.getElementById("more-infos");
var moreInfosBg = document.getElementById("more-infos-bg");
var moreInfosText = document.getElementById("more-infos-text");

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
	insideCircle1.style.width = "6vw";
	insideCircle1.style.height = "6vw";
	insideCircle1.style.borderRadius = "3vw";
	textBtn1.style.letterSpacing = "0vw";
}, false);

projectBtn1.addEventListener("mouseleave", function( event ) {
	insideCircle1.style.width = "0vw";
	insideCircle1.style.height = "0vw";
	insideCircle1.style.borderRadius = "0vw";
	textBtn1.style.letterSpacing = "0.2vw";
}, false);

projectBtn2.addEventListener("mouseenter", function( event ) {
	insideCircle2.style.width = "6vw";
	insideCircle2.style.height = "6vw";
	insideCircle2.style.borderRadius = "3vw";
	textBtn2.style.letterSpacing = "0vw";
}, false);

projectBtn2.addEventListener("mouseleave", function( event ) {
	insideCircle2.style.width = "0vw";
	insideCircle2.style.height = "0vw";
	insideCircle2.style.borderRadius = "0vw";
	textBtn2.style.letterSpacing = "0.2vw";
}, false);

projectBtn3.addEventListener("mouseenter", function( event ) {
	insideCircle3.style.width = "6vw";
	insideCircle3.style.height = "6vw";
	insideCircle3.style.borderRadius = "3vw";
	textBtn3.style.letterSpacing = "0vw";
}, false);

projectBtn3.addEventListener("mouseleave", function( event ) {
	insideCircle3.style.width = "0vw";
	insideCircle3.style.height = "0vw";
	insideCircle3.style.borderRadius = "0vw";
	textBtn3.style.letterSpacing = "0.2vw";
}, false);
var docsBtn = document.getElementById("docs-btn");
var gsbDocsBg = document.getElementById("gsb-docs-bg");
var gsbDocsText = document.getElementById("gsb-docs-text");

docsBtn.addEventListener("mouseenter", function( event ) {
	gsbDocsBg.style.width = "100%";
	setTimeout(function(){
		gsbDocsText.style.color = "#ecf0f1";
	},80);
}, false);

docsBtn.addEventListener("mouseleave", function( event ) {
	gsbDocsBg.style.width = "0%";
	setTimeout(function(){
		gsbDocsText.style.color = "#171717";
	},150);
}, false);
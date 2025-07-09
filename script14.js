// the context is ready 

/*jQuery(document).ready(function(){
    alert("this works!");
});*/

/*
before we use window.onload to make this fuction works
$(document).ready give us the ability to write function which access the dom safely
*/ 

/*$(document).ready(function(){
    alert("this works!");
});

$(document).ready(function(){
    alert("this works 1!");
});

$(document).ready(function(){
    alert("this works 2!");
});

$(document).ready(function(){
    alert("this works 3!");
});*/

//jQuery('#myFirstParagraph').fadeOut(500).fadIn(500);
$(function() {
    //$("#title").text("Yay, I can now get H1 immediately!");
   // $("#first").html("<h2>Great quotes</h2>");
   $("#first").prepend("<h2>Great quotes</h2>");
   $("#first").append("<h3> ... for you to ponder ... </h3>");
   $("#myAnchor").attr("href","http://channel19.msdn.com");
   $("#title").addClass("standout");
   // before;, after , insertBefore 
});

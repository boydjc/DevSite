$(document).ready(function(){
    $("#navBar a" ).click(function(event){
	event.preventDefault();
	$("#mainCont").addClass("mainContAnim");
	// pause the animation
	setTimeout(function() {
	    $("#mainCont").addClass("pauseAnimation");
	    alert("Animation Paused");
	    $("#mainCont").removeClass("pauseAnimation");
	}, 500);
	setTimeout(function() {
	    $("#mainCont").removeClass("mainContAnim");
	}, 2500); // This second parameter number is the duration of the
	    // animation in milliseconds.
    });
});

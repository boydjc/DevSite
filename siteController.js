$(document).ready(function(){
    $("#navBar a" ).click(function(event){
	event.preventDefault();
	$("#mainCont").addClass("mainContAnim");
	// pause the animation
	setTimeout(function() {
	    $("#mainCont").addClass("pauseAnimation");
	    if($(event.target).text() == "Home") {
		$("#greeting h1").text("Home");
	    }else if($(event.target).text() == "About") {
		$("#greeting h1").text("About");
	    }else if($(event.target).text() == "Resume") {
		$("#greeting h1").text("Resume");
	    }else if($(event.target).text() == "Blog") {
		$("#greeting h1").text("Blog");
	    }
	    $("#mainCont").removeClass("pauseAnimation");
	}, 500);
	setTimeout(function() {
	    $("#mainCont").removeClass("mainContAnim");
	}, 1500); // This second parameter number is the duration of the
	    // animation in milliseconds.
    });
});

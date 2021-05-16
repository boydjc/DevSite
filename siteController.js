$(document).ready(function(){
    $("#navBar a" ).click(function(event){
	event.preventDefault();
	$("#mainCont").addClass("mainContAnim");
	// pause the animation
	setTimeout(function() {
	    $("#mainCont").addClass("pauseAnimation");
	    if($(event.target).text() == "Home") {
		changeToHome();
	    }else if($(event.target).text() == "About") {
		changeToAbout();
	    }else if($(event.target).text() == "Resume") {
		changeToResume();
	    }else if($(event.target).text() == "Blog") {
		changeToBlog();
	    }else if($(event.target).text() == "Contact") {
		changeToContact();
	    }

	    $("#mainCont").removeClass("pauseAnimation");
	}, 500);
	setTimeout(function() {
	    $("#mainCont").removeClass("mainContAnim");
	}, 1500); // This second parameter number is the duration of the
	    // animation in milliseconds.
    });

    // changes the page to the home content
    function changeToHome() {
	$("#greeting h1").text("Home");
    }

    // changes the page to the about content
    function changeToAbout() {
	$("#greeting h1").text("About");
    }

    // changes the page to the blog content
    function changeToBlog() {
	$("#greeting h1").text("Blog");
    }

    function changeToResume() {
	$("#greeting h1").text("Resume");
    }

    // changes the page to the contact content
    function changeToContact() {
	$("#greeting h1").text("Contact");
    }
});

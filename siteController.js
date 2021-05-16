$(document).ready(function(){

    var currentPage = "Home";

    $("#navBar a" ).click(function(event){
	event.preventDefault();
	$("#mainCont").addClass("mainContAnim");
	// pause the animation
	setTimeout(function() {
	    $("#mainCont").addClass("pauseAnimation");
	    if($(event.target).text() == "Home") {
		removeContent();
		changeToHome();
		currentPage = "Home";
	    }else if($(event.target).text() == "About") {
		removeContent();
		changeToAbout();
		currentPage = "About";
	    }else if($(event.target).text() == "Resume") {
		removeContent();
		changeToResume();
		currentPage = "Resume";
	    }else if($(event.target).text() == "Blog") {
		removeContent();
		changeToBlog();
		currentPage = "Blog";
	    }else if($(event.target).text() == "Contact") {
		removeContent();
		changeToContact();
		currentPage = "Contact";
	    }

	    $("#mainCont").removeClass("pauseAnimation");
	}, 500);
	setTimeout(function() {
	    $("#mainCont").removeClass("mainContAnim");
	}, 1500); // This second parameter number is the duration of the
	    // animation in milliseconds.
    });

    
    // removes web elements depending on what page we are currently on
    function removeContent() {
	if(currentPage == "Home") {
            $("#profilePicCont").remove();
	    $("#greeting").remove();
	    $("#disc").remove();
	}
    }

    // changes the page to the home content
    function changeToHome() {
	$("#greeting h1").text("Joshua Boyd");
	// Create profile picture div
	$("#mainCont").append(
	    '<div id="profilePicCont"><img src="joshFancyNew.jpg" id="profilePic" alt="fancy.jpg" height=300 width=307></div>'
	);
	$("#mainCont").append(
	    '<div id="greeting"><h1>Joshua Boyd</h1></div>'
	);
	$("#mainCont").append(
	    '<div id="disc"><ul><li id="listOne">Software Developer</li><li id="listTwo">Programming Enthusiast</li><li id="listThree">Computer Nerd</li></ul></div>'
	);
    }

    // changes the page to the about content
    function changeToAbout() {
    }

    // changes the page to the blog content
    function changeToBlog() {
    }

    function changeToResume() {
    }

    // changes the page to the contact content
    function changeToContact() {
    }
});

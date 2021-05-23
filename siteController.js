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

    // stop the video background when the play arrow is clicked
    $("#videoControl a").click(function(event) {
	event.preventDefault();
	
	if($("#videoBg").get(0).paused) {
	    $("#videoBg").get(0).play();
	    $("#videoControl p").text("Pause Background");
	    $("#videoControl a").text("\u2B1B");
	}else{
	    $("#videoBg").get(0).pause();
	    $("#videoControl p").text("Play Background");
	    $("#videoControl a").text("\u25B6");
	    // change the stop button to a play button
	    
	}
    });

    
    // removes web elements depending on what page we are currently on
    function removeContent() {
	if(currentPage == "Home") {
            $("#profilePicCont").remove();
	    $("#greeting").remove();
	    $("#disc").remove();
	    $("#skills").remove();
	}
    }

    // changes the page to the home content
    function changeToHome() {
	// Create profile picture div
	$("#mainCont").append(
	    `<div id="profilePicCont">
	        <h1>Joshua Boyd</h1>
		<img src="assets/joshFancyNew.jpg" id="profilePic" alt="fancy.jpg" height=260 width=267">
	     </div>
	     <div id="skills">
	         <h2>Skills</h2>
		 <div id="frontEndSkills">
		     <h3>Front End</h3>
		     <ul>
		         <li id="frontEndOne">HTML</li>
			 <li id="frontEndTwo">CSS</li>
			 <li id="frontEndThree">JavaScript</li>
		     </ul>
		 </div>
		 <div id="backEndSkills">
		     <h3>Back End</h3>
		     <ul>
		         <li id="backEndOne">Python</li>
			 <li id="backEndTwo">C++</li>
			 <li id="backEndThree">Java</li>
		     </ul>
		 </div>
		 <div id="otherSkills">
		     <h3>Other</h3>
		     <ul>
		         <li id="otherOne">SQL</li>
			 <li id="otherTwo">Linux</li>
		     </ul>
		 </div>
		 <div id="videoControl">
		     <a href="none" alt="pause video">\u2B1B</a>
		     <p>
		         Pause Background
	 	     </p>
		 </div>
		 <div id="otherSiteLinks">
		     <a href="https://www.github.com/boydjc">
		         <img src="assets/githubIcon.png" alt="githubIcon.png" height=40 width=40>
		     </a>
		 </div>
	     </div>
	     <div id="disc">
	         <ul>
		     <li id="discListOne">Software Developer</li>
		     <li id="discListTwo">Programming Enthusiast</li>
		     <li id="discListThree">Computer Nerd</li>
		 </ul>
	     </div>`
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

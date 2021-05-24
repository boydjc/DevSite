$(document).ready(function(){

    var currentPage = "Home";

    $("#navBar a" ).click(function(event){
		
	if($(event.target).text() != "Resume"){
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
        }
    });

    // stop the video background when the play arrow is clicked
    $(document).on('click', '#videoControl a', function(event) {
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
	    $("#videoControl").remove();
	    $("#otherSiteLinks").remove();
	    $("#copyRightInfo").remove();
	}else if(currentPage == "About") {
	    $("#aboutPicCont").remove();
	    $("#aboutWriteUp").remove();
	    $("#videoControl").remove();
	    $("#otherSiteLinks").remove();
	    $("#copyRightInfo").remove();
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
		     <a href="#" alt="pause video">\u2B1B</a>
		     <p>
		         Pause Background
	 	     </p>
		 </div>

		 <div id="otherSiteLinks">
		     <a href="https://www.github.com/boydjc">
		         <img src="assets/githubIcon.png" alt="githubIcon.png" height=40 width=40>
		     </a>
		 </div>

		 <div id="copyRightInfo">
		     <p>Copyright \u00A9 Joshua Boyd 2021</p>
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
	$("#mainCont").append(
	`<div id="aboutPicCont">
	    <img src="assets/joshCold.png" alt="josh cold" height=445 width=461>
	 </div>
	 <div id="aboutWriteUp">
	     <p>My interest in programming began at age 11 with a trip to the bookstore one
	     day with my grandmother. While browsing
	     the technology section, I stumbled upon a book titled 'C++ For 
	     Dummies'. I had no idea what a programming language was, but I had 
	     grown up playing computer games so the code in the book intrigued me.
	     Shortly after convincing my grandmother to buy the book, I was writing
	     my first "Hello World." program. Fast forwarding to the present,
	     I now hold a Bachelor's Degree in Computer Science from the 
	     University of Maryland. I am also currently pursuing my graduate 
	     degree in Computer Science and Software Engineering at Auburn 
	     University. In particular, my research interests are Artificial 
	     Intelligence, Distributed Computing, and Cryptography. I also think
	     that the human brain is just as extraordinary as any intelligent
	     machine. Additionally, I find the philosophy of <a href="
	     https://www.humanityplus.org/" class="hyperLinks" alt="
	     humanityplus.org">Transhumanism</a> fascinating and would love to 
	     someday contribute to the idea of bluring the line between man and
	     machine.</p>

	     <p>Want to collaborate on a project? Need an extra programmer for a 
	     particular task? Maybe you just want to say hi? Feel free to reach 
	     out and let me know you stopped by!</p>
	 </div>
	 <div id="videoControl">
	     <a href="#" alt="pause video">\u2B1B</a>
	     <p>
		Pause Background
	     </p>
	 </div>

	 <div id="otherSiteLinks">
	    <a href="https://www.github.com/boydjc">
	        <img src="assets/githubIcon.png" alt="githubIcon.png">
	    </a>
	 </div>
	 <div id="copyRightInfo">
	     <p>Copyright \u00A9 Joshua Boyd 2021</p>
	 </div>`

	);
    }

    // changes the page to the contact content
    function changeToContact() {
    }
});

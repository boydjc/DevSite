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
    
    // removes web elements depending on what page we are currently on
    function removeContent() {
	if(currentPage == "Home") {
            $("#profilePicCont").remove();
	    $("#greeting").remove();
	    $("#disc").remove();
	    $("#skills").remove();
	    $("#footer").remove();
	    $("#homeLink a").removeClass("navBarCurrent");
	    $("#homeLink a").addClass("navBarNotCurrent");
	}else if(currentPage == "About") {
	    $("#aboutPicCont").remove();
	    $("#aboutWriteUp").remove();
	    $("#footer").remove();
	    $("#otherLinks a:eq(0)").removeClass("navBarCurrent");
	    $("#otherLinks a:eq(0)").addClass("navBarNotCurrent");
	}else if(currentPage == "Contact") {
	    $("#footer").remove();
            $("#otherLinks a:eq(2)").removeClass("navBarCurrent");
	    $("#otherLinks a:eq(2)").addClass("navBarNotCurrent");
	}
    }

    // changes the page to the home content
    function changeToHome() {
	$("#mainCont").append(
	    `<div id="leftCont">
		<div id="profilePicCont">
		    <h1>Joshua Boyd</h1>
		    <img src="assets/joshFancyNew.jpg" id="profilePic"
		    alt="fancy.jpg" height=260 width=267>
		</div>
		<div id="disc">
		    <ul>
		        <li id="discListOne">Software Developer</li>
			<li id="discListTwo">Programming Enthusiast</li>
			<li id="discListThree">Computer Nerd</li>
		    </ul>
		</div>
	     </div>
	     <div id="rightCont">
	         <div id="skills">
		     <h2>Skills</h2>
		     <div id="frontEndSkills">
		         <h3>Front End</h3>
			 <ul>
			     <li id="frontEndOne">
			         HTML
				 <ul>
				     <li><img src="assets/star.png"></li>
				     <li><img src="assets/star.png"></li>
				     <li><img src="assets/star.png"></li>
				     <li><img src="assets/star.png"></li>
				 </ul>
			     </li>
			     <li id="frontEndTwo">
			         CSS
				 <ul>
				     <li><img src="assets/star.png"></li>
				     <li><img src="assets/star.png"></li>
				     <li><img src="assets/star.png"></li>
				     <li><img src="assets/star.png"></li>
				 </ul>
			     </li>
			     <li id="frontEndThree">
			         JavaScript
				 <ul>
				     <li><img src="assets/star.png"></li>
				     <li><img src="assets/star.png"></li>
				     <li><img src="assets/star.png"></li>
				 </ul>
			     </li>
			 </ul>
		     </div>
		     <div id="backEndSkills">
		         <h3>Back End</h3>
			 <ul>
			     <li id="backEndOne">
			         Python
				 <ul>
				     <li><img src="assets/star.png"></li>
				     <li><img src="assets/star.png"></li>
				     <li><img src="assets/star.png"></li>
				     <li><img src="assets/star.png"></li>
				     <li><img src="assets/halfStar.png"></li>
				 </ul>
			     </li>
			     <li id="backEndTwo">
			         C++
				 <ul>
				     <li><img src="assets/star.png"></li>
				     <li><img src="assets/star.png"></li>
				     <li><img src="assets/halfStar.png"></li>
				 </ul>
			     </li>
			     <li id="backEndThree">
			         Java
				 <ul>
				     <li><img src="assets/star.png"></li>
				     <li><img src="assets/star.png"></li>
				     <li><img src="assets/star.png"></li>
				     <li><img src="assets/halfStar.png"></li>
				 </ul>
			     </li>
			 </ul>
		     </div>
		     <div id="otherSkills">
		         <h3>Other</h3>
			 <ul>
			     <li id="otherOne">
			         SQL
				 <ul>
				     <li><img src="assets/star.png"></li>
				     <li><img src="assets/star.png"></li>
				 </ul>
			     </li>
			     <li id="otherTwo">
			         Linux
				 <ul>
				     <li><img src="assets/star.png"></li>
				     <li><img src="assets/star.png"></li>
				     <li><img src="assets/star.png"></li>
				     <li><img src="assets/star.png"></li>
				     <li><img src="assets/halfStar.png"></li>
				 </ul>
			     </li>
			 </ul>
		     </div>
		 </div>
	     </div>
	     <div id="footer">
	         <div id="otherSiteLinks">
		     <a href="https://www.github.com/boydjc">
		         <img src="assets/githubIcon.png" alt="githubIcon.png" height=40 width=40>
		     </a>
		 </div>
		 <div id="copyRightInfo">
		     <p>Copyright &#169; Joshua Boyd 2021</p>
		 </div>
	     </div>`
	);

	$("#homeLink a").addClass("navBarCurrent");

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
	 <div id="footer">
	     <div id="otherSiteLinks">
	         <a href="https://www.github.com/boydjc">
	             <img src="assets/githubIcon.png" alt="githubIcon.png" height=40 width=40>
	         </a>
	     </div>
	     <div id="copyRightInfo">
	         <p>Copyright &#169; Joshua Boyd 2021</p>
	     </div>
	 </div>`

	);

	$("#otherLinks a:eq(0)").addClass("navBarCurrent");
    }

    // changes the page to the contact content
    function changeToContact() {
	$("#otherLinks a:eq(2)").addClass("navBarCurrent");
    }
});

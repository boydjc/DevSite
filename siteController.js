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
	        }
		else if($(event.target).text() == "Contact") {
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

    /* The code below control what the user sees when clicking 
     * the skill links.
     */

    var currentSkillList = "front";

    $(document).on('click','#skills ul li a', function(event){	

        event.preventDefault();

	if(currentSkillList == "front"){
	    $("#skills ul li h3 a:eq(0)").removeClass("navBarCurrent");
	    $("#skills ul li h3 a:eq(0)").addClass("navBarNotCurrent");
	}else if(currentSkillList == "back") {
            $("#skills ul li h3 a:eq(1)").removeClass("navBarCurrent");
	    $("#skills ul li h3 a:eq(1)").addClass("navBarNotCurrent");
	}else if(currentSkillList == "other") {
	    $("#skills ul li h3 a:eq(2)").removeClass("navBarCurrent");
	    $("#skills ul li h3 a:eq(2)").addClass("navBarNotCurrent");
	}

	/* the 'v=Math.random()' added to the svg url makes the browser think that there is new 
	 * version of the svg and prevents the browser from loading the svg from cache memory. 
	 * The purpose of this is so that when the user clicks back and forth between skill lists
	 * the animations will replay*/

	if($(event.target).text() == "Front End") {
	    $("#skillCont ul").remove()
	    $("#skillCont").append(
	        `<ul>
		    <li class="skillFrontOne">HTML
			<img src="assets/htmlProgBar.svg?v=` + Math.random() + '"/></li>' +
		    `<li class="skillFrontTwo">CSS
			<img src="assets/cssProgBar.svg?v=` + Math.random() + '"/></li>' +
		    `
		    <li class="skillFrontThree">JavaScript
			<img src="assets/jsProgBar.svg?v=` + Math.random() + '"/></li>' +
		    `</li>
		 </ul>
		`
	    );

	    $("#skillCont ul li")[0].innerHTML += "";

	    $("#skills ul li h3 a:eq(0)").addClass("navBarCurrent");
	    $("#skills ul li h3 a:eq(0)").removeClass("navBarNotCurrent");
	    currentSkillList = "front";
	}else if($(event.target).text() == "Back End") { 
	    $("#skillCont ul").remove()
	    $("#skillCont").append(
	        `<ul>
		    <li class="skillBackOne">Python
			<img src="assets/pythonProgBar.svg?v=` + Math.random() + '"/></li>' +
		    `<li class="skillBackTwo">C++
			<img src="assets/cPlusPlusProgBar.svg?v=` + Math.random() + '"/></li>' +
		    `
		    <li class="skillBackThree">Java
			<img src="assets/javaProgBar.svg?v=` + Math.random() + '"/></li>' +
		    `</li>
		 </ul>`
	    );
	    $("#skills ul li h3 a:eq(1)").addClass("navBarCurrent");
	    $("#skills ul li h3 a:eq(1)").removeClass("navBarNotCurrent");
	    currentSkillList = "back";
	}else if($(event.target).text() == "Other") {
	    $("#skillCont ul").remove()
	    $("#skillCont").append(
	        `<ul>
		    <li class="skillOtherOne">SQL
			<img src="assets/sqlProgBar.svg?v=` + Math.random() + '"/></li>' +
		    `<li class="skillOtherTwo">Linux
			<img src="assets/linuxProgBar.svg?v=` + Math.random() + '"/></li>' +
		    `
		 </ul>`
	    );
	    $("#skills ul li h3 a:eq(2)").addClass("navBarCurrent");
	    $("#skills ul li h3 a:eq(2)").removeClass("navBarNotCurrent");
	    currentSkillList = "other";
	}
    });
    
    // removes web elements depending on what page we are currently on
    function removeContent() {
	if(currentPage == "Home") {
            $("#leftCont").remove();
	    $("#middleCont").remove();
	    $("#rightCont").remove();
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
	    $("#contactFormCont").remove();
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
	     <div id="middleCont">
	         <div id="skills">
		     <h2>Skills</h2>
		     <ul>
		         <li>
			     <h3>
			         <a href="#" class="navBarCurrent">Front End</a>
			     </h3>
			 </li>
		         <li>
			     <h3>
			         <a href="#" class="navBarNotCurrent">Back End</a>
			     </h3>
			 </li>
			 <li>
			     <h3>
			         <a href="#" class="navBarNotCurrent">Other</a>
			     </h3>
			 </li>
		     </ul>
		     <div id="skillCont">
			<ul>
			    <li class="skillFrontOne">HTML
				<img src="assets/htmlProgBar.svg"/>
			    </li>
			    <li class="skillFrontTwo">CSS
				<img src="assets/cssProgBar.svg"/>
			    </li>
			    <li class="skillFrontThree">JavaScript
				<img src="assets/jsProgBar.svg"/>
			    </li>
			</ul>
		     </div>
		 </div>
	     </div>
	     <div id="rightCont">
		 <div id="projects">
		     <h2>Projects</h2>
		     <div id="projectEleCont">
		         <div class="projectElement">
		             <h3>Project Title</h3>
			     <p>This is a description of a project that I made
			        This is a description of a project that I made
			        This is a descroption of a project that I made
			        This ia a description of a project that I made
			        This is a description of a project that I made
			     </p>
			 </div>
			 <div class="projectElement">
		             <h3>Project Title</h3>
			     <p>This is a description of a project that I made
			        This is a description of a project that I made
			        This is a descroption of a project that I made
			        This ia a description of a project that I made
			        This is a description of a project that I made
			     </p>
			 </div>
			<div class="projectElement">
		             <h3>Project Title</h3>
			     <p>This is a description of a project that I made
			        This is a description of a project that I made
			        This is a descroption of a project that I made
			        This ia a description of a project that I made
			        This is a description of a project that I made
			     </p>
			 </div>
			 <div class="projectElement">
		             <h3>Project Title</h3>
			     <p>This is a description of a project that I made
			        This is a description of a project that I made
			        This is a descroption of a project that I made
			        This ia a description of a project that I made
			        This is a description of a project that I made
			     </p>
			 </div>
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
	currentSkillList = "front";

    }

    // changes the page to the about content
    function changeToAbout() {
	$("#mainCont").append(
	`<div id="aboutPicCont">
	    <img src="assets/joshCold.png" alt="josh cold">
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
	
	$("#mainCont").append(
	    `<div id="contactFormCont">
	        <form action="#" class="formFadeIn">
		    <label id="nameLabel" for="formName">Name</label>
		    <br>
		    <input type="text" id="formName" name="formName">
		    <br>
		    <br>
		    <label id="emailLabel" for="formEmail">Email</label>
		    <br>
		    <input type="text" id="formEmail" name="formEmail">
		    <br>
		    <br>
		    <label id="messageLabel" for="formMessage">Message</label>
		    <br>
		    <textarea id="formMessage" name="formMessage" rows="8" cols="40"></textarea>
		    <br>
		    <br>
		    <input type="reset" value="Clear">
		    <input id="submit" type="submit" value="Submit">
		</form>
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
	
    }


    var contactConfirmAdded = false;

    // When the contact form is submitted
    $(document).on("submit", "form", function(event){
	event.preventDefault();

	/*
	$.ajax({
            url: 'https://send-client-email.herokuapp.com',
	    type: 'post',
	    data: $(this).serialize()
	});*/

	
	$("form").removeClass("formFadeIn");
	$("form").addClass("formFadeOut");

	setTimeout(function(){
            $("form").remove();
	    if(!contactConfirmAdded){
	        $("#contactFormCont").append(
		    `
		    <div id="#contactFormConfirm">
                        <p>Thanks for sending!</p>
		        <a href="#">Back</a>
		    </div>
		    `
	        );
		contactConfirmAdded = true;
	    }
	}, 1600); // second parameter equal to how much time the fadeout animation is on the form
    });

   // When the contact confirm back link is clicked 
    $(document).on("click", "#contactFormCont div a", function(event){
        event.preventDefault();
	contactConfirmAdded = false;
	removeContent();
	changeToContact();
    });
});

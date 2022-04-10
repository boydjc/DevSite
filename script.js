

// click on the default skill
document.getElementById("defaultSkill").click();

function openSkill(e, skillName) {
	var i, skillContent, skillButtons;

	// Get all elements with class="skillContent" and hide them
	skillContent = document.getElementsByClassName("skillContent");
	for (i=0; i < skillContent.length; i++) {
		skillContent[i].style.display = "none";
	}

	// Get all elements with class="skillButton" and remove the class "active"
	tabButtons = document.getElementsByClassName("skillButton");
	for (i = 0; i < tabButtons.length; i++) {
		tabButtons[i].className = tabButtons[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the bottom that opened the tab
	document.getElementById(skillName).style.display = "flex";
	e.currentTarget.className += " active";
}

// project slideshow
let projectSlideIndex = 1;
showProjectSlides(projectSlideIndex);

// Next/prev controls
function plusProjectSlides(n) {
	showProjectSlides(projectSlideIndex += n);
}

function showProjectSlides(n) {

	let i;
	let slides = document.getElementsByClassName("myProjects");
	let dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		projectSlideIndex = 1;
	}

	if (n < 1) {
		projectSlideIndex = slides.length;
	}
	
	for(i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	for(i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[projectSlideIndex-1].style.display = "grid";
}


// add a different animation delay to the skills display

function addSkillAnimDelay() {
	skillContents = document.getElementsByClassName("skillContent");
	
	for(let i=0; i<skillContents.length; i++) {
		delayAmount = 0;
		skills = skillContents[i].getElementsByClassName("skillBox");
		for(let a=0; a<skills.length; a++) {
			skills[a].style['animation-delay'] = delayAmount + 's';
			delayAmount += 0.3;
		}
	}
}

addSkillAnimDelay();


/*  add event listener to theme images
	that will change global css colors 
	to set a light or dark mode */
let themeIconDiv = document.querySelector('#secondaryLinksCont div');

themeIconDiv.addEventListener('click', (e) => {
	themeIcon = themeIconDiv.querySelector("img");

	let root = document.querySelector(':root');

	let githubIcon = document.querySelector('#secondaryLinksCont a img');

	if(themeIcon.getAttribute("src") === "assets/sun.svg") {

		/* dark mode */
		
		root.style.setProperty('--theme-color-one', 'rgb(17, 188, 250)');
		root.style.setProperty('--theme-color-one-trans', 'rgba(17, 188, 250, 0.5)');
		root.style.setProperty('--theme-color-two', 'rgb(113, 113, 113)');
		root.style.setProperty('--theme-color-three', 'rgb(60, 58, 64)');
		root.style.setProperty('--theme-color-three-trans', 'rgba(60, 58, 64, 0.5)');
		root.style.setProperty('--theme-color-four', 'rgba(17, 188, 250, 0.5)');

		document.body.style.setProperty('background-image', 'url("assets/circuit-board-dark.svg")');
	
		githubIcon.src = "assets/githubIcon.svg";
		themeIcon.src = "assets/moon.svg";
	}else if(themeIcon.getAttribute("src") === "assets/moon.svg") {
		
		/* light mode */

		root.style.setProperty('--theme-color-one', 'rgb(2, 1, 34)');
		root.style.setProperty('--theme-color-one-trans', 'rgba(2, 1, 34, 0.5)');
		root.style.setProperty('--theme-color-two', 'rgb(142, 142, 142)');
		root.style.setProperty('--theme-color-three', 'rgb(195, 197, 191)');
		root.style.setProperty('--theme-color-three-trans', 'rgba(195, 197, 191, 0.5)');
		root.style.setProperty('--theme-color-four', 'rgba(236, 255, 92, 0.5)');
		
		document.body.style.setProperty('background-image', 'url("assets/circuit-board-light.svg")');

		githubIcon.src = "assets/githubIcon-light.svg";
		themeIcon.src = "assets/sun.svg";
	}
});

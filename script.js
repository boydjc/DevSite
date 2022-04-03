

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

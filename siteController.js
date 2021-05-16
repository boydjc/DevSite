$(document).ready(function(){
    $("#navBar a" ).click(function(event){
	event.preventDefault();
	$("#mainCont").addClass("mainContAnim");
    });
});

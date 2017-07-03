
function myFunction() {	
    var username = document.getElementById('fname').value;
	alert("Thank you " + username + " for submitting the form");
	document.getElementById("register_form").reset();
	return false;
}



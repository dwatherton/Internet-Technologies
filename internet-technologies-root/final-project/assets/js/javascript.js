$(document).ready(function() {
	var maxLength = 500;
	$('textarea').keyup(function() {
		var length = $(this).val().length;
		var length = maxLength - length;
		$('#chars').text(length);
	});
});


//This script is for displaying the number of characters remaining in the <textarea id="textareaChars"> 
//feild of my feedback form on the feedback.html page of my website.

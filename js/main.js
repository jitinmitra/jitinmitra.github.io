function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');

	var fullName = firstName + ' ' + lastName;
	console.log('User is: ' + fullName);

	$('h2').text('Hello ' + fullName);

	var age = prompt('How old are you?');

	age = parseInt(age);

	if (age >= 18) {

		console.log('User is an adult.');
		alert('Hello, adult!');

	} else if (age >= 13) {

		console.log('User is over 13.');
		alert('Come back in a few years!');	

	} else {

		console.log('User is a child.');
		alert('Go away, child!')

	}

	if (firstName.toLowerCase() == 'general' && lastName.toLowerCase() !== 'assembly') {

		console.log('User is a General.')
		alert('Sup ' + firstName + '!')

	} else if (firstName.toLowerCase() == 'general' && lastName.toLowerCase() == 'assembly') {

		console.log('General A is here!')
		alert('General A is here!')

	} else {

		console.log(fullName + ' is here')
		alert(fullName + ' is here')

	}

	var faveColour = prompt('What is your favourite colour?').toLowerCase();

	if (faveColour == 'red' || faveColour == 'green' || faveColour == 'blue' || faveColour == 'yellow') {

		$('h2').css('color', faveColour)
	}	

}

// When the page has loaded
$(function(){

	// When the user clicks the image, run askQuestions;
	$('img').on('click', askQuestions);

	//Hide all the things
	$('h3').next().hide();

	// When the user clicks on an h3
	$('h3').on('click', function() {

		//Hide the next element
		$(this).next().slideToggle(500);

	});

});
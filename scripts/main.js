// MAIN ObjectStyle FUNCTIONALITY
//----------------------------------------------------
//
// CONTENT ///////////////////////////////////////////
//
// 1) document.ready
//	  1.1) carouse activate	
//




// 1 (Shorthand for $( document ).ready())
$(function() {
	'use strict';

	// debug
	console.log('ObjectStyle Rocks!');

	// 1.1 Activate the Carousel 
	$('.carousel').carousel({
		interval: false //changes the speed
	});

});

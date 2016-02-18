$(document).ready(function(){
	// Hide work gallery h4 
	$(".work-gallery-item").find("h4").hide();
	// When hovering over a picture
	$('.work-gallery-item').hover(function(){
		// Fade title tag in
		$(this).find("h4").fadeIn();
	}, function(){
		// Fade out title tag after hover
		$(this).find("h4").fadeOut();
	});
});
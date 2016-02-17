$(document).ready(function(){
	$('.work-gallery-item').hover(function(){
		var title = $('img', this).attr("alt");
		$(this).after("<h4>" + title + "</h4>");
	}, function(){
		$(".work-gallery-item + h4").remove();
	});
});
$(document).ready(function() {
	
	$('a[href^=mailto]').addClass('mailto-link');

	var mailto = $('.mailto-link');	
	

	mailto.click(function() {
		var href = $(this).attr('href');
			
	}
}
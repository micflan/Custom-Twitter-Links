$(document).ready(function(){

	// Hide the menu icons, gives more space and stops our non-icon links standing out
	$('a span.new-wrapper').hide();

	// Replace the 'Discover' link with something useful (the 'Lists' page is my choice)
	$('.topics').replaceWith('<li><a href="/#!/lists" class="cuslink">Lists</a></li>');

	// Add another few links for good measure.
	// You'd probably want to update these to suit yourself
	$('#global-actions').append('<li><a class="cuslink js-hover" href="/#!/micflan/listen">Listen</a></li>');
	$('#global-actions').append('<li><a class="cuslink js-hover" href="/#!/micflan/inishowen">Inishowen</a></li>');


	// Adding the location indicator back in (change of background on selected 'tab').
	$('.nav li').click(function(){
		$(this).siblings().removeClass('active');
	});

	$('.cuslink').click(function(){
		$(this).parent().addClass('active');
	});
});

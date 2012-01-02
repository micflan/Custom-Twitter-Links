$(document).ready(function(){

	// Hide the menu icons, gives more space and stops our non-icon links standing out
	$('a span.new-wrapper').hide();

	// Replace the 'Discover' link with something useful (the 'Lists' page is my choice)
	$('.topics').html('<a href="/#!/lists" data-dynamite-selected="true">Lists</a>');

	// Add another few links for good measure.
	// You'd probably want to update these to suit yourself
	$('#global-actions').append('<li><a class="js-hover" href="/#!/micflan/listen">Listen</a></li>');
	$('#global-actions').append('<li><a class="js-hover" href="/#!/micflan/inishowen">Inishowen</a></li>');

	// I tried to add a link to the DM popup by copying the <li..> from the dropdown-menu, but it didn't work...
	// $('#global-actions').append('<li class="messages" data-name="messages"><a class="js-dm-dialog" href="/#!/" data-dynamite-selected="true"><span class="js-direct-message-count count"></span>DMs</a></li>');

});

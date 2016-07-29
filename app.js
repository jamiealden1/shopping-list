$(document).ready(function() {
	//delete list item
	$('ul.shopping-list').on('click', 'button.shopping-item-delete', function(event) {
		this.closest('li').remove();
	})
	//check/uncheck item
	.on('click', 'button.shopping-item-toggle', function(event) {
		$(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
	});
	//add new list item with text from form input
	$('form#js-shopping-list-form').submit(function(event) {
		event.preventDefault();
		$('ul').append(
			'<li>' + 
				'<span class="shopping-item">' + $('#shopping-list-entry').val() +'</span>' +
				'<div class="shopping-item-controls">' + 
					'<button class="shopping-item-toggle">' + '<span class="button-label">check</span>' + '</button>' + 
					'<button class="shopping-item-delete">' + '<span class="button-label">delete</span>' + '</button>' +
				'</div>' + 
			'</li>');
		//clear form input
		$(this)[0].reset();
	});
});
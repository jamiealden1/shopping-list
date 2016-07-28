$(document).ready(function() {
	$('ul.shopping-list').on('click', 'button.shopping-item-delete', function(event) {
		this.closest('li').remove();
	})
	.on('click', 'button.shopping-item-toggle', function(event) {
		$(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
	});

	$('form#js-shopping-list-form').submit(function(event) {
		event.preventDefault();
		$('ul').append('<li><span class="shopping-item">apples</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
	});
});
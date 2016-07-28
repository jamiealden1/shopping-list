$(document).ready(function() {
	$('ul.shopping-list').on('click', 'button.shopping-item-delete', function(event) {
		this.closest('li').remove();
	})
	.on('click', 'button.shopping-item-toggle', function(event) {
		$(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
	});
});
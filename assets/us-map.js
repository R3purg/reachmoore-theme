$("path, circle").hover(function (e) {
	$('#info-box').css('display', 'block');
	$('#info-box').html($(this).data('info'));
});

$("path, circle").on('click touchend', function (e) {
	var stateInitials = $(this).attr('id');
	var link = `products/${stateInitials.toLowerCase()}`;

	window.open(link, '_blank');

	return false;
});

$("path, circle").mouseleave(function (e) {
	$('#info-box').css('display', 'none');
});
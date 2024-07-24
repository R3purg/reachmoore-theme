$("path, circle, text").hover(function (e) {
	$('#info-box').css('display', 'block');
	$('#info-box').html($(this).data('info'));
});

$("path, circle, text").on('click touchend', function (e) {
	var stateInitials = $(this).attr('id');
	var link = `products/${stateInitials.toLowerCase()}`;

	window.open(link, '_blank');

	return false;
});

$("path, circle, text").mouseleave(function (e) {
	$('#info-box').css('display', 'none');
});
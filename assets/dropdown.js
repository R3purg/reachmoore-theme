$("li").click(function () {
  var stateInitials = $(this).attr('id');
  var link = `products/${stateInitials.toLowerCase()}`;

  window.open(link, '_blank');
});
$( document ).ready(function() {
	console.log( "store page ready" );

$('.hat1').hover(function() {
  $(this).attr('src', '../assets/images/store/hat-test-detail.png');
}, function() {
  $(this).attr('src', '../assets/images/store/hat-test.png');
});


});
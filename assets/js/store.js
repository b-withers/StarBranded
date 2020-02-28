$( document ).ready(function() {
	console.log( "store page ready" );


	//function to change image on hover
$('.hat1').hover(function() {
	//on hover image changes to the image below
  $(this).attr('src', '../assets/images/store/hat-test-detail.png');
}, function() {
	//after mouse leave the image changes to image below 
  $(this).attr('src', '../assets/images/store/hat-test.png');
});

	//function to change image on hover
	$('.hat2').hover(function() {
		//on hover image changes to the image below
		$(this).attr('src', '../assets/images/store/hat-2-test-detail.png');
	}, function() {
		//after mouse leave the image changes to image below 
		$(this).attr('src', '../assets/images/store/hat-2-test.png');
	});


});
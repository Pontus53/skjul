$(document).ready(function() {
	opacity_changer();
	popup_image();
});

function opacity_changer() {
	$(".thumbnail").hover(function() {
		$(this).fadeTo("400", 1);
	}, function() {
		$(this).fadeTo("400", 0.5);
	});

	$("#xclose").hover(function() {
		$("#xclose").fadeTo("400", 1);
	}, function() {
		$("#xclose").fadeTo("400", 0.7);
	});
}

function popup_image() {
	var currentImg;

	$(".thumbnail").click(function() {
		currentImg = $(this).attr('id');
		console.log(currentImg);

		$(".popup").append('<img class="image" src="pics/' + currentImg + '.jpg">')
		$(".gallery").fadeOut(0);
		$(".popup").fadeIn(1000);
	});

	$("#xclose").click(function(event) {
		$(".popup").fadeOut(0);
		$(".gallery").fadeIn(500);
		$(".image").remove();
	});
}
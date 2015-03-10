$(document).ready(function() {
	opacity_changer();
});

function opacity_changer() {
	$(".thumbnail").hover(function() {
		$(this).fadeTo("400", 1);
	}, function() {
		$(this).fadeTo("400", 0.5);
	});
}
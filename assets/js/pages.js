"use strict"; // Idiomatic Jquery

// ####### Navbar #######

// Mobile Navigation
$(".mobile-toggle").click(function() {
	if ($(".custom-navbar").hasClass("open-nav")) {
		$(".custom-navbar").removeClass("open-nav");
	} else {
		$(".custom-navbar").addClass("open-nav");
	}
});

$(".custom-navbar li a").click(function() {
	if ($(".custom-navbar").hasClass("open-nav")) {
		$(".navigation").removeClass("open-nav");
		$(".custom-navbar").removeClass("open-nav");
	}
});

// Navigation Scroll
$("nav a").click(function(event) {
	var id = $(this).attr("href");
	var offset = 70;
	var target = $(id).offset().top - offset;
	$("html, body").animate({
		scrollTop: target
	}, 500);
	event.preventDefault();
});

// Slideshow
$(".desktop-slideshow > div:gt(0)").hide();

setInterval(function() {
	$('.desktop-slideshow > div:first')
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('.desktop-slideshow');
},  3000);

$(".mobile-slideshow > div:gt(0)").hide();

setInterval(function() {
	$('.mobile-slideshow > div:first')
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('.mobile-slideshow');
},  3000);

"use strict"; // Idiomatic Jquery

// ####### Navbar #######

// Sticky Header
$(window).scroll(function() {
	if ($(window).scrollTop() > $(".btn").offset().top) {
		$(".custom-navbar").addClass("sticky");
	} else {
		$(".custom-navbar").removeClass("sticky");
	}
});

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

// ####### Image Resize #######

var OrigWidth = $("#img1").width();

$(window).on("resize", function() {
	if ($(window).width() > 991) {
		fitImages();
	}
	else {
		resetImages();
	}
}).trigger("resize");

function fitImages() { // there is duplicate code but we are only fitting 4 images
	// so it isn't worth it to follow DRY principles

	// images 1-2
	$("#img1").removeAttr("style");
	$("#img2").removeAttr("style");
	var changedWidth = $("#img1").height();
	var h1 = $("#img1").height();
	var h2 = $("#img2").height();
	// it can be done only with height but using double check ratio of the images is a bit more acurate
	if (changedWidth < OrigWidth) { //expand
		// using higher image as refference when maximize
		if (h1 > h2) {
			$("#img2").height(h1);
		}
		else if (h2 > h1) {
			$("#img1").height(h2);
		}
	}
	else {
		// using lower image as refference when minimize
		if (h1 < h2) {
			$("#img1").height(h2);
		}
		else if (h2 < h1) {
			$("#img2").height(h1);
		}
	}
	OrigWidth = changedWidth;

	var NextOrigWidth = $("#img3").width();

	// images 3-4
	$("#img3").removeAttr("style");
	$("#img4").removeAttr("style");
	var NextChangedWidth = $("#img3").height();
	var h3 = $("#img3").height();
	var h4 = $("#img4").height();
	if (NextChangedWidth < NextOrigWidth) {
		if (h3 > h4) {
			$("#img4").height(h3);
		}
		else if (h4 > h3) {
			$("#img3").height(h4);
		}
	}
	else {
		if (h3 < h4) {
			$("#img3").height(h4);
		}
		else if (h4 < h3) {
			$("#img4").height(h3);
		}
	}
	NextOrigWidth = NextChangedWidth;
	return 0;
}

function resetImages() {
	$("#img1").removeAttr("style");
	$("#img2").removeAttr("style");
	$("#img3").removeAttr("style");
	$("#img4").removeAttr("style");
	return 0;
}

// ####### Custom Scrolling #######

$(function() {
	$("a[href*=#]:not([href=#])").click(function() {
		if (location.pathname.replace(/^\//,") == this.pathname.replace(/^\//,") && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
			if (target.length) {
				$("html,body").animate({
					scrollTop: target.offset().top
				}, 1000);
			return false;
			}
		}
	});
});

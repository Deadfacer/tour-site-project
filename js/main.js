var OrigWidth = $("#img1").width();

$(window).on('resize', function() {
	if ($(window).width() > 991) {
		fitImages();
	}
	else {
		resetImages();
	}
}).trigger('resize');

function fitImages() { //there is duplicate code but we are only fitting 4 images
	//so it isn't worth it to follow DRY principles

	//images 1-2
	$("#img1").removeAttr("style");
	$("#img2").removeAttr("style");
	var changedWidth = $("#img1").height();
	var h1 = $("#img1").height();
	var h2 = $("#img2").height();
	//it can be done only with height but using double check ratio of the images is a bit more acurate
	if (changedWidth < OrigWidth) { //expand
		//using higher image as refference when maximize
		if (h1 > h2) {
			$("#img2").height(h1);
		}
		else if (h2 > h1) {
			$("#img1").height(h2);
		}
	}
	else {
		//using lower image as refference when minimize
		if (h1 < h2) {
			$("#img1").height(h2);
		}
		else if (h2 < h1) {
			$("#img2").height(h1);
		}
	}
	OrigWidth = changedWidth;

	//images 3-4
	$("#img3").removeAttr("style");
	$("#img4").removeAttr("style");
	var changedWidth = $("#img3").height();
	var h1 = $("#img3").height();
	var h2 = $("#img4").height();
	if (changedWidth < OrigWidth) {
		if (h1 > h2) {
			$("#img4").height(h1);
		}
		else if (h2 > h1) {
			$("#img3").height(h2);
		}
	}
	else {
		if (h1 < h2) {
			$("#img3").height(h2);
		}
		else if (h2 < h1) {
			$("#img4").height(h1);
		}
	}
	OrigWidth = changedWidth;
	return 0;
};

function resetImages() {
	$("#img1").removeAttr("style");
	$("#img2").removeAttr("style");
	$("#img3").removeAttr("style");
	$("#img4").removeAttr("style");
	return 0;
};

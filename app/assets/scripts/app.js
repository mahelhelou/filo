jQuery(function ($) {
	let windowHeight = $(window).height();
	let navbarHeight = $(".navbar").height();
	let footerHeight = $(".site-footer").height();

	// Full size section
	$(".full-height-section").height(
		windowHeight - (navbarHeight + footerHeight)
	);

	// Videos owl carousel
	$("#videos .owl-carousel").owlCarousel({
		loop: true,
		autoplay: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		smartSpeed: 2000,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 4,
			},
		},
	});

	// Testimonials owl carousel
	$("#testimonials .owl-carousel").owlCarousel({
		loop: true,
		nav: true,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		smartSpeed: 2000,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 2,
			},
		},
	});
});

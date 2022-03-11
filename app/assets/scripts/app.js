jQuery(function ($) {
	// let navbarHeight = $('.navbar').innerHeight()
	let navbarHeight = $(".navbar").innerHeight();

	// Adjust showcase height (100vh)
	let windowHeight = $(window).height();
	let windowWidth = $(window).width();

	if (windowWidth < 1920) {
		$(".showcase").height(windowHeight - navbarHeight);
	}

	// Smooth scroll
	$(document).on("click", 'a[href^="#"]', function (event) {
		event.preventDefault();

		$("html, body").animate(
			{
				scrollTop: $($.attr(this, "href")).offset().top - navbarHeight,
			},
			500
		);
	});

	// Testimonials owl carousel
	$("#testimonials .owl-carousel").owlCarousel({
		loop: true,
		nav: true,
		navText: [
			"<i class='fa fa-chevron-left'></i>",
			"<i class='fa fa-chevron-right'></i>",
		],
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

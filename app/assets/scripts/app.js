jQuery(function ($) {
	let windowHeight = $(window).height();
	let navbarHeight = $(".navbar").height();
	let footerHeight = $(".site-footer").height();

	// Full size section
	/* $(".full-height-section").height(
		windowHeight - (navbarHeight + footerHeight)
	); */

	// DOM clicks
	$(".stories-section__item-save").click(function () {
		$(this).html(
			$(this).html() === '<span>حفظ</span><i class="far fa-bookmark"></i>'
				? '<span>محفوظ</span><i class="fas fa-bookmark"></i>'
				: '<span>حفظ</span><i class="far fa-bookmark"></i>'
		);
	});

	// Videos owl carousel
	$("#videos-section .owl-carousel").owlCarousel({
		loop: true,
		rtl: true,
		margin: 15,
		// rewind: true,
		center: true,
		stagePadding: 1,
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
			1200: {
				items: 6,
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

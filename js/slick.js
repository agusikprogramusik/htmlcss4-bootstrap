$(".team-carousel").slick({
	slidesToShow: 3,
	slidesToScroll: 3,
	arrows: false,
	mobileFirst: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	// autoplay: true,

	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},
	],
});

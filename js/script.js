$(function () {
	"use strict";

	/*=========================================================================
		Initializing stellar.js Plugin
	=========================================================================*/
	$('.section').stellar({
		horizontalScrolling: false
	});


	$(window).on('load', function () {

		$('body').addClass('loaded');


		/*=========================================================================
			Portfolio Grid
		=========================================================================*/
		var grid = $('#portfolio-grid');
		grid.shuffle({
			itemSelector: '.item'
		});

		$('#portfolio-filters > ul > li > a').on('click', function (e) {
			e.preventDefault();
			var groupName = $(this).attr('data-group');
			$('#portfolio-filters > ul > li > a').removeClass('active');
			$(this).addClass('active');
			grid.shuffle('shuffle', groupName);
		});

		$('a.image-link').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-fade',
			gallery: {
				enabled: true
			}
		});

	});



	/*=========================================================================
		Links Navigation System
	=========================================================================*/
	$('.front-person-links > ul > li > a[data-section]').on('click', function (e) {
		e.preventDefault();
		var section = $('#' + $(this).data('section'));

		if (section.size() != 0) {
			$('body').addClass('section-show');
			section.addClass('active');
		}
	});

	$('.close-btn').on('click', function () {
		$('body').removeClass('section-show');
		$('section.active').removeClass('active');
	});

	$(".hire-me-link").on("click", function (e) {
		e.preventDefault();
		var section = $('#' + $(this).data('section'));

		if (section.size() != 0) {
			$('body').addClass('section-show');
			section.addClass('active');
		}
	})



	/*=========================================================================
		Testimonials Slider
	=========================================================================*/
	$('.testimonials-slider').owlCarousel({
		singleItem: true
	});



	/*=========================================================================
		Skill Bar's Percent Initialization from attribute data-percent
	=========================================================================*/
	$('.skill-bar').each(function () {
		var $this = $(this),
			percent = parseInt($this.data('percent'), 10);

		$this.find('.bar').css('width', percent + '%');
	});


	var success = `<div class='form-group' >\
			<div class='alert alert-success alert-dismissible' role='alert'> \
				<button type='button' class='close' data-dismiss='alert' aria-label='Close' > \
					<i class='ion-ios-close-empty' ></i> \
				</button> \
				<strong>Message Sent!</strong> We'll be in touch as soon as possible\
			</div>\
		</div>`

	var error = `<div class='form-group' >\
			<div class='alert alert-danger alert-dismissible' role='alert'> \
				<button type='button' class='close' data-dismiss='alert' aria-label='Close' > \
					<i class='ion-ios-close-empty' ></i> \
				</button> \
				<strong>Error!</strong> Sorry, an error occurred. Try again.\
			</div>\
			</div>`

	$('#contact-form').validator().on('submit', function (e) {
		e.preventDefault();
		var formData = $("#contact-form").serialize();

		$.ajax({
			url: 'mail.php',
			type: 'post',
			data: formData,
			success: function (data) {
				$('#contact-form-result').html(success);
				setTimeout(function () {
					$('#contact-form-result').html("");
				}, 3000);
			},
			error: function () {
				$('#contact-form-result').html(error);
				setTimeout(function () {
					$('#contact-form-result').html("");
				}, 3000);
			}
		});
	});

});
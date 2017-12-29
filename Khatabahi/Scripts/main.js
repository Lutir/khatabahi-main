;(function () {
	
	'use strict';



	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
		return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
		);
	};

	// Go to next section
	var gotToNextSection = function(){
		var el = $('.learn-more'),
			w = el.width(),
			divide = -w/2;
		el.css('margin-left', divide);
	};

	// Loading page
	var loaderPage = function() {
		$(".loader").fadeOut("slow");
	};

	// FullHeight
	var fullHeight = function() {
		if ( !isiPad() && !isiPhone() ) {
			$('.js-fullheight').css('height', $(window).height() - 49);
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height() - 49);
			})
		}
	};

	


	// Scroll Next
	var ScrollNext = function() {
		$('body').on('click', '.scroll-btn', function(e){
			e.preventDefault();

			$('html, body').animate({
				scrollTop: $( $(this).closest('[data-next="yes"]').next()).offset().top
			}, 1000, 'easeInOutExpo');
			return false;
		});
	};

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
		var container = $("#offcanvas, .js-nav-toggle");
		if (!container.is(e.target) && container.has(e.target).length === 0) {

			if ( $('body').hasClass('offcanvas-visible') ) {

				$('body').removeClass('offcanvas-visible');
				$('.js-nav-toggle').removeClass('active');
				
			}
		
			
		}
		});

	};


	// Offcanvas
	var offcanvasMenu = function() {
		$('body').prepend('<div id="offcanvas" />');
		$('#offcanvas').prepend('<ul id="side-links">');
		$('body').prepend('<a href="#" class="js-nav-toggle nav-toggle"><i></i></a>');

		$('.left-menu li, .right-menu li').each(function(){

			var $this = $(this);

			$('#offcanvas ul').append($this.clone());

		});
	};

	// Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-nav-toggle', function(event){
			var $this = $(this);

			$('body').toggleClass('overflow offcanvas-visible');
			$this.toggleClass('active');
			event.preventDefault();

		});

		$(window).resize(function() {
			if ( $('body').hasClass('offcanvas-visible') ) {
			$('body').removeClass('offcanvas-visible');
			$('.js-nav-toggle').removeClass('active');
		   }
		});

		$(window).scroll(function(){
			if ( $('body').hasClass('offcanvas-visible') ) {
			$('body').removeClass('offcanvas-visible');
			$('.js-nav-toggle').removeClass('active');
		   }
		});

	};


	// var testimonialFlexslider = function() {
	// 	var $flexslider = $('.flexslider');
	// 	$flexslider.flexslider({
	// 	  animation: "fade",
	// 	  manualControls: ".flex-control-nav li",
	// 	  directionNav: false,
	// 	  smoothHeight: true,
	// 	  useCSS: false /* Chrome fix*/
	// 	});
	// }


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500);
			
			return false;
		});
	
	};



	
	
   
	var hideShow = function(){
		$('.level-2').hide();
		$('.mback').hide();
		$('.mfeatures').click(() => {
			$('.level-1').hide('slow');
			$('.level-2').show('slow');
			$('.mfeatures').hide('slow');
			$('.mback').show('slow');
		});
		$('.mback').click(() => {
			$('.level-2').hide('slow');
			$('.level-1').show('slow');
			$('.mback').hide('slow');
			$('.mfeatures').show('slow');
		})		              		
	}

	var createModal = function (title, head1, head2, head3) {
		$('.modal-title').html(title);
		$('.modal-body .mh1').html(head1);
		$('.modal-body .mh2').html(head2);
		$('.modal-body .mh3').html(head3);
		$('.mfeatures').show();
		$('#modal-main').modal('show');
	}

	$('.project-item').click(function(){        
		var id = $(this).attr('data-id');        
		modalMaker(id);
	});

	var modalMaker = function (x) {
		var modalContent = {
			title: '',
			type: '',
			cost: '',
			description: ''
		};
		var url = "/Home/GetProductDetail";
		$.post(url, { id: x }, function (data) {
			console.log(data[0]);
			modalContent.title = data[0].ProductName;
			modalContent.type = data[0].ProductSubHead;
			modalContent.cost = data[0].cost;
			modalContent.description = data[0].ProductDetail;
			createModal(modalContent.title, modalContent.type, 'Rs.' + modalContent.cost + ' per month', modalContent.description);
		});
	}
	
	// Document on load.
	$(function(){		
		gotToNextSection();
		loaderPage();
		fullHeight();
		
		ScrollNext();
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		// testimonialFlexslider();
		goToTop();
		hideShow();
		
		
		// Modal styles				
		
	});


}());
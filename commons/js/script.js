jQuery(document).ready(function($) {
			$('.my-slider').unslider({
				autoplay:true,
				arrows:false
			});
		});

		$(function() {
			var openBtn = $('.slide_container__btn'),
				slideMenu = $('.slide_container__menu'),
				layer = $('<div />');
			openBtn.on("click", function() {
				if (slideMenu.is(':hidden')) {

					slideMenu.slideDown(300);
		      $('.slide_container__btn').css({'background-image': 'url(commons/images/panel-down.jpg)'
		      });
				} else {
					slideMenu.slideUp(300);
		      $('.slide_container__btn').css({'background-image': 'url(commons/images/panel-up.jpg)'});
					layer.remove();
				}
			});
		});

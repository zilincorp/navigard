$(document).ready(function() {
  // $('.button--ripple').on('click', function(e){
  //     var btnOffset = $(this).offset(),
  //     xPos = e.pageX - btnOffset.left - 25,
  //     yPos = e.pageY - btnOffset.top - 25,
  //     $div = $('<div class="button__effect" style="top:' + yPos + 'px; left:' + xPos + 'px;"></div>');
  //     $div.appendTo($(this));
  //     window.setTimeout(function(){
  //       $div.remove();
  //     }, 2000);
  // });

  // scrollreveal
  window.sr = ScrollReveal();
  sr.reveal('.js-reveal', 100);
  sr.reveal('.js-reveal-r', {
    duration   : 1000,
    distance   : '6rem',
    origin     : 'right',
    // scale      : 1,
  });
  sr.reveal('.js-reveal-l', {
    duration   : 1000,
    distance   : '6rem',
    origin     : 'left',
    // scale      : 1,
  });
  sr.reveal('.js-reveal-t', {
    duration   : 500,
    distance   : '3rem',
    easing     : 'ease-in-out',
    origin     : 'top',
    // scale      : 1,
  });
  sr.reveal('.js-reveal-b', {
    duration   : 500,
    distance   : '3rem',
    easing     : 'ease-in-out',
    origin     : 'bottom',
    // scale      : 1,
  });

  $('.js-tab').click(function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    console.log(target);
    $('.js-tab').removeClass('button--active');
    $(this).addClass('button--active');
    $('.tab-target').removeClass('tab-target--active');
    $(target).addClass('tab-target--active');
  })

  $('.js-agree').on('click', function(e){
    e.preventDefault();
    localStorage.setItem('personal-agreement', true);
    $('.page__message').fadeOut();
  });
  if (!localStorage.getItem('personal-agreement')) {
    $('.page__message').addClass('page__message--visible');
  }

  $('.scroll-top').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });

  $('.drawer').drawer();

  $('.gal').each(function() {
    $(this).magnificPopup({
      delegate: 'a.gal__item',
      removalDelay: 300,
      type: 'image',
      image: {
        markup: '<div class="mfp-figure">'+
                  '<div class="mfp-close"></div>'+
                  '<div class="mfp-img"></div>'+
                  '<div class="mfp-bottom-bar">'+
                    '<div class="mfp-title"></div>'+
                    '<div class="mfp-counter"></div>'+
                  '</div>'+
                '</div>',
        titleSrc: 'title'
      },
      gallery: {
        enabled:true,
        tPrev: 'назад',
        tNext: 'вперед',
        tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
      }
    });
  });

  $('.mfp-inline').magnificPopup({
    type:'inline',
    midClick: true
  });

  // $('.mfp-iframe').magnificPopup({
  //   type:'iframe',
  //   midClick: true
  // });

  $('input[type=tel]').mask("+7(999) 999-9999");

  // slick
  $('.js-slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000
    // infinite: false,
    // speed: 300,
    // slidesToShow: 4,
    // slidesToScroll: 4
  });

  $('.js-carousel').slick({
    infinite: false,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  // fully loaded handler
  $(window).on('load', function () {

  });

  // resize handler
	var delay = (function(){
		var timer = 0;
		return function(callback, ms){
			clearTimeout (timer);
			timer = setTimeout(callback, ms);
		};
	})();

	$(window).resize(function() {
		delay(function(){
			var wWidth = $(window).width();
      // console.log('width = ' + wWidth + 'px');
			if (wWidth > 768) {
        // console.log('not mobile');
			}
		}, 100);
	});
});

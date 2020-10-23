$(document).ready(function(){
  // Меню бургер
   $('.header__burger').click(function() {
      $(this).toggleClass('active');
      $("body").toggleClass("nav-active")
      $('.main-nav').toggleClass('open');
    });

    // Слайдер
		$('.main__slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: '<div class="arrow arrow-next"></div>',
      prevArrow: '<div class="arrow arrow-prev"></div>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false
          }
        }
      ]
    });

    // Галерея
	 

$(function() {
  $('.main__slider').slickLightbox({
      src: 'src',
      itemSelector: '.main__slider_item img',
      background: 'rgba(0, 0, 0, .9)'
    });
});


    // Подгрузка видео из Youtube
    var tag = document.createElement('script');
    tag.src = "//www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;

    onYouTubeIframeAPIReady = function () {
      player = new YT.Player('player', {
          height: '422',
          width: '100%',
          videoId: 'ONHBaC-pfsk',  
          playerVars: {
            'autoplay': 0,
            'rel': 0,
            'showinfo': 0
          },
          events: {
            'onStateChange': onPlayerStateChange
          }
      });
    }

    var p = document.getElementById ("player");
    $(p).hide();

    var t = document.getElementById ("thumbnail");
    t.src = "img/trailer.jpg";

    onPlayerStateChange = function (event) {
        if (event.data == YT.PlayerState.ENDED) {
           $('.start-video').fadeIn('normal');
        }
    }

    $(document).on('click', '.play', function () {
        $(this).hide();
        $("#player").show();
        $(".player-overlay").hide();
        player.playVideo();
    });

});
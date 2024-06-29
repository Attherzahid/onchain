
function playVideo() {
  var iframe = $('#homePlayer');
  var btn = $("#heroPlayerBtn");

  // Add click event listener to the play button
  var player = new Vimeo.Player(iframe);

  // Add click event listener to the play button
  player.play().then(function () {
    console.log('Video played');
    // Hide the play button after playing
    $(btn).hide();
  }).catch(function (error) {
    console.error('Error playing the video:', error);
  });
}


document.addEventListener('DOMContentLoaded', function () {

  $('#play-video').on('click', function (ev) {

    $("#video")[0].src += "&autoplay=1";
    ev.preventDefault();

  });

  $('#play-video2').on('click', function (ev) {

    $("#video2")[0].src += "&autoplay=1";
    ev.preventDefault();

  });

  $('#play-video3').on('click', function (ev) {

    $("#video3")[0].src += "&autoplay=1";
    ev.preventDefault();

  });

  jQuery(window).scroll(function () {

    if (jQuery(this).scrollTop() > 100) {
      document.querySelector('header').classList.add("sticky");
    } else {
      document.querySelector('header').classList.remove("sticky");
    }

  });

  $('.clients-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 15,
    dots: false,
    slideTransition: 'linear',
    autoplayTimeout: 4500,
    // autoplayHoverPause: true,
    autoplaySpeed: 4500,
    responsive: {
      0: {
        items: 3
      },
      500: {
        items: 3
      },
      600: {
        items: 3
      },
      800: {
        items: 4
      },
      1200: {
        items: 6
      }
    }
  });

  // Accordion

  const accSingleTriggers = document.querySelectorAll('.js-trigger');

  accSingleTriggers.forEach(trigger => trigger.addEventListener('click', toggleAccordion));

  function toggleAccordion() {
    const items = document.querySelectorAll('.js-acc-item');
    const thisItem = this.parentNode;

    items.forEach(item => {
      if (thisItem == item) {
        thisItem.classList.toggle('is-open');
        return;
      }
      item.classList.remove('is-open');
    });
  }

  var items = $(".timeline li"),
    timelineHeight = $(".timeline ul").height(),
    greyLine = $('.default-line'),
    lineToDraw = $('.draw-line');
  if (lineToDraw.length) {
    $(window).on('scroll', function () {
      var redLineHeight = lineToDraw.height(),
        greyLineHeight = greyLine.height(),
        windowDistance = $(window).scrollTop(),
        windowHeight = $(window).height() / 2,
        timelineDistance = $(".timeline").offset().top;

      if (windowDistance >= timelineDistance - windowHeight) {
        line = windowDistance - timelineDistance + windowHeight;

        if (line <= greyLineHeight) {
          lineToDraw.css({
            'height': line + 0 + 'px'
          });
        }
      }
      var bottom = lineToDraw.offset().top + lineToDraw.outerHeight(true);
      items.each(function (index) {
        var circlePosition = $(this).offset();

        if (bottom > circlePosition.top) {
          $(this).addClass('in-view');
        } else {
          $(this).removeClass('in-view');
        }
      });
    });
  }

});


AOS.init({
  duration: "2000",
  once: true,
});


document.addEventListener("mousemove", function (e) {
  document.querySelectorAll(".object").forEach(function (move) {

    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 80;
    var y = (e.clientY * moving_value) / 80;
    move.style.transition = ".2s linear";
    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
});


var $homeSlider = $(".home-slider");

$(window).resize(function () {
  showHomeSlider();
});

function showHomeSlider() {
  if ($homeSlider.data("owlCarousel") !== "undefined") {
    if (window.matchMedia('(max-width: 600px)').matches) {
      initialHomeSlider();
    } else {
      destroyHomeSlider();
    }
  }
}
showHomeSlider();

function initialHomeSlider() {
  $homeSlider.addClass("owl-carousel").owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
    margin: 30,
    dots: false,
    center: true,
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    autoplaySpeed: 4500,
    responsive: {
      0: {
        items: 1
      },
      450: {
        items: 1.5
      }
    }
  });
}

function destroyHomeSlider() {
  $homeSlider.trigger("destroy.owl.carousel").removeClass("owl-carousel");
}

$(document).ready(function () {
  $(".btn-none").click(function () {
    $(".btn-none").toggleClass("d-none");
  });
  $(".btn-none2").click(function () {
    $(".btn-none2").toggleClass("d-none");
  });
  $(".btn-none3").click(function () {
    $(".btn-none3").toggleClass("d-none");
  });
});

!(function ($doc, $win) {
  var screenWidth = $win.screen.width / 2,
    screenHeight = $win.screen.height / 2,
    $elems = $doc.getElementsByClassName("img-wrapper"),
    validPropertyPrefix = '',
    otherProperty = 'perspective(1000px)',
    elemStyle = $elems[0].style;

  if (typeof elemStyle.webkitTransform == 'string') {
    validPropertyPrefix = 'webkitTransform';
  } else if (typeof elemStyle.MozTransform == 'string') {
    validPropertyPrefix = 'MozTransform';
  }

  $doc.addEventListener('mousemove', function (e) {
    var centroX = e.clientX - screenWidth,
      centroY = screenHeight - (e.clientY + 13),
      degX = centroX * 0.05,
      degY = centroY * 0.03,
      $elem

    for (var i = 0; i < $elems.length; i++) {
      $elem = $elems[i];
      $elem.style[validPropertyPrefix] = otherProperty + 'rotateY(' + degX + 'deg)  rotateX(' + degY + 'deg)';
    };
  });
})(document, window);
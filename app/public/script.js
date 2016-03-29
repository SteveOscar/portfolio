$(document).ready(function() {
  $('#sun').delay(1000).fadeTo('slow', 0.8);
  $('#steve').delay(500).fadeTo('slow', 0.8);
  loopButton = function() {
    $('#down-button').fadeTo('medium', 0.3);
    $('#down-button').fadeTo('medium', 1, function() {
      loopButton();
    });
  };
  loopButton();

  $('#down-button').on('click', function() {
    if ($(window).scrollTop() < 93 ) {
      $(document.body).animate({ scrollTop: 130 }, 600);
      return false;
    } else if ($(window).scrollTop() < 293 ) {
      $(document.body).animate({ scrollTop: 300 }, 600);
      return false;
    } else if ($(window).scrollTop() < 493 ) {
      $(document.body).animate({ scrollTop: 507 }, 600);
      return false;
    } else if ($(window).scrollTop() < 693 ) {
      $(document.body).animate({ scrollTop: 710 }, 600);
      return false;
    }
  });

  $('#up-button').on('click', function() {
    if ($(window).scrollTop() < 130 ) {
      $(document.body).animate({ scrollTop: 0 }, 600);
      return false;
    } else if ($(window).scrollTop() < 305 ) {
      $(document.body).animate({ scrollTop: 130 }, 600);
      return false;
    } else if ($(window).scrollTop() < 508 ) {
      $(document.body).animate({ scrollTop: 300 }, 600);
      return false;
    } else if ($(window).scrollTop() < 711 ) {
      $(document.body).animate({ scrollTop: 507 }, 600);
      return false;
    } else if ($(window).scrollTop() > 725 ) {
      $(document.body).animate({ scrollTop: 710 }, 600);
      return false;
    }
  });

  //when scrolling...
  $(window).scroll(function() {
    if($(window).scrollTop() > 10){
      $('#steve').hide();
    }
    if($(window).scrollTop() < 9){
      $('#steve').show();
    }
    if($(window).scrollTop() > 20){
      $('#down-button').fadeTo('slow', 1);
    }
    if($(window).scrollTop() > 50){
      $('.first-arrow').hide();
      $('.first-links').fadeTo('fast', 1);
      $('.level-one').show();
    }
    if($(window).scrollTop() < 50){
      $('.first-arrow').show();
      $('.first-links').hide();
    }
    if($(window).scrollTop() > 200){
      $('.level-one').hide();
      $('.level-two').show();
    }
    if($(window).scrollTop() < 200){
      $('.level-two').hide();
    }
    if($(window).scrollTop() > 170) {
      $('#sun').hide();
    }
    if($(window).scrollTop() < 170) {
      $('#sun').show();
    }
    if($(window).scrollTop() > 400 || $(window).scrollTop() < 200){
      $('.level-two').hide();
    }
    if($(window).scrollTop() > 400){
      $('.level-two').hide();
      $('.level-three').show();
    }
    if($(window).scrollTop() > 600 || $(window).scrollTop() < 400){
      $('.level-three').hide();
    }
    if($(window).scrollTop() > 600) {
      $('#moon').hide();
      $('.level-four').show();
    }
    if($(window).scrollTop() < 610) {
      $('#moon').show();
      $('.level-four').hide();
    }
    if($(window).scrollTop() > 810) {
      $('.level-four').hide();
    }
    if($(window).scrollTop() > 710) {
      $('#ufo').fadeTo('fast', 0);
    }
  });
});

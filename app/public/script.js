$(document).ready(function() {
  $('#down-button').on('click', function() {
    if ($(window).scrollTop() < 93 ) {
      $(document.body).animate({ scrollTop: 100 }, 600);
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
  })

  $('#up-button').on('click', function() {
    if ($(window).scrollTop() < 107 ) {
      $(document.body).animate({ scrollTop: 0 }, 600);
      return false;
    } else if ($(window).scrollTop() < 307 ) {
      $(document.body).animate({ scrollTop: 100 }, 600);
      return false;
    } else if ($(window).scrollTop() < 515 ) {
      $(document.body).animate({ scrollTop: 300 }, 600);
      return false;
    } else if ($(window).scrollTop() < 716 ) {
      $(document.body).animate({ scrollTop: 510 }, 600);
      return false;
    } else if ($(window).scrollTop() > 725 ) {
      $(document.body).animate({ scrollTop: 710 }, 600);
      return false;
    }
  })

  //when scrolling...
  $(window).scroll(function() {
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
      if($(window).scrollTop() < 278 && $(window).scrollTop() > 100){
        $('.second-arrow').show();
      }
      if($(window).scrollTop() > 278){
        $('.second-arrow').hide();
      }
      if($(window).scrollTop() > 300) {
        $('#sun').hide();
      }
      if($(window).scrollTop() < 300) {
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
      if($(window).scrollTop() > 475 || $(window).scrollTop() < 300){
        $('.third-arrow').hide();
      }
      if($(window).scrollTop() < 475 && $(window).scrollTop() > 300){
        $('.third-arrow').show();
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
      if($(window).scrollTop() > 795) {
        $('#ufo').fadeTo('fast', 0);
      }
  });
});

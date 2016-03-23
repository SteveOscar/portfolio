$(document).ready(function() {
  $('#headline').delay( 500 ).fadeTo('slow', 1);

  //when scrolling...
  $(window).scroll(function() {
      if($(window).scrollTop() > 50){
        $('.first-arrow').hide();
        $('.first-links').fadeTo('fast', 1);
        $('.level-one').show();
      }
  });
  $(window).scroll(function() {
      if($(window).scrollTop() < 50){
        $('.first-arrow').show();
        $('.first-links').hide();
      }
  });

  $(window).scroll(function() {
      if($(window).scrollTop() > 200){
        $('.level-one').hide();
        $('.level-two').show();
      }
      if($(window).scrollTop() < 200){
        $('.level-two').hide();
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
      if($(window).scrollTop() < 278 && $(window).scrollTop() > 100){
        $('.second-arrow').show();
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
      if($(window).scrollTop() < 600) {
        $('#moon').show();
        $('.level-four').hide();
      }

  });

});

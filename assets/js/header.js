$(document).ready(function() {
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 250) {
      $('.navbar-fixed-top.hidden-xs').addClass('scrolled');
    } else {
      $('.navbar-fixed-top.hidden-xs').removeClass('scrolled');
    }
  });

  $('.navbar-fixed-top.visible-xs .slide-menu > .fa-navicon').click(function() {
    $(this).next('.slide-menuContainer').addClass('visible');
  });
  $('.slide-menuContainer .fa-close').click(function() {
    $(this).parents('.slide-menuContainer').removeClass('visible');
  });
  $('.heroMenu > ul > li a').click(function() {
    $(this).next().slideToggle('fast');
  });
});

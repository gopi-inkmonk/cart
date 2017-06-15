$(document).ready(function() {
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 250) {
      $('.navbar-fixed-top').addClass('scrolled');
    } else {
      $('.navbar-fixed-top').removeClass('scrolled');
    }
  });
});

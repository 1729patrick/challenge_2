$(document).ready(function() {
  $(document).on("scroll", onScroll);

  function onScroll(event){
      let scrollPos = $(document).scrollTop();
      $('.nav-link').each(function () {
          let currLink = $(this);
          let refElement = $(currLink.attr("href"));
          let headerHeigth = 80;
          if (refElement.position().top <= scrollPos + headerHeigth) {
              $('a').removeClass("active");
              currLink.addClass("active");
          }
          else{
              currLink.removeClass("active");
          }
      });
  }

  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    console.log(this)
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 600);
});
})

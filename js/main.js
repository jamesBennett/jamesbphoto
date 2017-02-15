$(document).ready(function(){
  var index = 0;
  var images = document.getElementsByClassName('preLoader');
  var displayImages = document.getElementsByClassName('featuredImage');
  var toggleHero = $(window).length < 960;
  var preload = [];
  window.images = images;

  checkForAllImagesLoaded();

  function hero () {
    if(!toggleHero){
      return;
    }
    $(displayImages[index]).removeClass('active');
    index++;
    if(index >= displayImages.length){index = 0}
    $(displayImages[index]).addClass('active');
    setTimeout(hero, 5000);
  }

  $(window).smartresize(function(event){
    if($(this).width() < 800){
      toggleHero = false;
    }else if(toggleHero == false) {
      toggleHero = true;
      hero();
    }
  })

  function checkForAllImagesLoaded()
  {
      for (var i = 0; i < images.length; i++) {
          if (!images[i].complete) {
            var percentage = i * 100.0 / (images.length);
            percentage = percentage.toFixed(0).toString() + ' %';
            $(".loader").html("loading... " + percentage);
            setTimeout(checkForAllImagesLoaded, 20);
            return;
          }
      }
      $('.loader').remove();
      hero();
  }

  $('.mobileNav').click(function(){
		$(this).toggleClass('open');
    $('.mobileNav-items').toggleClass('show');
	});
});

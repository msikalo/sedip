(function($)
{
  $(document).ready(function()
  {
    $('body').removeClass('no-js').addClass('js');
    
    // Bei Klick auf "Nach oben"-Link nach oben scrollen lassen
    $('#totop').click(function(e)
    {
      e.preventDefault();
      $('html,body').animate({scrollTop: 0}, 500);
      
      return true;
    });
    
    // Klasse für <body> setzen, ob nach unten gescrollt wurde
    $(window).scroll(function()
    {
      if($(window).scrollTop())
        $('body').addClass('scrolled');
      else
        $('body').removeClass('scrolled');
    });
	});
}(jQuery));

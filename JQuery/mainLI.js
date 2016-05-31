$('.buttonLI').click(function(){
  $('.buttonLI').removeClass('activeLI');
  $(this).addClass('activeLI');
  
  $('.button-contentLI').removeClass('activeLI');
  
  var toggleId = $(this).attr('data-ui');
  
  $('#' + toggleId).addClass('activeLI');
});
	

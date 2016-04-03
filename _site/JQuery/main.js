$('.button').click(function(){
  $('.button').removeClass('active');
  $(this).addClass('active');
  
  $('.button-content').removeClass('active');
  
  var toggleId = $(this).attr('data-ui');
  
  $('#' + toggleId).addClass('active');
});
	

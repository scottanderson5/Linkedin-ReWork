


	$('#button').click(function(){
		if ($(this).hasClass('buttonActive')){
	$(this).removeClass('buttonActive').addClass('buttonNews');
			}
			else{
				$(this).removeClass('buttonNews').addClass('buttonActive');
			}
	});
	

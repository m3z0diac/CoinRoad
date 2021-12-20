$(function(){
    $(document).ready(function(){
        var height = $(window).height();
		var width = $(window).width();
		var header =$('.upper-bar').height();
		var nav = $('nav').height();
		var finalwidth =height-(header+nav);
		// alert(finalwidth);
		$('header').css('height',''+finalwidth+'px');
	});
});

$(function(){
    $(document).ready(function(){
        var height = $(window).height();
		var width = $(window).width();
		var nav = $('nav').height();
		var finalwidth =height-nav;
		// alert(finalwidth);
		$('.new-products').css('height',''+finalwidth+'px');
	});
});





$(window).scroll(function(){
	var top = $(window).scrollTop();
	if(top >= 60){
		$("nav").addClass("bg-color");
	}else
		if($('nav').hasClass('bg-color')){
			$('nav').removeClass('bg-color')
		} 
})


$(window).scroll(function(){
	var top = $(window).scrollTop();
	if(top >= 60){
		$("navbar-top").addClass("bg-color");
	}else
		if($('navbar-top').hasClass('bg-color')){
			$('navbar-top').removeClass('bg-color')
		} 
})

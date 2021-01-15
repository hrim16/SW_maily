
jQuery(document).ready(function() {

    /*
        Fullscreen Background
    */
	
	/*
	    Open / Close Menu 
	*/
	$('.hamburger-button button').on('click', function(){
		$('.top-menu').toggleClass('active');
		$(this).toggleClass('menu-closed');
	});
	
});

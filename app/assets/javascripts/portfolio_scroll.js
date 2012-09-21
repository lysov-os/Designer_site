$(document).ready(function() {
    $("a.thumbnail").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });

    $("a.scrollArrow").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });

    $(window).scroll(function() {
		if($(this).scrollTop() >= 160) {
			$('#scrollNavArrow').css({ display: "block" });						
		} else {
			if($(window).scrollTop() == 0) {
				$('#scrollNavArrow').css({ display: "none" });
			}			
		}
	});
});
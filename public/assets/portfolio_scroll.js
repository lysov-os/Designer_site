$(document).ready(function(){$("a.thumbnail").click(function(){var e=$(this).attr("href"),t=$(e).offset().top;return jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop:t},800),!1}),$("a.scrollArrow").click(function(){var e=$(this).attr("href"),t=$(e).offset().top;return jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop:t},800),!1}),$(window).scroll(function(){$(this).scrollTop()>=160?$("#scrollNavArrow").css({display:"block"}):$(window).scrollTop()==0&&$("#scrollNavArrow").css({display:"none"})})});
'use strict';

$(function() {

	$(".CHESS tr")
		.first().contents().css({
			"background-color": "#90ee90",
			"height": "25px"
		}).end().end()
		.last().contents().css({
			"background-color": "#90ee90",
			"height": "25px"
		}).end().end()
		.find("td:first, td:last").css({
			"background-color": "#90ee90",
			"width": "25px"
		}).end()
		.not(":first, :last").filter(":even").find("td:not(:first, :last):even")
		.css({
			"background-color": "#000"
		}).end().end()
		.filter(":odd").find("td:not(:first, :last):odd")
		.css({
			"background-color": "#000"
		});

});
$(function(){
	//ten kod wykona się po załadowaniu DOM
	var carouselList = $("#carousel ul");
	setInterval(changeSlide, 3000); //co 3 sek. wykona funkcję zmieniającą slajd 
		{
		carouselList.animate({'marginLeft':-500}, 500, moveFirstSlide);
	}
});

$ moveFirstSlide.function(
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	lastItem.after(firstItem);
	carouselList.css({marginLeft:0});
	)
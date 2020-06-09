$(function(){

	$(".about__slider").slick({
		slidesToShow: 7,
		slidesToScroll: 1,
		cssEase: 'linear',
		asNavFor: '.about__slider-info',
		responsive: [
			{
			  breakpoint: 1500,
			  settings: {
				slidesToShow: 5,
			  }
			},
			{
			  breakpoint: 1100,
			  settings: {
				slidesToShow: 4,
			  }
			},
			{
			  breakpoint: 900,
			  settings: {
				slidesToShow: 3,
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 2,
			  }
			},
			{
			  breakpoint: 450,
			  settings: {
				slidesToShow: 1,
				fade: true,
				cssEase: 'linear'
			  }
			}
		 ]
	});

	$(".about__slider-info").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows:false,
		asNavFor: '.about__slider',
		fade: true,
		cssEase: 'linear'
	});

	$(".testimonials__slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		cssEase: 'linear',
		responsive: [
			{
			  breakpoint: 769,
			  settings: {
				arrows: false,
			  }
			}
		 ]
	});

	$(".rooms-img__slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		cssEase: 'linear',
	});
 
});


/***************** Menu-btn ********************/
let menu_burger = document.querySelector('.menu__burger');
let menu = document.querySelector('.menu');
let body = document.querySelector('body');
menu_burger.addEventListener("click", function (e) {
	menu.classList.toggle('active');
	menu_burger.classList.toggle('active');
	body.classList.toggle('lock');
});



/***************** WebP ********************/
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	}
});

/***************** loaded ********************/
if (document.querySelector('.wrapper')) {
	document.querySelector('.wrapper').classList.add('loaded');
}

/***************** ibg adaptive inline bg ********************/
function ibg(){
	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}		
	}
}
ibg();
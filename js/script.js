new Swiper('.content-body__slider', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	slidesPerView: 1,
	spaceBetween: 32,
	speed: 800,
    direction: 'vertical',
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	lazy: true,
	parallax: true,
	// Dotts
	 pagination: {
		el: '.slider-content__pagination',
		clickable: true,
	},
	// Arrows

	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	*/
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});

document.addEventListener('click', documentActions);


function documentActions(e) {
	const targetElement = e.target;
	const menuInput = document.querySelector('.inner-menu__search_input');
	if(targetElement.classList.contains('inner-menu__search_button')) {
		menuInput.classList.toggle('_active');
	}
	if(document.querySelector('.main-body__button')){
		const mainPopup = document.querySelector('.popup')
		if(targetElement.classList.contains('popup__button')) {
			mainPopup.classList.add('_active')
		}	
	}
}

if(document.querySelectorAll('.inner-menu__settings')) {
	const changesButton = document.querySelectorAll('.inner-menu__settings');
	changesButton.forEach(change => {
	change.addEventListener("click", () => {
		change.classList.toggle('_active');
	})
})
}


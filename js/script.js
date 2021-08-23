function renderMain() {
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
	});
	
}

 

function renderAccount() {
	new Swiper('.account-main__slider', {
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
		// Dotts
		lazy: true,
		parallax: true,
		pagination: {
			el: '.account-main__pagination',
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
	});
}

new Swiper('.banner__slider', {
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
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	// Dotts
	lazy: true,
	parallax: true,
	pagination: {
		el: '.banner__pagination',
		clickable: true,
	},
	navigation: {
    nextEl: '.banner__button-next',
    prevEl: '.banner__button-prev',
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
});







document.addEventListener('click', documentActions);


function documentActions(e) {
	const targetElement = e.target;
	const menuInput = document.querySelector('.inner-menu__search_input');
	if(targetElement.classList.contains('inner-menu__search_button')) {
		menuInput.classList.toggle('_active');
	}
	let changedPage = document.querySelector('.main__body');
	let getPage = document.querySelector('.main__account')
	if(targetElement.classList.contains('account-swap-button')){
		changedPage.classList.add('_active');
		getPage.classList.add('_active')
		renderAccount();
	}
	if(targetElement.classList.contains('main-swap-button')){
		changedPage.classList.remove('_active');
		getPage.classList.remove('_active')
		renderMain();
	}
	if(document.querySelector('.main-body__button')){
		const mainPopup = document.querySelector('.popup')
		if(targetElement.classList.contains('popup__button')) {
			mainPopup.classList.add('_active')
		}	
	}

}

window.onload = () => {
		let nickname = document.querySelectorAll('.inner-menu__nickname');
		
		nickname.forEach(change => {
			let text = change.innerText;
			const fullNickname = document.createElement(`span`)
			fullNickname.innerText = text;
			fullNickname.style.cssText = `display:none;`;
			change.appendChild(fullNickname);
			change.addEventListener('mouseover', () => {
				fullNickname.style.cssText = `display:block;`;
			})
			change.addEventListener('mouseout', () => {
				fullNickname.style.cssText = `display:none;`;
			})
		})
}





if(document.querySelectorAll('.inner-menu__settings')) {
	const changesButton = document.querySelectorAll('.inner-menu__settings');
	changesButton.forEach(change => {
	change.addEventListener("click", () => {
		change.classList.toggle('_active');
	})
})
}



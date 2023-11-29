
export const slider = () => {

	const slidesWrapper = document.querySelector('.slides__wrapper');
	const slidesInner = document.querySelector('.slides__inner');
	const slidesField = document.querySelector('.slides__coffee');
	const slides = document.querySelectorAll('.slides__item');
	const prev = document.querySelector('.prev');
	const next = document.querySelector('.next');
	const lines = document.querySelectorAll('.lines__item');

	const widthInner = window.getComputedStyle(slidesInner).width;

	let slideIndex = 1;
	let offset = 0;
	let paused = false;

	slidesField.style.width = 100 * slides.length + '%';

	slides.forEach(slide => {
		slide.style.width = widthInner;
	})

	const nextSlide = () => {
		if (offset === +widthInner.slice(0, widthInner.length - 2) * (slides.length - 1)) {
			offset = 0;
		} else {
			offset += +widthInner.slice(0, widthInner.length - 2);
		}

		if (slideIndex === slides.length) {
			slideIndex = 1;
		} else {
			slideIndex++;
		}

		lines.forEach(line => {
			line.classList.remove('lines__item_active');
		});

		slidesField.style.transform = `translateX(-${offset}px)`;
		lines[slideIndex - 1].classList.add('lines__item_active');
	}

	const prevSlide = () => {
		if (offset === 0) {
			offset = +widthInner.slice(0, widthInner.length - 2) * (slides.length - 1);
		} else {
			offset -= +widthInner.slice(0, widthInner.length - 2);
		}


		if (slideIndex === 1) {
			slideIndex = slides.length;
		} else {
			slideIndex--;
		}

		lines.forEach(line => {
			line.classList.remove('lines__item_active');
		});

		slidesField.style.transform = `translateX(-${offset}px)`;
		lines[slideIndex - 1].classList.add('lines__item_active');

		slidesField.style.transform = `translateX(-${offset}px)`;
	}

	const activateInterval = () => {
		paused = setInterval(() => {
			prevSlide();
		}, 5000);
	}

	activateInterval();

	next.addEventListener('click', nextSlide);
	prev.addEventListener('click', prevSlide);

	slidesWrapper.addEventListener('mouseenter', () => {
		clearInterval(paused);
	})
	
	slidesWrapper.addEventListener('mouseleave', () => {
		activateInterval();
	})

}
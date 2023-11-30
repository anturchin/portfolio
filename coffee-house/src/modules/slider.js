
export const slider = () => {

	const slidesInner = document.querySelector('.slides__inner');
	const slidesField = document.querySelector('.slides__coffee');
	const slides = document.querySelectorAll('.slides__item');
	const prev = document.querySelector('.prev');
	const next = document.querySelector('.next');
	const lines = document.querySelectorAll('.lines__item');

	const widthInner = window.getComputedStyle(slidesInner).width;

	let slideIndex = 1;
	let offset = 0;

	let interval = 5000;
	let intervalId;
	let startTime;
	let stopTime;

	let isDragging = false;
	let dragStartX = 0;
	let dragDiff = 0;

	slidesField.style.width = 100 * slides.length + '%';

	slides.forEach(slide => {
		slide.style.width = widthInner;
	})

	const updateLines = () => {
		lines.forEach(line => {
			line.classList.remove('lines__item_active');
		});
		lines[slideIndex - 1].classList.add('lines__item_active');
	}

	const nextSlide = () => {
		
		stopInterval();
		resumeInterval();
		
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

		slidesField.style.transform = `translateX(-${offset}px)`;
		updateLines();
	}

	const prevSlide = () => {
		
		stopInterval();
		resumeInterval();

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

		slidesField.style.transform = `translateX(-${offset}px)`;
		updateLines();
	}

	const startInterval = () => {
		startTime = Date.now();
		intervalId = setInterval(() => {
			nextSlide();
		}, interval);

	};

	const stopInterval = () => {
		
		stopTime = Date.now();
		clearInterval(intervalId);
		lines[slideIndex - 1].classList.add('lines__item_paused');

	};

	const resumeInterval = () => {
		
		lines[slideIndex - 1].classList.remove('lines__item_paused');
		startInterval();
		
	};


	const onPointerDown = (e) => {
		
		stopInterval();

		isDragging = true;
		dragStartX = e.clientX || e.touches[0].clientX;
	
	}

	const onPointerMove = (e) => {

		stopInterval();

		if (!isDragging) return;

		const currentX = e.clientX || e.touches[0].clientX;
		dragDiff = dragStartX - currentX;

		slidesField.style.transition = 'none';
		slidesField.style.transform = `translateX(${-offset - dragDiff}px)`;

	}

	const onPointerUp = () => {

		if (!isDragging) return;

		isDragging = false;
		slidesField.style.transition = '';

		if (dragDiff > 50) {
			nextSlide();
		}
		if (dragDiff < -50) {
			prevSlide();
		}

		dragDiff = 0;


	}

	const onPointerLeave = () => {

		resumeInterval();

		if (isDragging) {
			isDragging = false;
			slidesField.style.transition = '';
			slidesField.style.transform = `translateX(${-offset}px)`;
		}

	}

	next.addEventListener('click', nextSlide);
	prev.addEventListener('click', prevSlide);

	slidesInner.addEventListener('mousedown', onPointerDown);
	slidesInner.addEventListener('mousemove', onPointerMove);
	slidesInner.addEventListener('mouseup', onPointerUp);
	slidesInner.addEventListener('mouseleave', onPointerLeave);
	slidesInner.addEventListener('touchstart', onPointerDown);
	slidesInner.addEventListener('touchmove', onPointerMove);
	slidesInner.addEventListener('touchend', onPointerUp);
	slidesInner.addEventListener('touchcancel', onPointerLeave);

  startInterval();

}
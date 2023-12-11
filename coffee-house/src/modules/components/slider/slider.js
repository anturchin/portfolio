
export const slider = () => {

	const slidesInner = document.querySelector('.slides__inner');
	const slidesField = document.querySelector('.slides__coffee');
	const slides = document.querySelectorAll('.slides__item');
	const prev = document.querySelector('.prev');
	const next = document.querySelector('.next');
	const lines = document.querySelectorAll('.lines__item');
	const lineAnimate = document.querySelectorAll('.lines__item span');

	const widthInner = window.getComputedStyle(slidesInner).width;

	let slideIndex = 1;
	let offset = 0;

	let isDragging = false;
	let dragStartX = 0;
	let dragDiff = 0;

	slidesField.style.width = 100 * slides.length + '%';

	slides.forEach(slide => {
		slide.style.width = widthInner;
	})


	function updateLines() {
		lines.forEach(line => {
			line.classList.remove('lines__item_active');
		});
		lines[slideIndex - 1].classList.add('lines__item_active');
	}

	updateLines();

	function nextSlide() {

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

	function prevSlide() {

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

	function onPointerDown(e) {

		e.preventDefault();

		lines[slideIndex - 1].classList.add('lines__item_paused');

		isDragging = true;
		dragStartX = e.clientX || e.touches[0].clientX;

	}

	function onPointerMove(e) {

		e.preventDefault();

		lines[slideIndex - 1].classList.add('lines__item_paused');

		if (!isDragging) return;

		const currentX = e.clientX || e.touches[0].clientX;
		dragDiff = dragStartX - currentX;

		slidesField.style.transition = 'none';
		slidesField.style.transform = `translateX(${-offset - dragDiff}px)`;

	}

	function onPointerUp() {

		lines[slideIndex - 1].classList.remove('lines__item_paused');

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

	function onPointerLeave() {

		lines[slideIndex - 1].classList.remove('lines__item_paused');

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

	lineAnimate.forEach(line => {
		line.addEventListener('animationend', () => {
			nextSlide();
		})
	})

}
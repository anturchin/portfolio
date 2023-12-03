export const openModals = () => {

	const triggerModal = document.querySelectorAll('[data-modal]');
	const modal = document.querySelector('.modal');
	const closeBtn = document.querySelector('.modal__close');

	modal.classList.add('fade');

	function showModal() {
		modal.classList.add('show');
		modal.classList.remove('hide');
		document.body.classList.add('hidden');
	}

	function closeModal(e) {

		if(e.target){
			e.preventDefault();
		}

		modal.classList.add('hide');
		modal.classList.remove('show');
		document.body.classList.remove('hidden');
	}

	triggerModal.forEach(trigger => {
		trigger.addEventListener('click', showModal);
	})

	closeBtn.addEventListener('click', closeModal)

}
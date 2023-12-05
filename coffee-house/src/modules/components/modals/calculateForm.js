
export const handleCalcForm = (products) => {

	const inputRadio = document.querySelectorAll('[type="radio"]');
	const inputCheckbox = document.querySelectorAll('[type="checkbox"]');

	let sum = 0;

	const updateSum = (oldSum) => {
		
		let totalPrice = document.querySelector('.modal__price');
		let total = +totalPrice.textContent.slice(1);
		totalPrice.innerHTML = '';
		total = total - oldSum + sum;
		totalPrice.innerHTML = `$${total.toFixed(2)}`;

	}

	const calcSum = (input) => {

		let select;

		if (input.parentElement.parentElement.getAttribute('data-sizes')) {
			select = input.parentElement.parentElement.getAttribute('data-sizes')
		}

		if (input.parentElement.parentElement.getAttribute('data-additives')) {
			select = input.parentElement.parentElement.getAttribute('data-additives')
		}

		let oldSum = sum;

		if (input.type === 'radio') {
			sum = 0;
		}

		
		const inputID = +input.parentElement.getAttribute('data-product-id');
		const prodItem = products.find(item => item.id === inputID);

		Object.entries(prodItem[select]).forEach(item => {
			if (item[1][input.name] == input.value) {
				if (input.checked) {
					sum += +item[1]['add-price'];
				} else {
					sum -= +item[1]['add-price'];
				}
			}
		});

		updateSum(oldSum);

	}


	function handleInputChange(inputs) {

		inputs.forEach((input, i) => {
			input.addEventListener('change', () => {

				calcSum(input);

			})
		})
	}


	handleInputChange(inputRadio);
	handleInputChange(inputCheckbox);

}



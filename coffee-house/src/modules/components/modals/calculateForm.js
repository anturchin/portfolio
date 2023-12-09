export const handleCalcForm = (products) => {

	const inputRadio = document.querySelectorAll('[type="radio"]');
	const inputCheckbox = document.querySelectorAll('[type="checkbox"]');

	let sum;

	const updateSum = (sum) => {
		const totalPrice = document.querySelector('.modal__price');
		totalPrice.innerHTML = '';
		totalPrice.innerHTML = `$${sum.toFixed(2)}`;
	}

	const calcSum = (input, prodOption, prodOptionTwo, prodOptionThree) => {
		
		if(input.checked){

			switch (input.value) {
				case prodOption[input.name]:
					sum += +prodOption['add-price'];
					break;
				case prodOptionTwo[input.name]:
					sum += +prodOptionTwo['add-price'];
					break;
				case prodOptionThree[input.name]:
					sum += +prodOptionThree['add-price'];
					break;
				default:
					sum = 0;
			}

		}

	}

	const onCalculate = (input)=> {
		
		const inputID = +input.parentElement.getAttribute('data-product-id');
		const prodItem = products.find(item => item.id === inputID);
		
		const prodPrice = +prodItem.price;
		
		const prodSizeS = prodItem.sizes.s;
		const prodSizeM = prodItem.sizes.m;
		const prodSizeL = prodItem.sizes.l;
			
		const prodAditOne = prodItem.additives[0];
		const prodAditTwo = prodItem.additives[1];
		const prodAditThree = prodItem.additives[2];

		inputRadio.forEach(input => calcSum(input, prodSizeS, prodSizeM, prodSizeL));
		inputCheckbox.forEach(input => calcSum(input, prodAditOne, prodAditTwo, prodAditThree));

		updateSum(sum + prodPrice);
	}

	function handleInputChange(inputs) {

		inputs.forEach((input, i) => {
			input.addEventListener('change', () => {
				sum = 0;
				onCalculate(input);
			})
		})
	}


	handleInputChange(inputRadio);
	handleInputChange(inputCheckbox);

}



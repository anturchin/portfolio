
export const handleCalcForm = (products) => {

	const inputRadio = document.querySelectorAll('[type="radio"]');
	const inputCheckbox = document.querySelectorAll('[type="checkbox"]');

	let sum;

	const updateSum = (sum) => {
		const totalPrice = document.querySelector('.modal__price');
		totalPrice.innerHTML = '';
		totalPrice.innerHTML = `$${sum.toFixed(2)}`;
	}

	const calcSum = (input)=> {
		
		const inputID = +input.parentElement.getAttribute('data-product-id');
		const prodItem = products.find(item => item.id === inputID);

		const prodPrice = +prodItem.price;
		const prodSizeS = prodItem.sizes.s;
		const prodSizeM = prodItem.sizes.m;
		const prodSizeL = prodItem.sizes.l;
		
		inputRadio.forEach(input => {
			
			if(input.checked){

				switch (input.value) {
					case prodSizeS.size:
						sum += +prodSizeS['add-price'];
						break;
					case prodSizeM.size:
						sum += +prodSizeM['add-price'];
						break;
					case prodSizeL.size:
						sum += +prodSizeL['add-price'];
						break;
					default:
						sum = 0;
				}

			}
		})
		
		const prodAditOne = prodItem.additives[0];
		const prodAditTwo = prodItem.additives[1];
		const prodAditThree = prodItem.additives[2];


		inputCheckbox.forEach(input => {
			
			if(input.checked){

				switch (input.value) {
					case prodAditOne.name:
						sum += +prodAditOne['add-price'];
						break;
					case prodAditTwo.name:
						sum += +prodAditTwo['add-price'];
						break;
					case prodAditThree.name:
						sum += +prodAditThree['add-price'];
						break;
					default:
						sum = 0;
				}

			}
		})

		updateSum(sum + prodPrice);
	}

	function handleInputChange(inputs) {

		inputs.forEach((input, i) => {
			input.addEventListener('change', () => {
				sum = 0;
				calcSum(input);
			})
		})
	}


	handleInputChange(inputRadio);
	handleInputChange(inputCheckbox);

}



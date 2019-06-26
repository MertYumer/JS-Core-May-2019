function acceptance() {
	function removeProduct(e) {
		const parentElement = e.target.parentNode;
		warehouseElement.removeChild(parentElement);
	}
	
	function addProduct() {
		let shippingCompanyElement = document
			.querySelector("#fields > td:nth-child(1) > input[type=text]");
		const shippingCompany = shippingCompanyElement.value;

		let productNameElement = document
			.querySelector("#fields > td:nth-child(2) > input[type=text]");
		const productName = productNameElement.value;

		let productQuantityElement = document
			.querySelector("#fields > td:nth-child(3) > input[type=text]");
		let productQuantity = +productQuantityElement.value;

		let productScrapeElement = document
			.querySelector("#fields > td:nth-child(4) > input[type=text]");
		const productScrape = +productScrapeElement.value;

		if (shippingCompany !== '' && productName !== '' &&
			!isNaN(productQuantity) && !isNaN(productScrape)) {
			productQuantity -= productScrape;

			if (productQuantity > 0) {
				const productInfo =
					`[${shippingCompany}] ${productName} - ${productQuantity} pieces`;

				const divElement = document.createElement('div');

				const pElement = document.createElement('p');
				pElement.textContent = productInfo;

				const outOfStockButton = document.createElement('button');
				outOfStockButton.textContent = 'Out of stock';
				outOfStockButton.addEventListener('click', removeProduct);

				divElement.appendChild(pElement);
				divElement.appendChild(outOfStockButton);
				warehouseElement.appendChild(divElement);
			}
		}

		shippingCompanyElement.value = '';
		productNameElement.value = '';
		productQuantityElement.value = '';
		productScrapeElement.value = '';
	}

	const warehouseElement = document.querySelector("#warehouse");
	const addButton = document.querySelector("#acceptance");
	addButton.addEventListener('click', addProduct);
}
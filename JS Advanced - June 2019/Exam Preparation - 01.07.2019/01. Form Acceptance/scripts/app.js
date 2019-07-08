function acceptance() {
	function addProduct() {
		const shippingCompanyElement = document.querySelector('input[name="shippingCompany"]');
		const shippingCompany = shippingCompanyElement.value;

		const productNameElement = document.querySelector('input[name="productName"]');
		const productName = productNameElement.value;

		const productQuantityElement = document.querySelector('input[name="productQuantity"]');
		let productQuantity = +productQuantityElement.value;

		const productScrapeElement = document.querySelector('input[name="productScrape"]');
		const productScrape = +productScrapeElement.value;

		if (shippingCompany && productName &&
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

	function removeProduct(e) {
		const parentElement = e.target.parentNode;
		warehouseElement.removeChild(parentElement);
	}

	const warehouseElement = document.querySelector("#warehouse");
	const addButton = document.querySelector("#acceptance");
	addButton.addEventListener('click', addProduct);
}
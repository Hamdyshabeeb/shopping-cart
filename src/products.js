const products = [
	{
		id: 'price_1LnUTFDM1jwCEz8OGoOSXiSM',
		title: 'Coffee',
		price: 4.99,
	},
	{
		id: 'price_1LnUTxDM1jwCEz8OAqHYTwKQ',
		title: 'Sunglasses',
		price: 9.99,
	},
	{
		id: 'price_1LnUUoDM1jwCEz8OvxIcJ7to',
		title: 'Camera',
		price: 39.99,
	},
];

function getProduct(id) {
	const product = products.find((product) => product.id === id);
	return product;
}

export { products, getProduct };

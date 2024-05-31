const products = [
	{
		id: 'price_1PMRTt00ZNosv7FF1AbVarl2',
		title: 'Coffee',
		price: 4.99,
	},
	{
		id: 'price_1PMRWj00ZNosv7FFBRcWdZZX',
		title: 'Sunglasses',
		price: 9.99,
	},
	{
		id: 'price_1PMU9B00ZNosv7FFQu2A0ZIc',
		title: 'Camera',
		price: 39.99,
	},
];

function getProduct(id) {
	const product = products.find((product) => product.id === id);
	return product;
}

export { products, getProduct };

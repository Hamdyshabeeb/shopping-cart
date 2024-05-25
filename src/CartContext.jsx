import { createContext, useState } from 'react';

export const CartContext = createContext({
	items: [],
	getProductQuantity: () => {},
	addProductToCart: () => {},
});

export default function CartContextProvider({ children }) {
	const [cartProducts, setCartProducts] = useState([]);

	function getProductQuantity(id) {
		const quantity = cartProducts.find(
			(product) => product.id === id
		)?.quantity;

		return quantity === undefined ? 0 : quantity;
	}

	function addProductToCart(id) {
		if (getProductQuantity(id) === 0) {
			setCartProducts([...cartProducts, { id, quantity: 1 }]);
		} else {
			setCartProducts(
				cartProducts.map((product) => {
					return product.id === id
						? { ...product, quantity: product.quantity + 1 }
						: product;
				})
			);
		}
	}

	const contextValue = {
		items: cartProducts,
		getProductQuantity,
		addProductToCart,
	};

	return (
		<CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
	);
}

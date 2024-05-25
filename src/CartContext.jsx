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

	function removeOneQuantityFromCart(id) {
		const productQuantity = getProductQuantity(id);
		if (productQuantity === 0) return;
		if (productQuantity === 1) {
			setCartProducts(cartProducts.filter((product) => product.id !== id));
		} else {
			setCartProducts(
				cartProducts.map((product) => {
					return product.id === id
						? { ...product, quantity: product.quantity - 1 }
						: product;
				})
			);
		}
	}

	function deleteProductFromCart(id) {
		setCartProducts(cartProducts.filter((product) => product.id !== id));
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

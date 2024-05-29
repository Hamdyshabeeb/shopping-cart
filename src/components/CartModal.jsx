import { useContext, useRef } from 'react';
import { CartContext } from '../CartContext';
import CartProduct from './CartProduct';
import { getProduct } from '../products';

import Button from './Button';

function CartModal({ isActive, showHideCart }) {
	const cart = useContext(CartContext);
	const modalBG = useRef(null);

	function handelModalClick(e) {
		console.log(modalBG);
		if (e.target === modalBG.current) {
			showHideCart();
		}
	}

	return (
		<div
			ref={modalBG}
			onClick={handelModalClick}
			className={`fixed inset-0 bg-black/50 ${
				isActive ? 'block' : 'hidden'
			} overflow-auto `}
		>
			<section className=" shadow-sm  bg-white w-[95%] max-w-[500px] mx-auto my-5 rounded-xl overflow-auto   ">
				<div className="flex justify-between items-center px-4 py-3  border-b border-b-gray-300 ">
					<h2 className="text-gray-700 text-2xl"> Shopping Cart</h2>{' '}
					<Button
						className={'text-2xl text-gray-400 cursor-pointer'}
						onClick={showHideCart}
					>
						{' '}
						X{' '}
					</Button>
				</div>

				{cart.items.length === 0 ? (
					<p className="text-4xl px-3 py-5 text-gray-700 ">
						{' '}
						There are no items in your cart!{' '}
					</p>
				) : (
					<>
						<ul className="p-5 pb-0">
							<h3 className="text-gray-600 mb-5"> Items in Your Cart:</h3>

							{cart.items.map((item) => (
								<CartProduct
									key={item.id}
									item={item}
									remove={cart.deleteProductFromCart}
								/>
							))}
						</ul>
						<div className="p-5">
							<p className="text-gray-800 text-3xl mb-3 ">
								Total: $
								{cart.items
									.reduce(
										(sum, item) =>
											sum + getProduct(item.id).price * item.quantity,
										0
									)
									.toFixed(2)}
							</p>

							<Button className={'bg-green-700 text-white rounded'}>
								Purchase items!
							</Button>
						</div>{' '}
					</>
				)}
			</section>
		</div>
	);
}

export default CartModal;

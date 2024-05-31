import Button from './Button';
import { useState } from 'react';
import CartModal from './CartModal';
import { useContext } from 'react';
import { CartContext } from '../CartContext';

function Navbar() {
	const [isActiveCart, setIsActiveCart] = useState(false);
	const cart = useContext(CartContext);

	function showHideCart() {
		setIsActiveCart(!isActiveCart);
	}

	return (
		<nav className={'bg-slate-50 border-b border-gray-300 '}>
			<div className=" flex justify-between items-center wrapper py-2 ">
				<Button href={'/'} className={'text-xl font-semibold '}>
					E-Store
				</Button>
				<Button
					onClick={() => showHideCart()}
					className={'bg-blue-600 text-white rounded-lg'}
				>
					cart (
					{cart.items.reduce(
						(sum, currentItem) => sum + currentItem.quantity,
						0
					)}{' '}
					items)
				</Button>
			</div>

			<CartModal isActive={isActiveCart} showHideCart={showHideCart} />
		</nav>
	);
}

export default Navbar;

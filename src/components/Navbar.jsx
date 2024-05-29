import Button from './Button';
import { useState } from 'react';
import CartModal from './CartModal';

function Navbar() {
	const [isActiveCart, setIsActiveCart] = useState(false);

	function showHideCart() {
		setIsActiveCart(!isActiveCart);
	}

	return (
		<nav className={'bg-slate-50 border-b border-gray-300 '}>
			<div className=" flex justify-between items-center wrapper py-2 ">
				<Button href={'/'} className={'text-xl font-semibold '}>
					E-Store
				</Button>
				<Button onClick={() => showHideCart()}>cart</Button>
			</div>

			<CartModal isActive={isActiveCart} showHideCart={showHideCart} />
		</nav>
	);
}

export default Navbar;

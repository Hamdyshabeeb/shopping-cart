import { getProduct } from '../products';
import Button from './Button';

function CartProduct({ item, remove }) {
	const product = getProduct(item.id);
	const quantity = item.quantity;

	function totalProductPrice() {
		return (quantity * product.price).toFixed(2);
	}

	return (
		<li className="text-gray-700 border-b border-gray-300 ">
			<h4 className="text-2xl  mb-2"> {product.title}</h4>

			<p className="mb-1"> {quantity} Total</p>

			<p className="mb-3">${totalProductPrice()} </p>

			<Button
				className={'bg-red-600 text-white rounded mb-3 text-sm py-1'}
				onClick={() => remove(item.id)}
			>
				Remove{' '}
			</Button>
		</li>
	);
}

export default CartProduct;

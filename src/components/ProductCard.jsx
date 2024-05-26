import Button from './Button';
import { useContext } from 'react';
import { CartContext } from '../CartContext';

function ProductCard({ product }) {
	const cart = useContext(CartContext);
	const productQuantityInCart = cart.getProductQuantity(product.id);

	console.log(product.title, productQuantityInCart);

	return (
		<li className=" border-2 rounded-lg border-gray-300 px-5 py-4 shadow-sm">
			<h4 className="text-xl text-gray-700 mb-4">{product.title}</h4>
			<p className="text-xl font-bold text-gray-600 mb-3 ">${product.price}</p>
			<div className="min-h-24 flex flex-col justify-end">
				{productQuantityInCart === 0 ? (
					<Button
						className={'bg-blue-600 text-white rounded-lg mx-auto'}
						onClick={() => cart.addProductToCart(product.id)}
					>
						Add To Cart
					</Button>
				) : (
					<>
						<div className="flex items-center justify-between">
							<p className="flex-auto text-gray-600 text-lg">
								{' '}
								In Cart:{productQuantityInCart}
							</p>
							<div className="flex gap-3 flex-auto justify-center">
								<Button
									onClick={() => cart.addProductToCart(product.id)}
									className={
										'bg-blue-600 text-white rounded-xl w-10  aspect-square'
									}
								>
									{' '}
									+{' '}
								</Button>
								<Button
									onClick={() => cart.removeOneQuantityFromCart(product.id)}
									className={
										'bg-blue-600  text-white rounded-xl w-10  aspect-square'
									}
								>
									-{' '}
								</Button>
							</div>
						</div>
						<Button
							className={'bg-red-600 text-white rounded-xl mx-auto mt-4'}
							onClick={() => cart.deleteProductFromCart(product.id)}
						>
							{' '}
							Remove From Cart{' '}
						</Button>
					</>
				)}
			</div>
		</li>
	);
}

export default ProductCard;

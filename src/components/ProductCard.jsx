import Button from './Button';

function ProductCard({ product }) {
	return (
		<li className=" border-2 rounded-lg border-gray-300 px-5 py-4 shadow-sm">
			<h4 className="text-xl text-gray-700 mb-2">{product.title}</h4>
			<p className="text-xl font-bold text-gray-600 mb-3 ">${product.price}</p>
			<div className="min-h-20 flex flex-col justify-end">
				<Button className={'bg-blue-600 text-white rounded-lg mx-auto'}>
					Add To Cart{' '}
				</Button>
			</div>
		</li>
	);
}

export default ProductCard;

import { products } from '../products';
import ProductCard from '../components/ProductCard';

function Home() {
	return (
		<section>
			<div className="wrapper text-center mt-10">
				<h2 className="text-3xl md:text-4xl  text-gray-700">
					Welcome to <span className="whitespace-nowrap">E-Store</span>{' '}
				</h2>

				<ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 ">
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</ul>
			</div>
		</section>
	);
}

export default Home;

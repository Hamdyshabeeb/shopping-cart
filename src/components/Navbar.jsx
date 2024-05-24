import Button from './Button';

function Navbar() {
	return (
		<nav className={'bg-gray-100'}>
			<div className="max-w-[1280px] w-90 flex justify-between items-center mx-auto">
				<Button href={'/'}>E-Commerce </Button>
				<Button>cart</Button>
			</div>
		</nav>
	);
}

export default Navbar;

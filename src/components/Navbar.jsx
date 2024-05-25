import Button from './Button';

function Navbar() {
	return (
		<nav className={'bg-gray-100'}>
			<div className=" flex justify-between items-center wrapper">
				<Button href={'/'}>E-Commerce </Button>
				<Button>cart</Button>
			</div>
		</nav>
	);
}

export default Navbar;

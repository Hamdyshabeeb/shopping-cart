import Button from './Button';

function Navbar() {
	return (
		<nav className={'bg-slate-50 border-b border-gray-300 '}>
			<div className=" flex justify-between items-center wrapper py-2 ">
				<Button href={'/'} className={'text-xl font-semibold '}>
					E-Store
				</Button>
				<Button>cart</Button>
			</div>
		</nav>
	);
}

export default Navbar;

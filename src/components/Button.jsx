import { Link } from 'react-router-dom';

function Button({ className, children, href = false, onClick }) {
	const classes = ` px-3  text-gray-700  py-2  flex justify-center items-center w-fit curser cursor-pointer  ${
		className || ''
	}`;
	const renderButton = () => (
		<button onClick={onClick} className={classes}>
			{children}{' '}
		</button>
	);

	const renderLink = () => (
		<Link to={href} className={classes}>
			{children}
		</Link>
	);

	return href ? renderLink() : renderButton();
}

export default Button;

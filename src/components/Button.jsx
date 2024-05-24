function Button({ className, children, href = false }) {
	const classes = ` px-3  text-gray-700  py-2 bg-transparent flex justify-center items-center w-fit curser cursor-pointer  ${
		className || ''
	}`;

	const renderButton = () => <button className={classes}> {children} </button>;

	const renderLink = () => (
		<a href={href} className={classes}>
			{children}
		</a>
	);

	return href ? renderLink() : renderButton();
}

export default Button;

export const Button = ({type, disabled, onClick, style, children}) => {

	return (
		<button
		type={type}
		disabled={disabled}
		onClick={onClick}
		className={style}
		>
			{children}
		</button>
	)
}

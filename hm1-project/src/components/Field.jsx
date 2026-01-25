import styles from './form.module.css';

export const Field = ({
	name,
	type,
	value,
	autoComplete,
	placeholder,
	onChange,
	onBlur,
}) => {
	return (
		<>
			<div>
				<input
					name={name}
					type={type}
					value={value}
					autoComplete={autoComplete}
					placeholder={placeholder}
					className={styles.form}
					onChange={onChange}
					onBlur={onBlur}
				/>
			</div>
		</>
	);
};

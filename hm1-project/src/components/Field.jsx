import styles from './form.module.css';

export const Field = ({
	type,
	autoComplete,
	placeholder,
	...fieldProps
}) => {
	return (
		<>
			<div>
				<input
					type={type}
					autoComplete={autoComplete}
					placeholder={placeholder}
					className={styles.form}
					{...fieldProps}
				/>
			</div>
		</>
	);
};

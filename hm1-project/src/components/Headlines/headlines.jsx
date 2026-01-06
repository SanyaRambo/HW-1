import styles from "./headlines.module.css"

export const Headlines = ({color, filter, children}) => {
	return (
		<>
		<h2 className={`${styles.label} ${styles[color]} ${styles[filter]}`}>{children}</h2>
		</>
	)
}

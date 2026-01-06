import styles from "./headlines.module.css"

export const Headlines = ({title, color, filter}) => {
	return (
		<>
		<h2 className={`${styles.label} ${styles[color]} ${styles[filter]}`}>{title}</h2>
		</>
	)
}

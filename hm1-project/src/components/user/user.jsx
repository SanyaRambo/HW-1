import styles from "./user.module.css"
import { Contact } from "../contact/contact"
import { Headlines } from "../Headlines/headlines";

export const User = ({name, age, ...contact}) => {
	return (
		<>
		<div className={styles.user}>
			< Headlines color={'blue'} filter={'drop-shadow(0 0 20px #5500ffff)'}>Пользователь:</Headlines>
			<div>Имя: {name}</div>
			<div>Возраст: {age}</div>
		</div>
		<Contact {...contact} />
		</>
	);
};

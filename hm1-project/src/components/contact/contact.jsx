import styles from "./contact.module.css"
import { Headlines } from "../Headlines/headlines";

export const Contact = ({email, telephone}) => {
	return (
		<>
			<div>
				<Headlines color={'red'} filter={'drop-shadow(0 0 20px #ff0000)'}>Контакты:</Headlines>
				<div>Почта: {email}</div>
				<div>Телефон: {telephone}</div>
			</div>
		</>
	);
};

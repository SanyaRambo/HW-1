import styles from "./contact.module.css"
import { Headlines } from "../Headlines/headlines";

export const Contact = ({email, telephone}) => {
	return (
		<>
			<div>
				< Headlines title={'Контакты'} color={'red'} filter={'drop-shadow(0 0 20px #ff0000)'}/>
				<div>Почта: {email}</div>
				<div>Телефон: {telephone}</div>
			</div>
		</>
	);
};

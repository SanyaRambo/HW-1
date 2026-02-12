import styles from './game.module.css';
import { Information, Field } from '../components';

export const GameLayout = () => {
	return (
		<>
			<div className={styles.cloudTop}></div>
			<h1 className={styles.TTT}>TIC TAC TOE</h1>
			<div className={styles.game}>
				<div className={styles.windowOfGame}>
					<Information />
					<Field />
				</div>
			</div>
		</>
	);
};

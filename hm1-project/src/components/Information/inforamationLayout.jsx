import styles from './information.module.css'

export const InformationLayout = ({
	winner,
	motionZeroOrX,
	isGameEnded,
	isDraw,
	handleClickStartAgain,
	scoreX,
	scoreO,
}) => {
	return (
		<>
			<div>
				<div className={styles.information}>
					<div>
						<h1 className={`${styles.symbol} ${styles.x}`}>Х</h1>
						<h2 className={styles.xText}>КРЕСТИК</h2>
						<h2 className={styles.xText}>{scoreX()}</h2>
					</div>
					{(isDraw || isGameEnded) && (
						<button
							className={styles.restart}
							onClick={handleClickStartAgain}
						>
							НАЧАТЬ ЗАНОВО!
						</button>
					)}
					<div>
						<h1 className={`${styles.symbol} ${styles.zero}`}>О</h1>
						<h2 className={styles.zeroText}>НОЛИК</h2>
						<h2 className={styles.zeroText}>{scoreO()}</h2>
					</div>
				</div>
				<h1 className={`${styles.textOfField} ${styles.motion}`}>
					{isGameEnded && !isDraw ? (
						<>ПОБЕДА {winner()}!</>
					) : isDraw && isGameEnded ? (
						'НИЧЬЯ!'
					) : (
						<>Ход: {motionZeroOrX()}</>
					)}
				</h1>
			</div>
		</>
	);
};

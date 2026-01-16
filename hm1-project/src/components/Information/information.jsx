import PropTypes from 'prop-types';
import styles from './information.module.css';

export const Information = ({
	arrayStateInformation,
	field,
	currentPlayer,
	setCurrentPlayer,
	setIsDraw,
	isDraw,
	setIsGameEnded,
	isGameEnded,
	winnerPatternParent,
	setField,
	score,
}) => {
	const motionZeroOrX = () => {
		return (
			<p
				className={`${currentPlayer === 'X' ? styles.x : currentPlayer === 'O' ? styles.zero : ''} ${styles.symbolMotion}`}
			>
				{currentPlayer}
			</p>
		);
	};

	const winner = () => {
		if (winnerPatternParent) {
			const symbolWin = field[winnerPatternParent[0]];
			return (
				<p
					className={`${symbolWin === 'X' ? styles.x : symbolWin === 'O' ? styles.zero : ''} ${styles.symbolMotion}`}
				>
					{symbolWin}
				</p>
			);
		} else {
			return null;
		}
	};

	const handleClickStartAgain = () => {
		setIsDraw(false);
		setIsGameEnded(false);
		setField(['', '', '', '', '', '', '', '', '']);
		setCurrentPlayer('X');
	};

	const scoreX = () => {
		return `${score.X.win}/${score.X.lose}/${score.X.draw}`;
	};

	const scoreO = () => {
		return `${score.O.win}/${score.O.lose}/${score.O.draw}`;
	};
	return (
		<>
			<InformationLayout
				arrayStateInformation={arrayStateInformation}
				motionZeroOrX={motionZeroOrX}
				isGameEnded={isGameEnded}
				winner={winner}
				isDraw={isDraw}
				handleClickStartAgain={handleClickStartAgain}
				scoreX={scoreX}
				scoreO={scoreO}
			/>
		</>
	);
};

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

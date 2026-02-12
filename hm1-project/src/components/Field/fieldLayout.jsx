import styles from './field.module.css';

export const FieldLayout = ({
	field,
	handleClickOnCellOfField,
	currentPlayer,
	symbolOnField,
	isGameEnded,
	isDraw,
	winnerPatternParent,
}) => {
	return (
		<>
			<div className={styles.field}>
				{field.map((cell, index) => (
					<button
						key={index}
						className={`
							${isGameEnded && winnerPatternParent && winnerPatternParent?.includes(index) ? styles.winner : ''}
							${styles.cell}
							${currentPlayer === 'X' && !isGameEnded ? styles.buttonX : ''}
            				${currentPlayer === 'O' && !isGameEnded ? styles.buttonZero : ''}

							`}
						onClick={() => handleClickOnCellOfField(index)}
						disabled={isGameEnded || isDraw}
					>
						{symbolOnField(cell)}
					</button>
				))}
			</div>
		</>
	);
};

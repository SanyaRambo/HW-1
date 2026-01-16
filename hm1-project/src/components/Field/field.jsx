import PropTypes from 'prop-types';
import styles from './field.module.css';

export const Field = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	WIN_PATTERNS,
	setIsGameEnded,
	setIsDraw,
	setWinnerPatternParent,
	winnerPatternParent,
	isDraw,
	isGameEnded,
	setScore,
}) => {
	const handleClickOnCellOfField = (index) => {
		const newField = [...field];
		if (field[index] === '') {
			newField.splice(index, 1, currentPlayer);
			setField(newField);
			setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
		}

		const winnerPattern = WIN_PATTERNS.find((pattern) => {
			const firstValue = newField[pattern[0]];
			return (
				firstValue !== '' &&
				pattern.every((index) => {
					return (
						(newField[index] !== '' &&
							newField[index] === newField[pattern[0]]) ||
						null
					);
				})
			);
		});

		setWinnerPatternParent(winnerPattern === undefined ? null : winnerPattern);

		if (winnerPattern) {
			const symbolWin = newField[winnerPattern[0]];
			setIsGameEnded(true);
			if (symbolWin === 'X') {
				setScore((scor) => ({
					...scor,
					X: { ...scor.X, win: scor.X.win + 1 },
					O: { ...scor.O, lose: scor.O.lose + 1 },
				}));
			} else if (symbolWin === 'O') {
				setScore((scor) => ({
					...scor,
					O: { ...scor.O, win: scor.O.win + 1 },
					X: { ...scor.X, lose: scor.X.lose + 1 },
				}));
			}
		} else if (
			newField.every((cell) => {
				return cell !== '';
			})
		) {
			setIsGameEnded(true);
			setIsDraw(true);
			setWinnerPatternParent(null);

			setScore((scor) => ({
				...scor,
				X: { ...scor.X, draw: scor.X.draw + 1 },
				O: { ...scor.O, draw: scor.O.draw + 1 },
			}));
		}
	};

	const symbolOnField = (cell) => {
		return (
			<p
				className={`${cell === 'X' ? styles.x : cell === 'O' ? styles.zero : ''} ${styles.symbolMotion}`}
			>
				{cell}
			</p>
		);
	};

	return (
		<>
			<FieldLayout
				field={field}
				setField={setField}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
				handleClickOnCellOfField={handleClickOnCellOfField}
				symbolOnField={symbolOnField}
				winnerPatternParent={winnerPatternParent}
			/>
		</>
	);
};

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
						className={`${styles.cell} ${currentPlayer === 'X' ? styles.buttonX : currentPlayer === 'O' ? styles.buttonZero : ''} ${isGameEnded && winnerPatternParent && winnerPatternParent?.includes(index) ? styles.winner : ''}`}
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

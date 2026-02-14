import { FieldLayout } from './fieldLayout';
import styles from './field.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectWIN_PATTERNS,
	selectWinnerPatternParent,
	selectCurrentPlayer,
	selectField,
	selectIsGameEnded,
	selectIsDraw,
} from '../../selectors';
import {
	DETERMINE_THE_WINNING_PATTERN,
	SET_CURRENT_PLAYER,
	SET_FIELD,
	SET_SCORE,
	SET_STATUS_ENDING_GAME,
	SET_STATUS_DRAWING_GAME,
} from '../../actions';

export const Field = () => {
	const dispatch = useDispatch();
	const WIN_PATTERNS = useSelector(selectWIN_PATTERNS);
	const winnerPatternParent = useSelector(selectWinnerPatternParent);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const field = useSelector(selectField);
	const isGameEnded = useSelector(selectIsGameEnded);
	const isDraw = useSelector(selectIsDraw);

	const handleClickOnCellOfField = (index) => {
		const newField = [...field];
		if (field[index] === '') {
			newField.splice(index, 1, currentPlayer);
			dispatch(SET_CURRENT_PLAYER(currentPlayer));
			dispatch(SET_FIELD(newField));
			console.log(field);
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

		dispatch(DETERMINE_THE_WINNING_PATTERN(winnerPattern));

		if (winnerPattern) {
			const symbolWin = newField[winnerPattern[0]];
			dispatch(SET_STATUS_ENDING_GAME(true));
			dispatch(SET_SCORE(symbolWin));
		} else if (
			newField.every((cell) => {
				return cell !== '';
			})
		) {
			dispatch(SET_STATUS_ENDING_GAME(true));
			dispatch(SET_STATUS_DRAWING_GAME(true));
			dispatch(DETERMINE_THE_WINNING_PATTERN(null));
			dispatch(SET_SCORE(null));
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
				isGameEnded={isGameEnded}
				isDraw={isDraw}
				handleClickOnCellOfField={handleClickOnCellOfField}
				symbolOnField={symbolOnField}
				winnerPatternParent={winnerPatternParent}
				currentPlayer={currentPlayer}
			/>
		</>
	);
};

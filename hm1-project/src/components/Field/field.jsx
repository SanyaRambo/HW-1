import { FieldLayout } from './fieldLayout';
import styles from './field.module.css';
import { store } from '../../store';
import { useEffect, useState } from 'react';

export const Field = () => {
	const { getState, dispatch, subscribe } = store;
	const [state, setState] = useState(getState());

	useEffect(() => {
		const listener = () => {
			setState(getState());
		};

		const unsubscribe = subscribe(listener);

		return unsubscribe;
	}, []);

	const handleClickOnCellOfField = (index) => {
		const newField = [...state.field];
		if (state.field[index] === '') {
			newField.splice(index, 1, state.currentPlayer);
			dispatch({ type: 'SET_CURRENT_PLAYER', payload: state.currentPlayer });
			dispatch({ type: 'SET_FIELD', payload: newField });
		}

		const winnerPattern = state.WIN_PATTERNS.find((pattern) => {
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

		dispatch({
			type: 'DETERMINE_THE_WINNING_PATTERN',
			payload: winnerPattern === undefined ? null : winnerPattern,
		});

		if (winnerPattern) {
			const symbolWin = newField[winnerPattern[0]];
			dispatch({ type: 'SET_STATUS_ENDING_GAME', payload: true });
			if (symbolWin === 'X') {
				dispatch({
					type: 'SET_SCORE',
					payload: {
						X: { ...state.score.X, win: state.score.X.win + 1 },
						O: { ...state.score.O, lose: state.score.O.lose + 1 },
					},
				});
			} else if (symbolWin === 'O') {
				dispatch({
					type: 'SET_SCORE',
					payload: {
						X: { ...state.score.X, lose: state.score.X.lose + 1 },
						O: { ...state.score.O, win: state.score.O.win + 1 },
					},
				});
			}
		} else if (
			newField.every((cell) => {
				return cell !== '';
			})
		) {
			dispatch({ type: 'SET_STATUS_ENDING_GAME', payload: true });
			dispatch({ type: 'SET_STATUS_DRAWING_GAME', payload: true });
			dispatch({ type: 'DETERMINE_THE_WINNING_PATTERN', payload: null });
			dispatch({
				type: 'SET_SCORE',
				payload: {
					X: { ...state.score.X, draw: state.score.X.draw + 1 },
					O: { ...state.score.O, draw: state.score.O.draw + 1 },
				},
			});
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
				field={state.field}
				isGameEnded={state.isGameEnded}
				isDraw={state.isDraw}
				handleClickOnCellOfField={handleClickOnCellOfField}
				symbolOnField={symbolOnField}
				winnerPatternParent={state.winnerPatternParent}
				currentPlayer={state.currentPlayer}
			/>
		</>
	);
};

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
	}, [getState, subscribe]);

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
			payload: winnerPattern
		});

		if (winnerPattern) {
			const symbolWin = newField[winnerPattern[0]];
			dispatch({ type: 'SET_STATUS_ENDING_GAME', payload: true });
			dispatch({ type: 'SET_SCORE', payload: { winner: symbolWin } });
		} else if (
			newField.every((cell) => {
				return cell !== '';
			})
		) {
			dispatch({ type: 'SET_STATUS_ENDING_GAME', payload: true });
			dispatch({ type: 'SET_STATUS_DRAWING_GAME', payload: true });
			dispatch({ type: 'DETERMINE_THE_WINNING_PATTERN', payload: null });
			dispatch({ type: 'SET_SCORE', payload: { winner: null } });
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

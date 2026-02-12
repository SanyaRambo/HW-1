import styles from './information.module.css';
import { InformationLayout } from './inforamationLayout';
import { store } from '../../store';
import { useEffect, useState } from 'react';

export const Information = () => {
	const {getState, dispatch, subscribe} = store;
	const [state, setState] = useState(getState())

	useEffect(() => {
		const listener = () => {
			setState(getState())
		}

		const unsubscribe = subscribe(listener)

		return unsubscribe
	}, [])

	const motionZeroOrX = () => {
		return (
			<p
				className={`${state.currentPlayer === 'X' ? styles.x : state.currentPlayer === 'O' ? styles.zero : ''} ${styles.symbolMotion}`}
			>
				{state.currentPlayer}
			</p>
		);
	};

	const winner = () => {
		if (state.winnerPatternParent) {
			const symbolWin = state.field[state.winnerPatternParent[0]];
			console.log(symbolWin)
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

	console.log(winner())

	const handleClickStartAgain = () => {
		dispatch({ type: 'RESTART_GAME'});

	};


	const scoreX = () => {
		return `${state.score.X.win}/${state.score.X.lose}/${state.score.X.draw}`;
	};

	const scoreO = () => {
		return `${state.score.O.win}/${state.score.O.lose}/${state.score.O.draw}`;
	};

	console.log('ИКС', state.score.X,'Нолик',state.score.O)


	return (
		<>
			<InformationLayout
				motionZeroOrX={motionZeroOrX}
				isGameEnded={state.isGameEnded}
				winner={winner}
				isDraw={state.isDraw}
				handleClickStartAgain={handleClickStartAgain}
				scoreX={scoreX}
				scoreO={scoreO}
			/>
		</>
	);
};


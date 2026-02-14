import styles from './information.module.css';
import { InformationLayout } from './inforamationLayout';
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentPlayer, selectField, selectIsDraw, selectIsGameEnded, selectScore, selectWinnerPatternParent } from '../../selectors';
import { RESET_GAME } from '../../actions';

export const Information = () => {
	const dispatch = useDispatch()
	const winnerPatternParent = useSelector(selectWinnerPatternParent)
	const currentPlayer = useSelector(selectCurrentPlayer)
	const field = useSelector(selectField)
	const score = useSelector(selectScore)
	const isGameEnded = useSelector(selectIsGameEnded)
	const isDraw = useSelector(selectIsDraw)

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
		dispatch(RESET_GAME());

	};


	const scoreX = () => {
		return `${score.X.win}/${score.X.lose}/${score.X.draw}`;
	};

	const scoreO = () => {
		return `${score.O.win}/${score.O.lose}/${score.O.draw}`;
	};

	console.log('ИКС', score.X,'Нолик',score.O)


	return (
		<>
			<InformationLayout
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


import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './game.module.css';
import { Information, Field } from './components';

const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [winnerPatternParent, setWinnerPatternParent] = useState([]);
	const [score, setScore] = useState({
		X: { win: 0, lose: 0, draw: 0 },
		O: { win: 0, lose: 0, draw: 0 },
	});

	const arrayStateInformation = {
		currentPlayer,
		setCurrentPlayer,
		isGameEnded,
		setIsGameEnded,
		isDraw,
		setIsDraw,
		winnerPatternParent,
		setWinnerPatternParent,
		score,
		setScore,
	};

	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8], // Варианты побед по горизонтали
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8], // Варианты побед по вертикали
		[0, 4, 8],
		[2, 4, 6], // Варианты побед по диагонали
	];

	return (
		<>
			<GameLayout
				field={field}
				setField={setField}
				arrayStateInformation={arrayStateInformation}
				WIN_PATTERNS={WIN_PATTERNS}
			/>
		</>
	);
};

export default Game;

export const GameLayout = ({ field, setField, arrayStateInformation, WIN_PATTERNS }) => {
	return (
		<>
			<div className={styles.cloudTop}></div>
			<h1 className={styles.TTT}>TIC TAC TOE</h1>
			<div className={styles.game}>
				<div className={styles.windowOfGame}>
					<Information
						{...arrayStateInformation}
						WIN_PATTERNS={WIN_PATTERNS}
						field={field}
						setField={setField}
					/>
					<Field
						field={field}
						setField={setField}
						{...arrayStateInformation}
						WIN_PATTERNS={WIN_PATTERNS}
					/>
				</div>
			</div>
		</>
	);
};

const initialState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	WIN_PATTERNS: [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	],
	winnerPatternParent: [],
	field: ['', '', '', '', '', '', '', '', ''],
	score: {
		X: { win: 0, lose: 0, draw: 0 },
		O: { win: 0, lose: 0, draw: 0 },
	},
};

export const gameReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_FIELD': {
			return { ...state, field: payload };
		}
		case 'SET_CURRENT_PLAYER':
			return { ...state, currentPlayer: payload === 'X' ? 'O' : 'X' };

		case 'SET_STATUS_ENDING_GAME': {
			return { ...state, isGameEnded: payload };
		}
		case 'SET_STATUS_DRAWING_GAME': {
			return { ...state, isDraw: payload };
		}
		case 'RESTART_GAME':
			return { ...initialState, score: state.score };
		case 'DETERMINE_THE_WINNING_PATTERN':
			return {
				...state,
				winnerPatternParent: payload === undefined ? null : payload,
			};
		case 'SET_SCORE': {
			const { winner } = payload;
			const newScore = { ...state.score };

			if (winner === 'X') {
				newScore.X.win += 1;
				newScore.O.lose += 1;
			} else if (winner === 'O') {
				newScore.O.win += 1;
				newScore.X.lose += 1;
			} else if (winner === null) {
				newScore.X.draw += 1;
				newScore.O.draw += 1;
			}

			return { ...state, score: newScore };
		}
		default:
			return state;
	}
};

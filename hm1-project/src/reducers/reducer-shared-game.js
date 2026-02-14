const initialState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	winnerPatternParent: [],
};

export const sharedReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_CURRENT_PLAYER':
			return { ...state, currentPlayer: payload === 'X' ? 'O' : 'X' };

		case 'SET_STATUS_ENDING_GAME': {
			return { ...state, isGameEnded: payload };
		}
		case 'SET_STATUS_DRAWING_GAME': {
			return { ...state, isDraw: payload };
		}
		case 'RESET_GAME':
			return { ...initialState};
		case 'DETERMINE_THE_WINNING_PATTERN':
			return {
				...state,
				winnerPatternParent: payload === undefined ? null : payload,
			};
		default:
			return state;
	}
};

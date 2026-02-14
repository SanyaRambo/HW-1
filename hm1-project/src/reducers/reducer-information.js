const initialState = {
	score: {
		X: { win: 0, lose: 0, draw: 0 },
		O: { win: 0, lose: 0, draw: 0 },
	},
};

export const informationReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_SCORE': {
			const winner = payload;
			const newScore = {
				X: { ...state.score.X },
				O: { ...state.score.O },
			};
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
		case 'RESET_GAME':
			return {
				...initialState,
				score: state.score,
			};
		default:
			return state;
	}
};

import { useState } from 'react';

const initialState = {
	email: '',
	password: '',
	passwordReplay: '',
};

export const useStore = () => {
	const [state, setState] = useState(initialState);

	return {
		getState: () => state,
		updateState: (fieldName, newValue) => {
			setState({ ...state, [fieldName]: newValue });
		},
		statusState: (email, password, passwordReplay) => {
			if (email !== '' && password.length >= 3 && passwordReplay.length >= 3) {
				return true;
			}
		},
	};
};

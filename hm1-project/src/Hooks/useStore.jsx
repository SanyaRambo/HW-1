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
			if (
				/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) &&
				password.length >= 3 &&
				passwordReplay.length >= 3 &&
				password === passwordReplay &&
				/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password) &&
				/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(passwordReplay)
			) {
				return true;
			}
		},
	};
};

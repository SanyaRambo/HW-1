export const onEmailChange = ({ target }, updateState, setLoginError) => {
	updateState(target.name, target.value);
	setLoginError(null);
};

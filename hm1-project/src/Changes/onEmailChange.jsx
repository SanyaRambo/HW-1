export const onEmailChange = ({ target }, updateState, setLoginError) => {
	updateState(target.name, target.value);
	let newError = null;
	setLoginError(newError);
};

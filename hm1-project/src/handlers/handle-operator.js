export const handleOperator = (state, label) => {
	const {
		setFlag,
		setOperand1,
		setOperator,
		setOperand2,
		operand1,
		operator,
		operand2,
	} = state;
	const operatorButton = label;

	if (operand1 !== '' && operatorButton !== '=') {
		setOperator(operatorButton);
	}

	if (operatorButton === 'С' && operand1 !== '') {
		setOperand1('0');
		setOperand2('');
		setOperator('');
	}

	if (
		operand1 !== '' &&
		operatorButton === '=' &&
		operand2 !== '' &&
		operator === '+'
	) {
		setOperator(operator);
		setOperand1(String(Number(operand1) + Number(operand2)));
		setOperand2('');
		setOperator('');
		setFlag(true);
	} else if (
		operand1 !== '' &&
		operatorButton === '=' &&
		operand2 !== '' &&
		operator === '-'
	) {
		setOperator(operator);
		setOperand1(String(Number(operand1) - Number(operand2)));
		setOperand2('');
		setOperator('');
		setFlag(true);
	} else if (	operand1 !== '' &&
		operatorButton === '=' &&
		operand2 !== '' &&
		operator === '*'){
			setOperator(operator);
		setOperand1(String(Number(operand1) * Number(operand2)));
		setOperand2('');
		setOperator('');
		setFlag(true);
	} else if (	operand1 !== '' &&
		operatorButton === '=' &&
		operand2 !== '' &&
		operator === '/'){
			setOperator(operator);
		setOperand1(String(Number(operand1) / Number(operand2)));
		setOperand2('');
		setOperator('');
		setFlag(true);
	} else {
		setFlag(false);
	}
};

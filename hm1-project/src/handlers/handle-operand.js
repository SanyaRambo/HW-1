export const handleOperandButton = (state, label) => {
	const { setFlag, setOperand1, setOperand2, operand1, operator, operand2 } = state;
	const numberButton = label;

	if (operator === '') {
		if (operand1 === '0') {
			setOperand1(numberButton);
		} else {
			setOperand1(operand1 + numberButton);
		}
	} else if (operand2 === '0') {
		setOperand2(numberButton);
	} else {
		setOperand2(operand2 + numberButton);
	}
	setFlag(false);
};

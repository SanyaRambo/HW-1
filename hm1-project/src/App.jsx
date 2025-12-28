import { useState } from 'react';
import styles from './app.module.css';

function App() {
	const [operand1, setOperand1] = useState('0');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [flag, setFlag] = useState(false);

	const output = operand1 + operator + operand2;

	const nums = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
	const operatBtn = ['+', '-', '=', 'С'];

	const hundleOperandButton = (btnValue) => {
		const numberButton = btnValue;

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
	};

	const hundleOperator = (btnValue) => {
		const operatorButton = btnValue;

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
			setOperand1(Number(operand1) + Number(operand2));
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
			setOperand1(Number(operand1) - Number(operand2));
			setOperand2('');
			setOperator('');
			setFlag(true);
		} else {
			setFlag(false);
		}

		console.log('Временный знак', operatorButton, 'Состояние', operator);
	};

	return (
		<>
			<h1>CALCULATOR</h1>
			<div
				className={`${flag ? styles.expressionResult : styles.expressionNotResult} ${styles.expression} `}
			>
				<output>{output}</output>
			</div>
			<div className={styles.calc}>
				<div className={styles.calculatorNum}>
					{nums.map((btn) => (
						<button
							onClick={() => hundleOperandButton(btn)}
							value={btn}
							key={btn}
						>
							{btn}
						</button>
					))}
				</div>
				<div className={styles.calculatorOp}>
					{operatBtn.map((opBtn) => (
						<button
							className={styles.opAndRes}
							onClick={() => hundleOperator(opBtn)}
							value={opBtn}
							key={opBtn + 0}
						>
							{opBtn}
						</button>
					))}
				</div>
			</div>
		</>
	);
}

export default App;

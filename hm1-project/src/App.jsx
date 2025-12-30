import { useState } from 'react';
import styles from './app.module.css';
import { getButtons } from './buttons'


function App() {
	const [operand1, setOperand1] = useState('0');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [flag, setFlag] = useState(false);

	const state = {
		operand1,
		setOperand1,
		operator,
		setOperator,
		operand2,
		setOperand2,
		flag,
		setFlag,
	};

	const buttons = getButtons(state)

	const output = operand1 + operator + operand2;


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
					{buttons.map(({ label, group, id, handler }) =>
						group === 'nums' ? (
							<button className={styles.btnNum}
							onClick={() => handler(label)} value={label} key={id}>
								{label}
							</button>
						) : null,
					)}
				</div>
				<div className={styles.calculatorOp}>
					{buttons.map(({ label, group, id, handler }) =>
						group === 'operBtn' ? (
							<button
								className={`${styles.opAndRes} ${label === '=' || label === 'С' ? styles.resetAndResult : null}`}
								onClick={() => handler(label)}
								value={label}
								key={id + 0}
							>
								{label}
							</button>
						) : null,
					)}
				</div>
			</div>
		</>
	);
}

export default App;

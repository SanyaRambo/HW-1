import { useState } from 'react';
import styles from './app.module.css';

function App() {
	const [operand1] = useState('');
	const [operator] = useState('');
	const [operand2] = useState('');


	const nums = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '+', '-', '=', 'С']

	const operators = (btn) => {
		if (['+', '-', '='].includes(btn)) {
			return styles.arithmeticOperators
		}
		if (['С'].includes(btn)) {
			return styles.reset
		}
	}



	return (
		<>
			<h1>CALCULATOR</h1>
			<output >1+1=1</output>
			<div className={styles.calculator}>
			{nums.map((btn) => (
				<button className={operators(btn)}>{btn}</button>
			))}
			</div>

		</>
	);
}

export default App;

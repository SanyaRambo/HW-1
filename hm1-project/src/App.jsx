import { useState } from 'react';
import styles from './app.module.css';

function App() {
	const [operand1] = useState('');
	const [operator] = useState('');
	const [operand2] = useState('');

	const expression = operand1 + operator + operand2

	const nums = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '+', '-', '=', 'С']

	const operators = (btn) => {
		if (['+', '-', '='].includes(btn)) {
			return styles.arithmeticOperators
		}
		if (['С'].includes(btn)) {
			return styles.reset
		}
		if (['-'].includes(btn)) {
			return styles.arithmeticMinus
		}
	}

	const hundleClickClc = () => {
		
	}



	return (
		<>
			<h1>CALCULATOR</h1>
			<span>{expression}</span>
			<div className={styles.calculator}>
			{nums.map((btn) => (
				<button className={operators(btn)}onClick={hundleClickClc}>{btn}</button>
			))}
			</div>
		</>
	);
}

export default App;

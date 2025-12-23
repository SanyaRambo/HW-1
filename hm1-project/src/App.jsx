import { useState } from 'react';
import styles from './app.module.css';

function App() {
	const [number, setNumber] = useState('');

	const onChange = (event) => {
		setNumber(event.target.value.trim());
	};

	const onClick = (event) => {
		const value = event.target.closest('button');
		console.log(value);
		if (value === null) {
			return;
		}

		try {
		if (value.textContent === '=') {

			const result = Function(`'use strict'; return (${number});`)();
			setNumber(String(result))
			return;
		}

		if (value.textContent === 'С') {
			setNumber('')
			return
		}

	} catch {
		setNumber('Ошибка')
		return
	}
		setNumber(number + value.textContent);
	}

	console.log(number);
	return (
		<>
			<h1>CALCULATOR</h1>
			<input
				type="text"
				value={number}
				placeholder="0"
				onChange={onChange}
				className={styles.input}
				style={{
					fontSize:
						number.length <= 13
							? '50px'
							: number.length <= 28
								? '25px'
								: number.length <= 45
									? '15px'
									: '10px',
				}}
			/>
			<table className={styles.calculator} onClick={onClick}>
				<tbody>
					<tr>
						<td>
							<button>1</button>
						</td>
						<td>
							<button>2</button>
						</td>
						<td>
							<button>3</button>
						</td>
						<td>
							<button
								className={`${styles.arithmeticOperators} ${styles.arithmeticMinus}`}
							>
								+
							</button>
						</td>
					</tr>
					<tr>
						<td>
							<button>4</button>
						</td>
						<td>
							<button>5</button>
						</td>
						<td>
							<button>6</button>
						</td>
						<td>
							<button
								className={`${styles.arithmeticOperators} ${styles.arithmeticMinus}`}
							>
								-
							</button>
						</td>
					</tr>
					<tr>
						<td>
							<button>7</button>
						</td>
						<td>
							<button>8</button>
						</td>
						<td>
							<button>9</button>
						</td>
						<td>
							<button className={styles.arithmeticOperators}>=</button>
						</td>
					</tr>
					<tr>
						<td></td>
						<td>
							<button>0</button>
						</td>
						<td></td>
						<td>
							<button className={styles.reset}>С</button>
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}

export default App;

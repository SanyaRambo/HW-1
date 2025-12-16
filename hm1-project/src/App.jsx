import { useState } from 'react';
import styles from './app.module.css';
import moment from 'moment';

function App() {
	const [value, setValue] = useState('');

	const [list, setList] = useState([]);

	const [error, setError] = useState('');

	let isValueVaild = value.length >= 3;

	const onInputButtonClick = () => {
		const promptValue = prompt();
		if (promptValue.length < 3) {
			setError('Введенное значение должно содержать минимум 3 символа');
		} else {
			setValue(promptValue);
			setError('');
		}
	};

	const onAddButtonClick = () => {
		const id = Date.now();
		const date = moment().format('DD.MM.YY HH:mm:ss');
		if (value.length >= 3) {
			const updatedList = [...list, { id, value, date }];
			setList(updatedList);
			setError('');
			setValue('');
		}
	};

	return (
		<>
			<div className={styles.app}>
				<h1 className={styles.pageHeading}>Ввод значения</h1>
				<p className={styles.noMarginText}>
					Текущее значение <code>value</code>: "
					<output className={styles.currentValue}>{value}</output>"
				</p>
				{error !== '' && <div className={styles.error}>{error}</div>}
				<div className={styles.buttonsContainer}>
					<button className={styles.button} onClick={onInputButtonClick}>
						Ввести новое
					</button>
					<button
						className={styles.button}
						disabled={!isValueVaild}
						onClick={onAddButtonClick}
					>
						Добавить в список
					</button>
				</div>
				<div className={styles.listContainer}>
					<h2 className={styles.listHeading}>Список:</h2>
					{list.length === 0 ? (
						<p className={styles.noMarginText}>Нет добавленных элементов</p>
					) : (
						<ul className={styles.list}>
							{list.map(({ id, value, date }) => (
								<li className={styles.listItem} key={id}>
									{value} | {date}
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</>
	);
}

export default App;

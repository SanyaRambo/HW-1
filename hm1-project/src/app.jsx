import styles from './app.module.css';
import data from './data.json';
import { useState } from 'react';

export const App = () => {
	// Состояния
	const [steps, setSteps] = useState(data);

	const [activeindex, setActiveIndex] = useState(0);

	// Обработичик события по Click
	const forwardClick = () => {
		if (activeindex !== 6) {
			setActiveIndex(activeindex + 1);
		}
		if (activeindex === 6) {
			setActiveIndex(0);
		}
	};

	const backClick = () => {
		if (activeindex !== 0) {
			setActiveIndex(activeindex - 1);
		}
	};

	const startOverClick = (event) => {
		const ulSteps = event.target;
		const getButtonStep = ulSteps.closest('button');
		const getIndexStep = steps.findIndex((step) => {
			if (getButtonStep !== null) {
				return step.id == getButtonStep.id;
			}
		});

		if (getIndexStep === -1) {
			return null;
		}
		setActiveIndex(getIndexStep);
	};

	// Флаги активного индекса для первого step и последнего step
	let flagFirstStep;
	if (activeindex == 0) {
		flagFirstStep = true;
	} else {
		flagFirstStep = false;
	}
	console.log('Флаг для первого шага', flagFirstStep);

	let flagLastStep;
	if (activeindex == 6) {
		flagLastStep = true;
	} else {
		flagLastStep = false;
	}
	console.log('Флаг для воторого шага', flagLastStep);

	// Сравнение активого индекса и индекса массива, для вывода контента
	const activeIndexContent = steps.find((content, index) => {
		return index == activeindex;
	});

	// Вынесение разметки за return
	const listItemStep = steps.map(({ id, title }, index) =>
		index <= activeindex ? (
			<li
				className={`${styles['steps-item']} ${styles.done} ${
					index == activeindex ? styles.active : ''
				}`}
				key={id}
			>
				<button className={styles['steps-item-button']} id={id}>
					{parseInt(id)}
				</button>
				{title}
			</li>
		) : (
			<li className={`${styles['steps-item']}`} key={id}>
				<button className={styles['steps-item-button']} id={id}>
					{parseInt(id)}
				</button>
				{title}
			</li>
		),
	);

	console.log(activeIndexContent.content);
	console.log('Шаги вперёд, назад и выборочно', activeindex);

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{activeIndexContent.content}
					</div>

					<ul className={styles['steps-list']} onClick={startOverClick}>
						{listItemStep}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							onClick={backClick}
							onKeyDown={backClick}
							disabled={flagFirstStep}
						>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={forwardClick}
							onKeyDown={forwardClick}
						>
							{flagLastStep ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

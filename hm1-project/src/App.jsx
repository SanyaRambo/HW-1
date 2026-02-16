import styles from './app.module.css';
import { FormHeader } from './components/formHeader';
import { FormList } from './components/formList';
import { Button } from './components/buttons/button';
import { useFetchTodosData } from './api-request/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodos } from './selectors';
import { SORT_TODOS } from './actions';

const App = () => {
	useFetchTodosData();

	const todos = useSelector(selectTodos);

	const dispatch = useDispatch();

	const handlerClickSort = () => {
		const sortedTodos = [...todos].sort((a, b) =>
			a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
		);
		dispatch(SORT_TODOS(sortedTodos));
	};

	return (
		<>
			<div>
				<div className={styles.windowTodos}>
					<div className={styles.containerHeader}>
						<h1 className={styles.headerTodos}> Todos | Задачи </h1>
						<Button
							type="button"
							style={styles.sortListTodos}
							onClick={handlerClickSort}
						>
							Сортировать ▤
						</Button>
					</div>
					<FormHeader />
					<FormList />
				</div>
			</div>
		</>
	);
};

export default App;

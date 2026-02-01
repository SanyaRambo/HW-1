import PropTypes from "prop-types";
import { useState, useEffect } from "react"
import styles from "./app.module.css";


const App = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
		.then((todos) => todos.json())
		.then((todos) => {
			setTodos(todos)
			console.log(todos)
		})
	}, [])

	return (
		<>
		<div>
			<ul>
				{ todos.map(({id, title}) => (
					<li key={id} className={styles.listTodo}>{title}</li>
			))}
			</ul>

		</div>
		</>
	)
};

export default App


import PropTypes from 'prop-types';
import { User, Headlines } from './components'
import reactLogo from './react.svg';
import styles from './app.module.css';

const getUsersFromServer = () => ({
	name: "Михаил",
	age: 19,
	email: "mimimishka@mail.ru",
	telephone: "8-999-999-99-99",
})

function App() {

	const user = getUsersFromServer()

	return (
		<>
			<div>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className={`${styles['logo']} ${styles['react']}`} alt="React logo" />
				</a>
			</div>
			<Headlines color={'white'} filter={'drop-shadow(0 0 20px #ffffffff)'}>Приложение:</Headlines>
			<div>Разная информация о приложении:</div>
			<User {...user}/>

		</>
	);
}

export default App;

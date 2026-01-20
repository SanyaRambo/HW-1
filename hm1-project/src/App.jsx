import PropTypes from "prop-types";
import { useState } from "react"
import styles from "./app.module.css";


const App = () => {

	const [value, setValue] = useState('')

	return (
		<>
		<h1>Контролируемые и неконтролируемые поля</h1>
		<div>
			<input type="text" value={value} onChange={({target}) => setValue(target.value)} className={styles.inputOne} />
		</div>
		</>
	)
};

export default App


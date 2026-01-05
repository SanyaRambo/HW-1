import { useState } from "react";
import reactLogo from "./assets/react.svg";
import styles from "./app.module.css";

function App() {

	return (
		<>
			<div>
				<a href="https://react.dev" target="_blank">
					<img
						src={reactLogo}
						className={styles["logo"]}
						alt="React logo"
						/>
						</a>
			</div>
			<label>Приложение:</label>
			<div>Информация о приложении:</div>
	</>
	);
}

export default App;

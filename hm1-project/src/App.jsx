import PropTypes from "prop-types";
import { useState } from "react"
import "./App.css";


const Stateless = ({a, b, setA, setB, sum}) => {
	return (
		<>
		<div>
			Сумма a: {a}
		</div>
		<button onClick={() => (setA(a + 1))}>Прибавить к "a:{a}" +1</button>
		<div>
			Сумма b: {b}
		</div>
		<button onClick={() => (setB(b + 1))}>Прибавить к "b:{b}" +1</button>
		<div>
			Сумма a и b: {sum}
		</div>
		</>
	)
}



export const App = () => {
	const [a, setA] = useState(0);
	const [b, setB] = useState(0);

	const sum = a + b

	console.log(sum)

	return (
		<>
			<Stateless a={a} setA={setA} b={b} setB={setB} sum={sum}/>
		</>
	)
};

Stateless.propTypes = {
	sum: PropTypes.string,
	a: PropTypes.number,
	b: PropTypes.number,
	setA: PropTypes.number,
	setB: PropTypes.number,
};




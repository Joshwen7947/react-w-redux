import './App.css';
// Allows us to use {} & useState inside my react application
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// React always has App function
function App() {
	// Creating a const w/ 2 Var's and setting my {}(useState) equal to my counter (0)
	// const [count, setCount] = useState(0);
	const count = useSelector((state) => state.count);
	const dispatch = useDispatch();
	// Arrow function for auto return
	const handleCount = () => {
		dispatch({ type: 'increase' });
		// Var setCount = 0, Changing setCount state & altering useState {count}.  Var count changing by 1
		// setCount(count + 1);
	};
	// Return always in React
	return (
		// Div w/ class of App always here too
		<div className="App">
			{/* Below is JSX (What appears on the page) */}
			<button onClick={handleCount}>I have been clicked {count} times</button>
		</div>
	);
}
// export it to the web basically
export default App;

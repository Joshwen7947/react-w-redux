import { createStore } from 'redux';
const initialState = {
	count: 0,
};
const counterReducer = (state = initialState, action) => {
	console.log(action); //{type: 'increase', payload:0}
	// state = {count:0}
	if (action.type === 'increase') {
		return { count: state.count + action.payload };
	} else if (action.type === 'decrease') {
		return { count: state.count - 1 };
	}
	return state;
};
// state = {count:0}

const store = createStore(counterReducer);

export default store;

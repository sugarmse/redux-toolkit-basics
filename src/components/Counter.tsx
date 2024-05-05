import { AppDispatch, RootState } from "../state/storee";
import { useDispatch, useSelector } from "react-redux";
import {
	increment,
	decrement,
	incrementByAmount,
	incrementAsync,
} from "../state/counter/counterSlice";

const Counter = () => {
	const count = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch<AppDispatch>();
	return (
		<>
			<h2>{count}</h2>
			<button onClick={() => dispatch(increment())}>Increment</button>

			<button onClick={() => dispatch(incrementByAmount(10))}>
				Increment by 10
			</button>

			<button onClick={() => dispatch(incrementAsync(10))}>
				IncrementAsync
			</button>

			<button onClick={() => dispatch(decrement())}>Decrement</button>
		</>
	);
};

export default Counter;

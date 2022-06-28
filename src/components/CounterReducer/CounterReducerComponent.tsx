import { useReducer } from "react"
import * as actions from "./actions/actions";
import { CounterState } from "./interfaces/interfaces"
import { counterReducer } from "./state/counterReducer";

const INITIAL_STATE:CounterState = {
    counter: 10,
    previous: 15,
    changes: 20
}

export const CounterReducerComponent = () => {
    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const increaseBy = (value: number) => {
        dispatch(actions.doIncrement(value));
    }
    const handleReset = () => {
        dispatch(actions.doReset());
    }
    return (
        <><div style={{ width: '500px', margin: '40px auto' }}>
            <h1>Counter Reducer</h1>
            <pre> {JSON.stringify(counterState, null, 2)}</pre>
            <button onClick={()=>increaseBy(1)}>+1</button>
            <button onClick={()=>increaseBy(5)}>+5</button>
            <button onClick={handleReset}>reset</button>
        </div>
        </>
    )
}

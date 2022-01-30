import React, { useReducer } from 'react';

const initialState = {count: 0}

const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {count: state.count+1}
        case 'DECREMENT':
            return {count: state.count-1}
        default:
            return state;
    }

}
const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <div>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
            <h1>this is Reducer count: {state.count}</h1>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</button>

        </div>
    );
};

export default Reducer;
import {createStore} from "redux";

const initialState = {
    value: 1
};

const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            ...state,
            value: state.value + 1
        };
    } else {
        return state;
    }
};

const store = createStore(reducer);

export default store;
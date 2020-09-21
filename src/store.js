import { createStore } from 'redux';

/* Пока просто заглушка */
function error(state= false, action) {
    state = action.type
    return state;
}

export let store = createStore(error);
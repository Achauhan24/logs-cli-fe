import { createReducer, createNamespacer } from '../commons/js/utils/reducer';

const initialState = {
    logs: '',
    showLogs: false,
}

const namespacer = createNamespacer("LOGS")

const reducer = createReducer(initialState, {
    
    [namespacer("SET_SHOW_LOGS")]: (state, action) => {
        return {
            ...state,
            showLogs: action.payload.value,
        }
    },
    [namespacer("SET_LOGS")]: (state, action) => {
        return {
            ...state,
            logs: action.payload.value,
        }
    },
})

export default reducer;
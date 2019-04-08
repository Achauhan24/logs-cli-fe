import { createReducer } from '../commons/js/utils/reducer';

const initialState = {
    isLoggedIn: false,
    userId: 0,
}

const reducer = createReducer(initialState, {
    "SET_LOGGED_IN": (state, action) => {
        let isLoggedIn = action.payload.value;
        let userId = isLoggedIn ? action.payload.userId : '';

        return {
            ...state,
            isLoggedIn,
            userId,
        }
    },
    "LOGOUT": (state, action) => {
        return {
            ...initialState,
        }
    },
})

export default reducer;
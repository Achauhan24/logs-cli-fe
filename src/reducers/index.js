import { combineReducers } from 'redux';
import session from './session';
import login from './login';
import logs from './logs'

const rootReducer = combineReducers({
    session,
    login,
    logs
})

export default rootReducer
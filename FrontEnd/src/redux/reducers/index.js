import login from './login';
import profile from './profile';

import {combineReducers} from 'redux'
const myReducer=combineReducers({
    login,
    profile
});
export default myReducer;
// import login from './login';
// import profile from './profile';
import quizAnswer from "./quizAnswer";
import quizQuestion from "./quizQuestion";

import { combineReducers } from "redux";
const myReducer = combineReducers({
  quizAnswer,
  quizQuestion
});
export default myReducer;

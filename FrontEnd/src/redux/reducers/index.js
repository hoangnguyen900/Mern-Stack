// import login from './login';
// import profile from './profile';
import answer from "./quizAnswer";
import question from "./quizQuestion";

import { combineReducers } from "redux";
const myReducer = combineReducers({
  answer,
  question
});
export default myReducer;

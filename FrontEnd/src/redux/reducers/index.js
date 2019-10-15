// import login from './login';
// import profile from './profile';
import questionTable from "./QuestionTable";
import question from "./Question";
import subject from "./Subject";
import login from "./Login";

import { combineReducers } from "redux";
const myReducer = combineReducers({
  question,
  questionTable,
  subject,
  login
});
export default myReducer;

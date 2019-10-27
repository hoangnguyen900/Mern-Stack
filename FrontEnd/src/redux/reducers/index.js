// import login from './login';
// import profile from './profile';
import questionTable from "./QuestionTable";
import question from "./Question";
import subject from "./Subject";
import login from "./Login";
import user from "./User";
import attempt from "./Attempt";

import { combineReducers } from "redux";
const myReducer = combineReducers({
  question,
  questionTable,
  subject,
  login,
  user,
  attempt
});
export default myReducer;

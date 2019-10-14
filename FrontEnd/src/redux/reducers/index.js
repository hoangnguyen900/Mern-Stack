// import login from './login';
// import profile from './profile';
import questionTable from "./quizQuestionTable";
import question from "./quizQuestion";
import subject from "./Subject";
import { combineReducers } from "redux";
const myReducer = combineReducers({
  question,
  questionTable,
  subject
});
export default myReducer;

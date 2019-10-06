import * as types from "../actions/actionTypes";
const initialState = [
  {
    id: 0,
    question: "",
    time: 0,
    answers: []
  }
];
const listQ = [];
let myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_QUESTION_ANSWERS:
      let newState = {};
      newState = { question: action.question, answers: action.answers };
      listQ.push(newState);

      // data.push({ question: action.question, answers: action.answers });
      // console.log("reduxQuestion", state);

      //data[data.length - 1].answers = action.answers;
      //state[state.length - 1].answers = data.answers;
      state = listQ;

      console.log("reduxQuestion", state);

      return [...state];
    default:
      return { ...state };
  }
};
export default myReducer;

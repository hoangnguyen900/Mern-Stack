import * as types from "../actions/actionTypes";
let initialState = {
  question: [
    {
      id: 0,
      question: "",
      time: 0
    }
  ]
};
let myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_QUESTION_ANSWERS:
      // question.splice(0,0)
      console.log("redux", action.question);
      return { ...action.question };
    default:
      return state;
  }
};
export default myReducer;

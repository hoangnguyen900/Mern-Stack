import * as types from "../actions/actionTypes";
let initialState = {
  answers: [
    {
      id: 0,
      question_id: 0,
      answer: "",
      is_right: false
    }
  ]
};
let myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_QUESTION_ANSWERS:
      return { ...action.state };
    default:
      return state;
  }
};
export default myReducer;

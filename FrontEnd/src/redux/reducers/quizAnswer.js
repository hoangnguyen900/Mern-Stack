import * as types from "../actions/actionTypes";
let initialState = {
  answers: [
    {
      answer: "",
      is_right: false
    }
  ]
};
let myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_ANSWER:
      return { ...action.state };
    default:
      return state;
  }
};
export default myReducer;

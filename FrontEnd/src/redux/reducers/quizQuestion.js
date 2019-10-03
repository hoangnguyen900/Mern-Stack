import * as types from "../actions/actionTypes";
let initialState = {
  answers: [
    {
      id: 0,
      question: "",
      time: 30
    }
  ]
};
let myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_QUESTION:
      return { ...action.state };
    default:
      return state;
  }
};
export default myReducer;

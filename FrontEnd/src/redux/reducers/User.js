import * as types from "../actions/actionTypes";

let initialState = {};
let myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_ANSWER_RECORD:
      return {
        ...action.data
      };
    case types.SHOW_QUESTION_TABLE:
      if (typeof action.data !== "undefined") state = { ...action.data };

      return {
        ...state
      };
    default:
      return state;
  }
};
export default myReducer;

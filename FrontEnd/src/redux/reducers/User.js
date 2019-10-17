import * as types from "../actions/actionTypes";

let initialState = {};
let myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_ANSWER_RECORD:
      return {
        ...action.data
      };

    default:
      return state;
  }
};
export default myReducer;

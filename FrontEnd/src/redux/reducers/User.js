import * as types from "../actions/actionTypes";

let initialState = {};
let myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_QUESTION_TABLE:
      if (typeof action.data !== "undefined") state = { ...action.data };

      return {
        ...state
      };

    case types.SHOW_ONE_QUESTION_TABLE:
      return {
        ...state,
        questionTable: { ...action.data },
        showQuizCode: true
      };
    case types.SHOW_USER_ATTEMPT:
      return [...action.data];
    case types.CHECK_USER_DO_QUIZ:
      state.isPlayedBefore = action.data;
      return { ...state };
    default:
      return state;
  }
};
export default myReducer;

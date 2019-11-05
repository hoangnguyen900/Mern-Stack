import * as types from "../actions/actionTypes";

let initialState = {};
let myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_QUESTION_TABLE_COMPLETED:
      state.completedQuiz = [...action.data];
      return { ...state, completedQuiz: [...action.data] };
    case types.SHOW_QUESTION_TABLE_COMPLETED:
      return { ...state };

    default:
      return state;
  }
};
export default myReducer;

import * as types from "../actions/actionTypes";
const initialState = [
  {
    subjects: []
  }
];
let myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_SUBJECT: {
      state = [...action.data];
      return [...action.data];
    }

    default:
      return { ...state };
  }
};
export default myReducer;

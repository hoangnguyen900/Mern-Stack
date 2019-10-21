import * as types from "../actions/actionTypes";
const initialState = [
  {
    questions: [
      {
        question_choices: []
      }
    ]
  }
];
let myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_QUESTION_ANSWERS: {
      state = [...action.data];
      return [...action.data];
    }
    case types.SHOW_QUESTION_AFTER_DELETE:
      state[0].questions.splice(action.index, 1);
      return { ...state };
    case types.CREATE_QUESTION_TABLE:
      return { ...action.data };
    case types.UPDATE_QUESTION_TABLE:
      state[0].questions[action.index] = {
        ...state[0].questions[action.index],
        question: action.question.question,
        time: action.question.time,
        question_choices: [...action.question_choices]
      };
      return { ...state };
    case types.UPDATE_TIME:
      state[0].questions[action.index] = {
        ...state[0].questions[action.index],
        time: action.data.time
      };
      return { ...state };
    default:
      return { ...state };
  }
};
export default myReducer;

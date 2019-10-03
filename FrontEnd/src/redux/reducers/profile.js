import * as types from "../actions/actionTypes";
let initialState = {
  display_name: "",
  display_info: "",
  phone: "",
  avatar: []
};
let myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_PROFILE:
      console.log("dataProfile: ", action.state);

      return {
        ...state,
        display_name: action.state.display_name,
        display_info: action.state.display_info,
        phone: action.state.phone,
        avatar: action.state.avatar
      };
    case types.UPDATE_PROFILE:
      console.log("dataProfileUpdate: ", action.state);
      //alert('Update successfully')
      return {
        ...action.state
      };
    default:
      return state;
  }
};
export default myReducer;

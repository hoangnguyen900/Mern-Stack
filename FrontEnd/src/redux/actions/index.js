import * as types from "./actionTypes";
import * as URLs from "./URL";

import axios from "axios";
import Swal from "sweetalert2";

export const loginSuccess = (state, token) => {
  return {
    type: types.LOGIN_SUCCESS,
    state,
    token
  };
};
export const loginFail = state => {
  return {
    type: types.LOGIN_FAIL,
    state
  };
};

export const loginAPI = state => {
  return dispatch => {
    axios({
      method: "post",
      url: URLs.LOGIN_API_URL,
      data: state
    })
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("email", state.email);

        dispatch(loginSuccess(state, res.data.token));
        Swal.fire({
          position: "top",
          type: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
          heightAuto: false
        });
      })
      .catch(er => {
        dispatch(loginFail(state));
        Swal.fire({
          type: "error",
          title: "Oops...",
          text: `Something went wrong! ${er}`,
          heightAuto: false
        });
      });
  };
};
export const signUpSuccess = state => {
  return {
    type: types.SIGN_UP_SUCCESS,
    state
  };
};
export const signUpFail = state => {
  return {
    type: types.SIGN_UP_FAIL,
    state
  };
};
export const signUpAPI = state => {
  return dispatch => {
    axios({
      method: "post",
      url: URLs.SIGN_UP_API_URL,
      data: state
    })
      .then(res => {
        console.log(res);
        dispatch(signUpSuccess(state));
        Swal.fire({
          position: "top",
          type: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
          heightAuto: false
        });
      })
      .catch(er => {
        dispatch(signUpFail(state));

        Swal.fire({
          type: "error",
          title: "Oops...",
          text: er,
          heightAuto: false
        });
      });
  };
};
export const showProfile = state => {
  return {
    type: types.SHOW_PROFILE,
    state
  };
};
export const showProfileAPI = token => {
  return dispatch => {
    axios({
      method: "post",
      url: URLs.SHOW_PROFILE_API_URL,
      headers: {
        "x-user-token": token
      }
    })
      .then(res => {
        console.log(res);
        dispatch(showProfile(res.data.data));
      })
      .catch(er => {});
  };
};
export const updateProfile = state => {
  return {
    type: types.UPDATE_PROFILE,
    state
  };
};
export const updateProfileAPI = (state, token) => {
  return dispatch => {
    axios({
      method: "post",
      url: URLs.UPDATE_PROFILE_API_URL,
      headers: {
        "x-user-token": token
      },
      data: state
    })
      .then(res => {
        console.log(res);
        dispatch(updateProfile(res.data.data));
        Swal.fire({
          position: "top",
          type: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch(er => {
        Swal.fire({
          type: "error",
          title: "Oops...",
          text: "Something went wrong!!!"
        });
      });
  };
};
export const userLogoutAPI = token => {
  return dispatch => {
    axios({
      method: "post",
      url: URLs.LOGOUT_API_URL,
      headers: {
        "x-user-token": token
      }
    })
      .then(res => {
        console.log("Logout", res);
      })
      .catch(er => {});
  };
};
///////////////////////////////////////////////

export const createAnswerAPI = (question_id, answers, question) => {
  return dispatch => {
    //add element question_id to JSON Array Object answer

    let data = answers;
    for (let i = 0; i < data.length; i++) data[i].question_id = question_id;

    axios({
      method: "post",
      url: URLs.ANSWER_API_URL,
      headers: {
        "content-type": "application/json"
      },
      data: { data }
    })
      .then(res => {
        Swal.fire({
          position: "center",
          type: "success",
          title: "Create Successfully",
          showConfirmButton: false,
          timer: 1500,
          heightAuto: false
        });
        console.log("res answers", res);
        dispatch({
          type: types.CREATE_QUESTION_ANSWERS,
          answers,
          question
        });
      })
      .catch(er => {
        console.log("er", er);
      });
  };
};

export const createQuestionAndAnswersAPI = (data, answers) => {
  return dispatch => {
    axios({
      method: "post",
      url: URLs.QUESTION_API_URL,
      headers: {
        "content-type": "application/json"
      },
      data: { data }
    })
      .then(res => {
        console.log("res question", res.data);
        let question_id = res.data.id;
        dispatch(createAnswerAPI(question_id, answers, data));
      })
      .catch(er => {
        console.log("er", er);
      });
  };
};

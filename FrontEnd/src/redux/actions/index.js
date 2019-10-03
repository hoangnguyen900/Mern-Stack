import * as types from "./actionTypes";
import * as URLs from "./URL";

import axios from "axios";
import Swal from "sweetalert2";

export const loginSuccess = (state,token) => {
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
        localStorage.setItem('token',res.data.token)
        localStorage.setItem('email',state.email)

        dispatch(loginSuccess(state,res.data.token));
        Swal.fire({
          position: 'top',
          type: 'success',
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
          heightAuto: false

        })
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
          position: 'top',
          type: 'success',
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
          heightAuto: false

        })

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
export const showProfileAPI = (token) => {
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
export const updateProfileAPI = (state,token) => {
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
          position: 'top',
          type: 'success',
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500
        })
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
export const userLogoutAPI = (token) => {
  return dispatch => {
    axios({
      method: "post",
      url: URLs.LOGOUT_API_URL,
      headers: {
        "x-user-token": token
      }
    })
      .then(res => {
        console.log('Logout',res)
      })
      .catch(er => {});
     
  };
};

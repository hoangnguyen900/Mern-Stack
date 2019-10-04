import * as types from "./actionTypes";
import * as URLs from "./URL";

import axios from "axios";
import Swal from "sweetalert2";

export const createAnswer = (question_id, answers) => {
  return dispatch => {
    //add element question_id to JSON Array Object answer
    let data = answers;
    for (let i = 0; i < data.length; i++) data[i].question_id = question_id;
    console.log(data);
    axios({
      method: "post",
      url: URLs.ANSWER_API_URL,
      headers: {
        "content-type": "application/json"
      },
      data: { data }
    })
      .then(res => {
        console.log("res answers", res);
      })
      .catch(er => {
        console.log("er", er);
      });
  };
};

export const createQuestionAPI = (data, answers) => {
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
        dispatch(createAnswer(question_id, answers));
      })
      .catch(er => {
        console.log("er", er);
      });
  };
};

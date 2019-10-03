import React from "react";
import "./Editor.scss";

<<<<<<< HEAD

//import ToggleBox from '../ToggleBox/ToggleBox';
import QuizCreatorQuestionDetail from '../QuestionDetail/QuestionDetail';
import QuizCreatorQuestionInput from "../QuestionInput/QuestionInput";
=======
import "font-awesome/css/font-awesome.min.css";
//import ToggleBox from '../ToggleBox/ToggleBox';
import { connect } from "react-redux";
import * as actions from "./../../../redux/actions/index";

>>>>>>> 600bb215107ebcee0d4194446e77047eecabe3c9
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faSave } from "@fortawesome/free-solid-svg-icons";
import CreatePopUp from "./CreatePopUp";
export default class QuizCreatorEditor extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <div className="editor">
        <div className="question-editor">
          <div className="button-group">
            <button
              onClick={this.togglePopup.bind(this)}
              className="button b-create"
            >
              <FontAwesomeIcon icon={faPlusCircle} />
              Create a new question
            </button>
            <p>Or</p>
            <button className="button b-teleport">Teleport</button>
          </div>
          <QuizCreatorQuestionDetail/>
        </div>
        <div className="quiz-info"></div>
        {this.state.showPopup ? (
          <CreatePopUp
            text="Question"
            closePopup={this.togglePopup.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}
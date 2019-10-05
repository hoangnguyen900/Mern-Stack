import React from "react";
import "./Editor.scss";

//import ToggleBox from '../ToggleBox/ToggleBox';
import QuizCreatorQuestionDetail from "../QuestionDetail/QuestionDetail";

import "font-awesome/css/font-awesome.min.css";
//import ToggleBox from '../ToggleBox/ToggleBox';
import { connect } from "react-redux";
import * as actions from "./../../../redux/actions/index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import CreatePopUp from "./CreatePopUp";
class QuizCreatorEditor extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
      data: []
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("nextprops", nextProps.question);
    this.setState({
      data: nextProps.question
    });
  }
  render() {
    let element = this.state.data.map(data => {
      return (
        <QuizCreatorQuestionDetail
          key={this.state.data.length}
          data={data}
          //index={index}
        />
      );
    });
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
          {element}
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
const mapDispatchToProps = (dispatch, props) => {
  return {
    createQuestionAndAnswersAPI: (data, answers) => {
      dispatch(actions.createQuestionAndAnswersAPI(data, answers));
    }
  };
};
const mapStateToProps = state => {
  return {
    answer: state.answer,
    question: state.question
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizCreatorEditor);

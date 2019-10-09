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
      question_table_id: 1,
      questions: [],
      table: {}
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("nextprops", nextProps.questionTable[0]);
    //if (nextProps.question === {})
    console.log("hasData", nextProps.question);

    this.setState({
      table: nextProps.questionTable[0],
      questions: nextProps.questionTable[0].questions
    });
    this.setState({
      //questions: nextProps.question
    });
  }
  componentDidMount() {
    this.props.showListQuestionAnswer(this.state.question_table_id);
  }
  render() {
    let element = this.state.questions.map((data, index) => {
      return (
        <QuizCreatorQuestionDetail
          key={index}
          data={data}
          index={index}
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
    showListQuestionAnswer: question_table_id => {
      dispatch(actions.showListQuestionAnswer(question_table_id));
    }
  };
};
const mapStateToProps = state => {
  return {
    questionTable: state.questionTable,
    question: state.question
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizCreatorEditor);

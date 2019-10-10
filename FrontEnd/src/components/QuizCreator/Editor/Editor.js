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
      //questions: [],
      table: {
        questions: []
      }
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("nextprops", nextProps);
    if (nextProps.question == null)
      this.setState({
        table: nextProps.questionTable[0]
      });
    else {
      let newTable = { ...this.state.table };
      newTable.questions.push({ ...nextProps.question });
      console.log("newTable", newTable);
    }
  }
  componentDidMount() {
    this.props.showListQuestionAnswer(this.state.question_table_id);
  }
  onClickDeleteHandler = index => {
    let question_id = this.state.table.questions[index].id;
    this.props.deleteQuestionAndAnswersAPI(question_id, index);
  };
  onClickEditHandler = () => {
    // console.log(index);
  };
  render() {
    let element = this.state.table.questions.map((data, index) => {
      return (
        <QuizCreatorQuestionDetail
          key={index}
          data={data}
          index={index}
          onClickDeleteHandler={this.onClickDeleteHandler}
          onClickEditHandler={this.onClickEditHandler}
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
    },
    deleteQuestionAndAnswersAPI: (id, index) => {
      dispatch(actions.deleteQuestionAndAnswersAPI(id, index));
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

import React from "react";
import "./Editor.scss";
//import ToggleBox from '../ToggleBox/ToggleBox';
import QuizCreatorQuestionDetail from "../QuestionDetail/QuestionDetail";

import "font-awesome/css/font-awesome.min.css";
//import ToggleBox from '../ToggleBox/ToggleBox';
import { connect } from "react-redux";
import * as actions from "./../../../redux/actions/index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faPencilAlt, faEye, faBurn, faGraduationCap, faBook, faUpload } from "@fortawesome/free-solid-svg-icons";
import CreatePopUp from "./CreatePopUp";
class QuizCreatorEditor extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopupCreate: false,
      showPopupEdit: false,
      dataEdit: {},
      question_table_id: 1,
      //questions: [],
      table: {
        questions: []
      }
    };
  }
  togglePopup = () => {
    let { showPopupCreate, showPopupEdit } = this.state;

    if (showPopupEdit === true) {
      this.setState({
        showPopupEdit: !showPopupEdit,
        dataEdit: {}
      });
    } else
      this.setState({
        showPopupCreate: !showPopupCreate
      });
  };
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.question == null)
      this.setState({
        table: nextProps.questionTable[0]
      });
    else {
      let newTable = { ...this.state.table };
      newTable.questions.push({ ...nextProps.question });
    }
  }
  componentDidMount() {
    let { question_table_id } = this.props.match.params;
    this.setState({
      question_table_id: question_table_id
    });
    this.props.showListQuestionAnswer(question_table_id);
  }
  onClickDeleteHandler = index => {
    let question_id = this.state.table.questions[index].id;
    this.props.deleteQuestionAndAnswersAPI(question_id, index);
  };
  onClickEditHandler = (index, data) => {
    this.setState({
      showPopupEdit: true,
      dataEdit: {
        index: index,
        ...data
      }
    });
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
            <button onClick={this.togglePopup} className="button b-create">
              <FontAwesomeIcon icon={faPlusCircle} />
              Create a new question
            </button>
            <p>Or</p>
            <button className="button b-teleport">Teleport</button>
          </div>
          {element}
        </div>
        <div className="quiz-info-container">
          <div className="quiz-info-edit-container">
            <div className="quiz-image-choice-overlay">
              <img className="quiz-image-choice" src={require("./images/thumbnail.jpg")} alt="quizImageChoice" />
              <div className="overlay-edit">
                <div className="overlay-text">Edit image</div>
              </div>
            </div>
            <div className="quiz-info-edit-quiz-name">
              <div className="quiz-name">
                Basic English
              </div>
              <button>
                <span><FontAwesomeIcon icon={faPencilAlt}
                  color="#FD7E14"
                  size="lg" /></span>
              </button>
            </div>
            <div className="quiz-scope-data">
              <div className="scope-public">
                <button>
                  <span>
                    <FontAwesomeIcon icon={faEye} />{/*change to faEyeSlash if private */}
                  </span>
                  Public {/** change to "private" if private */}
                </button>
              </div>

            </div>
            <hr/>
            <div className="quiz-grade">
              <div className="quiz-sm-icon"><FontAwesomeIcon icon={faGraduationCap} color="#6B6C77"/></div>
              <button>1st Grade</button>
            </div>
            <div className="quiz-subject">
              <div className="quiz-sm-icon"><FontAwesomeIcon icon={faBook} color="#6B6C77"/></div>
              <button>Physic</button>
            </div>
         
            <div className="quiz-import">
              <div className="quiz-sm-icon"><FontAwesomeIcon icon={faUpload} color="#6B6C77"/></div>
              <button>Import from file</button>
            </div>

          </div>
        </div>
        {this.state.showPopupCreate ? (
          <CreatePopUp
            index={this.state.table.questions.length + 1}
            closePopup={this.togglePopup}
            match={this.props.match}
          />
        ) : null}
        {this.state.showPopupEdit ? (
          <CreatePopUp
            index={this.state.dataEdit.index}
            closePopup={this.togglePopup}
            match={this.props.match}
            data={this.state.dataEdit}
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

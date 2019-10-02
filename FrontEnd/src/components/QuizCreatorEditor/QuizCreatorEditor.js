import React from "react";
import "./QuizCreatorEditor.scss";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import "font-awesome/css/font-awesome.min.css";
//import ToggleBox from '../ToggleBox/ToggleBox';

import QuizCreatorQuestionInput from "../QuizCreatorQuestionInput/QuizCreatorQuestionInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faSave } from "@fortawesome/free-solid-svg-icons";

class QuizCreatorEditor extends React.Component {
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
        </div>
        <div className="quiz-info"></div>
        {this.state.showPopup ? (
          <QuestionCreatePopup
            text="Question"
            closePopup={this.togglePopup.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}
const questionsArr = [1, 2, 3, 4];
class QuestionCreatePopup extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: questionsArr,
      isDisplay: "block"
    };
  }
  componentDidMount() {
    if (this.state.questions.length >= 5)
      this.setState({
        isDisplay: "none"
      });
  }
  addQuestionOnclick = () => {
    questionsArr.push(questionsArr.length + 1);

    this.setState({
      questions: questionsArr
    });
    let display = "";
    questionsArr.length < 5 ? (display = "block") : (display = "none");
    this.setState({
      isDisplay: display
    });
    console.log(this.state);
    console.log(questionsArr.length);
  };
  render() {
    let { isDisplay, questions } = this.state;
    var element = questions.map(index => {
      return <QuizCreatorQuestionInput key={index} index={index} />;
    });

    return (
      <div className="popup">
        <div className="popup_inner">
          <div className="popup-header">
            <p>
              {" "}
              <img
                src={require("./images/question.png")}
                alt="question"
                placeholder={"Type your question here.."}
              />
              {this.props.text}
            </p>
            <hr />
          </div>
          <div className="popup-body">
            <input type="text" style={{ width: "80%" }} />
            {element}

            <button
              style={{ display: isDisplay }}
              onClick={this.addQuestionOnclick}
            >
              Add another option
            </button>
            <hr />
          </div>
          <div className="popup-footer">
            <button className="b-cancel" onClick={this.props.closePopup}>
              CANCEL
            </button>
            <button className="b-save">
              <FontAwesomeIcon size="1x" icon={faSave} color="white" />
              <span>SAVE</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export { QuizCreatorEditor, QuestionCreatePopup };

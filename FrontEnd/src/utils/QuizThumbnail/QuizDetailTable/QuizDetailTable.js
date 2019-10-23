import React from "react";
import "./QuizDetailTable.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
class QuizDetailTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplay: "block"
    };
  }
  showSampleQuestion = () => {
    let { data } = this.props;
    let arr = [];
    for (let i = 0; i < 3; i++)
      if (typeof data.questions[i] !== "undefined")
        arr.push(
          <div key={i} className="sample-question">
            <div className="sample-content">
              {i + 1}. {data.questions[i].question}
            </div>
            <div className="sample-image"></div>
          </div>
        );
    return arr;
  };
  showLevel = () => {
    let { data } = this.props;
    switch (data.level) {
      case 0:
        return "Easy";
      case 1:
        return "Medium";
      case 2:
        return "Hard";
      default:
        return "N/A";
    }
  };
  showGrades = () => {
    let { data } = this.props;
    let grades = "";
    if (data.grade_begin === data.grade_end) grades = `${data.grade_begin}th`;
    else grades = `${data.grade_begin}th to ${data.grade_end}th `;
    return grades;
  };
  render() {
    let { data } = this.props;
    // render a list of question
    let arr = this.showSampleQuestion();
    let grades = this.showGrades();
    let level = this.showLevel();
    return (
      <div className="popup-quiz-detail-table">
        <div className="popup_inner-quiz-detail-table">
          <div className="popup-header-quiz-detail-table">
            <img src={require("../images/thumbnail.jpg")} alt="thumbnail" />
            <button onClick={this.props.togglePopup}>
              <FontAwesomeIcon
                icon={faTimesCircle}
                size="2x"
                color={"#60615F"}
              />
            </button>
            <div className="quiz-flat-info-quiz-detail-table">
              <div className="question-number-quiz-detail-table">
                {data.questions.length} Qs
              </div>
              <div className="play-number-quiz-detail-table">
                {data.played !== 0 ? data.played : "0"} plays
              </div>
            </div>
            <div className="quiz-name">
              <span>{data.title}</span>
            </div>
            <div className="author-container">
              <img src={require("../images/ava.png")} alt="ava" />
              <div className="author-name">{this.props.userName}</div>
              <div className="grade">
                Grades: <span> {grades}</span>
                {/*bind at 1st and 2nd */}
              </div>
            </div>
            <hr />
          </div>
          <div className="popup-body-quiz-detail-table">
            <div className="difficult-level">
              Difficult level: <span>{level}</span>
            </div>
            <h5>Sample questions</h5>
            <div className="sample-questions-container">{arr}</div>
          </div>
          <div className="popup-footer-quiz-detail-table">
            <button>Play</button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizDetailTable;

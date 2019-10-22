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
  render() {
    let { data } = this.props;
    console.log(this.props.data);
    // render a list of question
    let arr = [];
    for (let i = 0; i < 3; i++)
      if (typeof data.questions[i] !== "undefined")
        arr.push(
          <div key={i} className="sample-question">
            <div className="sample-content">
              {i + 1}. {data.questions[i].question}
            </div>
            <div className="sample-image">
              <img src={require("../images/sample.jpg")} alt="sampleImage" />
            </div>
          </div>
        );

    return (
      <div className="popup">
        <div className="popup_inner">
          <div className="popup-header">
            <img src={require("../images/thumbnail.jpg")} alt="thumbnail" />
            <button onClick={this.props.togglePopup}>
              <FontAwesomeIcon
                icon={faTimesCircle}
                size="2x"
                color={"#60615F"}
              />
            </button>
            <div className="quiz-flat-info">
              <div className="question-number">{data.questions.length} Qs</div>
              <div className="play-number">
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
                Grades: <span> 1th to 2th</span>
                {/*bind at 1st and 2nd */}
              </div>
            </div>
            <hr />
          </div>
          <div className="popup-body">
            <div className="difficult-level">
              Difficult level: <span>{data.level}</span>
            </div>
            <h5>Sample questions</h5>
            <div className="sample-questions-container">{arr}</div>
          </div>
          <div className="popup-footer">
            <button>Play</button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizDetailTable;

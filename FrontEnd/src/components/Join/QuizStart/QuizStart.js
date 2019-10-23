import React from "react";
import history from "../../../history";
import "./QuizStart.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes
} from "@fortawesome/free-solid-svg-icons";
class QuizStart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let question_table_id = this.props.match.params.question_table_id;
    return (
      <div className="quiz-start-container">
        <div className="quiz-start-nav">
          <button><span><FontAwesomeIcon icon={faTimes} /></span></button>
        </div>
        <div className="quiz-start-show-container">
          <div className="quiz-basic-info-and-start-btn">
            <div className="quiz-basic-info-container">
              <div className="quiz-basic-info">
                <img className="quiz-image-md" alt="QuizImageSmall"
                  src={require("./images/thumbnail.jpg")} />
                <div className="quiz-title-and-number">
                  <div className="quiz-title">
                    basic english
                  </div>
                  <div className="quiz-number-ques">
                    5 questions
                  </div>
                </div>
              </div>
              <button onClick={() => history.push(`/join/game/${question_table_id}`)}>
                Start Game
              </button>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default QuizStart;

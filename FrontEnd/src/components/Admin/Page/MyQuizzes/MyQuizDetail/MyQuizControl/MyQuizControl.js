import React from "react";
import "./MyQuizControl.scss";
import { withRouter } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faPrint,
  faBook,
  faPlay,
  faAtlas,
  faUsers,
  faQuestion,
  faUser,
  faComments,
  faEye,
  faEyeSlash
} from "@fortawesome/free-solid-svg-icons";

import QuizControlQuestionDetail from "./QuestionDetail/QuestionDetail";
class MyQuizControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="my-quiz-control-container">
        <div className="quiz-control-header">
          <div className="header-image">
            <img
              alt="header"
              className="header-img"
              src={require("../../../../../../utils/QuizThumbnail/images/thumbnail.jpg")}
            />
          </div>
          <div className="header-info">
            <div className="title-and-func">
              <div className="title">basic english</div>
              <div className="func-group">
                <div className="func">
                  <span>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </span>
                </div>
                <div className="func">
                  <span>
                    <FontAwesomeIcon icon={faPrint} />
                  </span>
                </div>
              </div>
            </div>
            <div className="grade-and-plays">
              <div className="grade">
                <span>
                  <FontAwesomeIcon icon={faBook} color="#6B7C93" />
                </span>
                1 st grade - 2nd grade
              </div>
              <div className="plays">
                <span>
                  <FontAwesomeIcon icon={faPlay} color="#6B7C93" />
                </span>
                Played 4 times
              </div>
            </div>
            <div className="subject">
              <span>
                <FontAwesomeIcon icon={faAtlas} color="#6B7C93" />
              </span>
              Physic
            </div>
          </div>
        </div>
        <div className="quiz-control-action-hosting">
          <div className="action-group">
            <div className="action-group-info">
              <div className="action-name">
                <span>
                  <FontAwesomeIcon icon={faUsers} color="#868790" />
                </span>
                Host a game
              </div>
              <div className="explain-action">
                <span>
                  <FontAwesomeIcon icon={faQuestion} size="xs" color="white" />
                </span>
              </div>
            </div>
            <div className="action-btn-group">
              <button className="action-btn b-host">Live game</button>
              <button className="action-btn b-host">Host game</button>
            </div>
          </div>

          <div className="action-group">
            <div className="action-group-info">
              <div className="action-name">
                <span>
                  <FontAwesomeIcon icon={faUser} color="#868790" />
                </span>
                Solo Practice
              </div>
              <div className="explain-action">
                <span>
                  <FontAwesomeIcon icon={faQuestion} size="xs" color="white" />
                </span>
              </div>
            </div>
            <div className="action-btn-group">
              <button className="action-btn b-pratice">Practice</button>
            </div>
          </div>
        </div>
        <div className="quiz-control-action-drafting"></div>
        <hr />
        <div className="quiz-control-questions">
          <div className="questions-group-info">
            <div className="question-number">
              <span>
                <FontAwesomeIcon icon={faComments} />
              </span>
              4 Questions
            </div>
            <button className="show-answers">
              <span>
                <FontAwesomeIcon icon={faEye} color="#8A81EC" />
              </span>
              <span style={{ display: "none" }}>
                <FontAwesomeIcon icon={faEyeSlash} color="#8A81EC" />
              </span>
              SHOW ANSWERS
            </button>
          </div>
          <div className="question-lists">
            <QuizControlQuestionDetail />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MyQuizControl);

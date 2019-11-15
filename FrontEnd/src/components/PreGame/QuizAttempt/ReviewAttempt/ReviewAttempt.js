import React from "react";
import "./ReviewAttempt.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import * as actions from "../../../../redux/actions/index";
import ReviewQuestion from "./ReviewQuestion/ReviewQuestion";
import history from "../../../../history";
class ReviewAttempt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    let attempt_id = parseInt(localStorage.getItem("attempt_id"));
    let question_table_id = parseInt(this.props.match.params.question_table_id);
    this.props.getAttempt(question_table_id, attempt_id);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps.attempt);
    this.setState({
      data: nextProps.attempt
    });
  }
  calculateAccuracy = () => {
    let { data } = this.state;
    //calculate the accuracy
    let rightAnswer = 0;
    data.forEach(attempt => {
      if (attempt.question_choice.is_right === 1) rightAnswer++;
    });
    let accuracy = (rightAnswer / data.length).toFixed(2) * 100;
    return accuracy;
  };
  correctAnswer = () => {
    let { data } = this.state;
    //calculate the correct
    let correctAnswer = 0;
    data.forEach(attempt => {
      if (attempt.question_choice.is_right === 1) correctAnswer++;
    });
    return correctAnswer;
  };
  inCorrectAnswer = () => {
    let { data } = this.state;
    //calculate the correct
    let inCorrectAnswer = 0;
    data.forEach(attempt => {
      if (attempt.question_choice.is_right === 0) inCorrectAnswer++;
    });
    return inCorrectAnswer;
  };
  unAttemptAnswer = () => {
    let { data } = this.state;
    //calculate the correct
    let unAttemptAnswer = 0;
    data.forEach(attempt => {
      if (attempt.question_choice.is_right === 2) unAttemptAnswer++;
    });
    return unAttemptAnswer;
  };
  render() {
    let { data } = this.state;
    let question_table_id = parseInt(this.props.match.params.question_table_id);
    let accuracy = this.calculateAccuracy();
    let progressBar = `${accuracy}%`;
    let userName = localStorage.getItem("username");
    let correctAnswer = this.correctAnswer();
    let inCorrectAnswer = this.inCorrectAnswer();
    let unAttemptAnswer = this.unAttemptAnswer();
    let questionAttempt = data.map((attempt, index) => {
      return <ReviewQuestion key={index} data={attempt} index={index} />;
    });

    let accuracyStyle = `@keyframes progressAnimation{
      0% {
        width: 5%;background-color: #F9BCCA;
      }
      100%{
        width: ${accuracy}%;
        background-color: #00C985;
      }
    }`
    return (
      <div className="review-attempt-container">
        <div className="review-attempt-nav">
          <button
            onClick={() => history.push(`/join/pre-game/${question_table_id}`)}
          >
            <span>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </button>
        </div>
        <div className="review-attempt-show-container">
          <div className="review-sumary">
            <div className="stick-top-action-container">
              <button
                onClick={() => history.push(`/join/game/${question_table_id}`)}
              >
                Play again
              </button>
            </div>

            <h4 className="review-section-title">Game Sumary</h4>

            <div className="attempt-result-container">
              <div className="attempt-result">
                <img
                  src={require("./images/Review.png")}
                  className="review-camera"
                  alt="reviewCamera"
                />
                <div className="review-name-and-point">
                  <div className="review-name">{userName}</div>
                  <div className="review-point">
                    <span>Point:</span> 3333
                  </div>
                </div>
              </div>
            </div>

            <h4 className="review-section-title">Accuracy</h4>

            <div className="review-accuracy-container">
              <div className="review-progress-container" style={{ accuracyStyle }}>
                <div className="review-progress review-progress-moved">
                  <div
                    className="review-progress-bar"
                    style={{ width: progressBar }}
                  >
                    <span>{accuracy}%</span>
                  </div>
                </div>
              </div>
            </div>

            <h4 className="review-section-title">Performance</h4>

            <div className="review-performance-group-container">
              <div className="review-performance-container">
                <img
                  src={require("./images/Correct.png")}
                  className="review-blur-image"
                  alt="blurImage"
                />
                <div className="review-detail-correct">
                  <h2>{correctAnswer}</h2>
                  <h4>Correct</h4>
                </div>
              </div>
              <div className="review-performance-container">
                <img
                  src={require("./images/incorrect.png")}
                  className="review-blur-image"
                  alt="blurImage"
                />
                <div className="review-detail-correct">
                  <h2>{inCorrectAnswer}</h2>
                  <h4>Incorrect</h4>
                </div>
              </div>
              <div className="review-performance-container">
                <img
                  src={require("./images/unattempt.png")}
                  className="review-blur-image"
                  alt="blurImage"
                />
                <div className="review-detail-correct">
                  <h2>{unAttemptAnswer}</h2>
                  <h4>Unattempt</h4>
                </div>
              </div>
            </div>

            <h4 className="review-section-title">Review questions</h4>

            <div className="review-questions-container">{questionAttempt}</div>
          </div>
        </div>
      </div >
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    getAttempt: (question_table_id, attempt_id) => {
      dispatch(actions.getAttempt(question_table_id, attempt_id));
    }
  };
};
const mapStateToProps = state => {
  return {
    attempt: state.attempt
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewAttempt);

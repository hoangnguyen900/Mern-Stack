import React from "react";
import "./HostGame.scss";

class QuizControlHostGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="quiz-control-host-game-container">
        <div className="quiz-name">basic english</div>
        <div className="quiz-num">4 questions</div>
        <div className="quiz-step-text">
          Students should complete the quiz by:
        </div>
        <div className="quiz-end-day"></div>
      </div>
    );
  }
}

export default QuizControlHostGame;

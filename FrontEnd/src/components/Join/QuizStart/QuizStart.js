import React from "react";
import history from "../../../history";
import "./QuizStart.scss";
class QuizStart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let question_table_id = this.props.match.params.question_table_id;
    return (
      <div className="quiz-start-container">
        <button onClick={() => history.push(`/join/game/${question_table_id}`)}>
          Start Game
        </button>
      </div>
    );
  }
}

export default QuizStart;

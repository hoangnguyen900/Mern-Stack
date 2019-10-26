import React from "react";
import "./QuizAttempt.scss";
import history from "../../../history";
class QuizAttempt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      accuracy: 0
    };
  }
  componentDidMount() {
    let { data } = this.props;
    //let { data } = this.state;

    this.setState({
      data: data
    });
  }
  calculateAccuracy = () => {
    let { data } = this.props;
    //calculate the accuracy
    let rightAnswer = 0;
    data.forEach(attempt => {
      if (attempt.question_choice.is_right) rightAnswer++;
    });
    let accuracy = (rightAnswer / data.length).toFixed(2) * 100;
    return accuracy;
  };
  accuracyColor = accuracy => {
    switch (true) {
      case accuracy <= 10:
        return "#ff0000";
      case accuracy <= 55:
        return "#f5a623";
      case accuracy <= 80:
        return "#99cc00";
      case accuracy <= 100:
        return "#4caf50";
      default:
        return "";
    }
  };
  render() {
    console.log(this.props.data);
    let accuracy = this.calculateAccuracy();
    let color = this.accuracyColor(accuracy);
    return (
      <div className="attempt-detail-container">
        <div className="attempt-number-and-review-btn">
          <div className="attempt-number">Attempt {this.props.index + 1}</div>
          <div className="review-btn">
            <button
              onClick={() =>
                history.push(
                  `/join/pre-game/${this.props.data[0].question_table_id}/review`
                )
              }
            >
              Review
            </button>
          </div>
        </div>
        <div className="accuracy">
          <div className="pr-ing">
            <div className="pr-bar" style={{ background: color }}>
              {accuracy}% accuracy
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizAttempt;

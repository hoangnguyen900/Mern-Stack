import React from "react";
import "./QuestionInput.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faSquareRootAlt,
  faImage,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
class QuizCreatorQuestionInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayDelIcon: true,
      isTrueAnswer: false,
      answer: ""
    };
  }

  handleOnclickDeleteOptions = () => {
    this.props.handleOnclickDeleteOptions();
    console.log(this.props);
  };
  componentDidMount = () => {
    let display = false;
    this.props.index > 2 ? (display = true) : (display = false);
    this.setState({
      isDisplayDelIcon: display
    });
    console.log(this.props);
  };
  handleOnClickIsTrueAns = () => {
    this.setState({
      isTrueAnswer: !this.state.isTrueAnswer
    });
  };
  handleOnChangeInput = event => {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({
      [name]: value
    });
  };
  render() {
    var { isDisplayDelIcon, isTrueAnswer } = this.state;

    return (
      <div className="question-input">
        <FontAwesomeIcon
          icon={faCheckCircle}
          size="2x"
          color={isTrueAnswer ? "#00C985" : "#CAD2DC"}
          onClick={this.handleOnClickIsTrueAns}
        />
        <div className="input-group">
          <input
            type="text"
            name="answer"
            onChange={this.handleOnChangeInput}
          />
          <span
            onClick={this.handleOnclickDeleteOptions}
            style={{ display: isDisplayDelIcon ? "block" : "none" }}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </span>
        </div>
        <FontAwesomeIcon icon={faSquareRootAlt} size="2x" color="#CAD2DC" />
        <FontAwesomeIcon icon={faImage} size="2x" color="#CAD2DC" />
      </div>
    );
  }
}

export default QuizCreatorQuestionInput;

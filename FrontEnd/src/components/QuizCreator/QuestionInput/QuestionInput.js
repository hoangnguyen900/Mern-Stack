import React from "react";
import "./QuestionInput.scss";
import { connect } from "react-redux";
//import * as actions from "./../../../redux/actions/index";

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
      is_right: false,
      answer: "",
      question_id: 0
    };
  }

  handleOnclickDeleteOptions = () => {
    this.props.handleOnclickDeleteOptions();
  };
  componentDidMount = () => {
    let display = false;
    let { data } = this.props;
    this.props.index > 2 ? (display = true) : (display = false);
    this.setState({
      isDisplayDelIcon: display
    });
    if (typeof data.id !== "undefined")
      this.setState({
        is_right: data.is_right,
        answer: data.answer,
        question_id: data.question_id
      });
  };
  handleOnClickIsTrueAns = () => {
    let is_right = !this.state.is_right;
    this.setState({
      is_right: is_right
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
    var { isDisplayDelIcon, is_right, answer, question_id } = this.state;
    let { index } = this.props;

    this.props.onChangeAnswer({ index, answer, is_right, question_id });

    return (
      <div className="question-input">
        <FontAwesomeIcon
          icon={faCheckCircle}
          size="2x"
          color={is_right ? "#00C985" : "#CAD2DC"}
          onClick={this.handleOnClickIsTrueAns}
        />
        <div className="input-group">
          <input
            type="text"
            name="answer"
            value={this.state.answer}
            placeholder="add answer"
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
const mapDispatchToProps = (dispatch, props) => {
  return {};
};
const mapStateToProps = state => {
  return {
    quizAnswer: state.quizAnswer
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizCreatorQuestionInput);

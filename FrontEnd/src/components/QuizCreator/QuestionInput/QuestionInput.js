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
      isDisplayDelIcon: display,
      is_right: typeof data.id !== "undefined" ? data.is_right : false,
      answer: typeof data.id !== "undefined" ? data.answer : "",
      question_id: data.question_id
    });
  };
  handleOnClickIsTrueAns = () => {
    let { answer } = this.state;
    let { index } = this.props;
    let is_right = !this.state.is_right;
    this.setState({
      is_right: is_right
    });
    console.log(is_right);
    //this.props.onChangeAnswer({ index, answer, is_right });
  };
  handleOnChangeInput = event => {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({
      [name]: value
    });
    //let answer = value;
    //let { is_right } = this.state;
    //let { index } = this.props;
    //this.props.onChangeAnswer({ index, answer, is_right });
  };
  render() {
    var { isDisplayDelIcon, is_right, answer } = this.state;
    let { index } = this.props;

    this.props.onChangeAnswer({ index, answer, is_right });

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

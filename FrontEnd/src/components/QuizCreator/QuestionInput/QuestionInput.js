import React from "react";
import "./QuestionInput.scss";
import { connect } from "react-redux";
import * as actions from "./../../../redux/actions/index";

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
      isRight: false,
      answer: ""
    };
  }

  handleOnclickDeleteOptions = () => {
    this.props.handleOnclickDeleteOptions();
  };
  componentDidMount = () => {
    let display = false;
    this.props.index > 2 ? (display = true) : (display = false);
    this.setState({
      isDisplayDelIcon: display
    });
  };
  handleOnClickIsTrueAns = () => {
    let { answer, isRight } = this.state;
    let { index } = this.props;
    let a = async () => {
      await this.setState({
        isRight: !isRight
      });
    };

    a().then(this.props.onChangeAnswer({ index, answer, isRight }));
  };
  handleOnChangeInput = event => {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({
      [name]: value
    });
    let { answer, isRight } = this.state;
    let { index } = this.props;
    this.props.onChangeAnswer({ index, answer, isRight });
  };
  render() {
    var { isDisplayDelIcon, isRight } = this.state;

    return (
      <div className="question-input">
        <FontAwesomeIcon
          icon={faCheckCircle}
          size="2x"
          color={isRight ? "#00C985" : "#CAD2DC"}
          onClick={this.handleOnClickIsTrueAns}
        />
        <div className="input-group">
          <input
            type="text"
            name="answer"
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
  return {
    createAnswer: state => {
      dispatch(actions.createAnswer(state));
    }
  };
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

import React from "react";
import "./QuestionDetail.scss";
import { ButtonToolbar, Dropdown, DropdownButton } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPencilAlt,
  faCopy,
  faTrashAlt,
  faCircle,
  faClock
} from "@fortawesome/free-solid-svg-icons";
//
import { connect } from "react-redux";
import * as actions from "./../../../redux/actions/index";

//
class QuizCreatorQuestionDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      question: "",
      time: 0
    };
  }
  onSelectTimeHandler = event => {
    let question = this.state;
    question.time = parseInt(event);
    this.setState({
      time: question.time
    });
  };
  onClickDeleteHandler = () => {
    let { index } = this.props;
    this.props.onClickDeleteHandler(index);
  };
  onClickEditHandler = () => {
    //console.log("hello from child");
    this.props.onClickEditHandler();
  };
  render() {
    let { time } = this.state;
    return (
      <div className="question-detail-container">
        <div className="question-detail-header">
          <span>
            <FontAwesomeIcon icon={faBars} color="#DFDFDF" size="lg" />
          </span>
          <p>Question {this.props.index + 1}</p>
          <div className="question-button-group">
            <button>
              <FontAwesomeIcon
                icon={faTrashAlt}
                onClick={this.onClickDeleteHandler}
              />
            </button>
            <button>
              <FontAwesomeIcon icon={faCopy} />
            </button>
            <button onClick={this.onClickEditHandler}>
              <span><FontAwesomeIcon icon={faPencilAlt} /></span>
              Edit
            </button>
          </div>
        </div>
        <div className="question-detail-body">
          <div className="question-content">
            <h5> {this.props.data.question}</h5>
          </div>
          <div className="answers-divider">
            <div className="divider-name">
              <p>answer choices</p>
            </div>
            <hr />
          </div>
          <div className="question-answers-container">
            {this.props.data.question_choices.map(answer => {
              return (
                <div className="question-answer" key={answer.id}>
                  <span>
                    <FontAwesomeIcon
                      icon={faCircle}
                      color={answer.is_right ? "#00C985" : "#F14D76"}
                    />
                    <span>{answer.answer}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="question-detail-footer">
          <span>
            <FontAwesomeIcon icon={faClock} color="gray" />
          </span>
          <div className="question-time">
            <ButtonToolbar>
              {["up"].map(direction => (
                <DropdownButton
                  drop={direction}
                  variant="light"
                  title={` ${
                    time === 0 ? this.props.data.time : time
                    } seconds `}
                  id={`dropdown-button-drop-${direction}`}
                  key={direction}
                  onSelect={this.onSelectTimeHandler}
                  size="sm"
                  background-color="white"
                >
                  <Dropdown.Item eventKey="15">15 seconds</Dropdown.Item>
                  <Dropdown.Item eventKey="30">30 seconds</Dropdown.Item>
                  <Dropdown.Item eventKey="45">45 seconds</Dropdown.Item>
                  <Dropdown.Item eventKey="60">60 seconds</Dropdown.Item>
                </DropdownButton>
              ))}
            </ButtonToolbar>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    createQuestionAndAnswersAPI: (data, answers) => {
      dispatch(actions.createQuestionAndAnswersAPI(data, answers));
    }
  };
};
const mapStateToProps = state => {
  return {
    question: state.question
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizCreatorQuestionDetail);

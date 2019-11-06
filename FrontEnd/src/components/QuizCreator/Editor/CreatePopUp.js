import React from "react";
import "./Editor.scss";
import QuizCreatorQuestionInput from "./../QuestionInput/QuestionInput";
import "font-awesome/css/font-awesome.min.css";
//import ToggleBox from '../ToggleBox/ToggleBox';
import { connect } from "react-redux";
import * as actions from "./../../../redux/actions/index";
import { ButtonToolbar, Dropdown, DropdownButton } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faClock } from "@fortawesome/free-solid-svg-icons";
const listPrototype = [
  {
    index: 0
  },
  {
    index: 0
  },
  {
    index: 0
  },
  {
    index: 0
  }
];
let listAns = [...listPrototype];
class QuestionCreatePopup extends React.Component {
  constructor() {
    super();
    this.state = {
      questionsArr: [1, 2, 3, 4],
      isDisplay: "block",
      timeTitle: 30,
      data: {
        id: 0,
        question: "",
        time: 30
      },
      answers: []
    };
  }
  componentDidMount() {
    let { data } = this.props;
    if (typeof data !== "undefined") {
      console.log(data);

      this.setState({
        timeTitle: data.time,

        answers: data.question_choices,
        data: {
          ...data,
          id: data.id,
          question: data.question
        }
      });
    }
    if (this.state.questionsArr.length >= 5)
      this.setState({
        isDisplay: "none"
      });
  }
  handleOnclickDeleteOptions = index => {
    let { data } = this.props;
    if (typeof data === "undefined") {
      this.setState({
        question: this.state.questionsArr.pop()
      });
      if (this.state.questionsArr.length < 5) {
        this.setState({
          isDisplay: "block"
        });
      }
    } else {
      listAns.splice(index - 1, 1);
      console.log("delete", listAns);
      this.setState({
        answers: listAns
      });
      if (listAns.length < 5) {
        this.setState({
          isDisplay: "block"
        });
      }
    }
  };
  addQuestionOnclick = () => {
    let { questionsArr, answers } = this.state;
    let { data } = this.props;
    let display = "";

    if (typeof data !== "undefined") {
      console.log(answers);
      let arr = answers;
      arr.push({ index: 0 });
      this.setState({
        answers: arr
      });
      answers.length < 5 ? (display = "block") : (display = "none");
    } else {
      let arr = questionsArr;
      arr.push(arr.length + 1);
      console.log(arr);
      this.setState({
        questionsArr: arr
      });
      questionsArr.length < 5 ? (display = "block") : (display = "none");
    }

    this.setState({
      isDisplay: display
    });
  };

  onSubmitHandle = event => {
    event.preventDefault();
    for (var i = 0; i < listAns.length; i++) {
      if (listAns[i].index === 0) {
        listAns.splice(i, 1);
        i--;
      }
    }
    if (typeof this.props.data === "undefined") {
      let question_table_id = this.props.match.params.question_table_id;
      this.props.createQuestionAndAnswersAPI(
        question_table_id,
        this.state.data,
        listAns
      );
    } else {
      let index = this.props.index;
      this.props.updateQuestionAndAnswersAPI(
        this.state.data,
        listAns,
        index - 1
      );
      this.setState({
        answers: []
      });
    }

    this.props.closePopup();

    listAns = [...listPrototype];
  };
  onChangeAnswer = answer => {
    listAns[answer.index - 1] = answer;
  };
  handleOnChangeInput = event => {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({
      data: {
        ...this.state.data,
        [name]: value
      }
    });
  };
  onSelectHandler = event => {
    let data = this.state.data;
    data.time = parseInt(event);
    this.setState({
      timeTitle: data.time
    });
  };

  render() {
    let { isDisplay, questionsArr, answers } = this.state;
    let { index } = this.props;
    let list = typeof this.props.data === "undefined" ? questionsArr : answers;
    let element = list.map((data, index) => {
      return (
        <QuizCreatorQuestionInput
          key={index}
          index={index + 1}
          handleOnclickDeleteOptions={this.handleOnclickDeleteOptions}
          onChangeAnswer={this.onChangeAnswer}
          data={data}
        />
      );
    });

    return (
      <div className="popup">
        <form onSubmit={this.onSubmitHandle}>
          <div className="popup_inner">
            <div className="popup-header">
              <p>
                <img
                  src={require("./images/question.png")}
                  alt="question"
                  placeholder={"Type your question here.."}
                />
                Question {index}
              </p>
              <div className="choose-question-types">
                <ButtonToolbar>
                  {["down"].map(direction => (
                    <DropdownButton
                      drop={direction}
                      variant="light"
                      title={` ${this.state.timeTitle} seconds `}
                      id={`dropdown-button-drop-${direction}`}
                      key={direction}
                      onSelect={this.onSelectHandler}
                      size="sm"
                      background-color="white"
                    >
                      <Dropdown.Item eventKey="single">Single answer</Dropdown.Item>
                      <Dropdown.Item eventKey="multi">Multi select</Dropdown.Item>
                     
                    </DropdownButton>
                  ))}
                </ButtonToolbar>
              </div>

              <hr />
            </div>
            <div className="popup-body">
              <input
                type="text"
                style={{ width: "80%" }}
                name="question"
                placeholder="add question"
                value={this.state.data.question}
                onChange={this.handleOnChangeInput}
              />
              {element}

              <button
                type="button"
                style={{ display: isDisplay }}
                onClick={this.addQuestionOnclick}
              >
                Add another option
              </button>
              <hr />
            </div>
            <div className="popup-footer">
              <div className="question-time-container">
                <span>
                  <FontAwesomeIcon icon={faClock} color="gray" />
                </span>
                <div className="question-time">
                  <ButtonToolbar>
                    {["up"].map(direction => (
                      <DropdownButton
                        drop={direction}
                        variant="light"
                        title={` ${this.state.timeTitle} seconds `}
                        id={`dropdown-button-drop-${direction}`}
                        key={direction}
                        onSelect={this.onSelectHandler}
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

              <button
                className="b-cancel"
                type="button"
                onClick={this.props.closePopup}
              >
                CANCEL
              </button>
              <button className="b-save" type="submit">
                <FontAwesomeIcon size="1x" icon={faSave} color="white" />
                <span>SAVE</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    createQuestionAndAnswersAPI: (question_table_id, data, answers) => {
      dispatch(
        actions.createQuestionAndAnswersAPI(question_table_id, data, answers)
      );
    },
    updateQuestionAndAnswersAPI: (data, answers, index) => {
      dispatch(actions.updateQuestionAndAnswersAPI(data, answers, index));
    }
  };
};
const mapStateToProps = state => {
  return {
    answer: state.answer,
    question: state.question
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionCreatePopup);

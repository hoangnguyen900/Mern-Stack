import React from "react";
import "./Editor.scss";
import QuizCreatorQuestionInput from "./../QuestionInput/QuestionInput";
import "font-awesome/css/font-awesome.min.css";
//import ToggleBox from '../ToggleBox/ToggleBox';
import { connect } from "react-redux";
import * as actions from "./../../../redux/actions/index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
const listAns = [
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
class QuestionCreatePopup extends React.Component {
  constructor() {
    super();
    this.state = {
      questionsArr: [1, 2, 3, 4],
      isDisplay: "block",

      data: {
        id: 0,
        question: "",
        time: 30
      },
      answers: []
    };
  }
  componentDidMount() {
    if (this.state.questionsArr.length >= 5)
      this.setState({
        isDisplay: "none"
      });
  }
  handleOnclickDeleteOptions = () => {
    this.setState({
      question: this.state.questionsArr.pop()
    });
    if (this.state.questionsArr.length < 5) {
      this.setState({
        isDisplay: "block"
      });
    }
  };
  addQuestionOnclick = () => {
    let arr = this.state.questionsArr;
    arr.push(arr.length + 1);

    this.setState({
      questionsArr: arr
    });
    let display = "";
    this.state.questionsArr.length < 5
      ? (display = "block")
      : (display = "none");
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
    this.setState({
      answers: [...this.state.answers, ...listAns]
    });
    this.props.createQuestionAndAnswersAPI(this.state.data, listAns);

    this.props.closePopup();
  };
  onChangeAnswer = answer => {
    listAns[answer.index - 1] = answer;
  };
  handleOnChangeInput = event => {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({
      data: {
        [name]: value,
        time: 30
      }
    });
  };

  render() {
    let { isDisplay, questionsArr } = this.state;
    let element = questionsArr.map(index => {
      return (
        <QuizCreatorQuestionInput
          key={index}
          index={index}
          handleOnclickDeleteOptions={this.handleOnclickDeleteOptions}
          onChangeAnswer={this.onChangeAnswer}
        />
      );
    });

    return (
      <div className="popup">
        <form onSubmit={this.onSubmitHandle}>
          <div className="popup_inner">
            <div className="popup-header">
              <p>
                {" "}
                <img
                  src={require("./images/question.png")}
                  alt="question"
                  placeholder={"Type your question here.."}
                />
                {this.props.text}
              </p>
              <hr />
            </div>
            <div className="popup-body">
              <input
                type="text"
                style={{ width: "80%" }}
                name="question"
                placeholder="add question"
                onChange={this.handleOnChangeInput}
              />
              {element}

              <button
                style={{ display: isDisplay }}
                onClick={this.addQuestionOnclick}
              >
                Add another option
              </button>
              <hr />
            </div>
            <div className="popup-footer">
              <button className="b-cancel" onClick={this.props.closePopup}>
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
    createQuestionAndAnswersAPI: (data, answers) => {
      dispatch(actions.createQuestionAndAnswersAPI(data, answers));
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

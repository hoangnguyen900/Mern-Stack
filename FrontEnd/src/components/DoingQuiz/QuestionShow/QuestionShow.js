import React from "react";
import "./QuestionShow.scss";
import TimeBar from "../Timebar/TimeBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faPause } from "@fortawesome/free-solid-svg-icons";
class QuestionShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      question: "",
      question_choices: [],
      time: 0,
      disableButton: false
    };
  }
  componentWillUnmount() {
    let { question_choices } = this.state;
    let index = localStorage.getItem("choiceIndex");
    console.log("stop", index);

    if (index === null) {
      let questionChoice = {
        id: 0
      };
      this.props.recordAnswer(this.state.id, questionChoice);
    } else this.props.recordAnswer(this.state.id, question_choices[index]);
    localStorage.removeItem("choiceIndex");
  }
  onClickCheckAnswer = index => {
    //let { index, question } = this.props;
    let { question_choices, disableButton } = this.state;
    if (disableButton === false) {
      if (question_choices[index].is_right) {
        //   let list = this.state.question;
        //   list.question_choices[index].check = true;
        this.setState(preState => ({
          question_choices: preState.question_choices.map((qChoice, i) => {
            return i === index ? { ...qChoice, check: true } : qChoice;
          })
        }));
      } else {
        this.setState(preState => ({
          question_choices: preState.question_choices.map((qChoice, i) => {
            return i === index ? { ...qChoice, check: false } : qChoice;
          })
        }));
      }
      this.props.doneQuestionHandler();
      this.setState({
        disableButton: true
      });
    }
  };
  componentDidMount() {
    let { question } = this.props;

    this.setState({
      id: question.id,
      question: question.question,
      time: question.time,
      question_choices: question.question_choices
    });
  }

  render() {
    const { time, question, question_choices, disableButton } = this.state;
    let { questionsLength, index } = this.props;
    console.log("question_choices here");
    console.log(question_choices);
    let colorButtons = ["#2F6DAE", "#2C9CA6", "#ECA82C", "#D4546A", "#5cd65c"];
    const element = question_choices.map((answer, index) => {
      let color = () => {
        if (answer.check === false) return "#F14D76";
        if (answer.check === true) return "#00c985";
        return colorButtons[index];
      };
      return (
        //<div className="question-answer" >
        <div className="question-answer-wrapper" key={index}>
          <button className="question-answer"
            onClick={() => {
              this.onClickCheckAnswer(index);
              localStorage.setItem("choiceIndex", index);
            }}
            disabled={disableButton} style={{ background: color() }}
          >
            {answer.answer}

          </button>
        </div>
        // </div>
      );
    });


    return (
      <div className="question-show-container">
        <TimeBar TimeOut={time} />
        <div className="question-show-actions">
          <button className="action-pause">
            <span><FontAwesomeIcon icon={faPause} /></span>
          </button>
          <div className="question-process-num">
            <span>{index + 1}</span>/{questionsLength}
          </div>
        </div>
        <div className="question-detail-container">
          <div className="question-detail-body">
            <div className="question-content">
              <h5> {question}</h5>
            </div>
            {/* <div className="answers-divider">
              <div className="divider-name">
                <p>answer choices</p>
              </div>
              <hr />
            </div> */}
            <div className="question-answers-container">{element}</div>
          </div>
          <div className="question-detail-footer">
            <div className="change-question-group">
              <button>
                Submit
                <span>
                  <FontAwesomeIcon icon={faAngleRight} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionShow;

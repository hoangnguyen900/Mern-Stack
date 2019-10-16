import React from "react";
import "./DoingQuiz.scss";
import QuestionShow from "../DoingQuiz/QuestionShow/QuestionShow";
import { connect } from "react-redux";
import * as actions from "./../../redux/actions/index";
import history from "../../history";
var showQuestion;
var mark = 0;
class DoingQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 0,
          question: "",
          question_choices: [],
          time: 0
        }
      ],
      data: [],
      count: 0,
      changeQuestion: false,
      isDone: false
    };
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      questions: nextProps.questionTable[0].questions
    });
  }
  componentDidMount() {
    let question_table_id = this.props.match.params.question_table_id;
    this.props.showListQuestionAnswer(question_table_id);
  }
  doneQuestionHandler = (question_id, question_choice) => {
    clearTimeout(showQuestion);
    setTimeout(() => {
      this.setState({
        changeQuestion: true
      });
    }, 500);
    ///create data to send API
    let question_table_id = parseInt(this.props.match.params.question_table_id);
    let data = {
      question_table_id: question_table_id,
      question_id,
      choice_id: question_choice.id
    };
    let dataPush = this.state.data;
    dataPush.push({ ...data });

    // calculate mark for user
    if (question_choice.is_right) {
      let total = this.state.questions.length;
      mark = mark + 100 / total;
    }
  };
  createQuestion = () => {
    let { questions, count, isDone, changeQuestion, data } = this.state;
    for (let i = count; i < questions.length; i++) {
      if (changeQuestion === false) {
        showQuestion = setTimeout(() => {
          if (count < questions.length - 1 && isDone === false) {
            this.setState({
              count: count + 1
            });
          } else {
            this.setState({
              isDone: true
            });
          }
        }, questions[count].time * 1000);
      } else {
        if (count < questions.length - 1 && isDone === false) {
          this.setState({
            count: count + 1,
            changeQuestion: false
          });
        } else {
          this.setState({
            isDone: true,
            changeQuestion: false
          });
        }
      }
      if (isDone === true) {
        this.props.addAnswerRecord(data);
        console.log("total mark", mark.toFixed(2));
        history.push(`/quiz/${this.props.match.params.question_table_id}`);
      } else
        return (
          <QuestionShow
            key={count}
            index={count}
            question={questions[count]}
            doneQuestionHandler={this.doneQuestionHandler}
          />
        );
    }
  };

  render() {
    let element = "";
    if (this.state.questions[0].id !== 0) element = this.createQuestion();
    else element = "";

    //let question = this.createQuestion();
    return <div className="doing-quiz-container">{element}</div>;
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    showListQuestionAnswer: question_table_id => {
      dispatch(actions.showListQuestionAnswer(question_table_id));
    },
    addAnswerRecord: data => {
      dispatch(actions.addAnswerRecord(data));
    }
  };
};
const mapStateToProps = state => {
  return {
    questionTable: state.questionTable,
    question: state.question
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DoingQuiz);

import React from "react";
import "./Join.scss";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/index";
import QuizDetailTable from "../../utils/QuizThumbnail/QuizDetailTable/QuizDetailTable";
import QuizThumbnail from "../../utils/QuizThumbnail/QuizThumbnail";

class Join extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: 0,
      questionTable: {},
      showQuizCode: false,
      completedQuiz: [],
      subjects: [
        {
          title: "",
          question_tables: []
        }
      ]
    };
  }
  componentDidMount() {
    this.props.showListUserDoQuestionTable();
    this.props.showListTableBySubject();
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("subject", nextProps.subject);
    let { completed, user, subject } = nextProps;

    this.setState({
      showQuizCode: user.showQuizCode,
      questionTable: user.questionTable,
      completedQuiz: completed.completedQuiz,
      subjects: subject.tablesBySubject
    });
  }
  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  enterCodeOnClickHandler = () => {
    this.props.getQuestionTableByCode(parseInt(this.state.code));
  };
  togglePopup = () => {
    this.setState({
      showQuizCode: !this.state.showQuizCode
    });
  };
  showLimitTableBySubject = question_tables => {
    let arr = [];
    for (let i = 0; i < 5; i++)
      if (typeof question_tables[i] !== "undefined")
        arr.push(<QuizThumbnail key={i} data={question_tables[i]} />);
    return arr;
  };
  showLimitSubject = () => {
    let { subjects } = this.state;
    let arr = [];
    for (let i = 0; i < 5; i++)
      if (typeof subjects[i] !== "undefined") {
        let listTable = this.showLimitTableBySubject(
          subjects[i].question_tables
        );
        arr.push(
          <div className="VietCSSDumTao" key={i}>
            <h2>{subjects[i].title}</h2>
            <div className="quiz-list">{listTable}</div>
          </div>
        );
      }
    return arr;
  };
  render() {
    let { questionTable, completedQuiz } = this.state;
    let quizthumbComplete = completedQuiz.map((table, index) => {
      return <QuizThumbnail key={index} data={table} isCompleted={true} />;
    });
    let quizthumbSubject = this.showLimitSubject();

    return (
      <div className="join-container">
        <div className="enter-quiz">
          <div className="code-field">
            <div className="input-code">
              <input
                name="code"
                onChange={this.onChangeHandler}
                placeholder="Enter some quiz code "
              />
              <button onClick={this.enterCodeOnClickHandler}>Join</button>
            </div>
          </div>
          <div className="profile-field"></div>
        </div>
        <div className="VietCSSDumTao">
          <h2>Recent Activity</h2>
          <div className="quiz-list">{quizthumbComplete}</div>
        </div>
        {quizthumbSubject}
        {this.state.showQuizCode ? (
          <QuizDetailTable
            togglePopup={this.togglePopup}
            data={questionTable}
            userName={`${questionTable.user.first_name} ${questionTable.user.last_name}`}
          />
        ) : null}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    getQuestionTableByCode: code => {
      dispatch(actions.getQuestionTableByCode(code));
    },
    showListUserDoQuestionTable: () => {
      dispatch(actions.showListUserDoQuestionTable());
    },
    showListTableBySubject: () => {
      dispatch(actions.showListTableBySubject());
    }
  };
};
const mapStateToProps = state => {
  return {
    questionTable: state.questionTable,
    user: state.user,
    completed: state.completed,
    subject: state.subject
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Join);

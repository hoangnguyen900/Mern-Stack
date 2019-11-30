import React from "react";
import "./Join.scss";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/index";
import QuizDetailTable from "../../utils/QuizThumbnail/QuizDetailTable/QuizDetailTable";
import QuizThumbnail from "../../utils/QuizThumbnail/QuizThumbnail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';
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
      ],
      isFocusInput: false,
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
    let userName = "";
    for (let i = 0; i < 5; i++)
      if (typeof question_tables[i] !== "undefined") {
        userName = `${question_tables[i].user.first_name} ${question_tables[i].user.last_name}`;
        arr.push(
          <QuizThumbnail
            key={i}
            data={question_tables[i]}
            userName={userName}
          />
        );
      }

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
          <div className="join-quiz-list-review" key={i}>
            <h3>{subjects[i].title}</h3>
            <div className="quiz-list-show-topic">{listTable}</div>
          </div>
        );
      }
    return arr;
  };

  focusInputQuizCode = (e) => {

    if (this.node.contains(e.target)) {
      this.setState({
        isFocusInput: true,
      })
      return;
    }
    else {
      this.setState({
        isFocusInput: false,
      })
    }
  }


  componentWillMount() {
    document.addEventListener('click', this.focusInputQuizCode, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.focusInputQuizCode, false);
  }

  render() {
    let { questionTable, completedQuiz, isFocusInput } = this.state;
    let quizthumbComplete = completedQuiz.map((table, index) => {
      let userName = `${table.user.first_name} ${table.user.last_name}`;

      return (
        <QuizThumbnail
          key={index}
          data={table}
          isCompleted={true}
          userName={userName}
        />
      );
    });
    let quizthumbSubject = this.showLimitSubject();

    return (
      <div className="join-container">
        <div className="enter-quiz">
          <div className="code-field" style={isFocusInput ? { zIndex: '12' } : null}>
            <div className="input-code" >
              <input
                name="code"
                onChange={this.onChangeHandler}
                placeholder="Enter some quiz code "
                ref={(node) => this.node = node}
                autoComplete="off"
              />
              <button onClick={this.enterCodeOnClickHandler}>Join</button>
            </div>
          </div>
          <div className="profile-field">
            <span className="add-profile-icon">
              <FontAwesomeIcon icon={faPlusCircle} size="5x" color="#D8D8D8" />
              <div className="add-profile-overlay">Select avatar</div>
            </span>
            <h5>User Name</h5>
            <div className="join-profile-actions">
              <NavLink to="_blank">Edit profile</NavLink>
              <NavLink to="_blank">Activity</NavLink>
            </div>
          </div>
        </div>
        {completedQuiz.length ? (
          <div className="join-quiz-list-review">
           <h3>Recent Activity</h3>
            <div className="quiz-list-show-activity">{quizthumbComplete}</div>
          </div>
        ) : null}


        {quizthumbSubject}
        {this.state.showQuizCode ? (
          <QuizDetailTable
            togglePopup={this.togglePopup}
            data={questionTable}
            userName={`${questionTable.user.first_name} ${questionTable.user.last_name}`}
          />
        ) : null}

        <div
          className="join-input-code-overlay" style={isFocusInput ? { display: 'block', overflow: 'hidden' } : { display: 'none' }}></div>
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

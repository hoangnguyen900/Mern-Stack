import React from "react";
import "./Join.scss";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/index";
import QuizDetailTable from "../../utils/QuizThumbnail/QuizDetailTable/QuizDetailTable";
import QuizThumbnail from "../../utils/QuizThumbnail/QuizThumbnail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
class Join extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      code: 0,
      user: {
        avatar: null
      },
      questionTable: {},
      showQuizCode: false,
      completedQuiz: [],
      subjects: [
        {
          title: "",
          question_tables: []
        }
      ],
      isFocusInput: false
    };
  }

  componentDidMount() {
    this.props.showListUserDoQuestionTable();
    this.props.showListTableBySubject();
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("join", nextProps);
    let { completed, user, subject } = nextProps;
    this.setState({
      user: user[0],
      showQuizCode: user.showQuizCode,
      questionTable: user.questionTable,
      completedQuiz: completed.completedQuiz,
      subjects: subject.tablesBySubject
    });
  }
  UNSAFE_componentWillMount() {
    document.addEventListener("click", this.focusInputQuizCode, false);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.focusInputQuizCode, false);
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
    this.props.closeQuestionTableByCode();
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

  focusInputQuizCode = e => {
    if (this.node.contains(e.target)) {
      this.setState({
        isFocusInput: true
      });
      return;
    } else {
      this.setState({
        isFocusInput: false
      });
    }
  };
  fileChangedHandler = event => {
    let fileReader = new FileReader();
    if (event.target.files[0]) {
      fileReader.readAsDataURL(event.target.files[0]); // fileReader.result -> URL.
      fileReader.onload = progressEvent => {
        let url = fileReader.result;
        //console.log("url", url);
        // Something like: data:image/png;base64,iVBORw...Ym57Ad6m6uHj96js
        this.setState({ user: { avatar: url } });
      };
    }
  };
  render() {
    let { questionTable, completedQuiz, isFocusInput, user } = this.state;
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
          <div
            className="code-field"
            style={isFocusInput ? { zIndex: "12" } : null}
          >
            <div className="input-code">
              <input
                name="code"
                onChange={this.onChangeHandler}
                placeholder="Enter some quiz code "
                ref={node => (this.node = node)}
                autoComplete="off"
              />
              <button onClick={this.enterCodeOnClickHandler}>Join</button>
            </div>
          </div>
          <div className="profile-field">
            <span className="add-profile-icon">
              {/* <FontAwesomeIcon icon={faPlusCircle} size="5x" color="#D8D8D8" /> */}
              <img
                className="join-default-ava"
                src={
                  user.avatar !== null
                    ? user.avatar
                    : require("../../utils/images/defaultava.png")
                }
                alt="default-ava"
              />
              <input
                style={{ display: "none" }}
                type="file"
                onChange={this.fileChangedHandler}
                ref={fileInput => (this.fileInput = fileInput)}
              />
              <div
                className="add-profile-overlay"
                onClick={() => this.fileInput.click()}
              >
                Select avatar
              </div>
            </span>
            <h5>{localStorage.getItem("username")}</h5>
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
          className="join-input-code-overlay"
          style={
            isFocusInput
              ? { display: "block", overflow: "hidden" }
              : { display: "none" }
          }
        ></div>
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
    },
    closeQuestionTableByCode: () => {
      dispatch(actions.closeQuestionTableByCode());
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

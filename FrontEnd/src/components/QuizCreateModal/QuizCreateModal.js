import React from "react";
import { connect } from "react-redux";
import * as actions from "./../../redux/actions/index";
import "./QuizCreateModal.scss";
import history from "../../history";
class QuizCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      data: {
        title: "",
        subject_id: 0
      },
      subject: []
    };
  }
  componentDidMount() {
    this.props.showListSubject();
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (typeof nextProps.questionTable.id === "undefined")
      this.setState({
        subject: nextProps.subject
      });
    else {
      console.log(this.props.questionTable);
      this.setState({
        id: nextProps.questionTable.id
      });
      history.push(`/quiz/${nextProps.questionTable.id}`);
      // history.push(`/quiz/1`);
    }
  }
  onSubmitHandler = event => {
    event.preventDefault();
    //console.log(this.state.data);
    this.props.createQuestionTable(this.state.data);
  };
  onChangeHandler = event => {
    let { name, value } = event.target;
    let tempt = 0;
    //set type = Integer
    event.target.type === "button"
      ? (tempt = parseInt(value))
      : (tempt = value);
    this.setState(prevState => ({
      data: {
        // object that we want to update
        ...prevState.data, // keep all other key-value pairs
        [name]: tempt // update the value of specific key
      }
    }));
  };
  render() {
    const element = this.state.subject.map(subj => {
      return (
        <div className="subject" key={subj.id}>
          <button
            type="button"
            name="subject_id"
            value={subj.id}
            onClick={this.onChangeHandler}
          >
            {subj.title}
          </button>
        </div>
      );
    });
    return (
      <div className="quiz-create-modal-container">
        <div className="init-quiz">
          <form onSubmit={this.onSubmitHandler}>
            <div className="init-quiz-container">
              <div className="init-quiz-create-title">
                <img src={require("./images/quiz-icon.png")} alt="quiz-icon" />
                <p>Create a quiz </p>
              </div>
              <div className="init-quiz-create-body">
                <div className="init-quiz-name-quiz">
                  <p>1. Name the quiz </p>
                  <input
                    type="text"
                    name="title"
                    onChange={this.onChangeHandler}
                  />
                </div>
                <div className="init-quiz-choose-subject">
                  <p>2. Choose the consistent subject</p>

                  <div className="subject-clouds">{element}</div>
                </div>
                <p>sub id: {this.state.data.subject_id}</p>
              </div>
              <div className="init-quiz-create-footer">
                <button type="submit">Create</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    showListSubject: () => {
      dispatch(actions.showListSubject());
    },
    createQuestionTable: data => {
      dispatch(actions.createQuestionTable(data));
    }
  };
};
const mapStateToProps = state => {
  return {
    questionTable: state.questionTable,
    subject: state.subject
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizCreate);

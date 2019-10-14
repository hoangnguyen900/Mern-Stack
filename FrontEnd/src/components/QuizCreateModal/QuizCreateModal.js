import React from "react";
import { connect } from "react-redux";
import * as actions from "./../../redux/actions/index";
import "./QuizCreateModal.scss";
class QuizCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        title: "",
        subject_id: 0,
        admin: 0
      },
      subject: []
    };
  }
  componentDidMount() {
    this.props.showListSubject();
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({
      subject: nextProps.subject
    });
  }
  onSubmitHandler = event => {
    event.preventDefault();
    //this.props.createQuestionTable(data)
  };
  render() {
    const element = this.state.subject.map(subj => {
      return (
        <div className="subject" key={subj.id}>
          <p>{subj.title}</p>
        </div>
      );
    });
    return (
      <div className="page-container">
        <div className="init-quiz">
          <form onSubmit={this.onSubmitHandler}>
            <div className="init-quiz-container">
              <div className="init-quiz-create-title">
                <img src={require("./images/quiz-icon.png")} alt="quiz-icon" />
                <p>Create a quiz</p>
              </div>
              <div className="init-quiz-create-body">
                <div className="init-quiz-name-quiz">
                  <p>1. Name the quiz</p>
                  <input />
                </div>
                <div className="init-quiz-choose-subject">
                  <p>2. Choose the consistent subject</p>

                  <div className="subject-clouds">{element}</div>
                </div>
                <div>
                  <button type="submit">Create</button>
                </div>
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
    //questionTable: state.questionTable,
    subject: state.subject
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizCreate);

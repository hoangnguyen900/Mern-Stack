import React from "react";
import "./CompletedQuizzes.scss";
import QuizThumbnail from "../../../../utils/QuizThumbnail/QuizThumbnail";
import { connect } from "react-redux";
import * as actions from "../../../../redux/actions/index";

class CompletedQuizzes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    this.props.showListQuestionTable();
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("completed", nextProps.user);
    let { completedQuiz } = nextProps.user;
    this.setState({
      data: completedQuiz
    });
  }

  render() {
    let { data } = this.state;
    let quizthumb = data.map((table, index) => {
      let name = `${table.user.first_name} ${table.user.last_name}`;
      return (
        <QuizThumbnail
          key={index}
          data={table}
          userName={name}
          isCompleted={true}
        />
      );
    });
    return <div className="quiz-list">{quizthumb}</div>;
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    showListQuestionTable: () => {
      dispatch(actions.showListQuestionTable());
    }
  };
};
const mapStateToProps = state => {
  return {
    questionTable: state.questionTable,
    user: state.user
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompletedQuizzes);

import React from "react";
import "./CreatedQuizzes.scss";
import QuizThumbnail from "../../../../utils/QuizThumbnail/QuizThumbnail";

import { connect } from "react-redux";
import * as actions from "../../../../redux/actions/index";

class CreatedQuizzes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        first_name: "",
        last_name: "",
        question_tables: []
      }
    };
  }
  componentDidMount() {
    //get data from redux
    this.props.showListQuestionTable();
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("created", nextProps.user);
    this.setState({
      data: nextProps.user[0]
    });
  }
  getRandomNumber = () => {
    let code = "";
    for (let i = 0; i < 6; i++) {
      var r = Math.floor(Math.random() * 10);
      code = `${code}${r}`;
    }
    return code;
  };
  render() {
    //console.log("ramdom", this.getRandomNumber());
    let { data } = this.state;
    let name = `${data.first_name} ${data.last_name}`;
    let quizthumb = data.question_tables.map((table, index) => {
      return <QuizThumbnail key={index} data={table} userName={name} />;
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
)(CreatedQuizzes);

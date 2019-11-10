import React from "react";
import QuizCreateEditor from "../../../components/QuizCreator/Editor/Editor";
import "./QuizCreator.scss";
class QuizCreator extends React.Component {
  render() {
    return <QuizCreateEditor match={this.props.match} />;
  }
}

export default QuizCreator;

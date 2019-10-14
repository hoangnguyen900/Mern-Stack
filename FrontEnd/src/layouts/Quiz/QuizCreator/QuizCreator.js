import React from "react";
import QuizCreateEditor from "../../../components/QuizCreator/Editor/Editor";
import "./QuizCreator.scss";
import QuizCreatorNav from "../../../components/QuizCreator/Nav/Nav";
class QuizCreator extends React.Component {
  render() {
    return (
      <div className="page-container">
        <QuizCreatorNav />
        <QuizCreateEditor match={this.props.match} />
      </div>
    );
  }
}

export default QuizCreator;

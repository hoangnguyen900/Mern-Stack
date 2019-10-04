import React from "react";
import QuizCreateEditor from "../../../components/QuizCreator/Editor/Editor";
import "./QuizCreator.scss";
import QuizCreatorNav from "../../../components/QuizCreator/Nav/Nav";
class QuizCreator extends React.Component {
  render() {
    return (
      <div className="page-container">
        <QuizCreatorNav />
        <QuizCreateEditor />
      </div>
    );
  }
}

export default QuizCreator;

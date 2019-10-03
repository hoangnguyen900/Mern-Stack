import React from "react";
import QuizCreatePopUp from "../../../components/QuizCreator/Editor/CreatePopUp";
import "./QuizCreator.scss";
import QuizCreatorNav from "../../../components/QuizCreator/Nav/Nav";
class QuizCreator extends React.Component {
  render() {
    return (
      <div className="page-container">
        <QuizCreatorNav />
        <QuizCreatePopUp />
      </div>
    );
  }
}

export default QuizCreator;

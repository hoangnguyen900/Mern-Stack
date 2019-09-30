import React from "react";
import "./QuizCreate.scss";

class QuizCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "test"
    };
  }
  render() {
    return (
      <div className="page-container">
        <div className="init-quiz">
          <div className="init-quiz-container">
            <div className="init-quiz-create-title">
              <img src={require("./images/quiz-icon.png")} alt="quiz-icon" />
              <p>Create a quiz</p>
              <p> {this.state.data}</p>
            </div>
            <div className="init-quiz-create-body">
              <div className="init-quiz-name-quiz">
                <p>1. Name the quiz</p>
                <input />
              </div>
              <div className="init-quiz-choose-subject">
                <p>2. Choose the consistent subject</p>

                <div className="subject-clouds">
                  <div className="subject">
                    {" "}
                    <p>consistent subject</p>
                  </div>
                  <div className="subject">
                    {" "}
                    <p>consistent sub</p>
                  </div>
                  <div className="subject">
                    {" "}
                    <p>consistent subject</p>
                  </div>
                  <div className="subject">
                    {" "}
                    <p>consistent </p>
                  </div>
                  <div className="subject">
                    {" "}
                    <p>consistent sut</p>
                  </div>
                  <div className="subject">
                    {" "}
                    <p>consistent subject</p>
                  </div>
                  <div className="subject">
                    {" "}
                    <p>consistent bject</p>
                  </div>
                  <div className="subject">
                    {" "}
                    <p>consistent suct</p>
                  </div>
                  <div className="subject">
                    {" "}
                    <p>consistent sje</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizCreate;

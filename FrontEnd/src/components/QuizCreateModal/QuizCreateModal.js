import React from "react";
import "./QuizCreateModal.scss";
class QuizCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "test"
    };
  }
  onSubmitHandler = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div className="page-container">
        <div className="init-quiz">
          <form onSubmit={this.onSubmitHandler}>
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
                      <p>consistent subject</p>
                    </div>
                  </div>
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

export default QuizCreate;

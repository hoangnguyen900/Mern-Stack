import React from "react";
import "./ReviewQuestion.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
class ReviewQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        question: {
          question: "",
          question_choices: [],
          is_one_right_ans: 1
        },
        question_choice: {
          id: 0,
          is_right: 0
        },
        multi_choice: {
          question_choice: {
            id: 0,
            is_right: 0
          }
        }
      },
      rightQuestionColor: ""
    };
  }
  componentDidMount() {
    let { data } = this.props;
    this.setState({
      data: data
    });
    this.getQuestionBorderColor(data);
  }
  getQuestionBorderColor = data => {
    let answerColor = [];
    let multiRightCount = 0;
    let questionRightTotal = 0;
    for (let i = 0; i < data.question.question_choices.length; i++)
      if (data.question.question_choices[i].is_right === 1)
        questionRightTotal++;

    answerColor = data.question.question_choices.map(answerList => {
      let choiceColor = "";
      if (data.question.is_one_right_ans) {
        if (data.question_choice.id === answerList.id)
          if (
            data.question_choice.is_right === 1 &&
            answerList.is_right === 1
          ) {
            //question right border
            choiceColor = " #00995c ";
          } else if (data.question_choice.is_right !== 1) {
            //question wrong border
            choiceColor = " #ec0b43 ";
          }
      } else {
        for (let i = 0; i < data.multi_choice.question_choices.length; i++) {
          if (data.multi_choice.question_choices[i].id === answerList.id)
            if (
              data.multi_choice.question_choices[i].is_right === 1 &&
              answerList.is_right === 1
            )
              multiRightCount++;
            else multiRightCount--;
        }
        if (multiRightCount === questionRightTotal) choiceColor = " #00995c ";
        else choiceColor = " #ec0b43 ";
        if (data.multi_choice_id === 0) choiceColor = "";
      }

      return choiceColor;
    });

    for (let i = 0; i < answerColor.length; i++) {
      if (answerColor[i] !== "") {
        this.setState({
          rightQuestionColor: answerColor[i]
        });
      }
    }
  };
  render() {
    //console.log(this.state.rightQuestionColor);
    let { index } = this.props;
    let { data } = this.state;
    let answerElm = data.question.question_choices.map(answerList => {
      let choiceColor = "";
      //question unattempt
      if (answerList.is_right === 1) choiceColor = "#00c985";
      if (data.question.is_one_right_ans) {
        if (data.question_choice.id === answerList.id)
          if (data.question_choice.is_right === 1 && answerList.is_right === 1)
            //question right
            choiceColor = "#00c985";
          else if (data.question_choice.is_right !== 1)
            //question wrong
            choiceColor = "#F14D76";
      } else {
        for (let i = 0; i < data.multi_choice.question_choices.length; i++) {
          if (data.multi_choice.question_choices[i].id === answerList.id)
            if (data.multi_choice.question_choices[i].is_right !== 1)
              choiceColor = "#F14D76";
        }
      }
      return (
        <div className="review-option-content" key={answerList.id}>
          <span>
            <FontAwesomeIcon icon={faCircle} color={choiceColor} />
            {/*color right #00C985, color false #F14D76 */}
          </span>

          <p>{answerList.answer}</p>
        </div>
      );
    });
    return (
      <div
        className="review-question-container"
        style={{ borderLeft: `10px solid` + this.state.rightQuestionColor }}
      >
        <div className="review-question-content">
          <p>
            {index + 1}. {data.question.question}
          </p>
        </div>
        <hr />
        <div className="review-question-options">{answerElm}</div>
      </div>
    );
  }
}

export default ReviewQuestion;

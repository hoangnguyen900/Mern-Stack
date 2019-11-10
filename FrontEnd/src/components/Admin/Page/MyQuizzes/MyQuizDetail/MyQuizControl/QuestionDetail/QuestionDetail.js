import React from 'react';
import './QuestionDetail.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPencilAlt,
  faCopy,
  faTrashAlt,
  faCircle,
  faClock
} from "@fortawesome/free-solid-svg-icons";
class QuizControlQuestionDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="quiz-control-question-container">
                <div className="quiz-control-question-header">
                    <div className="question-ordinal">
                        Question 1
                    </div>

                    <div className="question-tick">
                        <span>
                            <FontAwesomeIcon icon={faClock}/>
                        </span>
                        30 seconds
                    </div>
                </div>
                <div className="quiz-control-question-body"></div>
                <div className="quiz-control-question-footer"></div>
            </div>
         );
    }
}
 
export default QuizControlQuestionDetail;
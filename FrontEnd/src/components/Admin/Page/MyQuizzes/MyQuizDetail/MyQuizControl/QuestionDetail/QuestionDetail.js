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
        this.state = {}
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
                            <FontAwesomeIcon icon={faClock} />
                        </span>
                        30 seconds
                    </div>
                </div>
                <div className="quiz-control-question-body">
                    <div className="question-content">
                        <h5> Q. Here is the question</h5>
                    </div>

                    <div className="answers-divider">
                        <div className="divider-name">
                            <p>answer choices</p>
                        </div>
                        <hr />
                    </div>

                    <div className="question-content-list">
                        <div className="q-content">
                            <span>
                                <FontAwesomeIcon
                                    icon={faCircle}
                                    color="#F14D76"s size="lg"
                                />
                                <span>1sssssssssssssssssssssssssssssssssssss</span>
                            </span>
                        </div>

                        <div className="q-content">
                            <span>
                                <FontAwesomeIcon
                                    icon={faCircle}
                                    color="#F14D76"s size="lg"
                                />
                                <span>2ssssssssssssssssssssssssssssssssss</span>
                            </span>
                        </div>

                        <div className="q-content">
                            <span>
                                <FontAwesomeIcon
                                    icon={faCircle}
                                    color="#F14D76"s size="lg"
                                />
                                <span>3sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</span>
                            </span>
                        </div>

                        <div className="q-content">
                            <span>
                                <FontAwesomeIcon
                                    icon={faCircle}
                                    color="#F14D76"s size="lg"
                                />
                                <span>4ssssssssssssssssssssssssssssssssss</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="quiz-control-question-footer"></div>
            </div>
        );
    }
}

export default QuizControlQuestionDetail;
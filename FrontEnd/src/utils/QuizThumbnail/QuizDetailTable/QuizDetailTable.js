import React from 'react';
import './QuizDetailTable.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTimesCircle,

} from "@fortawesome/free-solid-svg-icons";
class QuizDetailTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplay: "block"
        }
    }
    render() {
        return (
            <div>
                <div className="popup-quiz-detail-table">
                    <div className="popup_inner-quiz-detail-table">
                        <div className="popup-header-quiz-detail-table">

                            <img src={require("../images/thumbnail.jpg")} alt="thumbnail" />
                            <button><FontAwesomeIcon icon={faTimesCircle} size="2x" color={"#60615F"} /></button>
                            <div className="quiz-flat-info">
                                <div className="question-number">
                                    15 Qs
                            </div>
                                <div className="play-number">
                                    10 plays
                            </div>
                            </div>
                            <div className="quiz-name">
                                <span>
                                    Basic English
                            </span>
                            </div>
                            <div className="author-container">
                                <img src={require("../images/ava.png")} alt="ava" />
                                <div className="author-name">
                                    Tri Hoang
                            </div>
                                <div className="grade">
                                    Grades: <span> 1th to 2th</span>{/*bind at 1st and 2nd */}
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className="popup-body-quiz-detail-table">
                            <div className="difficult-level">
                                Difficult level: <span>Medium</span>
                            </div>
                            <h5>Sample questions</h5>
                            <div className="sample-questions-container">
                                <div className="sample-question">
                                    <div className="sample-content">
                                        1. What are you doing?????????????????????????????????????????????????????
                                </div>
                                    <div className="sample-image">
                                        <img src={require("../images/sample.jpg")} alt="sampleImage" />
                                    </div>
                                </div>
                                <div className="sample-question">
                                    <div className="sample-content">
                                        1. What are you doing?
                                </div>
                                    <div className="sample-image">
                                        <img src={require("../images/sample.jpg")} alt="sampleImage" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="popup-footer-quiz-detail-table">
                            <button>Play</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuizDetailTable;
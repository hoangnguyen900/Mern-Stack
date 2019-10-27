import React from "react";
import "./ReviewAttempt.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import ReviewQuestion from './ReviewQuestion/ReviewQuestion';
class ReviewAttempt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="review-attempt-container">
                <div className="review-attempt-nav">
                    <button>
                        <span>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </button>
                </div>
                <div className="review-attempt-show-container">
                    <div className="review-sumary">
                        <div className="stick-top-action-container">
                            <button>Play again</button>
                        </div>

                        <h4 className="review-section-title" >
                            Game Sumary
                        </h4>

                        <div className="attempt-result-container">
                            <div className="attempt-result">
                                <img  src={require("./images/Review.png")} className="review-camera" alt="reviewCamera"/>
                                <div className="review-name-and-point">
                                    <div className="review-name">
                                        Minh Tri
                                    </div>
                                    <div className="review-point">
                                        <span>Point:</span> 3333
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h4 className="review-section-title" >
                            Accuracy
                        </h4>

                        <div className="review-accuracy-container">
                            <div className="review-progress-container">
                                <div className="review-progress review-progress-moved">
                                    <div className="review-progress-bar"><span>80%</span></div>
                                </div>
                            </div>
                        </div>

                        <h4 className="review-section-title" >
                            Performance
                        </h4>

                        <div className="review-performance-group-container">
                            <div className="review-performance-container">
                                <img src={require("./images/Correct.png")} 
                                className="review-blur-image" alt="blurImage" />
                                <div className="review-detail-correct">
                                    <h2>3</h2>
                                    <h4>Correct</h4>
                                </div>
                            </div>
                            <div className="review-performance-container">
                                <img src={require("./images/incorrect.png")} 
                                className="review-blur-image" alt="blurImage" />
                                <div className="review-detail-correct">
                                    <h2>3</h2>
                                    <h4>Incorrect</h4>
                                </div>
                            </div>
                            <div className="review-performance-container">
                                <img src={require("./images/unattempt.png")} 
                                className="review-blur-image" alt="blurImage" />
                                <div className="review-detail-correct">
                                    <h2>3</h2>
                                    <h4>Unattempt</h4>
                                </div>
                            </div>
                        </div>

                        <h4 className="review-section-title" >
                            Review questions
                        </h4>

                        <div className="review-questions-container">
                            <ReviewQuestion/>
                            <ReviewQuestion/>
                            <ReviewQuestion/>
                            <ReviewQuestion/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReviewAttempt;

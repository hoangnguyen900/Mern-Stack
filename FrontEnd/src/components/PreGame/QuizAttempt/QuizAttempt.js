import React from 'react';
import './QuizAttempt.scss';
class QuizAttempt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="attempt-detail-container">
                <div className="attempt-number-and-review-btn">
                    <div className="attempt-number">
                        Attempt 1
                    </div>
                    <div className="review-btn">
                        <button>Review</button>
                    </div>
                </div>
                <div className="accuracy">
                    <div className="pr-ing">
                        <div className="pr-bar">45% accuracy</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuizAttempt;
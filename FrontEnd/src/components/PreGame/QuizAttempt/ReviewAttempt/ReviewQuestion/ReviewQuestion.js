import React from 'react';
import './ReviewQuestion.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
class ReviewQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="review-question-container">
                <div className="review-question-content">
                    <p>1.  Where is Mother Of Dragon</p>
                </div>
                <hr/>
                <div className="review-question-options">
                    <div className="review-option-content">
                        <span>
                            <FontAwesomeIcon icon={faCircle}/> {/*color right #00C985, color false #F14D76 */}
                        </span>

                        <p>Home</p>
                    </div>
                    <div className="review-option-content">
                        <span>
                            <FontAwesomeIcon icon={faCircle}/>
                        </span>

                        <p>Westoror</p>
                    </div>

                    <div className="review-option-content">
                        <span>
                            <FontAwesomeIcon icon={faCircle}/>
                        </span>

                        <p>Winterfell</p>
                    </div>

                    <div className="review-option-content">
                        <span>
                            <FontAwesomeIcon icon={faCircle}/>
                        </span>

                        <p>Iron Island</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReviewQuestion;
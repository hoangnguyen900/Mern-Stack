import React from 'react';
import './QuizAttempt.scss';
class QuizAttempt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="attempt-detail-container">
                <div className="attempt-number-and-review-btn">
                    <div className="attempt-number">

                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
         );
    }
}
 
export default QuizAttempt;
import React from 'react';
import './CreatedQuizzes.scss';
import QuizThumbnail from '../../../../utils/QuizThumbnail/QuizThumbnail';
class CreatedQuizzes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="quiz-list">
                <QuizThumbnail/>
            </div>
        );
    }
}

export default CreatedQuizzes;
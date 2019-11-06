import React from 'react';
import './MyQuizzes.scss';

import MyQuizDetail from './MyQuizDetail/MyQuizDetail';
class MyQuizzes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="my-quizzes-container">
                <div className="my-quizzes-header">
                    <div className="quizzes-count">
                        All quizzes (2)
                    </div>
                </div>
                <div className="all-my-quizzes-and-collections">
                    <div className="all-my-quizzes-container">
                        <MyQuizDetail />
                        <MyQuizDetail />
                        <MyQuizDetail />
                    </div>
                </div>


            </div>
        );
    }
}

export default MyQuizzes;
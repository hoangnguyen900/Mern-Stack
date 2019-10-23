import React from 'react';

import './QuizStart.scss';
class QuizStart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="quiz-start-container">
                <button>Start Game</button>
            </div>
        )}
}
 
export default QuizStart;
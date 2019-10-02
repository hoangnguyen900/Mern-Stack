import React from 'react';
import './QuizCreatorQuestionInput.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faSquareRootAlt, faImage } from '@fortawesome/free-solid-svg-icons'
class QuizCreatorQuestionInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="question-input">
                <FontAwesomeIcon icon={faCheckCircle} size="2x" color="#CAD2DC" />
                <input />
                <FontAwesomeIcon icon={faSquareRootAlt} size="2x" color="#CAD2DC"/>
                <FontAwesomeIcon icon={faImage} size="2x" color="#CAD2DC"/>
            </div>
        );
    }
}

export default QuizCreatorQuestionInput;
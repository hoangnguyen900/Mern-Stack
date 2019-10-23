import React from 'react';
import './PreGame.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTimes
} from "@fortawesome/free-solid-svg-icons";


import QuizAttempt from './QuizAttempt/QuizAttempt';
class PreGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="pre-game-container">
                <div className="pre-game-nav">
                    <button><span><FontAwesomeIcon icon={faTimes} /></span></button>
                </div>
                <div className="pre-game-show-container">
                    <div className="quiz-info-done">
                        <div className="quiz-basic-info-container">
                            <div className="quiz-basic-info">
                                <img className="quiz-image-sm" alt="QuizImageSmall"
                                    src={require("./images/thumbnail.jpg")} /><
                                        div className="quiz-title-and-number">
                                    <div className="quiz-title">
                                        basic english
                                </div>
                                    <div className="quiz-number-ques">
                                        5 questions
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="attempt-group-container">
                            <QuizAttempt />
                            <QuizAttempt />
                            <QuizAttempt />
                            <QuizAttempt />
                            <QuizAttempt />
                        </div>
                    </div>
                    <div className="player-config">
                        <div className="practice-btn-group">
                            <button>Play</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PreGame;
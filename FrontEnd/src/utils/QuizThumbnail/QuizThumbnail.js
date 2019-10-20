import React from 'react';
import './QuizThumbnail.scss';

class QuizThumbnail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="quiz-thumbnail-container">
                <img src={require("./images/thumbnail.jpg")} alt="thumbnail" />
                <div className="quiz-flat-info">
                    <div className="question-number">
                        10 Qs
                    </div>
                    <div className="play-number">
                        8 plays
                    </div>
                </div>
                <div className="quiz-name">
                    <span>Basic Quiz</span>
                </div>
                <div class="author-name">
                    <span><span>By:</span> Tri</span>
                </div>

                <div className="progression">
                    <div className="pr-ing">
                        <div className="pr-bar">
                            3 questions left
                        </div>
                    </div>
                </div>

                <div className="accuracy">
                    <div className="pr-ing">
                        <div className="pr-bar">
                            45% accuracy
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default QuizThumbnail;
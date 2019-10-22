import React from 'react';
import './QuizThumbnail.scss';
import QuizDetailTable from './QuizDetailTable/QuizDetailTable';
class QuizThumbnail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
        }

    }

    togglePopup = () => {
        this.setState({
            showPopup: !this.state.showPopup
        });
    };
    render() {
        return (
            <div className="quiz-thumbnail-container" onClick={this.togglePopup}>
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

                {this.state.showPopup ? (
                    <QuizDetailTable togglePopup={this.togglePopup} />
                ) : null}
            </div>
        );
    }
}

export default QuizThumbnail;
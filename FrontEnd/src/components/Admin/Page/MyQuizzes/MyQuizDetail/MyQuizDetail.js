import React from 'react';
import './MyQuizDetail.scss';
class MyQuizDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="my-quiz-detail-container">
                <div className="my-quiz-image">
                    <img alt="myquizimg" src={require("../../../../../utils/QuizThumbnail/images/thumbnail.jpg")}/>
                </div>

                <div className="my-quiz-info">

                </div>
            </div>
        );
    }
}

export default MyQuizDetail;
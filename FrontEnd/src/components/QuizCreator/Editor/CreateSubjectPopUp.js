import React from 'react';
import './Editor.scss';
class CreateGradePopUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="subject-popup-container">
                <div className="popup">
                    <form>
                        <div className="popup_inner">

                            <div className="popup-header">

                                <p>
                                    <img src={require("./images/grade.png")} alt="quiz-icon" />
                                    Update quiz
                                </p>
                                <hr />
                            </div>
                            <div className="popup-body">
                                <div className="init-quiz-name-quiz">
                                    <p>1. Name the quiz </p>
                                    <input
                                        type="text"
                                        name="title"

                                    />
                                </div>
                                <div className="init-quiz-choose-subject">
                                    <p>2. Choose the consistent subject</p>

                                    <div className="subject-clouds">
                                        <div className="subject" >
                                            <button
                                                type="button"
                                                name="subject_id"
                                            >
                                                asdasd
                                            </button>
                                        </div>
                                        <div className="subject" >
                                            <button
                                                type="button"
                                                name="subject_id"
                                            >
                                                asdasdsssss
                                        </button>
                                        </div>
                                    </div>



                                </div>
                                {/* <p>sub id: {this.state.data.subject_id}</p> */}
                                <hr />
                            </div>
                            <div className="popup-footer">
                                <button
                                    className="b-cancel"
                                    type="button"
                                    onClick={this.props.closePopup}
                                >
                                    Cancel
                                </button>
                                <button className="b-create" type="submit">Create</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateGradePopUp;
import React from 'react';
import './Activity.scss'
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

import CreatedQuizzes from './CreatedQuizzes/CreatedQuizzes';
class Activity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="activity-container">
                <div className="quiz-type-navbar">
                    <div className="tab-link">
                        <NavLink to="/join/activity/created" activeClassName="active-quiz-link">
                            <span>
                                <FontAwesomeIcon icon={faFileAlt} />
                            </span>
                            Created Quizzes
                        </NavLink>
                    </div>
                    <div className="tab-link">
                        <NavLink to="/join/activity/completed" activeClassName="active-quiz-link">
                            <span>
                                <FontAwesomeIcon icon={faClipboardCheck} />
                            </span>
                            Completed Quizzes
                        </NavLink>
                    </div>
                </div>
                <div className="activity-quizzes-container">
                    <CreatedQuizzes/>
                </div>
            </div>
        );
    }
}

export default Activity;
import React from 'react';
import './Page.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlusCircle,
    faSearch,
    faFileAlt,
    faChartBar,
    faFolder,
    faUserAlt,
    faCogs,
    faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import MyQuizzes from './MyQuizzes/MyQuizzes';
class AdminPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="admin-page-container">
                <div className="admin-control-container">
                    <div className="admin-name-and-ava">
                        <div className="admin-ava">
                            <img alt="adminava" src={require("../../../utils/QuizThumbnail/images/ava.png")} />
                        </div>
                        <div className="admin-name">
                            Minh Tri
                            <button className="admin-profile">
                                View Profile
                            </button>
                        </div>
                    </div>
                    <div className="admin-create-new-quiz">
                        <button>
                            <span>
                                <FontAwesomeIcon icon={faPlusCircle} />
                            </span>
                            Create new quiz
                        </button>
                    </div>
                    <div className="admin-find-quiz">
                        <button className="btn-admin-find-quiz">
                            <span>
                                <FontAwesomeIcon icon={faSearch} size="lg" />
                            </span>
                            Find a quiz
                        </button>
                    </div>
                    <div className="admin-my-quizzes">
                        <button className="btn-admin-find-quiz" style={{ borderLeft: '4px solid #FD7E14' }}>
                            <span>
                                <FontAwesomeIcon icon={faFileAlt} size="lg" color="#FD7E14" />
                            </span>
                            My quizzes
                        </button>
                    </div>
                    <div className="admin-reports">
                        <button className="btn-admin-find-quiz" >
                            <span>
                                <FontAwesomeIcon icon={faChartBar} size="lg" />
                            </span>
                            Reports
                        </button>
                    </div>
                    <div className="admin-collections">
                        <button className="btn-admin-find-quiz">
                            <span>
                                <FontAwesomeIcon icon={faFolder} size="lg" />
                            </span>
                            Collections
                        </button>
                    </div>
                    <hr />
                    <div className="admin-profile">
                        <button className="btn-admin-find-quiz">
                            <span>
                                <FontAwesomeIcon icon={faUserAlt} size="lg" />
                            </span>
                            Profile
                        </button>
                    </div>
                    <div className="admin-settings">
                        <button className="btn-admin-find-quiz">
                            <span>
                                <FontAwesomeIcon icon={faCogs} size="lg" />
                            </span>
                            Settings
                        </button>
                    </div>
                    <div className="admin-log-out">
                        <button className="btn-admin-find-quiz">
                            <span>
                                <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
                            </span>
                            Log out
                        </button>
                    </div>
                </div>

                <div className="admin-tab-select-container">
                    <MyQuizzes/>
                </div>
            </div>
        );
    }
}

export default AdminPage;
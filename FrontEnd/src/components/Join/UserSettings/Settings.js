import React from 'react';
import './Settings.scss';
import JoinNav from '../Nav/Nav';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight, faUser, faCogs
} from "@fortawesome/free-solid-svg-icons";
class UserSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="settings-wrapper">
                <JoinNav />
                <div className="settings-container">
                    <h3 className="page-title">Settings</h3>
                    <div className="profile-settings">
                        <div className="set-section-name">
                            <span style={{ marginRight: '10px' }}><FontAwesomeIcon icon={faUser} color="#FD7E14" /></span>
                            Profile
                        </div>
                        <div className="set-ava">
                            <div className="settings-section">
                                <div className="set-section-title">
                                    Ava
                                </div>
                                <div className="set-section-content">
                                    Nox
                                </div>
                            </div>
                            <span className="set-icon"><FontAwesomeIcon icon={faChevronRight} /></span>
                        </div>
                        <div className="set-user-name">
                            <div className="settings-section">
                                <div className="set-section-title">
                                    Username
                                </div>
                                <div className="set-section-content">
                                    Nox
                                </div>
                            </div>
                            <span className="set-icon"><FontAwesomeIcon icon={faChevronRight} /></span>
                        </div>
                        <div className="set-name">
                            <div className="settings-section">
                                <div className="set-section-title">
                                    Name
                                </div>
                                <div className="set-section-content">
                                    Nox
                                </div>
                            </div>
                            <span className="set-icon"><FontAwesomeIcon icon={faChevronRight} /></span>
                        </div>
                        <div className="set-grade">
                            <div className="settings-section">
                                <div className="set-section-title">
                                    Grade
                                </div>
                                <div className="set-section-content">
                                    Nox
                                </div>
                            </div>
                            <span className="set-icon"><FontAwesomeIcon icon={faChevronRight} /></span>
                        </div>
                    </div>

                    <div className="account-settings" style={{marginTop: '30px'}}>
                        <div className="set-section-name">
                            <span style={{ marginRight: '10px' }}><FontAwesomeIcon icon={faCogs} color="#FD7E14" /></span>
                            Account settings
                        </div>

                        <div className="set-update-pass-section">  
                            <div className="sec-title">Update password</div>
                            <span><FontAwesomeIcon icon={faChevronRight}/></span>
                        </div>

                        <div className="set-delete-section">
                        <div className="sec-title">Delete account</div>
                            <span><FontAwesomeIcon icon={faChevronRight}/></span>
                        </div>

                        <div className="set-logout-section">
                        <div className="sec-title">Log out</div>
                            <span><FontAwesomeIcon icon={faChevronRight}/></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserSettings;
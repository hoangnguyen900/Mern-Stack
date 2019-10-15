import React from 'react';

import './Nav.scss';
import LoginPopup from '../Popup/CreatePopup';
class HomeNav extends React.Component {
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
    }
    render() {
        return (
            <div className="home-nav-container">
                <div className="button-group">
                    <button className="b-log-in"
                        onClick={this.togglePopup}>Login</button>
                    <button className="b-sign-up">Sign up</button>
                </div>

                {this.state.showPopup ? (
                    <LoginPopup
                        togglePopup={this.togglePopup}
                    />
                ) : null}
            </div>
        );
    }
}

export default HomeNav;

import React from 'react';
import './CreatePopup.scss';
class LoginPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplay: "block",
        }
    }

    render() {
        return (
            <div className="popup">
                <div className="popup_inner">
                    <div className="popup-header"></div>
                    <div className="popup-body"></div>
                    <div className="popup-footer">
                        <button className="b-close"
                         type="button"
                         onClick={this.props.togglePopup}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPopup;
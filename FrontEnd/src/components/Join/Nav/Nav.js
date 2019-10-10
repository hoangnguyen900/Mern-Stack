import React from 'react';
import "./Nav.scss";
class JoinNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="join-nav-container">
                <button>Create new Quiz</button>
            </div>
        );
    }
}

export default JoinNav;
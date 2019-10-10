import React from 'react';
import './Join.scss'

import JoinNav from '../../components/Join/Nav/Nav';
class Join extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="join-container">
                <JoinNav/>
            </div>
        );
    }
}

export default Join;
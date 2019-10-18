import React from 'react';
import './Join.scss'

import Join from '../../components/Join/Join';
class JoinLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="join-layout-container">
                <Join/>
            </div>
        );
    }
}

export default JoinLayout;
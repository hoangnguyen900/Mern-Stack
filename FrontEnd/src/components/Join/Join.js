import React from 'react';
import './Join.scss'
import { Router, Route, Switch } from "react-router-dom";
import history from "../../history";

import JoinNav from './Nav/Nav';
import Activity from './Activity/Activity';
class Join extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="join-container">
                <JoinNav />
                <Router history={history}>
                    <Switch>
                        <Route exact path="/join" render={() => {
                            return (<div className="enter-quiz">
                                <div className="code-field">
                                    <div className="input-code">
                                        <input placeholder="Enter some quiz code " />
                                        <button>Join</button>
                                    </div>
                                </div>
                                <div className="profile-field"></div>
                            </div>)
                        }} />


                        <Route exact path="/join/activity" component={Activity} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Join;
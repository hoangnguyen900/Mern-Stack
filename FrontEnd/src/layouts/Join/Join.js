import React from "react";
import "./Join.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import JoinNav from "../../components/Join/Nav/Nav";
import Activity from "../../components/Join/Activity/Activity";
import Join from "../../components/Join/Join";

class JoinLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
        <div className="join-layout-container">
          <JoinNav />
          <br></br>
          <Switch>
            <Route exact path="/join">
              <Join />
            </Route>
            <Route path="/join/activity">
              <Activity />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default JoinLayout;

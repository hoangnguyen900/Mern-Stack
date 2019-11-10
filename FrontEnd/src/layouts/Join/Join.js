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
    let { match } = this.props;
    console.log(match);

    return (
      <BrowserRouter>
        <div className="join-layout-container">
          <JoinNav />
          <br></br>
          <Switch>
            <Route exact path={`${match.url}`}>
              <Join match={match} />
            </Route>
            <Route
              path={`${match.url}/activity`}
              render={({ match }) => <Activity match={match} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default JoinLayout;

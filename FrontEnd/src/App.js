import React from "react";
//import Create from './layouts/Quiz/Create/Create';
import "./App.scss";
import QuizCreator from "./layouts/Quiz/QuizCreator/QuizCreator";
import QuizCreateModal from "./layouts/Quiz/QuizCreateModal/QuizCreateModal";

import DoQuiz from "./layouts/DoQuiz/DoQuiz";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

import Join from "./layouts/Join/Join";
import Home from "./layouts/Home/Home";
import PreGame from './components/PreGame/PreGame';
import QuizStart from './components/Join/QuizStart/QuizStart';
class App extends React.Component {
  render() {
    return (
      <div className="page-container">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/quiz/:question_table_id"
              render={({ match }) => <QuizCreator match={match} />}
            />

            <Route exact path="/join" component={Join} />
            <Route
              path="/admin/:admin"
              render={({ match }) => <QuizCreateModal match={match} />}
            />

            <Route
              path="/join/game/:question_table_id"
              render={({ match }) => <DoQuiz match={match} />}
            />

            <Route path="/join/:question_table_id/start">
              <QuizStart />
            </Route>

            <Route
              path="/join/pre-game"
              render={({ match }) => <PreGame match={match} />}
            />
            {/* <Route
              path="/signup"
              component = {SignUp}
            /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

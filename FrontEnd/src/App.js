import React from "react";
//import Create from './layouts/Quiz/Create/Create';
import "./App.scss";
import QuizCreator from "./layouts/Quiz/QuizCreator/QuizCreator";
import QuizCreateModal from "./layouts/Quiz/QuizCreateModal/QuizCreateModal";

// import DoQuiz from "./layouts/DoQuiz/DoQuiz";
import { Router, Route } from "react-router-dom";
import history from "./history";

import Join from "../src/layouts/Join/Join";
class App extends React.Component {
  render() {
    return (
      <div className="page-container">
        <Router history={history}>
          <Route exact path="/as" component={QuizCreateModal} />
          <Route path="/" component={QuizCreator} />

          <Route path="/join" component={Join} />
          <Route path="/admin" component={QuizCreateModal} />
        </Router>
      </div>
    );
  }
}

export default App;

import React from "react";
//import Create from './layouts/Quiz/Create/Create';
import "./App.scss";
import QuizCreator from "./layouts/Quiz/QuizCreator/QuizCreator";
import QuizCreateModal from "./layouts/Quiz/QuizCreateModal/QuizCreateModal";

// import DoQuiz from "./layouts/DoQuiz/DoQuiz";
import { Router, Route } from "react-router-dom";
import history from "./history";
class App extends React.Component {
  render() {
    return (
      <div className="page-container">
        <Router history={history}>
          <Route exact path="/" component={QuizCreateModal} />
          <Route path="/quiz" component={QuizCreator} />

          {/* <Route path="/join" component={Join} /> */}
          <Route path="/admin" component={QuizCreateModal} />
        </Router>
        {/* <DoQuiz/> */}
      </div>
    );
  }
}

export default App;

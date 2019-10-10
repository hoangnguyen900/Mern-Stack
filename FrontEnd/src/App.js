import React from "react";
//import Create from './layouts/Quiz/Create/Create';
import "./App.scss";
import QuizCreator from "./layouts/Quiz/QuizCreator/QuizCreator";
// import DoQuiz from "./layouts/DoQuiz/DoQuiz";

import Join from '../src/layouts/Join/Join';
class App extends React.Component {
  render() {
    return (
      <div className="page-container">
        {/* <QuizCreator /> */}
        <Join/>
        {/* <DoQuiz/> */}
      </div>
    );
  }
}

export default App;

import React from 'react';
import {QuizCreatorEditor} from '../../../components/QuizCreatorEditor/QuizCreatorEditor';
import './QuizCreator.scss';
import QuizCreatorNav from '../../../components/QuizCreatorNav/QuizCreatorNav';
class QuizCreator extends React.Component {
  render() {
    return (
      <div className="page-container">
        <QuizCreatorNav/>
        <QuizCreatorEditor/>
      </div>
    );
  }
}

export default QuizCreator;
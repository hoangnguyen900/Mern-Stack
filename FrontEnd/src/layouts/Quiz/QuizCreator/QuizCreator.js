import React from 'react';
import {QuizCreatorEditor} from '../../../components/QuizCreator/Editor/Editor';
import './QuizCreator.scss';
import QuizCreatorNav from '../../../components/QuizCreator/Nav/Nav';
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
import React from 'react';
import QuizCreate from '../../../../src/components/QuizCreateModal/QuizCreateModal';
import './Create.scss';
class Create extends React.Component {
  render() {
    return (
      <div className="page-container">
        <QuizCreate />
      </div>
    );
  }
}

export default Create;
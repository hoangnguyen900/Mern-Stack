import React from 'react';
import './MyQuizzes.scss';

import MyQuizDetail from './MyQuizDetail/MyQuizDetail';

import { connect } from "react-redux";
import * as actions from '../../../../redux/actions/index';
class MyQuizzes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount(){
        this.props.getListQuestionTable();
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        console.log(nextProps);
    }
    render() {
        return (
            <div className="my-quizzes-container">
                <div className="my-quizzes-header">
                    <div className="quizzes-count">
                        All quizzes (2)
                    </div>
                </div>
                <div className="all-my-quizzes-and-collections">
                    <div className="all-my-quizzes-container">
                        <MyQuizDetail />
                        <MyQuizDetail />
                        <MyQuizDetail />
                    </div>
                </div>


            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
      getListQuestionTable: () => {
        dispatch(actions.getListQuestionTable());
      },
  
      getListUserDoQuestionTable: () => {
        dispatch(actions.getListUserDoQuestionTable());
      }
    };
  };
  const mapStateToProps = state => {
    return {
      questionTable: state.questionTable,
      user: state.user
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(MyQuizzes);
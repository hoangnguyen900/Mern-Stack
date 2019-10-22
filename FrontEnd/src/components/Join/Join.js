import React from "react";
import "./Join.scss";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/index";

class Join extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    //get data API from backend
    this.props.getListQuestionTable();
  }
  render() {
    return (
      <div className="join-container">
        <div className="enter-quiz">
          <div className="code-field">
            <div className="input-code">
              <input placeholder="Enter some quiz code " />
              <button>Join</button>
            </div>
          </div>
          <div className="profile-field"></div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    getListQuestionTable: () => {
      dispatch(actions.getListQuestionTable());
    }
  };
};
const mapStateToProps = state => {
  return {
    questionTable: state.questionTable,
    user: state.user
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Join);

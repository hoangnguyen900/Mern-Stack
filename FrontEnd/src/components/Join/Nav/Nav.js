import React from "react";
import "./Nav.scss";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/index";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faSearch,
  faHome,
  faHistory
} from "@fortawesome/free-solid-svg-icons";
import history from "../../../history";
class JoinNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    //get data API from backend
    this.props.getListQuestionTable();
    this.props.getListUserDoQuestionTable();
  }

  render() {
    let token = localStorage.getItem("token");
    return (
      <div className="join-nav-container">
        <div className="logo">
          <img
            src={require("../../../utils/images/logo.png")}
            alt="quiz-icon"
          />
        </div>

        <div className="input-field">
          <input placeholder="Search for a quiz                                     " />
          <div className="search-icon">
            <FontAwesomeIcon icon={faSearch} size="lg" color="gray" />
          </div>
        </div>

        <div className="tab-field">
          <div className="tab-link">
            <NavLink exact to="/join" activeClassName="active-link">
              <span>
                <FontAwesomeIcon icon={faHome} />
              </span>
              Home
            </NavLink>
          </div>
          <div className="tab-link">
            <NavLink to="/join/activity" activeClassName="active-link">
              <span>
                <FontAwesomeIcon icon={faHistory} />
              </span>
              Activity
            </NavLink>
          </div>
        </div>

        <div className="button-group">
          <button
            className="b-sign-up"
            onClick={() => history.push(`/admin/quiz/${token}`)}
          >
            <FontAwesomeIcon icon={faPlusCircle} /> Create new Quiz
          </button>
        </div>
        <br />
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
export default connect(mapStateToProps, mapDispatchToProps)(JoinNav);

import React from "react";
import "./Nav.scss";
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
            <NavLink to="/join" activeClassName="active-link">
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
            onClick={() => history.push(`/admin/${token}`)}
          >
            <FontAwesomeIcon icon={faPlusCircle} /> Create new Quiz
          </button>
        </div>
      </div>
    );
  }
}

export default JoinNav;

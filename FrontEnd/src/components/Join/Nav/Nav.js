import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faSearch } from "@fortawesome/free-solid-svg-icons";

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
          <input placeholder="Search for a quiz" />
          <span>
            <FontAwesomeIcon icon={faSearch} size="lg" color="gray" />
          </span>
        </div>

        <div className="tab-field"></div>

        <div className="button-group">
          <button className="b-sign-up">
            <FontAwesomeIcon icon={faPlusCircle} />
            <Link style={{ color: "white" }} to={`/admin/${token}`}>
              Create new Quiz
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default JoinNav;

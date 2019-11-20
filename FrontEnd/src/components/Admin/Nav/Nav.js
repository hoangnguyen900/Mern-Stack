import React from "react";
import "./Nav.scss";
import history from "../../../history";
class AdminNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="admin-nav">
        <div className="logo">
          <img
            src={require("../../../utils/images/logo.png")}
            alt="quiz-icon"
          />
        </div>
        <div class="admin-nav-btn">
          <button
            onClick={() => {
              history.push("/");
            }}
          >
            Join a game
          </button>
        </div>
      </div>
    );
  }
}

export default AdminNav;

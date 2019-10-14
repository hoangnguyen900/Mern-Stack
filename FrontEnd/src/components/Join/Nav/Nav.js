import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

class JoinNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="join-nav-container">
        <Link to="/admin/1">Create new Quiz</Link>
      </div>
    );
  }
}

export default JoinNav;

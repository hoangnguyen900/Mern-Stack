import React from "react";
import "./Join.scss";

class Join extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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

export default Join;

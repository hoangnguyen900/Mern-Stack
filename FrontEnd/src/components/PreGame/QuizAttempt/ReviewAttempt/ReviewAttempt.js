import React from "react";
import "./ReviewAttempt.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
class ReviewAttempt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="review-attempt-container">
        <div className="review-attempt-nav">
          <button>
            <span>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default ReviewAttempt;

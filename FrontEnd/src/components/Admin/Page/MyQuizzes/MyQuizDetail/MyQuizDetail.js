import React from "react";
import "./MyQuizDetail.scss";
import { withRouter } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faBook } from "@fortawesome/free-solid-svg-icons";
class MyQuizDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { history } = this.props;
    return (
      <div
        className="my-quiz-detail-container"
        onClick={() => {
          history.push("/admin/private/1");
        }}
      >
        <div className="my-quiz-image">
          <img
            alt="myquizimg"
            src={require("../../../../../utils/QuizThumbnail/images/thumbnail.jpg")}
          />
        </div>

        <div className="my-quiz-info">
          <div className="name-and-status">
            <div className="name">
              basic english<span>(4 Qs)</span>
            </div>
            <div className="is-drafting">Draft</div>
          </div>
          <div className="play-detail">
            <div className="play">
              <span>
                <FontAwesomeIcon icon={faPlay} color="#6B7C93" />
              </span>
              Played 4 times
            </div>
            <div className="grade">
              <span>
                <FontAwesomeIcon icon={faBook} color="#6B7C93" />
              </span>
              1 st grade - 2nd grade
            </div>
          </div>
          <div className="quiz-action"></div>
        </div>
      </div>
    );
  }
}

export default withRouter(MyQuizDetail);

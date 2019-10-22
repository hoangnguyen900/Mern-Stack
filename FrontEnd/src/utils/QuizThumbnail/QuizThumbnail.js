import React from "react";
import "./QuizThumbnail.scss";
import { connect } from "react-redux";
import * as actions from "./../../redux/actions/index";
import QuizDetailTable from "./QuizDetailTable/QuizDetailTable";
class QuizThumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        id: 0,
        code: 0,
        title: "",
        image: "",
        played: 0,
        questions: []
      },
      isShowPopup: false
    };
  }
  componentDidMount() {
    let { data } = this.props;
    this.setState({
      data: data
    });
  }

  togglePopup = () => {
    this.setState({
      isShowPopup: !this.state.isShowPopup
    });
  };
  render() {
    let { data } = this.state;
    //console.log("props", this.props.data);
    return (
      <div className="quiz-thumbnail-container" onClick={this.togglePopup}>
        <img src={require("./images/thumbnail.jpg")} alt="thumbnail" />
        <div className="quiz-flat-info">
          <div className="question-number">{data.questions.length} Qs</div>
          <div className="play-number">
            {data.played !== 0 ? data.played : "0"} plays
          </div>
        </div>
        <div className="quiz-name">
          <span>{data.title}</span>
        </div>
        <div className="author-name">
          <span>
            <span>By:</span> {this.props.userName}
          </span>
        </div>

        <div className="progression">
          <div className="pr-ing">
            <div className="pr-bar">3 questions left</div>
          </div>
        </div>

        <div className="accuracy">
          <div className="pr-ing">
            <div className="pr-bar">45% accuracy</div>
          </div>
        </div>
        {this.state.isShowPopup ? (
          <QuizDetailTable
            togglePopup={this.togglePopup}
            data={data}
            userName={this.props.userName}
          />
        ) : null}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    showListQuestionAnswer: question_table_id => {
      dispatch(actions.showListQuestionAnswer(question_table_id));
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
)(QuizThumbnail);

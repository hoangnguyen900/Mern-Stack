import React from "react";
import "./Editor.scss";
import { connect } from "react-redux";
import * as actions from "./../../../redux/actions/index";
class ShowSubjectPopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: []
    };
  }
  componentDidMount() {
    let { data } = this.props;
    this.setState({
      ...data
    });
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      subjects: nextProps.subject
    });
  }
  render() {
    let { subjects } = this.state;

    const element = subjects.map(subj => {
      return (
        //active-subject
        <div
          className={
            this.state.subject.id === subj.id
              ? "subject active-subject"
              : "subject"
          }
          key={subj.id}
        >
          <button
            type="button"
            name="subject_id"
            value={subj.id}
            onClick={this.onChangeHandler}
          >
            {subj.title}
          </button>
        </div>
      );
    });
    return (
      <div className="subject-popup-container">
        <div className="popup">
          <form>
            <div className="popup_inner">
              <div className="popup-header">
                <p>
                  <img src={require("./images/grade.png")} alt="quiz-icon" />
                  Update quiz
                </p>
                <hr />
              </div>
              <div className="popup-body">
                <div className="init-quiz-name-quiz">
                  <p>1. Name the quiz </p>
                  <input type="text" name="title" />
                </div>
                <div className="init-quiz-choose-subject">
                  <p>2. Choose the consistent subject</p>

                  <div className="subject-clouds">
                    <div className="subject">
                      <button type="button" name="subject_id">
                        asdasd
                      </button>
                    </div>
                    <div className="subject">
                      <button type="button" name="subject_id">
                        asdasdsssss
                      </button>
                    </div>
                  </div>
                </div>
                {/* <p>sub id: {this.state.data.subject_id}</p> */}
                <hr />
              </div>
              <div className="popup-footer">
                <button
                  className="b-cancel"
                  type="button"
                  onClick={this.props.closePopup}
                >
                  Cancel
                </button>
                <button className="b-create" type="submit">
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    showListSubject: () => {
      dispatch(actions.showListSubject());
    }
  };
};
const mapStateToProps = state => {
  return {
    questionTable: state.questionTable,
    subject: state.subject
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShowSubjectPopUp);

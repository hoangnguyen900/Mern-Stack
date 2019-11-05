import React from "react";
import "./Join.scss";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/index";
import QuizDetailTable from "../../utils/QuizThumbnail/QuizDetailTable/QuizDetailTable";
class Join extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: 0,
      questionTable: {},
      showQuizCode: false
    };
  }
  componentDidMount() {
    //get data API from backend
    this.props.getListQuestionTable();
    this.props.getListUserDoQuestionTable();
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps.user);
    localStorage.setItem(
      "username",
      `${nextProps.user[0].first_name} ${nextProps.user[0].last_name}`
    );
    this.setState({
      showQuizCode: nextProps.user.showQuizCode,
      questionTable: nextProps.user.questionTable
    });
  }
  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  enterCodeOnClickHandler = () => {
    this.props.getQuestionTableByCode(parseInt(this.state.code));
  };
  togglePopup = () => {
    this.setState({
      showQuizCode: !this.state.showQuizCode
    });
  };
  render() {
    let { questionTable } = this.state;

    return (
      <div className="join-container">
        <div className="enter-quiz">
          <div className="code-field">
            <div className="input-code">
              <input
                name="code"
                onChange={this.onChangeHandler}
                placeholder="Enter some quiz code "
              />
              <button onClick={this.enterCodeOnClickHandler}>Join</button>
            </div>
          </div>
          <div className="profile-field"></div>
        </div>
        {this.state.showQuizCode ? (
          <QuizDetailTable
            togglePopup={this.togglePopup}
            data={questionTable}
            userName={`${questionTable.user.first_name} ${questionTable.user.last_name}`}
          />
        ) : null}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    getListQuestionTable: () => {
      dispatch(actions.getListQuestionTable());
    },
    getQuestionTableByCode: code => {
      dispatch(actions.getQuestionTableByCode(code));
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Join);

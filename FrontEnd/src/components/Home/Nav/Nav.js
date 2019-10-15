import React from "react";
import history from "../../../history";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/index";
import "./Nav.scss";
import LoginPopup from "../Popup/LoginPopup";
class HomeNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      checkLogin: false
    };
  }

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  };
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      checkLogin: nextProps.login.checkLogin,
      token: nextProps.login.token
    });
    console.log(nextProps);
  }
  render() {
    if (this.state.checkLogin || localStorage.getItem("token")) {
      history.push("/join");
    }
    return (
      <div className="home-nav-container">
        <div className="button-group">
          <button className="b-log-in" onClick={this.togglePopup}>
            Login
          </button>
          <button className="b-sign-up">Sign up</button>
        </div>

        {this.state.showPopup ? (
          <LoginPopup togglePopup={this.togglePopup} />
        ) : null}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    loginAPI: state => {
      dispatch(actions.loginAPI(state));
    }
  };
};
const mapStateToProps = state => {
  return {
    login: state.login
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeNav);

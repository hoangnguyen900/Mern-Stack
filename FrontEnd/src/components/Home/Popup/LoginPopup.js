import React from "react";
import "./LoginPopup.scss";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/index";
import { Link } from "react-router-dom";

class LoginPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoading: false,
      isDisplay: "block",
      checkLogin: false,
      token: ""
    };
  }
  onSubmitHandler = event => {
    event.preventDefault();
    this.setState({
      isLoading: true
    });
    this.props.loginAPI(this.state);
  };
  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      isLoading: nextProps.login.isLoading
    });
    console.log(nextProps);
  }
  render() {
    let { email, password, isLoading } = this.state;

    return (
      <div className="popup">
        <div className="popup_inner">
          <form onSubmit={this.onSubmitHandler} className="form-info">
            <div className="popup-header">
              <h1>LOGIN</h1>
            </div>
            <div className="popup-body">
              <div className="formField">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className="formField">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={this.onChangeHandler}
                />
              </div>
            </div>
            <div className="popup-footer">
              <div className="formField">
                <button type="submit" className="btn-login">
                  <div
                    className={isLoading ? "fa fa-spinner fa-spin" : ""}
                  ></div>
                  LOGIN
                </button>
                <Link to="/signup" className="link">
                  Create an account
                </Link>
              </div>
              <button
                className="b-close"
                type="button"
                onClick={this.props.togglePopup}
              >
                Close
              </button>
            </div>
          </form>
        </div>
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
)(LoginPopup);

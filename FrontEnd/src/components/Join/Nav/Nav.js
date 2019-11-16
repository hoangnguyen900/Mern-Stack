import React from "react";
import "./Nav.scss";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/index";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faSearch,
  faHome,
  faHistory
} from "@fortawesome/free-solid-svg-icons";

import { Menu, Dropdown, Button, Icon } from 'antd';
import history from "../../../history";
class JoinNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenUserActions: false
    };
  }
  componentDidMount() {
    //get data API from backend
    this.props.getListQuestionTable();
    this.props.getListUserDoQuestionTable();
  }

  userActionsHandleClick = () => {
    this.setState({
      isOpenUserActions: !this.state.isOpenUserActions
    })

  }
  render() {
    let token = localStorage.getItem("token");
    const userActions = (
      <Menu style={{ padding: '5px 0px', width: 'fit-content' }}>
        <Menu.Item style={{ borderBottom: '1px solid #e6e6e6' }}>
          <div target="_blank" rel="noopener noreferrer" >
            Tri
          </div>
        </Menu.Item>
        <Menu.Item>
          <div onClick={()=>{
            history.push("/admin")
          }} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Icon type="setting" style={{ marginRight: '10px' }}></Icon>Settings
          </div>
        </Menu.Item>
        <Menu.Item>
          <NavLink target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Icon type="logout" style={{ marginRight: '10px' }}></Icon>Log out
          </NavLink>
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="join-nav-container">
        <div className="logo">
          <img
            src={require("../../../utils/images/logo.png")}
            alt="quiz-icon"
          />
        </div>

        <div className="input-field">
          <input placeholder="Search for a quiz                                     " />
          <div className="search-icon">
            <FontAwesomeIcon icon={faSearch} size="lg" color="gray" />
          </div>
        </div>

        <div className="tab-field">
          <div className="tab-link">
            <NavLink exact to="/join" activeClassName="active-link">
              <span>
                <FontAwesomeIcon icon={faHome} />
              </span>
              Home
            </NavLink>
          </div>
          <div className="tab-link">
            <NavLink to="/join/activity" activeClassName="active-link">
              <span>
                <FontAwesomeIcon icon={faHistory} />
              </span>
              Activity
            </NavLink>
          </div>
        </div>

        <div className="button-group">
          <button
            className="b-sign-up"
            onClick={() => history.push(`/admin/quiz/${token}`)}
          >
            <FontAwesomeIcon icon={faPlusCircle} /> Create new Quiz
          </button>
          <Dropdown overlay={userActions} placement="bottomRight" trigger={['click']}>
            <Button style={{ top: 0 }} onClick={this.userActionsHandleClick}><Icon
              style={{ fontSize: '14px' }} type={this.state.isOpenUserActions ? "close" : "menu"}></Icon></Button>
          </Dropdown>
        </div>
        <br />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    getListQuestionTable: () => {
      dispatch(actions.getListQuestionTable());
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
export default connect(mapStateToProps, mapDispatchToProps)(JoinNav);

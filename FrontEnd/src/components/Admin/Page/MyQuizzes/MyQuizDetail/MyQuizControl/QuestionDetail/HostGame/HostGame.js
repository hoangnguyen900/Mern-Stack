import React from "react";
import "./HostGame.scss";
import { Menu, Dropdown, Button, Icon } from "antd";
import "antd/dist/antd.css";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import * as actions from "../../../../../../../../redux/actions/index";
class QuizControlHostGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: null
    };
  }
  componentDidMount() {
    let question_table_id = parseInt(this.props.match.params.question_table_id);
    this.props.showListQuestionAnswer(question_table_id);
  }
  onClickGenerateCodeHandler = () => {
    let question_table_id = parseInt(this.props.match.params.question_table_id);
    this.props.generateCode(question_table_id);
  };
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      code: nextProps.questionTable[0].code
    });
  }

  createHour = () =>{
    let hourtest = [];
    for(let i = 1; i< 25; i++){
      hourtest.push(<Menu.Item key={i}>{i}</Menu.Item>);
    }

    return <Menu>{hourtest}</Menu>
  }

  render() {
    let { code } = this.state;
    const day = (
      <Menu>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd menu item</Menu.Item>
        <Menu.Item key="3">3 </Menu.Item>
      </Menu>
    );

    // const hour = (
    //   <Menu>
    //     <Menu.Item key="1">1</Menu.Item>
    //     <Menu.Item key="2">2</Menu.Item>
    //     <Menu.Item key="3">3</Menu.Item>
    //     <Menu.Item key="4">4</Menu.Item>
    //     <Menu.Item key="5">5</Menu.Item>
    //     <Menu.Item key="6">6</Menu.Item>
    //     <Menu.Item key="7">7</Menu.Item>
    //     <Menu.Item key="8">8</Menu.Item>
    //     <Menu.Item key="9">9</Menu.Item>
    //     <Menu.Item key="10">10 </Menu.Item>
    //     <Menu.Item key="11">11 </Menu.Item>
    //     <Menu.Item key="12">12</Menu.Item>
    //     <Menu.Item key="13">13</Menu.Item>
    //     <Menu.Item key="14">14</Menu.Item>
    //     <Menu.Item key="15">15</Menu.Item>
    //     <Menu.Item key="16">16</Menu.Item>
    //     <Menu.Item key="17">17</Menu.Item>
    //     <Menu.Item key="18">18</Menu.Item>
    //     <Menu.Item key="19">19</Menu.Item>
    //     <Menu.Item key="20">20</Menu.Item>
    //     <Menu.Item key="21">21</Menu.Item>
    //     <Menu.Item key="22">22</Menu.Item>
    //     <Menu.Item key="23">23</Menu.Item>
    //     <Menu.Item key="24">24</Menu.Item>
    //   </Menu>
    // );
    const hour = this.createHour;

    const minute = (
      <Menu>
        <Menu.Item key="1">0</Menu.Item>
        <Menu.Item key="2">15</Menu.Item>
        <Menu.Item key="3">30</Menu.Item>
        <Menu.Item key="4">45</Menu.Item>
      </Menu>
    );
    return (
      <div className="quiz-control-host-game-container" >
        <div className="quiz-name">basic english</div>
        <div className="quiz-num">4 questions</div>
        <div className="quiz-step-text">
          Students should complete the quiz by:
        </div>
        <div className="quiz-end-day">
          <Dropdown overlay={day} trigger={["click"]}>
            <Button>
              <Icon type="calendar" /> Nov 13th <Icon type="down" />
            </Button>
          </Dropdown>
        </div>

        <div className="quiz-end-hour-minute">
          <div className="hour">
            <Dropdown overlay={hour} trigger={["click"]} > 
              <Button style={{width:'100px'}}>
                1<Icon type="down" />
              </Button>
            </Dropdown>
          </div>
          <div className="minute">
            <Dropdown overlay={minute} trigger={["click"]}>
              <Button style={{width:'100px'}}>
                1<Icon type="down" />
              </Button>
            </Dropdown>
          </div>
        </div>

        <div className="quiz-time-left">
          <span>1</span> day, <span>1</span> hour, <span>1</span> minute from
          now
        </div>

        <div className="quiz-hosting-btn">
          <button onClick={this.onClickGenerateCodeHandler}>Host Game</button>
        </div>

        <div className="generated-code-container">
          {code !== null ? code : "------"}
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    generateCode: question_table_id => {
      dispatch(actions.generateCode(question_table_id));
    },
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
)(withRouter(QuizControlHostGame));

import React from "react";
import "./HostGame.scss";
import { Menu, Dropdown, Button, Icon } from "antd";
import "antd/dist/antd.css";

class QuizControlHostGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const day = (
      <Menu>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd menu item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
      </Menu>
    );

    const hour = (
      <Menu>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd menu item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
      </Menu>
    );
    const minute = (
      <Menu>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd menu item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
      </Menu>
    );
    return (
      <div className="quiz-control-host-game-container">
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
            <Dropdown overlay={hour} trigger={["click"]}>
              <Button>
                Nov 13th <Icon type="down" />
              </Button>
            </Dropdown>
          </div>
          <div className="minute">
            <Dropdown overlay={minute} trigger={["click"]}>
              <Button>
                Nov 13th <Icon type="down" />
              </Button>
            </Dropdown>
          </div>
        </div>

        <div className="quiz-time-left">
          <span>1</span> day, <span>1</span> hour, <span>1</span> minute from
          now
        </div>

        <div className="quiz-hosting-btn">
          <button>Host Game</button>
        </div>

        <div className="generated-code-container">
          ------
        </div>
      </div>
    );
  }
}

export default QuizControlHostGame;

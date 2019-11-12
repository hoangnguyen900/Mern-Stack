import React from 'react';
import ReactDOM from 'react-dom';
import './HostGame.scss';
import { Menu, Dropdown, Button, Icon } from 'antd';


class QuizControlHostGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const menu = (
            <Menu >
                <Menu.Item key="1">
                    <Icon type="user" />
                    1st menu item
              </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="user" />
                    2nd menu item
              </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="user" />
                    3rd item
              </Menu.Item>
            </Menu>
        );
        return (
            <div className="quiz-control-host-game-container">
                <div className="quiz-name">basic english</div>
                <div className="quiz-num">4 questions</div>
                <div className="quiz-step-text">Students should complete the quiz by:</div>
                <div className="quiz-end-day">
                    <Dropdown overlay={menu} trigger={['click']}>
                        <Button>
                            Button <Icon type="down" />
                        </Button>
                    </Dropdown>
                </div>
            </div>
            
        );
    }
}

export default QuizControlHostGame;
import React from 'react';
import './Nav.scss';
class QuizCreatorNav extends React.Component {
	render() {
		return (
			<div className="quiz-creator-nav">
				<div className="logo">
					<img src={require("./images/logo.png")} alt="quiz-icon" />
				</div>

				<div className="button-group">
					<button className="b-exit button">EXIT</button>
					<button className="b-finish button">FINISH</button>
				</div>
			</div>
		);
	}
}

export default QuizCreatorNav;

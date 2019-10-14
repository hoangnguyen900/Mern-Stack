import React from 'react';
import './QuestionShow.scss';
import TimeBar from '../Timebar/TimeBar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAngleRight,
	faCheckCircle
} from "@fortawesome/free-solid-svg-icons";

class QuestionShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	render() {
		const { questionId, questionTime, questionContent, questionChoices } = this.props.question
		//console.log(questionChoices);
		const element=questionChoices.map((answer, index) => {
			return (<div className="question-answer" key={index}>
				<span>
					<FontAwesomeIcon icon={faCheckCircle} color={"red"} />
					<span>{answer}</span>
				</span>
			</div>)
		})
		return (
			<div className="question-show-container">
				<TimeBar TimeOut = {questionTime}/>
				<div className="question-detail-container">
					<div className="question-detail-header">

						<p>Question {questionId}</p>

					</div>
					<div className="question-detail-body">
						<div className="question-content">
							<h5> {questionContent}</h5>
						</div>
						<div className="answers-divider">
							<div className="divider-name">
								<p>answer choices</p>
							</div>
							<hr />
						</div>
						<div className="question-answers-container">
						{element}
						</div>
					</div>
					<div className="question-detail-footer">
						<div className="change-question-group">
							<button> 
								Next
							<span><FontAwesomeIcon icon={faAngleRight} /></span>
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default QuestionShow;
import React from 'react';
import './QuestionDetail.scss'
import { ButtonToolbar, Dropdown, DropdownButton } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPencilAlt, faCopy, faTrashAlt, faCircle, faClock } from "@fortawesome/free-solid-svg-icons";
class QuizCreatorQuestionDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<div className="question-detail-container">
				<div className="question-detail-header">
					<span><FontAwesomeIcon icon={faBars} color="#DFDFDF" /></span>
					<p>Question {this.props.number}</p>
					<div className="question-button-group">

						<span><FontAwesomeIcon icon={faTrashAlt} /></span>
						<span><FontAwesomeIcon icon={faCopy} /></span>
						<span><FontAwesomeIcon icon={faPencilAlt} /><span>Edit</span></span>

					</div>
				</div>
				<div className="question-detail-body">
					<div className="question-content">
						<h5>{this.props.question} Where are you now?</h5>
					</div>
					<div className="answers-divider">
						<div className="divider-name">
							<p>answer choices</p>
						</div>
						<hr />
					</div>
					<div className="question-answers-container">
						<div className="question-answer">
							<span>
								<FontAwesomeIcon icon={faCircle} color={"red"} />
								<span>{this.props.anwser}VietNam</span>
							</span>
						</div>

						<div className="question-answer">
							<span>
								<FontAwesomeIcon icon={faCircle} color={"red"} />
								<span>{this.props.anwser}VietNam</span>
							</span>
						</div>

						<div className="question-answer">
							<span>
								<FontAwesomeIcon icon={faCircle} color={"red"} />
								<span>{this.props.anwser}VietNam</span>
							</span>
						</div>
					</div>
				</div>
				<div className="question-detail-footer">
					<span><FontAwesomeIcon icon={faClock} color="gray" /></span>
					<div className="question-time">

						<ButtonToolbar>
							{['up'].map(direction => (
								<DropdownButton
									drop={direction}
									variant="light"
									title={` 30 seconds `}
									id={`dropdown-button-drop-${direction}`}
									key={direction}
									size="sm"
									background-color="white"
								>
									<Dropdown.Item eventKey="1">30 seconds</Dropdown.Item>
									<Dropdown.Item eventKey="2">45 seconds</Dropdown.Item>
									<Dropdown.Item eventKey="3">60 seconds</Dropdown.Item>
								</DropdownButton>
							))}
						</ButtonToolbar>

					</div>
				</div>
			</div>);
	}
}

export default QuizCreatorQuestionDetail;
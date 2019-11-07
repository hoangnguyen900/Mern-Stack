import React from 'react';
import './Editor.scss';
import { ButtonToolbar, Dropdown, DropdownButton } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faSave } from "@fortawesome/free-solid-svg-icons";
class CreateGradePopUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<div className="grade-popup-container">
				<div className="popup">
					<form>
						<div className="popup_inner">
							<div className="popup-header">
								<p>
									<img
										src={require("./images/grade.png")}
										alt="grade"

									/>
									Preview Quiz
                </p>
								<hr />
							</div>
							<div className="popup-body">
								<div className="add-title-image-section">
									<div className="section-name">
										1. Add title image
									</div>
									<div className="title-image-picker">
										<img
											alt="defaul title "
											src={require("./images/thumbnail.jpg")}
											className="default-title-image" />
										<div className="delete-title-image">
											<FontAwesomeIcon icon={faTrashAlt} color="white" />
										</div>
									</div>

								</div>
								<div className="select-language-section">
									<div className="section-name">
										2. Select language
									</div>
								</div>
								<div className="select-grade-section">
									<div className="section-name">
										3. Select grades
									</div>
									<div className="grade-start-end">
										<ButtonToolbar>
											{["down"].map(direction => (
												<DropdownButton
													drop={direction}
													variant="light"
													title={` ${this.state.timeTitle} seconds `}
													id={`dropdown-button-drop-${direction}`}
													key={direction}
													onSelect={this.onSelectHandler}
													size="sm"
													background-color="white"
												>
													<Dropdown.Item eventKey="single">Single answer</Dropdown.Item>
													<Dropdown.Item eventKey="multi">Multi select</Dropdown.Item>

												</DropdownButton>
											))}
										</ButtonToolbar>
										<ButtonToolbar>
											{["down"].map(direction => (
												<DropdownButton
													drop={direction}
													variant="light"
													title={` ${this.state.timeTitle} seconds `}
													id={`dropdown-button-drop-${direction}`}
													key={direction}
													onSelect={this.onSelectHandler}
													size="sm"
													background-color="white"
												>
													<Dropdown.Item eventKey="single">Single answer</Dropdown.Item>
													<Dropdown.Item eventKey="multi">Multi select</Dropdown.Item>

												</DropdownButton>
											))}
										</ButtonToolbar>
									</div>
								</div>
								<hr/>
							</div>
							<div className="popup-footer">
								<button
									className="b-cancel"
									type="button"
									onClick={this.props.closePopup}
								>
									CANCEL
                </button>

								<button className="b-save" type="submit">
									<FontAwesomeIcon size="1x" icon={faSave} color="white" />
									<span>SAVE</span>
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default CreateGradePopUp;
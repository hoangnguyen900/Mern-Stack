import React from 'react';
import './Editor.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
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
								</div>
							</div>
							<div className="popup-footer">
								<button
									className="b-cancel"
									type="button"
									onClick={this.props.closePopup}
								>
									CANCEL
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
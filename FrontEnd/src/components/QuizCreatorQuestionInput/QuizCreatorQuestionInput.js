import React from "react";
import "./QuizCreatorQuestionInput.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faSquareRootAlt,
  faImage,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";

class QuizCreatorQuestionInput extends React.Component {
<<<<<<< HEAD
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        var { index } = this.props;
        return (
            <div className="question-input">
                <FontAwesomeIcon icon={faCheckCircle} size="2x" color="#CAD2DC" />
                <div className="input-group">
                    <input type="text" />
                    <span><FontAwesomeIcon icon={faTrashAlt} /></span>

                </div>
                <span><FontAwesomeIcon icon={faSquareRootAlt} size="2x" color="#CAD2DC" /></span>
                <span><FontAwesomeIcon icon={faImage} size="2x" color="#CAD2DC" /></span>

            </div>
        );
    }
=======
  constructor(props) {
    super(props);
    this.state = {
      isDisplayDelIcon: true
    };
  }
  handleOnclickDelete = () => {};
  componentDidMount = () => {
    let display = false;
    this.props.index > 2 ? (display = true) : (display = false);
    this.setState({
      isDisplayDelIcon: display
    });
    console.log(this.state);
  };
  render() {
    var { isDisplayDelIcon } = this.state;

    return (
      <div className="question-input">
        <FontAwesomeIcon icon={faCheckCircle} size="2x" color="#CAD2DC" />
        <div className="input-group">
          <input type="text" />
          <span
            onClick={this.handleOnclickDelete}
            style={{ display: isDisplayDelIcon ? "block" : "none" }}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </span>
        </div>
        <FontAwesomeIcon icon={faSquareRootAlt} size="2x" color="#CAD2DC" />
        <FontAwesomeIcon icon={faImage} size="2x" color="#CAD2DC" />
      </div>
    );
  }
>>>>>>> e627c359dce27f17df68a2803ff232d515d4e77f
}

export default QuizCreatorQuestionInput;

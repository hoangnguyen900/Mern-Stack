import React from "react";
import "./Editor.scss";
import { connect } from "react-redux";
import * as actions from "./../../../redux/actions/index";
import { ButtonToolbar, Dropdown, DropdownButton } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faSave } from "@fortawesome/free-solid-svg-icons";
class ShowPreviewPopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
  }
  componentDidMount() {
    this.setState({
      ...this.props.data
    });
  }
  fileChangedHandler = event => {
    let fileReader = new FileReader();
    if (event.target.files[0]) {
      fileReader.readAsDataURL(event.target.files[0]); // fileReader.result -> URL.
      fileReader.onload = progressEvent => {
        let url = fileReader.result;
        //console.log("url", url);
        // Something like: data:image/png;base64,iVBORw...Ym57Ad6m6uHj96js
        this.setState({ image: url });
      };
    }
  };
  onSubmitHandler = e => {
    e.preventDefault();
    this.props.updateTable(this.state);
    this.props.closePopup();
  };
  render() {
    let { image } = this.state;
    return (
      <div className="grade-popup-container">
        <div className="popup">
          <form onSubmit={this.onSubmitHandler}>
            <div className="popup_inner">
              <div className="popup-header">
                <p>
                  <img src={require("./images/grade.png")} alt="grade" />
                  Preview Quiz
                </p>
                <hr />
              </div>
              <div className="popup-body">
                <div className="add-title-image-section">
                  <div className="section-name">1. Add title image</div>
                  <div className="title-image-picker">
                    <input
                      style={{ display: "none" }}
                      type="file"
                      onChange={this.fileChangedHandler}
                      ref={fileInput => (this.fileInput = fileInput)}
                    />
                    <img
                      src={
                        image !== null ? image : require("./images/none.png")
                      }
                      alt="defaul title "
                      className="default-title-image"
                      onClick={() => this.fileInput.click()}
                    />
                    <div
                      className="delete-title-image"
                      onClick={() => this.setState({ image: null })}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} color="white" />
                    </div>
                  </div>
                </div>

                <div className="select-grade-section">
                  <div className="section-name">2. Select grades</div>
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
                          <Dropdown.Item eventKey="single">
                            Single answer
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="multi">
                            Multi select
                          </Dropdown.Item>
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
                          <Dropdown.Item eventKey="single">
                            Single answer
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="multi">
                            Multi select
                          </Dropdown.Item>
                        </DropdownButton>
                      ))}
                    </ButtonToolbar>
                  </div>
                </div>
                <hr />
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
const mapDispatchToProps = (dispatch, props) => {
  return {
    updateTable: data => {
      dispatch(actions.updateTable(data));
    }
  };
};
const mapStateToProps = state => {
  return {
    questionTable: state.questionTable,
    question: state.question
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShowPreviewPopUp);

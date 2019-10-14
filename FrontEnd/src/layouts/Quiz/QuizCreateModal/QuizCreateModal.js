import React from "react";
import QuizCreateModal from "../../../components/QuizCreateModal/QuizCreateModal";
import "./QuizCreateModal.scss";
class Create extends React.Component {
  render() {
    return (
      <div className="page-container">
        <QuizCreateModal match={this.props.match} />
      </div>
    );
  }
}

export default Create;

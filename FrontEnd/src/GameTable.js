import React from "react";

import axios from "axios";
class GameTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idGameTable: 0,
      gameCode: 0,
      gameTitle: "",
      gameGradeBegin: 0,
      gameGradeEnd: 0,
      gameLevel: 0,
      gamePlayed: 0,
      idSubject: 0,
      gameImage: null,
      isPublic: 0,
      gameTime: 0
    };
  }
  componentDidMount() {
    this.axiosAPI();
  }
  updateState=(data)=>{
    this.setState({
      idGameTable: data.idGameTable,
      gameCode: data.gameCode,
      gameTitle: data.gameTitle,
      gameGradeBegin: data.gameGradeBegin,
      gameGradeEnd: data.gameGradeEnd,
      gameLevel: data.gameLevel,
      gamePlayed: data.gamePlayed,
      idSubject: data.idSubject,
      gameImage: data.gameImage,
      isPublic: data.isPublic,
      gameTime: data.gameTime
    });
    console.log(this.state);

  }
  axiosAPI = () => {
    axios({
      method: "get",
      url: "http://localhost:3000/gametable/",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        console.log("res", res);
        this.updateState(res.data[0])
      })
      .catch(er => {
        console.log("err", er);
      });
  };
  onUpdate = () => {
    axios({
      method: "put",
      url: "http://localhost:3000/gametable/",
      headers: {
        "content-type": "application/json"
      },
      data: {
        idGameTable:1,
        gameCode: 152,
        gameTitle: "LOL",
        gameGradeBegin: 4,
        gameGradeEnd: 5,
        gameLevel: 2,
        gamePlayed: 1005,
        idSubject: 1,
        gameImage: null,
        isPublic: true,
        gameTime: 20
      }
    })
      .then(res => {
        console.log("resUpdate", res);
      })
      .catch(er => {
        console.log("err", er);
      });
  };
  render() {
    let {
      idGameTable,
      gameCode,
      gameTitle,
      gameGradeBegin,
      gameGradeEnd,
      gameLevel,
      gamePlayed,
      idSubject,
      gameImage,
      isPublic,
      gameTime
    } = this.state;
    return (
      <div>
        <h1>check connection</h1>
        <div>
          {idGameTable}, {gameCode}, {gameTitle}, {gameGradeBegin},{" "}
          {gameGradeEnd}, {gameLevel}, {gamePlayed}, {idSubject}, {gameImage},{" "}
          {isPublic}, {gameTime}
        </div>
        <button onClick={this.onUpdate} >Update!</button>
      </div>
    );
  }
}

export default GameTable;

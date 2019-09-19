const express = require("express");
const router = express.Router();
const db = require("../database");
const GameTable = require("../models/GameTable");
const QuizSubject = require("../models/QuizSubject");

const Sequelize = require("sequelize");
//get GameTable list
router.get("/gametable", (req, res) =>
  GameTable.findAll()
    .then(data => res.send(data))
    .catch(err => console.log(err))
);
router.get("/gametable/:id", (req, res) =>
  GameTable.findAll({
    where: {
      idGameTable: req.params.id
    }
  })
    .then(data => res.send(data))
    .catch(err => console.log(err))
);
router.post("/gametable", (req, res) => {
  let index = GameTable.max('idGameTable').then(data => {
    req.body.idGameTable = data + 1;
    GameTable.create(req.body)
    .then(res.send("success"))
    .catch(err => console.log(err));
  });
  
});
router.put("/gametable", (req, res) =>
  GameTable.update(req.body, {
    where: {
      idGameTable: req.body.idGameTable
    }
  })
    .then(res.send("success "+JSON.stringify(req.body)))
    .catch(err => console.log(err))
);
router.delete("/gametable/:id", (req, res) =>
  GameTable.destroy({
    where: {
      idGameTable: req.params.id
    }
  })
    .then(res.send("success"))
    .catch(err => console.log(err))
);
module.exports = router;

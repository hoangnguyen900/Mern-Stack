const express = require("express");
const router = express.Router();
const db = require("../database");
const QuestionTable = require("../models/QuestionTable");

const Sequelize = require("sequelize");
//get QuestionTable list
router.get("/questiontable", (req, res) =>
  QuestionTable.findAll()
    .then(data => res.send(data))
    .catch(err => console.log(err))
);
router.get("/questiontable/:id", (req, res) =>
  QuestionTable.findAll({
    where: {
      id: req.params.id
    }
  })
    .then(data => res.send(data))
    .catch(err => console.log(err))
);
router.post("/questiontable", (req, res) => {
  let index = QuestionTable.max("id").then(data => {
    req.body.id = data + 1;
    QuestionTable.create(req.body)
      .then(res.send("success"))
      .catch(err => console.log(err));
  });
});
router.put("/questiontable", (req, res) =>
  QuestionTable.update(req.body, {
    where: {
      id: req.body.id
    }
  })
    .then(res.send("success " + JSON.stringify(req.body)))
    .catch(err => console.log(err))
);
router.delete("/questiontable/:id", (req, res) =>
  QuestionTable.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(res.send("success"))
    .catch(err => console.log(err))
);
module.exports = router;

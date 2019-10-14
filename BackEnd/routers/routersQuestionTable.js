const express = require("express");
const router = express.Router();
const QuestionTable = require("../models/QuestionTable");
const Question = require("../models/Question");
const QuestionTable_Question = require("../models/QuestionTable_Question");
const User = require("../models/User");
const QuestionChoices = require("../models/QuestionChoices");
const Subject = require("../models/Subject");
const data = {
  question: "what is dota",
  time: 20,
  question_choices: {
    question_id: 1,
    answer: "aaa",
    is_right: 1
  },
  question_table_id: 1
};

router.get("/aa", (req, res) =>
  QuestionChoices.destroy({
    where: {
      question_id: req.params.id
    }
  })
    .then(() =>
      QuestionTable_Question.destroy({
        where: {
          question_id: req.params.id
        }
      })
    )
    .then(() =>
      Question.destroy({
        where: {
          id: req.params.id
        }
      })
    )
    .then(() => res.send("Delete Successfull"))
    .catch(err => console.log(err))
);

//get QuestionTable list
router.get("/questiontable", (req, res) =>
  QuestionTable.findAll()
    .then(data => res.send(data))
    .catch(err => console.log(err))
);
router.get("/questiontable/:id", (req, res) => {
  QuestionTable.findAll({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Question,
        include: QuestionChoices
      }
    ]
    //attributes: ["question_id"]
  }).then(data => {
    res.send(data);
  });
});
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
//////////////get list subject
router.get("/subject", (req, res) =>
  Subject.findAll()
    .then(data => res.send(data))
    .catch(err => console.log(err))
);
module.exports = router;

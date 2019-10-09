const express = require("express");
const router = express.Router();
const QuestionTable_Question = require("../models/QuestionTable_Question");
const Question = require("../models/Question");
const QuestionTable = require("../models/QuestionTable");

//get Question list
router.get("/questiontable-question", (req, res) =>
  QuestionTable_Question.findAll()
    .then(data => res.send(data))
    .catch(err => console.log(err))
);
router.get("/questiontable-question/:id", (req, res) => {
  QuestionTable.findAll({
    where: {
      id: req.params.id
    },
    include: Question
    //attributes: ["question_id"]
  }).then(data => {
    res.send(data);
  });
});
// router.get("/questiontable-question/:id", (req, res) => {
//   QuestionTable_Question.findAll({
//     where: {
//       question_table_id: req.params.id
//     },
//     attributes: ["question_id"]
//   }).then(data => {
//     let listQuestion = [];
//     for (var i = 0; i < data.length; i++) {
//       let question = Question.findAll({
//         where: {
//           id: data[i].question_id
//         }
//       }).then(
//         question => {
//           return question;
//         }
//         //console.log(listQuestion);
//       );
//       console.log("question", question);
//       listQuestion.push(question);
//     }
//     //console.log(listQuestion);
//     //res.send(listQuestion);
//   });
// });
router.post("/questiontable-question", (req, res) => {
  QuestionTable_Question.create(req.body)
    .then(res.send("success"))
    .catch(err => console.log(err));
});
router.put("/questiontable-question", (req, res) =>
  QuestionTable_Question.update(req.body, {
    where: {
      question_id: req.body.question_id
    }
  })
    .then(res.send("success " + JSON.stringify(req.body)))
    .catch(err => console.log(err))
);
router.delete("/questiontable-question/:id", (req, res) =>
  Question.destroy({
    where: {
      question_id: req.params.id
    }
  })
    .then(res.send("success"))
    .catch(err => console.log(err))
);
module.exports = router;

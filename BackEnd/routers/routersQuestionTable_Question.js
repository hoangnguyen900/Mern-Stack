const express = require("express");
const router = express.Router();
const QuestionTable_Question = require("../models/QuestionTable_Question");

//get Question list
router.get("/questiontable-question", (req, res) =>
QuestionTable_Question.findAll()
    .then(data => res.send(data))
    .catch(err => console.log(err))
);
router.get("/questiontable-question/:id", (req, res) =>
QuestionTable_Question.findAll({
    where: {
      id: req.params.id
    }
  })
    .then(data => res.send(data))
    .catch(err => console.log(err))
);
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

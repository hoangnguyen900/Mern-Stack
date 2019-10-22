const express = require("express");
const router = express.Router();
const User = require("../models/User");
const QuestionChoices = require("../models/QuestionChoices");
const QuestionTable = require("../models/QuestionTable");
const Question = require("../models/Question");

const AnswerRecord = require("../models/AnswerRecord");
const jwt = require("jsonwebtoken");

router.post("/api/get-user", (req, res) =>
  User.findOne({
    where: {
      email: req.body.email,
      password: req.body.password
    },
    attributes: ["id"]
  }).then(user_id => {
    if (user_id === null) res.sendStatus(403);
    else {
      jwt.sign({ user_id }, "hoangtri", function(err, token) {
        if (err) res.sendStatus(403);
        res.send({ token: token });
      });
    }
  })
);

router.post("/api/user_answer", verifyToken, (req, res) => {
  jwt.verify(req.token, "hoangtri", (err, authData) => {
    if (err) res.sendStatus(403);
    else {
      for (let i = 0; i < req.body.length; i++)
        req.body[i].user_id = authData.user_id.id;
      AnswerRecord.bulkCreate(req.body)
        .then(data => {
          AnswerRecord.findAll({
            include: {
              model: QuestionChoices,
              attributes: ["is_right"]
            },
            where: {
              user_id: data[0].user_id,
              question_table_id: data[0].question_table_id
            }
          }).then(data => res.send(data));
        })
        .catch(err => console.log(err));
    }
  });
});
router.post("/api/get_user_question_table", verifyToken, (req, res) =>
  jwt.verify(req.token, "hoangtri", (err, authData) => {
    if (err) res.sendStatus(403);
    else {
      User.findAll({
        where: {
          id: authData.user_id.id
        },
        include: [
          {
            model: QuestionTable,
            include: Question
          }
        ]
      })
        .then(data => res.send(data))
        .catch(err => console.log(err));
    }
  })
);
router.post("/api/user", (req, res) => {
  User.create(req.body)
    .then(data => {
      res.send({
        mess: "Create User Successfully",
        data
      });
    })
    .catch(err => console.log(err));
});
router.post("/api/getuser", verifyToken, (req, res) => {
  //console.log(req.headers["user-token"]);
  jwt.verify(req.token, "hoangtri", (err, data) => {
    if (err) res.sendStatus(403);
    else {
      res.send(data);
    }
  });
});
function verifyToken(req, res, next) {
  const header = req.headers["user-token"];
  if (typeof header !== "undefined") {
    req.token = header;
    next();
  } else {
    res.sendStatus(403);
  }
}
router.put("/api/user", (req, res) =>
  User.update(req.body, {
    where: {
      id: req.body.id
    }
  })
    .then(res.send("success " + JSON.stringify(req.body)))
    .catch(err => console.log(err))
);
router.delete("/api/user/:id", (req, res) => {});

module.exports = router;

const Sequelize = require("sequelize");
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const QuestionChoices = require("../models/QuestionChoices");
const QuestionTable = require("../models/QuestionTable");
const Question = require("../models/Question");
const AnswerRecord = require("../models/AnswerRecord");
const jwt = require("jsonwebtoken");
// find all the number of attempt that user do quiz
router.post("/api/quiz_attempt", verifyToken, (req, res) => {
  let dataArr = [];
  jwt.verify(req.token, "hoangtri", (err, authData) => {
    AnswerRecord.max("id", {
      where: {
        user_id: authData.user_id.id,
        question_table_id: req.body.question_table_id
      }
    })
      .then(length => {
        for (let i = 1; i <= length; i++) {
          AnswerRecord.findAll({
            where: {
              id: i,
              user_id: authData.user_id.id,
              question_table_id: req.body.question_table_id
            },
            include: [
              {
                model: Question,
                include: QuestionChoices
              },
              QuestionChoices
            ]
          }).then(data => {
            dataArr.push(data);
            if (i == length) res.send(dataArr);
          });
        }
      })
      .catch(err => console.log(err));
  });
});
//login check email password
router.post("/api/get_user", (req, res) =>
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
// record all answer that user do quiz, and then send the correct answer to client
router.post("/api/user_answer", verifyToken, (req, res) => {
  jwt.verify(req.token, "hoangtri", (err, authData) => {
    if (err) res.sendStatus(403);
    else {
      AnswerRecord.max("id", {
        where: {
          user_id: authData.user_id.id,
          question_table_id: req.body[0].question_table_id
        }
      })
        .then(id => {
          for (let i = 0; i < req.body.length; i++) {
            req.body[i].user_id = authData.user_id.id;
            req.body[i].id = id + 1;
          }
          AnswerRecord.bulkCreate(req.body).then(data => {
            res.send(data);
            // AnswerRecord.findAll({
            //   include: {
            //     model: QuestionChoices,
            //     attributes: ["is_right"]
            //   },
            //   where: {
            //     user_id: data[0].user_id,
            //     question_table_id: data[0].question_table_id
            //   }
            // }).then(data => res.send(data));
          });
        })

        .catch(err => console.log(err));
    }
  });
});
router.post("/api/attempt_record", verifyToken, (req, res) => {
  jwt.verify(req.token, "hoangtri", (err, authData) => {
    if (err) res.sendStatus(403);
    else {
      AnswerRecord.findAll({
        include: [
          {
            model: QuestionChoices,
            attributes: ["is_right", "id"]
          },
          {
            model: Question,
            include: [QuestionChoices]
          }
        ],
        where: {
          id: req.body.attempt_id,
          user_id: authData.user_id.id,
          question_table_id: req.body.question_table_id
        }
      })
        .then(data => res.send(data))

        .catch(err => console.log(err));
    }
  });
});
//check if user do the table before
router.post("/api/is_user_did_table", verifyToken, (req, res) =>
  jwt.verify(req.token, "hoangtri", (err, authData) => {
    if (err) res.sendStatus(403);
    else {
      AnswerRecord.findOne({
        where: {
          user_id: authData.user_id.id,
          question_table_id: req.body.question_table_id
        }
      })
        .then(data => {
          if (data === null) res.send(false);
          else res.send(true);
        })
        .catch(err => console.log(err));
    }
  })
);
router.post("/api/get_completed_table", verifyToken, (req, res) =>
  jwt.verify(req.token, "hoangtri", (err, authData) => {
    if (err) res.sendStatus(403);
    else {
      AnswerRecord.findAll({
        where: {
          user_id: authData.user_id.id
        },
        attributes: [
          Sequelize.fn("DISTINCT", Sequelize.col("question_table_id")),
          "question_table_id"
        ]
      })
        .then(idArr => {
          let data = [];
          for (let i = 0; i < idArr.length; i++) {
            QuestionTable.findOne({
              where: { id: idArr[i].question_table_id },
              include: [
                {
                  model: Question,
                  attributes: ["id"]
                },
                {
                  model: AnswerRecord,
                  include: [
                    {
                      model: QuestionChoices,
                      attributes: ["is_right"]
                    }
                  ],
                  where: {
                    user_id: authData.user_id.id
                  },
                  attributes: ["id"]
                },
                {
                  model: User,

                  attributes: ["first_name", "last_name"]
                }
              ],
              attributes: ["id", "title", "image", "played", "admin"]
            }).then(questionTable => {
              data.push(questionTable);
              if (i == idArr.length - 1) res.send(data);
            });
          }
        })
        .catch(err => console.log(err));
    }
  })
);
//show question table created by user
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

const express = require("express");
const router = express.Router();
const User = require("../models/User");
const QuestionChoices = require("../models/QuestionChoices");
const QuestionTable_Question = require("../models/QuestionTable_Question");
const jwt = require("jsonwebtoken");

router.get("/api/user", (req, res) =>
  User.findAll()
    .then(data => res.send(data))
    .catch(err => console.log(err))
);
router.get("/api/user/:id", (req, res) =>
  User.findAll({
    where: {
      id: req.params.id
    }
  })
    .then(data => res.send(data))
    .catch(err => console.log(err))
);
router.post("/api/user", (req, res) => {
  jwt.sign({ user: req.body }, "hoangtri", function(err, token) {
    //res.send(token);
    console.log(token);
  });
  //   User.create(req.body)
  //     .then(data => {
  //       res.send(data);
  //     })
  //     .catch(err => console.log(err));
});
router.post("/api/getuser", (req, res) => {
  jwt.sign({ user: req.body }, "hoangtri", function(err, token) {
    res.send(token);
    //console.log(token);
  });
});
verifyToken = (req, res, next) => {
  const header = req.headers["user-token"];
  if (typeof header !== "undefined") {
  } else {
    res.sendStatus(403);
  }
};
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

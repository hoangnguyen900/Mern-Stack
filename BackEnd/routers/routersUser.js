const express = require("express");
const router = express.Router();
const User = require("../models/User");
const QuestionChoices = require("../models/QuestionChoices");
const QuestionTable_Question = require("../models/QuestionTable_Question");
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

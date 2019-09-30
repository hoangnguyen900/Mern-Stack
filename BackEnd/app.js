const express = require("express");
// const exphbs = require('express-handlebars');
const bodyparser = require("body-parser");
const path = require("path");
const app = express();
//import routers
const routersQuestionTable = require("./routers/routersQuestionTable");
const routersQuestion = require("./routers/routersQuestion");
const routersQuestionChoices = require("./routers/routersQuestionChoices");

const db = require("./database");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//test DB
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch(err => console.log("Error: " + err));
//routers
app.use(routersQuestionTable);
app.use(routersQuestion);
app.use(routersQuestionChoices);

const PORT = process.env.PORT || 3005;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

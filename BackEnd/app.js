const express = require("express");
// const exphbs = require('express-handlebars');
const bodyparser = require("body-parser");
const path = require("path");
const app = express();
const routes = require("./routers/routersGameTable");
const db = require("./database");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//test DB
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch(err => console.log("Error: " + err));

app.use(routes);
const PORT = process.env.PORT || 3000;


app.listen(PORT, console.log(`Server started on port ${PORT}`));

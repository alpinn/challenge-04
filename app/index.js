const express = require("express");
const path = require("path");
const router = require("../config/routes");

const publicDir = path.join(__dirname, "../public");
const viewsDir = path.join(__dirname, "./views");
const app = express();

app.use(express.json())
app.set("views", viewsDir);
app.set("view engine", "ejs");

app.use(express.static(publicDir));
app.use(router);

module.exports = app;

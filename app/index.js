const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const path = require("path");
const router = require("./routes/routes.js");
const DIR = path.resolve();
const staticPublicPath = path.join(DIR, "../public");
const viewsPath = path.join(DIR, "views");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(staticPublicPath));
app.set("views", viewsPath);
app.set("view engine", "ejs");
app.use(router);

app.listen(PORT, () => {
  console.log(`Server listen on port: ${PORT}`);
});
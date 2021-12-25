const express = require("express");

const app = express();

app.use(express.static("./dist/resume-site"));

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "dist/resume-site" });
});

app.listen(process.env.PORT || 8080);

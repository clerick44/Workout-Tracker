const path = require("path");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

router.get("/exercise", (req, res) => {
  res.sendFile(path.resolve("public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.resolve("public/stats.html"));
});

module.exports = router;

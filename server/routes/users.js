var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  console.log("get users");
  res.send({ message: "node get users success" });
});

router.post("/", function (req, res, next) {
  console.log("post users");
  res.send({ message: "node post users success" });
});

module.exports = router;

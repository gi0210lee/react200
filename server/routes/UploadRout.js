var express = require("express");
var router = express.Router();
var upload = require("./fileupload");
var multer = require("multer");

router.post("/", (req, res, next) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return next(err);
    } else if (err) {
      return next(err);
    }
    console.log("원본 파일명 : " + req.file.originalname);
    console.log("저장 파일명 : " + req.file.filename);
    console.log("크기 : " + req.file.size);
    return res.json({ filename: req.filename });
  });
});

module.exports = router;

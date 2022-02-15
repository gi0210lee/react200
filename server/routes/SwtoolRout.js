var express = require("express");

var router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post("/", (req, res, next) => {
  var type = req.query.type;

  if (type === "list") {
    // Swtool 리스트 조회
    try {
      // Mysql Api 모듈(CURD)
      var dbconnect_Module = require("./dbconnect_Module");
      req.body.mapper = "SwToolsMapper"; // mybatis xml 파일명
      req.body.crud = "select"; // select, insert, update, delete
      req.body.mapper_id = "selectSwToolsList";

      router.use("/", dbconnect_Module);
      next("route");
    } catch (error) {
      console.log("Module > dbconnect error : " + error);
    }
  } else if (type === "save") {
    // Swtool 관리자 저장
    try {
      // console.log("res", res);
      var dbconnect_Module = require("./dbconnect_Module");
      // Mysql 쿼리 호출 정보 입력
      req.body.mapper = "SwToolsMapper"; // mybatis xml 파일명
      req.body.crud = "insert"; // select, insert, udpate, delete 중 입력
      req.body.mapper_id = "insertSwToolsInfo";

      router.use("/", dbconnect_Module);
      next("route");
    } catch (error) {
      console.log("Module > dbconnect error : " + error);
    }
  } else if (type === "modify") {
    // Swtool 수정
    try {
      // mysql api 모듈(CRUD)
      var dbconnect_Module = require("./dbconnect_Module");

      // Mysql 쿼리 호출 정보 입력
      req.body.mapper = "SwToolsMapper";
      req.body.crud = "update";
      req.body.mapper_id = "updateSwToolsInfo";

      router.use("/", dbconnect_Module);
      next("route");
    } catch (error) {
      console.log("Module > dbconnect error : " + error);
    }
  } else if (type === "delete") {
    // Swtool 수정
    try {
      // mysql api 모듈(CRUD)
      var dbconnect_Module = require("./dbconnect_Module");

      // Mysql 쿼리 호출 정보 입력
      req.body.mapper = "SwToolsMapper";
      req.body.crud = "delete";
      req.body.mapper_id = "deleteSwToolsInfo";

      router.use("/", dbconnect_Module);
      next("route");
    } catch (error) {
      console.log("Module > dbconnect error : " + error);
    }
  }
});

module.exports = router;

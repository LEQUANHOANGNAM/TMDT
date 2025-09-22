const exxpress = require("express");
const router = exxpress.Router();
const Controller = require("../../controller/client/home.controller");

router.get("/", Controller.index);

module.exports = router;

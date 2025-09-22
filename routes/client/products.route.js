const exprees = require("express");
const router = exprees.Router();
const Controller = require("../../controller/client/products.controller");

router.get("/", Controller.index);

module.exports = router;

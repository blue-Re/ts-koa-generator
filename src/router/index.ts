const router = require("koa-router")();
const { createUser } = require("../controller/user");

router.post("/createUser", createUser);

module.exports = router;

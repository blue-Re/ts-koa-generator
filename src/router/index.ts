import { Context, Next } from "koa";

const router = require("koa-router")();

router.post("/", (ctx: Context, next: Next) => {
  ctx.body = "hahahah";
});

module.exports = router;

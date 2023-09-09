import Koa, { DefaultContext, DefaultState, Context } from "koa";

const app: Koa<DefaultState, DefaultContext> = new Koa();
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const router = require("./router/index");

// 连接数据库
require("./db/index");

// error handler
onerror(app);

// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));

// logger
app.use(async (ctx: Context, next) => {
  const start: any = new Date();
  await next();
  const end: any = new Date();
  const ms = end - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// router
app.use(router.routes());
app.use(router.allowedMethods());

// error-handling
app.on("error", (err, ctx: Context) => {
  console.error("server error", err, ctx);
});

app.listen(8000, () => {
  console.log("服务已经启动");
});

module.exports = app;

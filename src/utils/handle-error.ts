// 错误处理工具
import Koa, { Context } from "koa";

module.exports = (app: Koa) => {
  app.on("error", (eventName, ctx: Context) => {
    let code;
    let message;

    switch (eventName) {
      case "loginError":
        code = -1001;
        message = "用户名密码错误";
        ctx.body = { code, message };
        break;

      default:
        break;
    }
  });
};

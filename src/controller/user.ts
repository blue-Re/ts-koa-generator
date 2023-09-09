import { RouterContext } from "koa-router";
import { Next } from "koa";

const UserService = require("../service/user");

class UserController {
  async createUser(ctx: RouterContext, next: Next) {
    const params = ctx.request.body;

    const result = await UserService.createUser();
    ctx.body = result;
  }
}

module.exports = new UserController();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  host: "localhost",
  port: 3306,
  databse: "",
  username: "",
  password: "",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("数据库已经连接成功");
  } catch (error) {
    console.error("数据库连接失败:", error);
  }
})();

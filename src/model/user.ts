namespace userModel {
  const { Sequelize, DataTypes } = require("sequelize");
  const sequelize = new Sequelize("sqlite::memory:");

  const UserModel = sequelize.define(
    "User",
    {
      // 在这里定义模型属性
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        // allowNull 默认为 true
      },
    },
    {
      // 这是其他模型参数
    }
  );

  // `sequelize.define` 会返回模型
  console.log(UserModel === sequelize.models.User); // true

  module.exports = UserModel;
}

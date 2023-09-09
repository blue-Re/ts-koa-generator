class UserService {
  async createUser() {
    // 数据库操作
    const obj = { name: "张三", age: 14 };

    return obj;
  }
}

module.exports = new UserService();

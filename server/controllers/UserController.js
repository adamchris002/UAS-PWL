const { user } = require("../models");

class UserController {
  static async register(req, res) {
    try {
      const { name, username, password, email } = req.body;

      let result = await user.create({
        name,
        username,
        password,
        email,
      });

      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }

  static async login(req, res) {
    try {
      const { username, password } = req.body;

      const result = await user.findOne({
        where: { username: username, password: password },
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = UserController;

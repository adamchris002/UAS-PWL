const { cart } = require("../models");

class CartController {
  static async addToCart(req, res) {
    try {
      const { classcode, name, price } = req.body;
      let result = await cart.create({
        classcode,
        name,
        price,
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
  static async deleteCart(req, res) {
    try {
      const id = Number(req.params.id);

      let result = await cart.destroy({
        where: { id },
      });

      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }

  static async getCart(req, res) {
    try {
      let result = await cart.findAll();
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = CartController;

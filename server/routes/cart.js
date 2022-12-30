const cartRoute = require("express").Router();
const { CartController } = require("../controllers");

cartRoute.post("/addcart", CartController.addToCart);
cartRoute.delete("/delete/:id", CartController.deleteCart);
cartRoute.get("/", CartController.getCart);

module.exports = cartRoute;

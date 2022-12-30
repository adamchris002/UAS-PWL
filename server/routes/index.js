const routes = require("express").Router();

const classesRoutes = require("./classes");
const userRoutes = require("./users");
const cartRoutes = require("./cart");

routes.use("/user", userRoutes);
routes.use("/class", classesRoutes);
routes.use("/cart", cartRoutes);

module.exports = routes;

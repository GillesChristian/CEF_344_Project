const controller = require("../controllers/app.controller");
const routes = require("express").Router();


routes.get("/portfolios", controller.portfolioAppRoute);
routes.get("/testimonials", controller.testimonialAppRoute);

module.exports = routes
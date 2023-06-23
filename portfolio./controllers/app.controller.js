const {portfoliomodel} = require("../models/portfoliomodel");
const {testimonialmodel} = require("../models/testimonialsmodel");

exports.portfolioAppRoute = async(req, res) => {
  try {
      items = await portfoliomodel.find({});
      return res.status(200).send({
          message: "Success",
          data: items
      })
  } catch(error) {
      res.status(500).json({ error: "Internal server error"})
  }
}

exports.testimonialAppRoute = async(req, res) => {
  try {
      items = await testimonialmodel.find({});
      return res.status(200).send({
          message: "Success",
          data: items
      })
  } catch(error) {
      res.status(500).json({ error: "Internal server error"})
  }
}
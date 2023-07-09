const { News } = require("../models/news");

const getNewsController = async (req, res, next) => {
  const findNews = await News.find();

  res.json(200, findNews);
};

module.exports = {
  getNewsController,
};

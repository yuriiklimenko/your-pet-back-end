const { Sponsor } = require("../models/sponsors");

const getSponsorsController = async (req, res, next) => {
  const findSponsors = await Sponsor.find();

  res.json(200, findSponsors);
};

module.exports = {
  getSponsorsController,
};

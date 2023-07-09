const { isValidObjectId } = require("mongoose");

const isValidId = (req, res, next) => {
  const { petId, noticeId } = req.params;

  const id = petId ?? noticeId;

  if (!isValidObjectId(id)) {
    next(res.json(400, { message: `${id} is not valid id` }));
  }

  next();
};

module.exports = { isValidId };

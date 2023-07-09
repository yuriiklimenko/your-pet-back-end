const { isValidObjectId } = require("mongoose");

const isValidId = (req, res, next) => {
  const { petId, noticeId } = req.params;

  const checkValue = petId ?? noticeId;

  if (!isValidObjectId(checkValue)) {
    next(res.json(400, { message: `${checkValue} is not valid id` }));
  }

  next();
};

module.exports = { isValidId };

const { Schema, model } = require("mongoose");

const Joi = require("joi");

const { handleMongooseError } = require("../helpers/handleMongooseError");

const noticesSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Set title"],
    },
    name: {
      type: String,
      required: [true, "Set name"],
    },
    category: {
      type: String,
      enum: ["sell", "lostFound", "inGoodHands"],
      required: [true, "Set category"],
    },
    favorites: {
      type: Array,
    },
    location: {
      type: String,
      required: [true, "Set location"],
    },
    birthday: {
      type: String,
    },
    sex: {
      type: String,
      enum: ["male", "female"],
    },
    breed: {
      type: String,
      required: [true, "Set breed"],
    },
    price: {
      type: String,
    },
    comments: {
      type: String,
      required: [true, "Set comment"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    avatarURL: {
      type: String,
      default: null,
    },
  },
  { versionKey: false }
);

noticesSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  title: Joi.string().required(),
  name: Joi.string().required(),
  category: Joi.string().required(),
  favorites: Joi.array(),
  location: Joi.string().required(),
  birthday: Joi.string().required(),
  sex: Joi.string().required(),
  breed: Joi.string().required(),
  price: Joi.string(),
  comments: Joi.string().required(),
});

const Notices = model("notices", noticesSchema);

const schemas = {
  addSchema,
};

module.exports = {
  schemas,
  Notices,
};

const { Schema, model } = require("mongoose");

const Joi = require("joi");

const { handleMongooseError } = require("../helpers/handleMongooseError");

const petSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name"],
    },
    birthday: {
      type: String,
    },
    breed: {
      type: String,
    },
    comments: {
      type: String,
    },
    avatarURL: {
      type: String,
      default: null,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false }
);

petSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  name: Joi.string().required(),
  birthday: Joi.string().required(),
  breed: Joi.string().required(),
  comments: Joi.string().required(),
});

const Pet = model("pet", petSchema);

const schemas = {
  addSchema,
};

module.exports = {
  schemas,
  Pet,
};

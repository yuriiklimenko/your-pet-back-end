const { Schema, model } = require("mongoose");

const newsSchema = new Schema(
  {
    imgUrl: {
      type: String,
    },
    title: {
      type: String,
    },
    text: {
      type: String,
    },
    date: {
      type: String,
    },
    url: {
      type: String,
    },
    id: {
      type: String,
    },
  },
  { versionKey: false }
);

const News = model("news", newsSchema);

module.exports = {
  News,
};

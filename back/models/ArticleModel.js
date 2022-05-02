const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleBasketSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    // img: {
    //   data: Buffer,
    //   type: String,
    //   required: true,
    // },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
const Article = mongoose.model("Article", articleBasketSchema);
module.exports = Article;

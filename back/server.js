const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
// Connect MongoDb
const db =
  "mongodb+srv://ChanRa:Anachronique77!!@cluster0.xwo15.mongodb.net/Article?retryWrites=true&w=majority";
mongoose
  .connect(db)
  .then((res) => {
    app.listen(3000, () => {
      console.log("listening" + 3000 + "all ok");
    });
  })
  .catch((err) => {
    console.log(err);
  });
// Parse url
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
// Call my route
const Article = require("./models/ArticleModel");
// test
app.get("/add-to-basket", (req, res, next) => {
  const article = new Article({
    title: "Mon article",
    description: "Jolie manteau",
    price: 35,
    quantity: 2,
  });
  article
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/all", (req, res) => {
  const allArticle = Article.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/one-article" , (req , res)=>{
  Article.findById()
})
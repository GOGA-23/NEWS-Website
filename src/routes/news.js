const { default: axios } = require("axios");
const express = require("express");
const newsRouter = express.Router();
require("dotenv").config();

// route for Top Headlines
newsRouter.get("/", async (req, res) => {
  try {
    const newsTopHeadlineApi = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.API_KEY}`
    );
    res.render("newsHeadlines", { articles: newsTopHeadlineApi.data.articles });
  } catch (error) {
    res.render("newsHeadlines", { articles: null });
    console.log(error.res.message);
    console.log(error.res.status);
    console.error("Error", error.message);
  }
});

// route for Everything
newsRouter.post("/search", async (req, res) => {
  try {
    const searchValue = req.body.search;
    const newsEverythingApi = await axios.get(
      `https://newsapi.org/v2/everything?q=${searchValue}&pageSize=20&apiKey=${process.env.API_KEY}`
    );
    res.render("newsEverything", {
      articles: newsEverythingApi.data.articles,
    });
  } catch (error) {
    res.render("newsEverything", { articles: null });
    console.log(error.res.message);
    console.log(error.res.status);
    console.error("Error", error.message);
  }
});

module.exports = newsRouter;

const express = require("express");
const path = require("path");
const port = process.env.port || 5000;
const newsRouter = require("./src/routes/news");

const app = express();

// Using build-in Express Body parser
app.use(express.urlencoded({ extended: true }));

// Templating Engine
app.set("view engine", "ejs");
app.set("views", "./src/views");

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", newsRouter);

// listening to port 5000
app.listen(port, () => console.log(`Listening on port ${port}`));

require("dotenv").config();
const port = process.env.PORT;
const host = process.env.HOST;

const hbs = require("hbs");

const express = require("express");
const path = require("path");
const app = express();

//set absolute path for start assets
var assestsPath = path.join(__dirname, "../public");

//use of midleware
app.use(express.static(assestsPath));
//const { title } = require("process");
//const { dirname } = require("path");

//use of hbs
var viewPath = path.join(__dirname, "../template/views");
var partialPath = path.join(__dirname, "../template/partial");

app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
  //res.send("index page");
  //res.sendFile(assestsPath + "/html/index.html");
  res.render("index", {
    title: "This is Home Page",
    name: "Hadil Hashir",
  });
});
app.get("/about", (req, res) => {
  //res.send("About page.");
  //res.sendFile(assestsPath + "/html/about.html");
  res.render("index", {
    title: "This is About Page",
    name: "AKhil",
  });
});
app.get("/service", (req, res) => {
  //res.send("Service page");
  //res.sendFile(assestsPath + "/html/service.html");
  res.render("service", {
    title: "This is Service Page",
    name: "Safeeq K K",
  });
});
app.get("/galary", (req, res) => {
  //res.send("Galary page");
  //res.sendFile(assestsPath + "/html/galary.html");
  res.render("galary", {
    title: "This is Gallery Page",
    name: "Irene",
  });
});
app.get("*", (req, res) => {
  //res.send("Page not Found page.");
  //res.sendFile(assestsPath + "/html/404.html");
  res.render("404", {
    title: "Page not found",
    name: "Raju",
  });
});

// app.listen(5555, () => {
//   console.log(`Demo server started ${host}:${portNo}`);
// });

app.listen(port, () => {
  console.log(`my server get started on ${host}:${port}`);
});

const { hasSubscribers } = require("diagnostics_channel");
const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

const port = process.env.PORT || 8000;


const staticPath = path.join(__dirname, "../public");

// for using public directory as a static path
app.use(express.static(staticPath));

// setting template engine
app.set("view engine", "hbs");

const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

hbs.registerPartials(partialsPath);

app.set("views", viewsPath)

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/home", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/weather", (req, res) => {
    res.render("weather");
});

app.get("*", (req, res) => {
    res.render("404error", {
        error_msg : "Page not found, Click below to go back"
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
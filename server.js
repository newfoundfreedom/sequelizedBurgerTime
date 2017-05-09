// dependency declarations
const express = require("express"),
    bodyParser = require("body-parser");
    // methodOverride = require("method-override");

// app initialization
const PORT = process.env.PORT || 5555;
const app = express();

// Requiring our models for syncing
const db = require("./models");

// Set Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Set Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("./public"));

// Routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Sync sequelize models and then starting express app
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});

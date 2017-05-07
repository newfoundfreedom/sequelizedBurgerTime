// dependency declarations
const express = require("express"),
    bodyParser = require("body-parser");
    // methodOverride = require("method-override");

// app initialization
const PORT = process.env.PORT || 4444;
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// Configure Body-Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
// app.use(methodOverride("_method"));

// Set Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgertime_controller");

app.use("/", routes);

// Start server listening
app.listen(PORT, function(){
    console.log(`App listening on PORT ${PORT}`);
});


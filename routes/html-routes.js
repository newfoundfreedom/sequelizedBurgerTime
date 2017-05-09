// Declare dependencies
const path = require("path");

// Routes
module.exports = function (app) {

    app.get("/testing", function (req, res) {
        res.render('index');
        // res.sendFile(path.join(__dirname, "index"));
    });

};

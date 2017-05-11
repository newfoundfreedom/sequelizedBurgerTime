// Require model
const db = require("../models");

// Routes
module.exports = function (app) {

    app.get('/', function (req, res) {
        db.burger.findAll({})
            .then(function (data) {
                res.render('index', {burger: data});
            })
    });

    app.post('/api/create', function (req, res) {
        db.burger.create(
            {
                burger_name: req.body.burger_type,
            }
        ).then(function () {
            res.redirect('/');
        })
    });

    app.post('/api/update/:id', function (req, res) {
        db.burger.update(
            {'devoured': true},
            {where: {id: req.params.id}}
        ).then(function () {
            res.redirect('/');
        })
    });

    app.post('/api/delete/:id', function (req, res) {
        db.burger.destroy(
            {
                where: {id: req.params.id}
            }
        ).then(function () {
            res.redirect('/');
        })
    })

};


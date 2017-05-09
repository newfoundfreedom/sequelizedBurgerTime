// Requiring our models
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    app.get('/', function(req,res){
      db.burger.findAll({})
          .then(function(data){
            res.render('index', {burger: data});
          })
    });

    app.post('/api/burger/create', function(req, res) {
        db.burger.create(
            {
                burger_name: req.body.burger_type,
            }
        ).then(function(dbCreate){
            // res.json(dbCreate);
            res.redirect('/');
        })
    });
};



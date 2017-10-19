var Express = require('express');
var Router = Express.Router();
var burger = require('../models/burger.js');

Router.get('/', function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render('index', hbsObject);
  });
});
Router.post('/burgers', function(req, res) {
  burger.insertOne([
    'burger_name'
  ], [
    req.body.burger_name
  ], function(data) {
    res.redirect('/');
  });
});
Router.put('/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;
  burger.updateOne({
    devoured: true
  }, condition, function(data) {
    res.redirect('/');
  });
});
module.exports = Router;
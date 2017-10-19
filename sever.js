// Pull in required dependencies
var Express = require('express');
var BodyParser = require('body-parser');
var MethodOverride = require('method-override');

var port = process.env.PORT || 3000;

var App = Express();

App.use(Express.static(process.cwd() + '/app/public'));
App.use(BodyParser.urlencoded({ extended: false }));
App.use(MethodOverride('_method'));

var exphbs = require('express-handlebars');

App.engine('handlebars', exphbs({ defaultLayout: 'main' }));
App.set('view engine', 'handlebars');

var Routes = require('./app/controllers/burgers_controller.js');

App.use('/', Routes);
App.listen(port);
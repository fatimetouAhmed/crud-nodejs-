const express = require('express');
const { engine } = require('express-handlebars');
const myconnection = require('express-myconnection');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const personRoutes = require('./routes/person');

const app = express();
app.set('port', 8080);

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.engine('.hbs', engine({
  extname: '.hbs',
}));
app.set('view engine', 'hbs');

app.use(myconnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3308,
  database: 'crudnodejs3'
}, 'single'));

app.listen(app.get('port'), () => {
  console.log('Listening on port ', app.get('port'));
});

app.use('/', personRoutes);

app.get('/', (req, res) => {
  res.render('home');
});
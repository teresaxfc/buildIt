const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');
const path = require('path');
const _ = require('lodash');
require('./passport')(passport);

const app = express();
app.set('views', `${__dirname}/../views`);
app.engine('ejs', ejs.renderFile);
app.use('/static', express.static(path.join(__dirname,'../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({secret: 'shhsecret'}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/logout', function (request, response) {
  request.logout();
  response.redirect('/');
});

app.get('/auth/facebook', passport.authenticate('facebook', {
  scope: 'email'
}));

app.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/',
  failureRedirect: '/'
}));

app.get('/', (request, response) => {
  response.render('index.ejs', {user: request.user});
});

app.listen(process.env.PORT || 3000);

module.exports = app;

import path from 'path';
import passport from 'passport';
import express from 'express';

require('dotenv').config();

const session = require('express-session');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

const port = process.env.PORT || 5000;
const app = express();
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
  secret: 'keyboard cat',
  key: 'user_sid',
  resave: false,
  saveUninitialized: false,
  cookie: { expires: 600000 }, //in milliseconds
}));
app.use(express.static('public'));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL,
},
  (accessToken, refreshToken, profile, cb) =>
     cb(null, profile, accessToken)
));

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    console.log('userinfo', req.user);
    // Successful authentication, redirect home.
    res.redirect('/home');
  });

app.get('/logout', (req, res) => {
  req.logOut();
  res.clearCookie('user_sid');
  res.redirect('/');
});

app.get('/loggedin', (req, res) => {
  console.log('check login', req.session.user);
  res.end();
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log('Express server is up on port 5000');
});

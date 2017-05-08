import path from 'path';
import passport from 'passport';
import express from 'express';
import morgan from 'morgan';

require('dotenv').config();

const session = require('express-session');

const bodyParser = require('body-parser');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

const port = process.env.PORT || 5000;

const app = express();


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
  cb(null, profile)
));

app.use(morgan('combined'));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static('public'));

app.use(session({
  secret: 'keyboard cat',
  key: 'user_sid',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: false
  }, //in milliseconds
}));

app.use(passport.initialize());

app.use(passport.session());

// Redirect the user to the OAuth 2.0 provider for authentication.  When
// complete, the provider will redirect the user back to the application at
//     /auth/provider/callback
app.get('/auth/google',
  passport.authenticate('google', {
    scope: ['profile']
  }));

// The OAuth 2.0 provider has redirected the user back to the application.
// Finish the authentication process by attempting to obtain an access
// token.  If authorization was granted, the user will be logged in.
// Otherwise, authentication has failed.
app.get('/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/'
  }),
  (req, res) => {
    res.redirect('/home');
  });

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.get('/loggedin', (req, res) => {
  res.status(200).json({
    user: req.user
  });
});

app.get('*', (req, res) => { // '*'
  res.sendFile(path.resolve(__dirname, 'src', 'index.html'));
});

app.listen(port, () => {
  console.log('Express server is up on port 5000');
});

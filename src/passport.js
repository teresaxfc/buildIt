const _ = require('lodash');
const FacebookStrategy = require('passport-facebook').Strategy;
const UserService = require('./lib/UserService');
const User = require('./lib/User');
const config = require('./config');

module.exports = (passport) => {
  const userService = new UserService();

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    userService.findById(id)
      .then(user => done(null, user))
      .catch(error => done(error));
  });

  passport.use(new FacebookStrategy(
    {
      clientID: config.oauth.facebook.clientID,
      clientSecret: config.oauth.facebook.clientSecret,
      callbackURL: config.oauth.facebook.callbackURL,
      profileFields: ['id', 'email', 'first_name', 'last_name'],
    },
    (token, refreshToken, profile, done) => {
      process.nextTick(() => {
        const user = new User(
          'facebook',
          profile.id,
          profile.name.givenName,
          profile.name.familyName,
          _.get(profile, 'emails[0].value', '').toLowerCase(),
        );

        userService.getOrCreateByUserId(user)
          .then(savedUser => done(null, savedUser))
          .catch(error => done(error));
      });
    }));
};

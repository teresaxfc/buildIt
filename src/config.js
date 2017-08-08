const config = {
  mongodbUri: 'mongodb://localhost/my-ci',
  webhost: 'http://localhost:3000',
  oauth:{
    facebook: {
      clientID: '1879437832320595',
      clientSecret: 'd8f3fdebf3022ffc6325bc86a2fb192b',
      callbackURL: 'http://localhost:3000/auth/facebook/callback'
    },
  }
};

module.exports = config;

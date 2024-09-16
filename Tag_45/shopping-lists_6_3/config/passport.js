const JwtStrategy = require('passport-jwt').Strategy;
const User = require('../models/user');

console.log("process.env.JWT_SECRET ",process.env.JWT_SECRET)
const options = {
    
  jwtFromRequest: (req) => req?.cookies['bearer'],
  secretOrKey: process.env.JWT_SECRET,
};

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(options, async (jwt_payload, done) => {
      const user = await User.findOne({ username: jwt_payload.username });
      done(null, user || false);
    })
  );
};
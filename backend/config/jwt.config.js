const jwt = require("jsonwebtoken");

function generateToken(user) {
  const { username, password } = user;

  const signature = process.env.TOKEN_SIGN_SECRET;
  const expiration = "12h";

  return jwt.sign({ username, password }, signature, {
    expiresIn: expiration,
  });
}

module.exports = generateToken;

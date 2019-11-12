require('dotenv').config();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');




const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: process.env.JWKS_URI
  }),
  audience: process.env.AUDIENCE || 'http://localhost:8000/',
  issuer: process.env.ISSUER,
  algorithms: ['RS256']
});

module.exports = jwtCheck;
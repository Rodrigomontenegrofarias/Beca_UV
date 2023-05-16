const jwt = require('jsonwebtoken');

const secret = 'xxx';


function verifyToken(token, secret) {
    return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
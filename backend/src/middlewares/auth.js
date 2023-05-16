import config from '../config'

function checkApiKey(req, res, next) {
    const apiKey = req.headers['api'];
    if (apiKey === config.apikey){
        next();
    } else {
        console.error(err);
    }
}

module.exports = { checkApiKey }
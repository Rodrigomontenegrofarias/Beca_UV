import config from '../config'

const jwt = require('jsonwebtoken')

export const createToken = async (user) => {

    return jwt.sign(
        {
            id: user.recordset[0].userID,
            role: user.recordset[0].role
        },
        config.apikey,
        {
            expiresIn: "1h",
        }
    );
}

export const checkToken = (req, res, next) => {
    if (!req.headers['authorization']){
        return res.json({error: 'cabecera inválida'});
    }

    const token = req.headers['authorization'];

    let payload;
    try {
        payload = jwt.verify(token, config.apikey);
    } catch (error) {
        return res.json({error: 'token inválido'})
    }

    next();
}

export const checkUser = (req, res, next) => {
    if (!req.headers['authorization']){
        return res.json({error: 'cabecera inválida'});
    }

    const token = req.headers['authorization'];

    let payload;
    try {
        payload = jwt.verify(token, config.apikey);
        console.log(payload);
    } catch (error) {
        return res.json({error: 'token inválido'})
    }

    next();
}
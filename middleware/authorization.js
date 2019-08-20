import jwt from 'jsonwebtoken';
import config from '../config/settings';
const salt = config.salt;

module.exports = function (req, res, next) {
    var token = req.headers['authorization'];
    var flag = true;
    if (!token || token == '') {
        res.status(401).json({
            status: false,
            data: {
                'message': 'token not provided'
            }
        });
        return;
    }
    jwt.verify(token, salt, (err, decoded) => {
        // other
        if (err) {
            res.status(401).json({
                status: false,
                data: {
                    'message': 'token error'
                }
            });
            return;
        }
        return next();
    });
};
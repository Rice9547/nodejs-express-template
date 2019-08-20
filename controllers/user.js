const jwt = require('jsonwebtoken');
const models = require('../config/sequelize');
const config = require('../config/settings');

let list = async (req, res, next) => {
    let data = await models.users.findAll({
        attributes: {
            exclude: ['password']
        }
    });
    res.status(200).json({
        status: true,
        data: {
            'message': data
        }
    });
}

let register = async (req, res, next) => {
    try {
        await models.users.build({
            email: req.body.email,
            password: req.body.password
        }).save();
        res.status(200).json({
            status: true,
            data: {
                'message': null
            }
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: false,
            data: {
                'message': err
            }
        });
    }
}

let login = async (req, res, next) => {
    try {
        let user = await models.users.findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            }
        });
        let token = jwt.sign({ user: user.dataValues.id, email: user.dataValues.email }, config.salt, { expiresIn: 60 * 60 * 1000 });
        res.status(200).json({
            status: true,
            data: {
                'message': {
                    token: token
                }
            }
        });
    } catch (err) {
        res.status(500).json({
            status: false,
            data: {
                'message': err
            }
        });
    }
}

module.exports = {
    list, register, login
};
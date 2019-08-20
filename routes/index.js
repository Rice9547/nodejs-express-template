const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authorization');
const user = require('../controllers/user');

router.post('/register', user.register);
router.get('/list', auth, user.list);
router.post('/login', user.login);

module.exports = router;

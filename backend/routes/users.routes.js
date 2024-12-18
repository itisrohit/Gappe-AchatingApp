const express = require('express');
const router = express.Router();
const { createUser, loginUser, logoutUser } = require('../controllers/users.controller');


router.route('/register').post(createUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logoutUser);


module.exports = router;
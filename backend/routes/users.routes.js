const express = require('express');
const router = express.Router();
const { createUser, loginUser, getOtherUser ,logoutUser } = require('../controllers/users.controller');
const isAuthenticated = require('../middleware/auth.middleware');


router.route('/register').post(createUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logoutUser);
router.route('/').get(isAuthenticated ,getOtherUser);


module.exports = router;
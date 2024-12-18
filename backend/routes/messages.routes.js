const express = require('express');
const router = express.Router();
const { sendMessage, getMessages } = require('../controllers/messages.controller');
const isAuthenticated = require('../middleware/auth.middleware');


router.route('/send/:id').post(isAuthenticated ,sendMessage);
router.route("/:id").get(isAuthenticated, getMessages);


module.exports = router;
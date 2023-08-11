const express = require('express');
const router = express.Router();
const checkController = require('../controllers/checkController');

router.get('/', checkController.checkServer);

module.exports = router;
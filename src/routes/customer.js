const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerControler.js');

router.get('/', customerController.list);
router.post('/add', customerController.save);

module.exports = router;
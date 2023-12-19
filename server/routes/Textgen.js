const express = require('express');
const router = express.Router();

const { runImage } = require('../controllers/ImageAndText');

router.get('/runImage', runImage);

module.exports = router;







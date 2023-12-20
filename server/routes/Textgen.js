const express = require('express');
const router = express.Router();

const { runImage } = require('../controllers/ImageAndText');
const { runQCRImage } = require('../controllers/QCRText');

router.post('/runImage', runImage);
router.post('/runQCRImage', runQCRImage);

module.exports = router;







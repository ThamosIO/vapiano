const express = require('express');
const router = express.Router();

const { errorCatcher } = require('./middleware/');
const { get, list } = require('./controller');

router.get('/:id', errorCatcher(get)).get('/', errorCatcher(list));

module.exports = router;

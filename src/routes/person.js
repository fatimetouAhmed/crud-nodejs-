const express = require('express');
const PersonController = require('../controllers/PersonController');

const router = express.Router();

router.get('/person', PersonController.index);
router.get('/create', PersonController.create);
router.post('/create', PersonController.store);
router.post('/person/delete', PersonController.destroy);
router.get('/person/edit/:id', PersonController.edit);
router.post('/person/edit/:id', PersonController.update);

module.exports = router;
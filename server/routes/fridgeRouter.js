const router = require('express').Router();
const controller = require('.//../controller/fridgeController')

router.post('/fridge', controller.addFridge);
router.get('/fridge/:fridgeId', controller.getFridge);
router.delete('/fridge/:fridgeId', controller.deleteFridge);

module.exports = router; 
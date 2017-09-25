const router = require('express').Router();
const controller = require('../controller/itemController')

router.get('items/:fridgeId', controller.getAllItems);
router.post('items/:fridgeId', controller.addItem);
router.post('items/:id', controller.updateItem);
router.delete('items/:id', controller.deleteItem);

module.exports = router; 
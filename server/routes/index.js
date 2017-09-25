const router = require('express').Router();
const messages = require('../controller/messageController')
const fridge = require('../controller/fridgeController')
const item = require('../controller/itemController')
const search = require('../controller/search');

// Messages Routes
router.get('/allMessages/:id', messages.getMessages)
router.post('/allMessages', messages.postMessages)
router.delete('/allMessages/:id', messages.deleteMessages)
router.patch('/allMessages/:id', messages.updateMessages)

// Fridge Routes
router.post('/fridge:fridgeId', fridge.addFridge)
router.get('/fridge/:fridgeId', fridge.getFridge)
router.delete('/fridge/:fridgeId', fridge.deleteFridge)

// Items Routes
router.get('/items/:fridgeId', item.getAllItems)
router.post('/items/:fridgeId', item.addItem)
router.post('/items/:id', item.updateItem)
router.delete('/items/:id', item.deleteItem)

// Search Routes
router.route('/search')
  .put(search.getRecipes);

module.exports = router;
const router = require('express').Router();
const messages = require('../controller/messageController')
const fridge = require('../controller/fridgeController')
const item = require('../controller/itemController')

// List your routers here:
//messages
router.get('/allMessages/:id', messages.getMessages)
router.post('/allMessages', messages.postMessages)
router.delete('/allMessages/:id', messages.deleteMessages)
router.patch('/allMessages/:id', messages.updateMessages)

//fridge
router.post('/fridge:fridgeId', fridge.addFridge)
router.get('/fridge/:fridgeId', fridge.getFridge)
router.delete('/fridge/:fridgeId', fridge.deleteFridge)

//items
router.get('/items/:fridgeId', item.getAllItems)
router.post('/items/:fridgeId', item.addItem)
router.post('/items/:id', item.updateItem)
router.delete('/items/:id', item.deleteItem)

module.exports = router;
const router = require('express').Router();
const messages = require('../controller/Messages');
// List your routers here;
router.get('/allMessages', messages.getMessages);
router.post('/allMessages', messages.postMessages);
router.delete('/allMessages/:id', messages.deleteMessages);
router.patch('/allMessages/:id', messages.updateMessages);

module.exports = router;
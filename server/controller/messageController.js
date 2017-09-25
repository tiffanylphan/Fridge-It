const messageInfo = require('../../db/index').messageInfo;

module.exports = {
  getMessages: (req, res) => {
    messageInfo.findAll({
      where: {fridgeId: req.params.id}
    })
      .then(data => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },

  postMessages: (req, res) => {
    messageInfo.create({
      messageText: req.body.messageText,
      fridgeId: req.body.fridgeId,
      userId: req.body.userId,
    })
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },

  updateMessages: (req, res) => {
    messageInfo.find({
      where: {id: req.params.id}
    })
      .then((data) => {
        data.updateAttributes({
          messageText: req.body.messageText 
        })
      })
      .catch((err) => {
        res.status(500).send(err);
      })
  },

  deleteMessages: (req, res) => {
    messageInfo.destroy({
      where: {id: req.params.id}
    })
      .then(() => {
        res.status(202).send('successfully deleted');
      })
      .catch((err) => {
        res.status(404).send(err);
      })
  } 

}
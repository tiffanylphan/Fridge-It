const db = require('../../db');

module.exports = {
  getMessages: (req, res) => {
    db.messageInfo.findAll({
      where: {fridgeId: req.body.fridgeId}
    })
      .then(({data}) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },

  postMessages: (req, res) => {
    db.messageInfo.create()
      .then(() => {
        res.status(201).send('success');
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },

  updateMessages: (req, res) => {
    db.messageInfo.find({
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
    db.messageInfo.destroy({
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
const Fridge = require('../../db/models/MessageBoard').Fridge; 

module.exports = {
  addFridge: (req, res) => {
    Fridge.create({
      users: req.body.users,
      name: req.body.name
    })
    .then((data) => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    })
  },
  getFridge: (req, res) => {
    Fridge.findAll({
      where: {fridgeId: req.params.fridgeId}
    })
    .then((data) => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    })
  },
  deleteFridge: (req, res) => {
    Fridge.destroy({
      where: {fridgeId: req.params.fridgeId}
    })
    .then((data) => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    })
  }
}
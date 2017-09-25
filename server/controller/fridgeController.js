//const Fridge = require 

module.exports = {
  addFridge: (req, res) => {
    Fridge.create({
      userId: req.params.userId
    })
  },
  getFridge: (req, res) => {
    Fridge.findAll({
      where: {id: req.params.id}
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
      where: {id: req.params.id}
    })
    .then((data) => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    })
  }
}
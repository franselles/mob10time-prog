'use strict';

const TimeControl = require('../models/time_control_model');

function postTimeMany(req, res) {
  TimeControl.insertMany(req.body, function (err, docStored) {
    if (err)
      res.status(500).send({
        message: `Error al salvar en la base de datos: ${err}`,
      });

    res.status(200).send(docStored._id);
  });
}

function getTimeDay(req, res) {
  let id = req.params.id;
  let date = req.params.date;

  TimeControl.findOne({ employee_id: id, date: date }).exec((err, doc) => {
    if (err)
      return res.status(500).send({
        message: `Error al realizar la petición: ${err}`,
      });
    if (!doc)
      return res.status(404).send({
        message: 'No existe',
      });

    res.status(200).send(doc);
  });
}

module.exports = {
  postTimeMany,
  getTimeDay,
};

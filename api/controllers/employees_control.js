'use strict';

const Employees = require('../models/employees_model');

function getEmployees(req, res) {
  Employees.find().exec((err, doc) => {
    if (err)
      return res.status(500).send({
        message: `Error al realizar la petición: ${err}`
      });
    if (!doc)
      return res.status(404).send({
        message: 'No existe'
      });

    res.status(200).send(doc);
  });
}

function getEmployee(req, res) {
  let id = req.params.id;

  Employees.findOne({ dni: id }).exec((err, doc) => {
    if (err)
      return res.status(500).send({
        message: `Error al realizar la petición: ${err}`
      });
    if (!doc)
      return res.status(404).send({
        message: 'No existe'
      });

    res.status(200).send(doc);
  });
}

function postEmployee(req, res) {
  const data = new Employees();

  data.date = req.body.date;

  data.save((err, docStored) => {
    if (err)
      res.status(500).send({
        message: `Error al salvar en la base de datos: ${err} `
      });

    res.status(200).send(docStored._id);
  });
}

function putEmployee(req, res) {
  const id = req.params.id;
  const update = req.body;

  Employees.findByIdAndUpdate(id, update).exec((err, docStored) => {
    if (err)
      res.status(500).send({
        message: `Error al salvar en la base de datos: ${err} `
      });

    res.status(200).send(docStored);
  });
}

function deleteEmployee(req, res) {
  const id = req.params.id;

  Employees.findByIdAndRemove(id).exec((err, docStored) => {
    if (err)
      res.status(500).send({
        message: `Error al salvar en la base de datos: ${err} `
      });

    res.status(200).send(docStored);
  });
}

module.exports = {
  getEmployee,
  getEmployees,
  postEmployee,
  putEmployee,
  deleteEmployee
};

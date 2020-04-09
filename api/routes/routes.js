'use strict';

const express = require('express');
const api = express.Router();

const employeesControl = require('../controllers/employees_control.js');
const statusControl = require('../controllers/status_control.js');
const timeControl = require('../controllers/time_control.js');

// Employees
api.get('/worktime/employee/:id', employeesControl.getEmployee);

// Status Server
api.get('/worktime/status', statusControl.getActiveServer);

// Time
api.post('/worktime/time', timeControl.postTimeMany);
api.get('/worktime/timeday/:id/:date', timeControl.getTimeDay);

api.get('/', function(request, response) {
  response.send('NODE AT WORK!!!');
});

module.exports = api;

'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timeControlSchema = Schema(
  {
    employee_id: String,
    date: String,
    name: String,
    dni: String,
    work_shift: Number,
    start_time: String,
    end_time: String,
    hours: Number,
    max: Number,
  },
  { collection: 'time_control' }
);

module.exports = mongoose.model('TimeControl', timeControlSchema);

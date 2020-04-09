const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schesuleSchema = new Schema({
  work_shift: Number,
  interval: { type: Number },
  start_time: { type: String },
  end_time: { type: String },
  random_start: { type: Number },
  random_end: { type: Number },
  max: Number,
  active: Boolean
});

const employeesSchema = new Schema(
  {
    dni: { type: String, uppercase: true },
    password: { type: String },
    name: { type: String, uppercase: true },
    active: { type: Boolean, default: true },
    schedule: [schesuleSchema]
  },
  { collection: 'employees' }
);

module.exports = mongoose.model('Employees', employeesSchema);

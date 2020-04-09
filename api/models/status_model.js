'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statusSchema = Schema(
  {
    state: String
  },
  { collection: 'status' }
);

module.exports = mongoose.model('Status', statusSchema);
